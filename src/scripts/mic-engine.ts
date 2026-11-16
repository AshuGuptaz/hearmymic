/**
 * Mic engine: everything that touches getUserMedia / Web Audio / MediaRecorder.
 * No DOM access in here, so it can be reused by any UI.
 * Audio is analysed and played back locally. Nothing is ever uploaded.
 */

export type MediaErrorKind =
  | 'denied'
  | 'not-found'
  | 'in-use'
  | 'unsupported'
  | 'insecure'
  | 'unknown';

export class MediaError extends Error {
  kind: MediaErrorKind;
  constructor(kind: MediaErrorKind, message?: string) {
    super(message ?? kind);
    this.kind = kind;
  }
}

/** Map the browser's DOMException names to the handful of states the UI explains. */
export function classifyMediaError(err: unknown): MediaErrorKind {
  const name = (err as { name?: string } | null)?.name ?? '';
  switch (name) {
    case 'NotAllowedError':
    case 'PermissionDeniedError':
    case 'SecurityError':
      return 'denied';
    case 'NotFoundError':
    case 'DevicesNotFoundError':
    case 'OverconstrainedError':
      return 'not-found';
    case 'NotReadableError':
    case 'TrackStartError':
    case 'AbortError':
      return 'in-use';
    case 'TypeError':
      return 'unsupported';
    default:
      return 'unknown';
  }
}

/** Returns null when the browser can run the test, otherwise the reason it can't. */
export function checkSupport(): MediaErrorKind | null {
  if (typeof window === 'undefined') return 'unsupported';
  if (!window.isSecureContext) return 'insecure';
  const hasAudioContext =
    'AudioContext' in window || 'webkitAudioContext' in window;
  if (!navigator.mediaDevices?.getUserMedia || !hasAudioContext) return 'unsupported';
  return null;
}

export interface MicInfo {
  label: string;
  sampleRate: number | null;
  channelCount: number | null;
  echoCancellation: boolean | null;
  noiseSuppression: boolean | null;
  autoGainControl: boolean | null;
  /** Estimated round-trip delay in ms, or null when the browser reports nothing. */
  latencyMs: number | null;
}

export interface Level {
  /** RMS level in dBFS (0 = full scale). */
  db: number;
  /** Highest sample in this frame, 0..1. */
  peak: number;
}

export interface StartResult {
  videoTrack: MediaStreamTrack | null;
  /** Set when the camera was requested but could not be opened. */
  videoError: MediaErrorKind | null;
}

export const MIN_DB = -60;

const RECORDER_TYPES = [
  'audio/webm;codecs=opus',
  'audio/webm',
  'audio/mp4',
  'audio/ogg;codecs=opus',
];

export class MicEngine {
  stream: MediaStream | null = null;
  private ctx: AudioContext | null = null;
  private source: MediaStreamAudioSourceNode | null = null;
  private analyser: AnalyserNode | null = null;
  private monitorGain: GainNode | null = null;
  private buffer: Float32Array<ArrayBuffer> = new Float32Array(2048);
  private recorder: MediaRecorder | null = null;
  private recordTimer = 0;
  private recordCancelled = false;

  /** Called when the device disappears mid-test (unplugged, permission revoked). */
  onEnded: (() => void) | null = null;

  get active(): boolean {
    return !!this.stream && this.stream.getAudioTracks().some((t) => t.readyState === 'live');
  }

  get canRecord(): boolean {
    return typeof MediaRecorder !== 'undefined';
  }

  get isRecording(): boolean {
    return this.recorder?.state === 'recording';
  }

