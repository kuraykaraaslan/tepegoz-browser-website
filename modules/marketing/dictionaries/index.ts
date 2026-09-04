import en from './en.json';
import tr from './tr.json';
import ky from './ky.json';

/**
 * The marketing site's own dictionary.
 *
 * `en.json` is GENERATED from the `t('marketing.…', 'English')` fallbacks in the
 * code by `scripts/i18n/extract.mjs` — never hand-written, because a string that
 * lives in two places drifts in one of them. Every other file is written by hand
 * and is allowed to be incomplete: resolution falls back per key, so a missing
 * translation renders the English string rather than a blank or a raw key.
 *
 * `ky.json` is complete but unreviewed — see `modules/marketing/content/ky/`.
 */
export const dictionaries: Record<string, Record<string, string>> = { en, tr, ky };
