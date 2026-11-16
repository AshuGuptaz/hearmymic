/**
 * Language setup. English lives at the root (/), every other language under
 * its own prefix (/es, /fr, /de, /pt, /ja, /ko, /it). Keep this in sync with `i18n` in
 * astro.config.mjs.
 *
 * To add a language: add it here, add a dictionary in ui.ts, add a content file
 * in src/i18n/content/, register it in content/index.ts, and add a thin route
 * folder src/pages/<code>/[...slug].astro (copy src/pages/es).
 */
export const locales = ['en', 'es', 'fr', 'de', 'pt', 'ja', 'ko', 'it'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';
export type TranslatedLocale = Exclude<Locale, 'en'>;
export const translatedLocales = locales.filter((l): l is TranslatedLocale => l !== 'en');

export const localeMeta: Record<
  Locale,
  {
    /** Name of the language in that language, shown in the switcher. */
    label: string;
    /** Value for <html lang> and for hreflang. */
    lang: string;
    /** Open Graph locale. */
    og: string;
  }
> = {
  en: { label: 'English', lang: 'en', og: 'en_US' },
  es: { label: 'Español', lang: 'es', og: 'es_ES' },
  fr: { label: 'Français', lang: 'fr', og: 'fr_FR' },
  de: { label: 'Deutsch', lang: 'de', og: 'de_DE' },
  pt: { label: 'Português', lang: 'pt', og: 'pt_BR' },
  ja: { label: '日本語', lang: 'ja', og: 'ja_JP' },
  ko: { label: '한국어', lang: 'ko', og: 'ko_KR' },
  it: { label: 'Italiano', lang: 'it', og: 'it_IT' },
};

export const isLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value);
