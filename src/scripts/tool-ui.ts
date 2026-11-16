/**
 * Tool UI: wires the markup in MicTool.astro to the mic and camera engines.
 * One requestAnimationFrame loop drives the waveform, the level meter and the
 * recording ring. It only runs while the test is live and the tab is visible.
 */
import { MicEngine, MediaError, MIN_DB, checkSupport, type MediaErrorKind } from './mic-engine';
import { CameraEngine } from './camera-engine';
import type { ToolJs } from '../i18n/ui';

type View = 'idle' | 'live' | 'error';

const RECORD_MS = 5000;
const RING_LENGTH = 157.08;

/** Which fix guide each error links to. The actual URLs come from the page (localized when available). */
const ERROR_GUIDE: Record<MediaErrorKind, 'mic-not-working' | 'mic-permission-blocked'> = {
  denied: 'mic-permission-blocked',
  'not-found': 'mic-not-working',
  'in-use': 'mic-not-working',
  unsupported: 'mic-not-working',
  insecure: 'mic-permission-blocked',
  unknown: 'mic-not-working',
};

const RATING_TONES = {
  waiting: '',
  quiet: 'var(--warn)',
  good: 'var(--ok)',
  loud: 'var(--danger)',
} as const;
type RatingKey = keyof typeof RATING_TONES;

