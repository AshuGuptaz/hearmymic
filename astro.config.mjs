// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Static output with clean, extension-less URLs.
// Cloudflare Pages serves /about.html at /about, so `file` + `never` gives
// one canonical URL per page with no trailing-slash redirects.
export default defineConfig({
  site: 'https://hearmymic.com',
  output: 'static',
  trailingSlash: 'never',
  // English at the root, other languages under /es, /fr, /de, /pt, /ja, /ko, /it.
  // Keep in sync with src/i18n/config.ts. Pages are generated in
  // src/pages/<lang>/[...slug].astro and hreflang is added in Base.astro.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'fr', 'de', 'pt', 'ja', 'ko', 'it'],
    routing: { prefixDefaultLocale: false },
  },
  build: {
    format: 'file',
    // Inline all CSS so the first paint needs no extra request.
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
