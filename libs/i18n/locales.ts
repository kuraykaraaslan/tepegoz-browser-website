/**
 * Locale registry.
 *
 * The site is a static export, so there is no middleware to negotiate a
 * language — every URL is a real path baked at build time.
 *
 * **The default locale is unprefixed.** English lives at `/`, `/features`,
 * `/security`; a second locale would live under its own prefix (`/tr`,
 * `/tr/features`). `localePath` is the single place that rule is expressed, so
 * navigation, the sitemap, `hreflang` and the language switcher all follow it
 * without repeating the branch.
 *
 * Turkish is complete. All three steps of the note that used to sit here are
 * done: `'tr'` is in LOCALES, `app/(localized)/[lang]/` mirrors the root pages,
 * and `modules/marketing/content/tr/` now carries a translated body for every
 * route. The chrome was already translated through
 * `modules/marketing/dictionaries`; `/tr/…` is now Turkish all the way down
 * rather than a Turkish shell around English copy.
 *
 * The half-measure this comment used to describe was the right call at the time
 * and is worth remembering for the next locale: ship the shell, say plainly that
 * the body is not translated, and let the copy land afterwards. That is how a
 * second language avoids staying permanently "next quarter".
 *
 * Kyrgyz (`ky`) is the third, and it carries a caveat the other two do not — see
 * `modules/marketing/content/ky/index.ts`. The copy is complete and every gate
 * passes, but no Kyrgyz speaker has read it. That is recorded there rather than
 * here because it is a fact about the *copy*, not about the routing.
 */
export const LOCALES = ['en', 'tr', 'ky'] as const;

export type Locale = (typeof LOCALES)[number];

/** Served from the root with no path prefix. */
export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_LABELS: Record<Locale, { label: string; nativeName: string }> = {
  en: { label: 'EN', nativeName: 'English' },
  // Endonym, deliberately: a language picker that says "Turkish" is written for
  // someone who already reads English.
  tr: { label: 'TR', nativeName: 'Türkçe' },
  // Same rule, and the reason it is worth restating: the endonym is Cyrillic, so
  // this is the first entry whose `nativeName` a Latin-only reader cannot even
  // approximate. The `label` stays Latin because it is a two-letter code shown
  // beside a flag, not a word.
  ky: { label: 'KY', nativeName: 'Кыргызча' },
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/**
 * Builds a locale's URL for a route.
 *
 *   localePath('/security', 'en') → '/security/'     (default: no prefix)
 *   localePath('/security', 'tr') → '/tr/security/'
 *   localePath('/', 'tr')         → '/tr/'
 *
 * The trailing slash is not cosmetic: `next.config.ts` sets `trailingSlash:
 * true`, so Next canonicalises to that form. Emitting anything else means the
 * sitemap advertises URLs that differ from the pages' own `<link rel=canonical>`,
 * and every header link costs a redirect hop before it resolves.
 */
export function localePath(path: string, locale: Locale): string {
  const clean = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`;
  const base = locale === DEFAULT_LOCALE ? clean : `/${locale}${clean}`;
  return base === '' ? '/' : `${base}/`;
}
