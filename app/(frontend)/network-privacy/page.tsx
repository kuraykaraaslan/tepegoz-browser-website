import type { Metadata } from 'next';
import { MarketingPage } from '@/components/marketing/MarketingPage';
import { buildMetadata } from '@/libs/seo/metadata';
import { DEFAULT_LOCALE } from '@/libs/i18n/locales';
import { getPage } from '@/modules/marketing/content';

export const metadata: Metadata = buildMetadata(DEFAULT_LOCALE, 'networkPrivacy');

export default function Page() {
  return <MarketingPage page={getPage(DEFAULT_LOCALE, 'networkPrivacy')} />;
}
