import { renderOgImage, size, contentType, alt } from '@/libs/seo/og-image';
import { DEFAULT_LOCALE } from '@/libs/i18n/locales';

export { size, contentType, alt };

/**
 * Required by `output: 'export'`. With no locale segment there is no
 * `generateStaticParams` to mark this route as statically known, so it has to
 * say so itself — otherwise the exporter treats it as dynamic.
 */
export const dynamic = 'force-static';

export default async function Image() {
  return renderOgImage(DEFAULT_LOCALE, 'turkey');
}