export function initTool(root: HTMLElement): void {
  const $ = <T extends HTMLElement = HTMLElement>(sel: string) => root.querySelector<T>(sel);
  const withCamera = root.dataset.variant === 'camera';
  // Interface text for this page's language, written into the page by MicTool.astro.
  const S = JSON.parse(root.dataset.strings ?? '{}') as ToolJs;
  const FIX = JSON.parse(root.dataset.fixLinks ?? '{}') as Record<string, string>;
  const fill = (tpl: string, vars: Record<string, string | number>) =>
    tpl.replace(/\{(\w+)\}/g, (_, k) => String(vars[k]));

  const mic = new MicEngine();
  const camera = new CameraEngine();
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const views = Array.from(root.querySelectorAll<HTMLElement>('[data-view]'));
  const status = $('[data-status]')!;
  const startBtn = $<HTMLButtonElement>('[data-action="start"]')!;
  const startLabel = $('[data-start-label]')!;
  const startSpinner = $('[data-start-spinner]')!;
  const liveDevice = $('[data-live-device]')!;
  const liveCheck = $('[data-live-check]')!;
  const canvas = $<HTMLCanvasElement>('[data-wave]')!;
  const meter = $('[data-meter]')!;
  const meterCover = $('[data-meter-cover]')!;
  const meterPeak = $('[data-meter-peak]')!;
  const dbText = $('[data-db]')!;
  const ratingBadge = $('[data-rating]')!;
  const ratingHint = $('[data-rating-hint]')!;
  const micSelect = $<HTMLSelectElement>('[data-mic-select]')!;
  const micSelectWrap = $('[data-mic-select-wrap]')!;
  const camSelect = $<HTMLSelectElement>('[data-cam-select]');
  const camSelectWrap = $('[data-cam-select-wrap]');
  const video = $<HTMLVideoElement>('[data-video]');
  const videoNote = $('[data-video-note]');
  const recordBtn = $<HTMLButtonElement>('[data-action="record"]')!;
  const recordHint = $('[data-record-hint]')!;
  const ring = root.querySelector<SVGCircleElement>('[data-ring]')!;
  const count = $('[data-count]')!;
  const countIdle = count.innerHTML;
  const player = $<HTMLAudioElement>('[data-player]')!;
  const playerEmpty = $('[data-player-empty]')!;
  const monitorBtn = $<HTMLButtonElement>('[data-action="monitor"]')!;
  const errorTitle = $('[data-error-title]')!;
  const errorBody = $('[data-error-body]')!;
  const errorLink = $<HTMLAnchorElement>('[data-error-link]')!;

  let view: View = 'idle';
  let busy = false;
  let raf = 0;
  let lastFrame = 0;
  let lastSlowUpdate = 0;
  let shownDb = MIN_DB;
  let peakDb = MIN_DB;
  let peakAt = 0;
  let heldDb = MIN_DB;
  let rating: RatingKey = 'waiting';
  let monitorOn = false;
  let recordStart = 0;
  let recordedUrl = '';
  let shownSecond = -1;
  let waveColor = '#2563eb';

  /* ---------- helpers ---------- */

  const announce = (text: string) => {
    status.textContent = '';
    // Let the DOM clear first so repeated messages are announced again.
    window.setTimeout(() => (status.textContent = text), 50);
  };

  function setView(next: View, focus = true): void {
    view = next;
    for (const el of views) {
      const active = el.dataset.view === next;
      el.classList.toggle('is-active', active);
      el.inert = !active;
      if (active && focus) el.querySelector<HTMLElement>('[data-focus]')?.focus({ preventScroll: true });
    }
    // Record and live monitoring only make sense while the mic is open.
    recordBtn.disabled = next !== 'live' || !mic.canRecord;
    monitorBtn.disabled = next !== 'live';
  }

  function setStarting(on: boolean): void {
    busy = on;
    startBtn.disabled = on;
    startBtn.setAttribute('aria-busy', String(on));
    startSpinner.classList.toggle('hidden', !on);
    startLabel.textContent = on ? S.waitingPermission : (startLabel.dataset.default ?? '');
  }

  function showError(kind: MediaErrorKind): void {
    const e = S.errors[kind];
    errorTitle.textContent = e.title;
    errorBody.textContent = e.body;
    errorLink.href = FIX[ERROR_GUIDE[kind]] ?? '/';
    errorLink.textContent = e.link;
    stopLoop();
    setView('error');
    announce(`${e.title}. ${e.body}`);
  }

  const setInfo = (key: string, value: string) => {
    const el = $(`[data-info="${key}"]`);
    if (el && el.textContent !== value) {
      el.textContent = value;
      el.title = value;
    }
  };
  const onOff = (v: boolean | null) => (v === null ? S.notReported : v ? S.on : S.off);

  function renderInfo(): void {
    const i = mic.info();
    if (!i) return;
    setInfo('device', i.label);
    setInfo('sampleRate', i.sampleRate ? `${(i.sampleRate / 1000).toLocaleString(S.numberLocale)}\u00a0kHz` : S.notReported);
    setInfo(
      'channels',
      i.channelCount === 1 ? S.mono : i.channelCount === 2 ? S.stereo : i.channelCount ? String(i.channelCount) : S.notReported,
    );
    setInfo('echo', onOff(i.echoCancellation));
    setInfo('noise', onOff(i.noiseSuppression));
    setInfo('agc', onOff(i.autoGainControl));
    setInfo('latency', i.latencyMs ? fill(S.aboutMs, { ms: i.latencyMs }) : S.notReported);
    if (withCamera) {
      const c = camera.info();
      setInfo('camera', c ? c.label : S.notAvailable);
      setInfo(
        'resolution',
        c?.width && c.height ? `${c.width} × ${c.height}${c.frameRate ? `, ${c.frameRate} fps` : ''}` : '—',
      );
    }
  }

  function clearInfo(): void {
    root.querySelectorAll<HTMLElement>('[data-info]').forEach((el) => {
      el.textContent = '—';
      el.removeAttribute('title');
    });
  }

  function setRating(next: RatingKey): void {
    if (next === rating) return;
    rating = next;
    const r = S.ratings[next];
    const tone = RATING_TONES[next];
    ratingBadge.textContent = r.label;
    ratingBadge.style.color = tone;
    ratingBadge.style.borderColor = tone;
    ratingHint.textContent = r.hint;
    setInfo('rating', next === 'waiting' ? '—' : r.label);
  }

  async function fillSelect(
    select: HTMLSelectElement,
    wrap: HTMLElement,
    devices: MediaDeviceInfo[],
    current: string | null,
    fallback: string,
  ): Promise<void> {
    select.replaceChildren(
      ...devices.map((d, n) => {
        const o = document.createElement('option');
        o.value = d.deviceId;
        o.textContent = d.label || `${fallback} ${n + 1}`;
        o.selected = d.deviceId === current;
        return o;
      }),
    );
    select.disabled = devices.length < 2;
  }

  async function refreshDevices(): Promise<void> {
    try {
      await fillSelect(micSelect, micSelectWrap, await mic.listInputs(), mic.deviceId, S.micFallback);
      if (withCamera && camSelect && camSelectWrap) {
        await fillSelect(camSelect, camSelectWrap, await camera.listInputs(), camera.deviceId, S.camFallback);
      }
    } catch {
      /* the pickers are optional */
    }
  }

  function showCameraNote(kind: MediaErrorKind | null): void {
    if (!videoNote) return;
    videoNote.textContent = kind ? S.cameraNotes[kind] : '';
    videoNote.classList.toggle('hidden', !kind);
    videoNote.classList.toggle('grid', !!kind);
  }

  /* ---------- drawing ---------- */

  function readColors(): void {
    waveColor = getComputedStyle(root).getPropertyValue('--accent-ink').trim() || waveColor;
  }

  function sizeCanvas(): void {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = Math.round(canvas.clientWidth * dpr);
    const h = Math.round(canvas.clientHeight * dpr);
    if (w && h && (canvas.width !== w || canvas.height !== h)) {
      canvas.width = w;
      canvas.height = h;
    }
  }

  function drawWave(samples: Float32Array | null): void {
    const g = canvas.getContext('2d');
    if (!g) return;
    const { width: w, height: h } = canvas;
    const mid = h / 2;
    g.clearRect(0, 0, w, h);
    g.lineWidth = Math.max(2, w / 300);
    g.lineJoin = 'round';
    g.lineCap = 'round';
    g.strokeStyle = waveColor;
    g.beginPath();

    if (!samples) {
      g.moveTo(0, mid);
      g.lineTo(w, mid);
      g.stroke();
      return;
    }

    // Start at a rising zero crossing so the wave holds still instead of sliding.
    const half = samples.length >> 1;
    let start = 0;
    for (let i = 1; i < half; i++) {
      if (samples[i - 1] < 0 && samples[i] >= 0) {
        start = i;
        break;
      }
    }
    const points = Math.min(half, Math.max(64, w >> 1));
    const step = half / points;
    const gain = h * 0.9;
    for (let p = 0; p <= points; p++) {
      const v = samples[start + Math.floor(p * step)] ?? 0;
      const y = Math.min(h - 2, Math.max(2, mid - v * gain));
      const x = (p / points) * w;
      if (p === 0) g.moveTo(x, y);
      else g.lineTo(x, y);
    }
    g.stroke();
  }

  const toPercent = (db: number) => Math.min(100, Math.max(0, ((db - MIN_DB) / -MIN_DB) * 100));

  function frame(now: number): void {
    raf = requestAnimationFrame(frame);
    const dt = Math.min(0.1, (now - (lastFrame || now)) / 1000);
    lastFrame = now;

    const samples = mic.readWaveform();
    const level = mic.measure(samples);

    // Fast attack, smooth release.
    shownDb = level.db > shownDb ? level.db : Math.max(level.db, shownDb - 45 * dt);
    if (shownDb >= peakDb) {
      peakDb = shownDb;
      peakAt = now;
    } else if (now - peakAt > 1200) {
      peakDb = Math.max(shownDb, peakDb - 30 * dt);
    }
    heldDb = level.db > heldDb ? level.db : Math.max(MIN_DB, heldDb - 5 * dt);

    meterCover.style.transform = `translateX(${toPercent(shownDb).toFixed(1)}%)`;
    meterPeak.style.transform = `translateX(${toPercent(peakDb).toFixed(1)}%)`;
    if (!reducedMotion.matches) drawWave(samples);

    if (mic.isRecording) {
      const elapsed = now - recordStart;
      const left = Math.max(0, Math.ceil((RECORD_MS - elapsed) / 1000));
      const progress = reducedMotion.matches
        ? Math.floor(elapsed / 1000) / (RECORD_MS / 1000)
        : Math.min(1, elapsed / RECORD_MS);
      ring.style.strokeDashoffset = String(RING_LENGTH * (1 - progress));
      if (left !== shownSecond) {
        shownSecond = left;
        count.textContent = String(left);
        recordBtn.textContent = fill(S.recordingBtn, { n: left });
      }
    }

    // Text and ARIA updates a few times a second, not every frame.
    if (now - lastSlowUpdate > 250) {
      lastSlowUpdate = now;
      dbText.textContent = shownDb <= MIN_DB ? '–∞ dB' : `−${Math.abs(Math.round(shownDb))} dB`;
      meter.setAttribute('aria-valuenow', String(Math.round(toPercent(shownDb))));
      const clipping = level.peak >= 0.99;
      setRating(
        clipping || heldDb > -10 ? 'loud' : heldDb > -32 ? 'good' : heldDb > -50 ? 'quiet' : rating === 'waiting' ? 'waiting' : rating,
      );
      meter.setAttribute('aria-valuetext', `${S.ratings[rating].label}, ${dbText.textContent}`);
      renderInfo();
    }
  }

  function startLoop(): void {
    if (raf || view !== 'live' || document.hidden) return;
    lastFrame = 0;
    sizeCanvas();
    readColors();
    if (reducedMotion.matches) drawWave(null);
    raf = requestAnimationFrame(frame);
  }

  function stopLoop(): void {
    cancelAnimationFrame(raf);
    raf = 0;
  }

  /* ---------- actions ---------- */

  function resetRecordUi(label = S.recordLabel): void {
    ring.style.strokeDashoffset = String(RING_LENGTH);
    ring.style.stroke = '';
    count.innerHTML = countIdle;
    shownSecond = -1;
    recordBtn.disabled = view !== 'live' || !mic.canRecord;
    recordBtn.textContent = mic.canRecord ? label : S.recordUnsupported;
  }

  function resetLevels(): void {
    shownDb = peakDb = heldDb = MIN_DB;
    rating = 'good'; // force setRating to repaint
    setRating('waiting');
  }

  async function start(deviceId?: string): Promise<void> {
    if (busy) return;
    const unsupported = checkSupport();
    if (unsupported) {
      showError(unsupported);
      return;
    }

    setStarting(true);
    try {
      const result = await mic.start(deviceId, withCamera && !camera.active);
      if (withCamera && video) {
        if (result.videoTrack) await camera.adopt(video, result.videoTrack);
        if (!camera.active) showCameraNote(result.videoError ?? 'unknown');
        else showCameraNote(null);
      }
    } catch (err) {
      setStarting(false);
      camera.stop(video ?? undefined);
      showError(err instanceof MediaError ? err.kind : 'unknown');
      return;
    }
    setStarting(false);

    mic.setMonitor(monitorOn);
    resetLevels();
    resetRecordUi(recordedUrl ? S.recordAgain : undefined);
    renderInfo();
    liveDevice.textContent = mic.info()?.label ?? S.listening;
    const wasLive = view === 'live';
    setView('live', !wasLive);
    if (!wasLive) {
      liveCheck.classList.remove('pop-in');
      void liveCheck.offsetWidth; // restart the checkmark animation
      liveCheck.classList.add('pop-in');
      announce(S.working);
    }
    startLoop();
    void refreshDevices();
  }

  function stop(): void {
    stopLoop();
    mic.stop();
    camera.stop(video ?? undefined);
    setMonitor(false);
    resetRecordUi(recordedUrl ? S.recordAgain : undefined);
    clearInfo();
    setStarting(false);
    setView('idle');
    announce(S.stopped);
  }

  function setMonitor(on: boolean): void {
    monitorOn = on;
    monitorBtn.setAttribute('aria-checked', String(on));
    mic.setMonitor(on);
  }

  async function record(): Promise<void> {
    if (!mic.active || mic.isRecording) return;
    recordBtn.disabled = true;
    ring.style.stroke = '';
    recordHint.textContent = S.recordingHint;
    announce(S.recordingAnnounce);
    recordStart = performance.now();
    shownSecond = -1;

    try {
      const pending = mic.record(RECORD_MS);
      const blob = await pending;
      if (recordedUrl) URL.revokeObjectURL(recordedUrl);
      recordedUrl = URL.createObjectURL(blob);
      player.src = recordedUrl;
      player.classList.remove('hidden');
      playerEmpty.classList.add('hidden');
      ring.style.strokeDashoffset = '0';
      ring.style.stroke = 'var(--ok)';
      count.innerHTML =
        '<svg class="pop-in size-6" viewBox="0 0 24 24" fill="none" stroke="var(--ok)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
      recordBtn.disabled = false;
      recordBtn.textContent = S.recordAgain;
      recordHint.textContent = S.doneHint;
      announce(S.doneAnnounce);
    } catch (err) {
      const cancelled = err instanceof Error && err.message === 'cancelled';
      resetRecordUi(recordedUrl ? S.recordAgain : undefined);
      recordHint.textContent = cancelled ? S.idleRecordHint : S.failHint;
      if (!cancelled) announce(S.failAnnounce);
    }
  }

  /* ---------- events ---------- */

  root.addEventListener('click', (e) => {
    const target = (e.target as HTMLElement).closest<HTMLElement>('[data-action]');
    if (!target || !root.contains(target)) return;
    switch (target.dataset.action) {
      case 'start':
      case 'retry':
        void start();
        break;
      case 'stop':
        stop();
        break;
      case 'record':
        void record();
        break;
      case 'monitor':
        setMonitor(!monitorOn);
        announce(monitorOn ? S.monitorOn : S.monitorOff);
        break;
    }
  });

  micSelect.addEventListener('change', () => void start(micSelect.value));

  camSelect?.addEventListener('change', async () => {
    if (!video) return;
    try {
      await camera.start(video, camSelect.value);
      showCameraNote(null);
    } catch (err) {
      showCameraNote(err instanceof MediaError ? err.kind : 'unknown');
    }
    renderInfo();
  });

  mic.onEnded = () => {
    camera.stop(video ?? undefined);
    setMonitor(false);
    clearInfo();
    showError('not-found');
    errorTitle.textContent = S.disconnected;
  };
  camera.onEnded = () => showCameraNote('not-found');

  // Chrome leaves MediaRecorder blobs without a duration; this makes seeking work.
  player.addEventListener('loadedmetadata', () => {
    if (player.duration !== Infinity) return;
    const fix = () => {
      player.removeEventListener('timeupdate', fix);
      player.currentTime = 0;
    };
    player.addEventListener('timeupdate', fix);
    player.currentTime = 1e101;
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopLoop();
    } else if (view === 'live') {
      void mic.resume();
      startLoop();
    }
  });

  navigator.mediaDevices?.addEventListener?.('devicechange', () => {
    if (view === 'live') void refreshDevices();
  });

  new ResizeObserver(() => {
    sizeCanvas();
    if (view === 'live' && reducedMotion.matches) drawWave(null);
  }).observe(canvas);

  // Repaint with the right colour when the theme changes.
  new MutationObserver(readColors).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });

  // Always let go of the mic and camera when the page goes away.
  window.addEventListener('pagehide', () => {
    if (view === 'live') stop();
    mic.stop();
    camera.stop(video ?? undefined);
  });
}
