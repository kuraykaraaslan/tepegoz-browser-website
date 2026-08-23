import type { MetadataRoute } from 'next';
import { ROUTES, SITE } from '@/libs/config/site';
import { LOCALES, localePath } from '@/libs/i18n/locales';

/** Kept in sync with the per-page `noindex` on draft-legal documents. */
const DRAFT_LEGAL = [ROUTES.legalPrivacy, ROUTES.legalTerms];

/** Required by `output: 'export'` — this file is emitted once, at build time. */
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Unreviewed non-lawyer drafts, matching their per-page `noindex`.
        disallow: LOCALES.flatMap((l) => DRAFT_LEGAL.map((r) => localePath(r, l))),
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
