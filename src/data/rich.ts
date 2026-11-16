/**
 * Inline links in page copy. Write `[label](/english-slug)` in any intro,
 * step, guide or FAQ text in src/data/pages. The link is resolved per
 * language and falls back to plain text where the target has no translation.
 */
const LINK = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;

export interface Segment {
  text: string;
  /** English slug of the target page, without the leading slash. */
  slug?: string;
}

export function segments(text: string): Segment[] {
  const out: Segment[] = [];
  let last = 0;
  for (const m of text.matchAll(LINK)) {
    if (m.index > last) out.push({ text: text.slice(last, m.index) });
    out.push({ text: m[1], slug: m[2].slice(1) });
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push({ text: text.slice(last) });
  return out;
}

/** The same text with link markup removed, for structured data. */
export const plain = (text: string): string => text.replace(LINK, '$1');
