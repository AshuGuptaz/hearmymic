/**
 * URL and page helpers for every language.
 *
 * English pages live at /<slug>. A translated page lives at /<lang>/<its own
 * slug> (the homepage at /<lang>). Pages without a translation simply don't
 * exist in that language, and hreflang is only emitted for pairs that do.
 */
import { pages, getPage } from '../data/pages';
import type { PageData } from '../data/types';
import { locales, localeMeta, defaultLocale, type Locale, type TranslatedLocale } from './config';
import { translations } from './content';

// Fail the build on typos in translation keys and on duplicate localized slugs.
for (const [lang, entries] of Object.entries(translations)) {
  const seen = new Set<string>();
  for (const [enSlug, tr] of Object.entries(entries)) {
    if (!pages.some((p) => p.slug === enSlug)) throw new Error(`[${lang}] translation for unknown page "${enSlug}"`);
    if (seen.has(tr.slug)) throw new Error(`[${lang}] duplicate localized slug "${tr.slug}"`);
    seen.add(tr.slug);
  }
}

export const hasTranslation = (locale: Locale, enSlug: string): boolean =>
  locale === defaultLocale || Boolean(translations[locale as TranslatedLocale]?.[enSlug]);

/** Site-relative path of a page in a language. */
export function pathFor(locale: Locale, enSlug: string): string {
  if (locale === defaultLocale) return `/${enSlug}`;
  const tr = translations[locale as TranslatedLocale][enSlug];
  if (!tr) throw new Error(`No ${locale} translation for "${enSlug}"`);
  return tr.slug ? `/${locale}/${tr.slug}` : `/${locale}`;
}

/** The homepage of a language. */
export const homePath = (locale: Locale) => pathFor(locale, '');

/**
 * A page in a language: English structure plus translated text.
 * `related` keeps English slugs; only translated ones survive.
 */
export function localizedPage(locale: Locale, enSlug: string): PageData {
  const en = getPage(enSlug);
  if (locale === defaultLocale) return en;
  const tr = translations[locale as TranslatedLocale][enSlug];
  if (!tr) throw new Error(`No ${locale} translation for "${enSlug}"`);
  return { ...en, ...tr, related: en.related.filter((s) => hasTranslation(locale, s)) };
}

/** English slugs of every page that exists in a language. */
export const slugsFor = (locale: Locale): string[] =>
  pages.map((p) => p.slug).filter((slug) => hasTranslation(locale, slug));

/** One entry per language that has this page, for hreflang and the sitemap. */
export function alternatesFor(enSlug: string): { hreflang: string; locale: Locale; path: string }[] {
  return locales
    .filter((l) => hasTranslation(l, enSlug))
    .map((l) => ({ hreflang: localeMeta[l].lang, locale: l, path: pathFor(l, enSlug) }));
}

/** Pages shown in the footer for a language, grouped like the English site. */
export const pagesFor = (locale: Locale): PageData[] => slugsFor(locale).map((s) => localizedPage(locale, s));
