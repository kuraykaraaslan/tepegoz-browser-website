import type { Metadata } from 'next';
import { ROUTES, SITE, type RouteKey } from '@/libs/config/site';
import { LOCALES, localePath, type Locale } from '@/libs/i18n/locales';
import { getPage } from '@/modules/marketing/content';

/**
 * Builds a page's metadata from its content, so the `<title>` and the meta
 * description can never drift from the copy they were written next to.
 *
 * Also emits the `hreflang` alternates the copy requires ("Turkish and English,
 * with a real language switcher and translated URLs"). Adding a locale to
 * LOCALES extends these automatically.
 */
export function buildMetadata(locale: Locale, key: RouteKey): Metadata {
  const page = getPage(locale, key);
  const path = ROUTES[key];
  const canonical = localePath(path, locale);

  const languages = Object.fromEntries(LOCALES.map((l) => [l, localePath(path, l)]));

  return {
    // `absolute` because each content title is the complete <title> from its
    // source file's Meta section ("Features — Tepegöz"), not a fragment to be
    // fed through the root layout's "%s | Tepegöz" template.
    title: { absolute: page.title },
    description: page.description,
    alternates: {
      canonical,
      languages: { ...languages, 'x-default': localePath(path, LOCALES[0]) },
    },
    openGraph: {
      type: 'website',
      siteName: SITE.name,
      locale,
      url: canonical,
      title: page.title,
      description: page.description,
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
    },
    // A non-lawyer draft with unfilled placeholders should not be the version
    // search engines index and quote. Flip this when the review lands.
    robots:
      page.status === 'draft-legal'
        ? { index: false, follow: true }
        : { index: true, follow: true },
  };
}
