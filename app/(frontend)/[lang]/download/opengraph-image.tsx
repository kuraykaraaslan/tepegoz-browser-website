import { renderOgImage, ogStaticParams, size, contentType, alt } from '@/libs/seo/og-image';

export { size, contentType, alt };
export const generateStaticParams = ogStaticParams;

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return renderOgImage(lang, 'download');
}
