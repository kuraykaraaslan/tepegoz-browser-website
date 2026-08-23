import type { RouteKey } from '@/libs/config/site';
import type { NavLabels, PageContent } from '@/types/content';

import { home } from './home';
import { howItWorks } from './how-it-works';
import { features } from './features';
import { security } from './security';
import { privacy } from './privacy';
import { download } from './download';
import { openSource } from './open-source';
import { story } from './story';
import { roadmap } from './roadmap';
import { legalPrivacy } from './legal-privacy';
import { legalTerms } from './legal-terms';
import { legalLicense } from './legal-license';

/**
 * English content — the source of truth.
 *
 * `docs/website/README.md`: "English is the source. Turkish is a first-class
 * translation, not an afterthought — but it is translated *from* these files."
 * A `modules/marketing/content/tr/` folder mirrors this one exactly, key for key.
 */
export const EN_PAGES: Record<RouteKey, PageContent> = {
  home,
  howItWorks,
  features,
  security,
  privacy,
  download,
  openSource,
  story,
  roadmap,
  legalPrivacy,
  legalTerms,
  legalLicense,
};

/** Short labels for header and footer navigation. */
export const EN_NAV_LABELS: NavLabels = {
  home: 'Home',
  howItWorks: 'How it works',
  features: 'Features',
  security: 'Security',
  privacy: 'Privacy',
  download: 'Download',
  openSource: 'Open source',
  story: 'Story',
  roadmap: 'Roadmap',
  legalPrivacy: 'Privacy policy',
  legalTerms: 'Terms',
  legalLicense: 'Licence',
};
