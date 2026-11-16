/** Site-wide behaviour: theme toggle, mobile menu, one-time scroll reveal. */

const root = document.documentElement;
const themeMeta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)');

function applyTheme(dark: boolean): void {
  root.dataset.theme = dark ? 'dark' : 'light';
  if (themeMeta) themeMeta.content = dark ? '#0b0d14' : '#f7f8fc';
  document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(dark));
  });
}

function storedTheme(): string | null {
  try {
    return localStorage.getItem('theme');
  } catch {
    return null;
  }
}

applyTheme(root.dataset.theme === 'dark');

document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const dark = root.dataset.theme !== 'dark';
    applyTheme(dark);
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    } catch {
      /* private mode: the choice lasts for this page only */
    }
  });
});

// Follow the system setting until the visitor picks a theme themselves.
systemDark.addEventListener('change', (e) => {
  if (!storedTheme()) applyTheme(e.matches);
});

// Close the mobile menu and the language list with Escape, or when focus or a click leaves them.
document.querySelectorAll<HTMLDetailsElement>('[data-menu], [data-lang]').forEach((menu) => {
  menu.addEventListener('focusout', (e) => {
    if (e.relatedTarget && !menu.contains(e.relatedTarget as Node)) menu.open = false;
  });
});
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  document.querySelectorAll<HTMLDetailsElement>('[data-menu][open], [data-lang][open]').forEach((menu) => {
    menu.open = false;
    menu.querySelector('summary')?.focus();
  });
});
document.addEventListener('click', (e) => {
  document.querySelectorAll<HTMLDetailsElement>('[data-menu][open], [data-lang][open]').forEach((menu) => {
    if (!menu.contains(e.target as Node)) menu.open = false;
  });
});

// Scroll reveal: only for sections that start below the fold, only once,
// and not at all when the visitor prefers reduced motion.
const reveals = document.querySelectorAll<HTMLElement>('[data-reveal]');
if (
  reveals.length &&
  'IntersectionObserver' in window &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches
) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        el.classList.add('reveal-run');
        el.classList.remove('reveal-pending');
        io.unobserve(el);
        window.setTimeout(() => el.classList.remove('reveal-run'), 600);
      }
    },
    { rootMargin: '0px 0px -8% 0px' },
  );
  const fold = window.innerHeight;
  reveals.forEach((el) => {
    if (el.getBoundingClientRect().top > fold) {
      el.classList.add('reveal-pending');
      io.observe(el);
    }
  });
}
