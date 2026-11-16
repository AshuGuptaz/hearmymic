/**
 * Every tool page on the site is generated from the entries below.
 * To add a page, add one entry to tests.ts, platforms.ts or fixes.ts.
 * The route, navigation, sitemap, breadcrumbs and structured data follow.
 */
import type { PageData, PageGroup } from '../types';
import { tests } from './tests';
import { platforms } from './platforms';
import { fixes } from './fixes';

export const pages: PageData[] = [...tests, ...platforms, ...fixes];

const bySlug = new Map(pages.map((p) => [p.slug, p]));

// Fail the build early on typos instead of shipping broken links.
if (bySlug.size !== pages.length) throw new Error('Duplicate page slug in src/data/pages');
for (const page of pages) {
  for (const slug of page.related) {
    if (!bySlug.has(slug)) throw new Error(`"${page.slug}" links to unknown page "${slug}"`);
    if (slug === page.slug) throw new Error(`"${page.slug}" lists itself as related`);
  }
}

export const pathOf = (slug: string) => `/${slug}`;

export function getPage(slug: string): PageData {
  const page = bySlug.get(slug);
  if (!page) throw new Error(`Unknown page "${slug}"`);
  return page;
}

export const byGroup = (group: PageGroup) => pages.filter((p) => p.group === group);

export const groupLabels: Record<PageGroup, string> = {
  test: 'Mic tests',
  platform: 'Meeting and chat apps',
  device: 'Devices',
  fix: 'Troubleshooting',
};
