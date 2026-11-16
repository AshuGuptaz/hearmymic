/** Site-wide settings. Edit these, not the templates. */
export const site = {
  name: 'HearMyMic',
  domain: 'hearmymic.com',
  url: 'https://hearmymic.com',
  tagline: 'Free online mic test',
  locale: 'en_US',
  contactEmail: 'hearmymicsupport@gmail.com',
  ogImage: '/og.png',

  /** Google Analytics 4 measurement ID, e.g. "G-XXXXXXXXXX". Empty = no analytics. */
  gaId: '',
} as const;

/** Pages that are planned but not built yet. Shown in navigation as "Soon". */
export const comingSoon = [
  { label: 'Speaker test', path: '/speaker-test' },
];

export const utilityLinks = [
  { label: 'About', href: '/about' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Contact', href: '/contact' },
];
