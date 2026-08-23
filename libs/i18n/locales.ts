/**
 * Locale registry.
 *
 * The site is built as a static export, so there is no middleware to negotiate
 * a language — every locale is a real prefixed route baked at build time.
 *
 * Adding Turkish is deliberately a two-step change and nothing more:
 *   1. add `'tr'` to LOCALES below,
 *   2. add `modules/marketing/content/tr/` mirroring `.../en/`.
 * Routing, the switcher, `hreflang`, and the sitemap all read from this file.
 */
export const LOCALES = ['en'] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_LABELS: Record<Locale, { label: string; nativeName: string }> = {
  en: { label: 'EN', nativeName: 'English' },
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** Prefix a route with its locale: ('/security', 'en') → '/en/security'. */
export function localePath(path: string, locale: Locale): string {
  const clean = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`;
  return `/${locale}${clean}`;
}
