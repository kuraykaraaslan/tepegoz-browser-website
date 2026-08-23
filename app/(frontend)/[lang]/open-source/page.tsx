import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MarketingPage } from '@/components/marketing/MarketingPage';
import { buildMetadata } from '@/libs/seo/metadata';
import { isLocale } from '@/libs/i18n/locales';
import { getPage } from '@/modules/marketing/content';

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return buildMetadata(lang, 'openSource');
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <MarketingPage page={getPage(lang, 'openSource')} />;
}
