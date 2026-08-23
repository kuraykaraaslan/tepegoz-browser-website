import type { MetadataRoute } from 'next';
import { ALL_ROUTES, ROUTES, SITE } from '@/libs/config/site';
import { LOCALES, localePath } from '@/libs/i18n/locales';
import { getPage } from '@/modules/marketing/content';

/** Required by `output: 'export'` — this file is emitted once, at build time. */
export const dynamic = 'force-static';

/** Generated at build time — `output: 'export'` writes it to `out/sitemap.xml`. */
export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.flatMap((locale) =>
    ALL_ROUTES
      // draft-legal pages are noindex; keeping them out of the sitemap keeps
      // the two signals from contradicting each other.
      .filter((key) => getPage(locale, key).status !== 'draft-legal')
      .map((key) => ({
        url: `${SITE.url}${localePath(ROUTES[key], locale)}`,
        changeFrequency: 'weekly' as const,
        priority: key === 'home' ? 1 : 0.7,
        alternates: {
          languages: Object.fromEntries(
            LOCALES.map((l) => [l, `${SITE.url}${localePath(ROUTES[key], l)}`])
          ),
        },
      }))
  );
}
