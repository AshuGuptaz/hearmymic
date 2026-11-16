export type PageGroup = 'test' | 'platform' | 'device' | 'fix';

export interface Step {
  title: string;
  body: string;
}

export interface Faq {
  q: string;
  /** Plain text. It is also used for FAQPage structured data. */
  a: string;
}

export interface GuideSection {
  heading: string;
  /** Paragraphs. A paragraph starting with "- " becomes a bullet list item. */
  body: string[];
}

export interface PageData {
  /** URL path without the leading slash. "" is the homepage. */
  slug: string;
  group: PageGroup;
  /** Which tool variant to embed. */
  tool: 'mic' | 'camera';
  /** Short label for navigation, breadcrumbs and "Related tests". */
  nav: string;
  /** One line shown on related cards. */
  blurb: string;
  title: string;
  description: string;
  h1: string;
  /** One or two short sentences shown above the tool. */
  lede: string;
  /** Heading and paragraphs shown right below the tool. */
  introTitle: string;
  intro: string[];
  stepsTitle: string;
  steps: Step[];
  /** Optional longer section, used on the priority pages. */
  guide?: GuideSection[];
  faqs: Faq[];
  /** Slugs of pages to link from the "Related tests" block. */
  related: string[];
}

/**
 * A translated page. Keyed by the English slug in src/i18n/content/<lang>.ts.
 * Structure (group, tool, related links) is inherited from the English page.
 * `slug` is the localized URL path without the language prefix.
 */
export type PageTranslation = Omit<PageData, 'group' | 'tool' | 'related'>;
