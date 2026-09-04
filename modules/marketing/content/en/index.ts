import type { RouteKey } from '@/libs/config/site';
import type { NavLabels, PageContent } from '@/types/content';

import { home } from './home';
import { howItWorks } from './how-it-works';
import { features } from './features';
import { extensions } from './extensions';
import { security } from './security';
import { privacy } from './privacy';
import { networkPrivacy } from './network-privacy';
import { download } from './download';
import { openSource } from './open-source';
import { story } from './story';
import { roadmap } from './roadmap';
import { compare } from './compare';
import { turkey } from './turkey';
import { help } from './help';
import { blog } from './blog';
import { blogScreenshot } from './blog-screenshot';
import { releases } from './releases';
import { legalPrivacy } from './legal-privacy';
import { legalTerms } from './legal-terms';
import { legalLicense } from './legal-license';

/**
 * English content — the source of truth.
 *
 * `docs/website/README.md`: "English is the source. Turkish is a first-class
 * translation, not an afterthought — but it is translated *from* these files."
 * `modules/marketing/content/tr/` now exists and mirrors this folder exactly, key
 * for key: a page added here needs its Turkish counterpart in the same change, or
 * `TR_PAGES` stops satisfying `Record<RouteKey, PageContent>` and the build fails.
 * That is the intended enforcement — the mirror is a type, not a convention.
 */
export const EN_PAGES: Record<RouteKey, PageContent> = {
  home,
  howItWorks,
  features,
  extensions,
  security,
  privacy,
  networkPrivacy,
  download,
  openSource,
  story,
  roadmap,
  compare,
  turkey,
  help,
  blog,
  blogScreenshot,
  releases,
  legalPrivacy,
  legalTerms,
  legalLicense,
};

/** Short labels for header and footer navigation. */
export const EN_NAV_LABELS: NavLabels = {
  home: 'Home',
  howItWorks: 'How it works',
  features: 'Features',
  extensions: 'Extensions',
  security: 'Security',
  privacy: 'Privacy',
  networkPrivacy: 'Network privacy',
  download: 'Download',
  openSource: 'Open source',
  story: 'Story',
  roadmap: 'Roadmap',
  compare: 'Compare',
  turkey: 'Türkiye',
  help: 'Help',
  blog: 'Build log',
  blogScreenshot: 'The screenshot that captured the wrong screen',
  releases: 'Releases',
  legalPrivacy: 'Privacy policy',
  legalTerms: 'Terms',
  legalLicense: 'Licence',
};
