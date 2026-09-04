import { createServerT } from '@kuraykaraaslan/i18n/server/messages';
import { dictionaries } from '@/modules/marketing/dictionaries';
import { DEFAULT_LOCALE, type Locale } from './locales';

const raw = createServerT(dictionaries, DEFAULT_LOCALE);

/**
 * `t()` for server components, with the SAME argument order as the client hook.
 *
 * The vendored `createServerT` returns `(key, locale, fallback?, vars?)` — locale
 * second — because upstream calls it for a recipient's locale (emails,
 * notifications), not for the page being rendered. Here the locale is fixed for
 * the whole render, so it is bound once and the call sites keep the client
 * shape: `t('marketing.area.slug', 'English default')`.
 *
 * That symmetry is not cosmetic. `scripts/i18n/extract.mjs` reads the English
 * source out of the SECOND argument; if server call sites put the locale there,
 * every string rendered by a server component would be invisible to the
 * extractor and silently absent from `en.json`.
 */
export function serverT(locale: Locale) {
  return (key: string, fallback?: string, vars?: Record<string, string | number>): string =>
    raw(key, locale, fallback, vars);
}
