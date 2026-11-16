import type { PageTranslation } from '../../data/types';
import type { TranslatedLocale } from '../config';
import { es } from './es';
import { esMore } from './es-more';
import { fr } from './fr';
import { frMore } from './fr-more';
import { de } from './de';
import { deMore } from './de-more';
import { pt } from './pt';
import { ptMore } from './pt-more';
import { ja } from './ja';
import { jaMore } from './ja-more';
import { ko } from './ko';
import { koMore } from './ko-more';
import { it } from './it';
import { itMore } from './it-more';

/**
 * Translated page content per language, keyed by English slug.
 * Each language has a main file (core test pages) and a "-more" file (apps and fix guides).
 */
export const translations: Record<TranslatedLocale, Record<string, PageTranslation>> = {
  es: { ...es, ...esMore },
  fr: { ...fr, ...frMore },
  de: { ...de, ...deMore },
  pt: { ...pt, ...ptMore },
  ja: { ...ja, ...jaMore },
  ko: { ...ko, ...koMore },
  it: { ...it, ...itMore },
};
