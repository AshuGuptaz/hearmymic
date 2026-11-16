/**
 * Camera engine: live preview only. The video never leaves the page and is
 * never recorded.
 */
import { MediaError, classifyMediaError } from './mic-engine';

export interface CameraInfo {
  label: string;
  width: number | null;
  height: number | null;
  frameRate: number | null;
}

export class CameraEngine {
  stream: MediaStream | null = null;
  onEnded: (() => void) | null = null;

  get active(): boolean {
    return !!this.stream && this.stream.getVideoTracks().some((t) => t.readyState === 'live');
  }

  async start(video: HTMLVideoElement, deviceId?: string): Promise<void> {
    if (!navigator.mediaDevices?.getUserMedia) throw new MediaError('unsupported');
    this.stop(video);

    let stream: MediaStream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({
        video: deviceId
          ? { deviceId: { exact: deviceId } }
          : { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } },
      });
    } catch (err) {
      if (deviceId && (err as { name?: string })?.name === 'OverconstrainedError') {
        return this.start(video);
      }
      throw new MediaError(classifyMediaError(err), (err as Error)?.message);
    }

    await this.show(video, stream);
  }

  /** Preview a camera track that was opened together with the microphone. */
  adopt(video: HTMLVideoElement, track: MediaStreamTrack): Promise<void> {
    this.stop(video);
    return this.show(video, new MediaStream([track]));
  }

  private async show(video: HTMLVideoElement, stream: MediaStream): Promise<void> {
    const track = stream.getVideoTracks()[0];
    track?.addEventListener('ended', () => {
      if (this.stream === stream) {
        this.stop(video);
        this.onEnded?.();
      }
    });

    this.stream = stream;
    video.srcObject = stream;
    // Muted + playsinline is required for inline playback on iOS.
    video.muted = true;
    video.playsInline = true;
    try {
      await video.play();
    } catch {
      /* the preview starts as soon as the browser allows it */
    }
  }

  stop(video?: HTMLVideoElement): void {
    this.stream?.getTracks().forEach((t) => t.stop());
    this.stream = null;
    if (video) video.srcObject = null;
  }

  async listInputs(): Promise<MediaDeviceInfo[]> {
    if (!navigator.mediaDevices?.enumerateDevices) return [];
    const devices = await navigator.mediaDevices.enumerateDevices();
    return devices.filter((d) => d.kind === 'videoinput');
  }

  get deviceId(): string | null {
    return this.stream?.getVideoTracks()[0]?.getSettings().deviceId ?? null;
  }

  info(): CameraInfo | null {
    const track = this.stream?.getVideoTracks()[0];
    if (!track) return null;
    const s = track.getSettings();
    return {
      label: track.label || 'Camera',
      width: s.width ?? null,
      height: s.height ?? null,
      frameRate: s.frameRate ? Math.round(s.frameRate) : null,
    };
  }
}
