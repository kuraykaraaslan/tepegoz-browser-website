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
 * Adding Turkish is therefore three steps and no routing work:
 *   1. add `'tr'` to LOCALES below,
 *   2. add `modules/marketing/content/tr/` mirroring `.../en/`,
 *   3. add `app/(localized)/[lang]/` — a sibling route group whose pages pass
 *      the `lang` param through to `getPage`, exactly as the root pages pass
 *      DEFAULT_LOCALE.
 */
export const LOCALES = ['en'] as const;

export type Locale = (typeof LOCALES)[number];

/** Served from the root with no path prefix. */
export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_LABELS: Record<Locale, { label: string; nativeName: string }> = {
  en: { label: 'EN', nativeName: 'English' },
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
