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
 * Turkish is now open. Steps 1 and 3 of the note that used to sit here are done
 * — `'tr'` is in LOCALES and `app/(localized)/[lang]/` mirrors the root pages —
 * and step 2 is deliberately NOT: there is no `content/tr/` yet, so `getPage`
 * falls back to the English page body per route. The site chrome IS translated,
 * through `modules/marketing/dictionaries`, so `/tr/…` is a working Turkish
 * shell around English copy rather than a dead link.
 *
 * That is a visible half-measure on purpose. The alternative was to hold the
 * whole locale back until 3,000 lines of copy were translated, which is how a
 * second language stays permanently "next quarter".
 */
export const LOCALES = ['en', 'tr'] as const;

export type Locale = (typeof LOCALES)[number];

/** Served from the root with no path prefix. */
export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_LABELS: Record<Locale, { label: string; nativeName: string }> = {
  en: { label: 'EN', nativeName: 'English' },
  // Endonym, deliberately: a language picker that says "Turkish" is written for
  // someone who already reads English.
  tr: { label: 'TR', nativeName: 'Türkçe' },
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