  /**
   * Must be called from a user gesture so the AudioContext is allowed to run.
   * With `withVideo`, camera and mic are requested in one permission prompt and
   * the camera track is handed back for the camera engine to own.
   */
  async start(deviceId?: string, withVideo = false): Promise<StartResult> {
    const unsupported = checkSupport();
    if (unsupported) throw new MediaError(unsupported);

    this.stop();

    const audio: MediaTrackConstraints | boolean = deviceId
      ? { deviceId: { exact: deviceId } }
      : true;
    let stream: MediaStream;
    let videoError: MediaErrorKind | null = null;
    try {
      stream = await navigator.mediaDevices.getUserMedia(
        withVideo
          ? {
              audio,
              video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } },
            }
          : { audio },
      );
    } catch (err) {
      const kind = classifyMediaError(err);
      if (withVideo && kind !== 'denied') {
        // The camera may be the part that failed: carry on with the mic alone.
        const result = await this.start(deviceId, false);
        return { ...result, videoError: kind };
      }
      // A remembered device that has since been unplugged: fall back to the default.
      if (deviceId && (err as { name?: string })?.name === 'OverconstrainedError') {
        return this.start(undefined, withVideo);
      }
      throw new MediaError(kind, (err as Error)?.message);
    }

    // The engine owns only the audio track.
    const videoTrack = stream.getVideoTracks()[0] ?? null;
    if (videoTrack) stream = new MediaStream(stream.getAudioTracks());
    if (withVideo && !videoTrack) videoError = 'not-found';

    const track = stream.getAudioTracks()[0];
    if (!track) {
      videoTrack?.stop();
      throw new MediaError('not-found');
    }
    track.addEventListener('ended', () => {
      if (this.stream === stream) {
        this.stop();
        this.onEnded?.();
      }
    });

    try {
      const Ctor: typeof AudioContext =
        window.AudioContext ??
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new Ctor({ latencyHint: 'interactive' });
      const source = ctx.createMediaStreamSource(stream);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 2048;
      analyser.smoothingTimeConstant = 0;
      // Monitor path: silent until "Hear yourself live" is switched on.
      const monitorGain = ctx.createGain();
      monitorGain.gain.value = 0;
      source.connect(analyser);
      source.connect(monitorGain);
      monitorGain.connect(ctx.destination);

      this.stream = stream;
      this.ctx = ctx;
      this.source = source;
      this.analyser = analyser;
      this.monitorGain = monitorGain;
      this.buffer = new Float32Array(analyser.fftSize);
      await this.resume();
    } catch (err) {
      stream.getTracks().forEach((t) => t.stop());
      videoTrack?.stop();
      this.stop();
      throw new MediaError('unknown', (err as Error)?.message);
    }
    return { videoTrack, videoError };
  }

  /** iOS and some desktop browsers suspend the context when the tab goes away. */
  async resume(): Promise<void> {
    if (this.ctx && this.ctx.state !== 'running' && this.ctx.state !== 'closed') {
      try {
        await this.ctx.resume();
      } catch {
        /* resumes on the next user gesture */
      }
    }
  }

  stop(): void {
    this.cancelRecording();
    this.stream?.getTracks().forEach((t) => t.stop());
    this.source?.disconnect();
    this.monitorGain?.disconnect();
    if (this.ctx && this.ctx.state !== 'closed') void this.ctx.close().catch(() => {});
    this.stream = null;
    this.ctx = null;
    this.source = null;
    this.analyser = null;
    this.monitorGain = null;
  }

  /** Time-domain samples (-1..1) for the waveform. Reuses one buffer. */
  readWaveform(): Float32Array {
    if (this.analyser) this.analyser.getFloatTimeDomainData(this.buffer);
    else this.buffer.fill(0);
    return this.buffer;
  }

  /** Level of the samples last read by readWaveform(). */
  measure(samples: Float32Array): Level {
    let sum = 0;
    let peak = 0;
    for (let i = 0; i < samples.length; i++) {
      const v = samples[i];
      sum += v * v;
      const a = v < 0 ? -v : v;
      if (a > peak) peak = a;
    }
    const rms = Math.sqrt(sum / samples.length);
    const db = rms > 0 ? Math.max(MIN_DB, 20 * Math.log10(rms)) : MIN_DB;
    return { db, peak };
  }

  setMonitor(on: boolean): void {
    if (!this.ctx || !this.monitorGain) return;
    // Short ramp so switching on and off never clicks.
    this.monitorGain.gain.setTargetAtTime(on ? 1 : 0, this.ctx.currentTime, 0.015);
    if (on) void this.resume();
  }

  async listInputs(): Promise<MediaDeviceInfo[]> {
    if (!navigator.mediaDevices?.enumerateDevices) return [];
    const devices = await navigator.mediaDevices.enumerateDevices();
    return devices.filter((d) => d.kind === 'audioinput');
  }

  get deviceId(): string | null {
    return this.stream?.getAudioTracks()[0]?.getSettings().deviceId ?? null;
  }

  info(): MicInfo | null {
    const track = this.stream?.getAudioTracks()[0];
    if (!track || !this.ctx) return null;
    const s = track.getSettings() as MediaTrackSettings & { latency?: number };

    // Input latency (when the browser reports it) plus the output buffer delay.
    const input = typeof s.latency === 'number' ? s.latency : 0;
    const base = this.ctx.baseLatency ?? 0;
    const output = (this.ctx as AudioContext & { outputLatency?: number }).outputLatency ?? 0;
    const total = input + base + output;

    return {
      label: track.label || 'Microphone',
      sampleRate: s.sampleRate ?? this.ctx.sampleRate ?? null,
      channelCount: s.channelCount ?? null,
      // Newer browsers may report a mode string ("all", "remote-only") instead of true.
      echoCancellation: s.echoCancellation == null ? null : s.echoCancellation !== false,
      noiseSuppression: s.noiseSuppression ?? null,
      autoGainControl: s.autoGainControl ?? null,
      latencyMs: total > 0 ? Math.round(total * 1000) : null,
    };
  }

  /** Records `ms` milliseconds and resolves with a playable blob. */
  record(ms: number): Promise<Blob> {
    return new Promise((resolve, reject) => {
      if (!this.stream || !this.canRecord) {
        reject(new MediaError('unsupported'));
        return;
      }
      this.cancelRecording();

      const mimeType = RECORDER_TYPES.find((t) => MediaRecorder.isTypeSupported?.(t));
      let recorder: MediaRecorder;
      try {
        // Record the audio track only, even when a camera shares the stream.
        const audioOnly = new MediaStream(this.stream.getAudioTracks());
        recorder = new MediaRecorder(audioOnly, mimeType ? { mimeType } : undefined);
      } catch (err) {
        reject(new MediaError('unsupported', (err as Error)?.message));
        return;
      }

      const chunks: Blob[] = [];
      this.recordCancelled = false;
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunks.push(e.data);
      };
      recorder.onerror = () => reject(new MediaError('unknown'));
      recorder.onstop = () => {
        window.clearTimeout(this.recordTimer);
        const cancelled = this.recorder !== recorder || this.recordCancelled;
        if (this.recorder === recorder) this.recorder = null;
        if (cancelled || chunks.length === 0) {
          reject(new MediaError('unknown', 'cancelled'));
          return;
        }
        resolve(new Blob(chunks, { type: recorder.mimeType || mimeType || 'audio/webm' }));
      };
      this.recorder = recorder;
      recorder.start();
      this.recordTimer = window.setTimeout(() => {
        if (recorder.state !== 'inactive') recorder.stop();
      }, ms);
    });
  }

  cancelRecording(): void {
    window.clearTimeout(this.recordTimer);
    const r = this.recorder;
    if (r && r.state !== 'inactive') {
      this.recordCancelled = true;
      try {
        r.stop();
      } catch {
        /* already stopped */
      }
    }
  }
}
