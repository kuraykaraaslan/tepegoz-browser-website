import { renderOgImage, size, contentType, alt } from '@/libs/seo/og-image';
import { DEFAULT_LOCALE } from '@/libs/i18n/locales';

export { size, contentType, alt };

/**
 * Required by `output: 'export'`. With the locale segment gone there is no
 * `generateStaticParams` left to mark this route as statically known, so it
 * has to say so itself — otherwise the exporter treats it as dynamic.
 */
export const dynamic = 'force-static';

export default async function Image() {
  return renderOgImage(DEFAULT_LOCALE, 'story');
}
