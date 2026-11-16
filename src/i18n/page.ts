import type { GetStaticPaths } from 'astro';
import type { Locale } from './config';
import { localizedPage, slugsFor } from './routes';

/** Shared getStaticPaths for src/pages/<lang>/[...slug].astro. */
export const localePage = {
  getStaticPaths: (locale: Locale) =>
    (() =>
      slugsFor(locale).map((enSlug) => {
        const page = localizedPage(locale, enSlug);
        return { params: { slug: page.slug || undefined }, props: { page, enSlug } };
      })) satisfies GetStaticPaths,
};
