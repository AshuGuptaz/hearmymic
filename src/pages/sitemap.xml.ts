import type { APIRoute } from 'astro';
import { pages } from '../data/pages';
import { site, utilityLinks } from '../data/site';
import { defaultLocale, locales } from '../i18n/config';
import { alternatesFor, hasTranslation, pathFor } from '../i18n/routes';

const abs = (path: string) => new URL(path, site.url).href;

/**
 * sitemap.xml built from the same data as the pages, so it can't drift.
 * Every language version of a page is listed, and each lists all of its
 * alternates (hreflang), including itself and x-default.
 */
export const GET: APIRoute = () => {
  const entries: string[] = [];

  for (const page of pages) {
    const alternates = alternatesFor(page.slug);
    const links =
      alternates.length > 1
        ? [
            ...alternates.map((a) => `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${abs(a.path)}"/>`),
            `    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(pathFor(defaultLocale, page.slug))}"/>`,
          ].join('\n')
        : '';

    for (const locale of locales.filter((l) => hasTranslation(l, page.slug))) {
      const path = pathFor(locale, page.slug);
      const priority = page.slug === '' ? '1.0' : page.slug.includes('/') ? '0.6' : '0.8';
      entries.push(
        `  <url>\n    <loc>${abs(path)}</loc>\n${links ? links + '\n' : ''}    <priority>${priority}</priority>\n  </url>`,
      );
    }
  }

  for (const link of utilityLinks) {
    entries.push(`  <url><loc>${abs(link.href)}</loc><priority>0.6</priority></url>`);
  }

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.join('\n')}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
