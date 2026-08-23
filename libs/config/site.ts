/**
 * Single source of truth for site-wide constants.
 *
 * Anything a page states about the product must be traceable to
 * `tepegoz-browser/docs/website/*.md`. This file only holds chrome: names,
 * routes, and links.
 */

const SITE_REPO = 'https://github.com/kuraykaraaslan/tepegoz-browser';

export const SITE = {
  name: 'Tepegöz',
  /** Brand v1.0 — 2026, docs/brand/tepegoz-logo-standalone.html */
  tagline: 'One eye on the web',
  shortDescription: 'The browser that does the work.',
  description:
    'An agentic, security-first, local-first browser. It plans, acts on real pages, and shows you every step. Your key, your machine, your rules.',
  /** Override at build time on Vercel via NEXT_PUBLIC_SITE_URL. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://tepegoz.app',
  license: 'AGPL-3.0',
  repo: SITE_REPO,
  repoIssues: `${SITE_REPO}/issues`,
  repoCi: `${SITE_REPO}/actions/workflows/ci.yml`,
  /** From docs/website/security.md — subject must carry the [tepegoz-security] tag. */
  securityContact: 'kuraykaraaslan@gmail.com',
  securitySubjectTag: '[tepegoz-security]',
} as const;

/** Deep links into the repository, for [CLAIM] statements that must stay verifiable. */
export const REPO_FILES = {
  threatModel: `${SITE_REPO}/blob/main/docs/threat-model.md`,
  knownIssues: `${SITE_REPO}/blob/main/docs/known-issues.md`,
  dataAndBackup: `${SITE_REPO}/blob/main/docs/data-and-backup.md`,
  phases: `${SITE_REPO}/blob/main/phases/README.md`,
  securityPolicy: `${SITE_REPO}/blob/main/SECURITY.md`,
  license: `${SITE_REPO}/blob/main/LICENSE`,
  readme: `${SITE_REPO}/blob/main/README.md`,
  roadmap: `${SITE_REPO}/blob/main/ROADMAP.md`,
  changelog: `${SITE_REPO}/blob/main/CHANGELOG.md`,
  contributing: `${SITE_REPO}/blob/main/CONTRIBUTING.md`,
  safetyPhase: `${SITE_REPO}/blob/main/phases/ai-agent-super/phase-s6-safety-control-plane.md`,
  privateVulnReport: `${SITE_REPO}/security/advisories/new`,
} as const;

/** Routes, defined once. Locale prefixes are applied by `localePath()`. */
export const ROUTES = {
  home: '/',
  howItWorks: '/how-it-works',
  features: '/features',
  security: '/security',
  privacy: '/privacy',
  download: '/download',
  openSource: '/open-source',
  story: '/story',
  roadmap: '/roadmap',
  legalPrivacy: '/legal/privacy',
  legalTerms: '/legal/terms',
  legalLicense: '/legal/license',
} as const;

export type RouteKey = keyof typeof ROUTES;

/** Every route that exists in this wave, in sitemap order. */
export const ALL_ROUTES: readonly RouteKey[] = [
  'home',
  'howItWorks',
  'features',
  'security',
  'privacy',
  'download',
  'openSource',
  'story',
  'roadmap',
  'legalPrivacy',
  'legalTerms',
  'legalLicense',
];

/** Header navigation — the launch wave's primary nav. */
export const PRIMARY_NAV: readonly RouteKey[] = [
  'howItWorks',
  'features',
  'security',
  'privacy',
  'openSource',
  'roadmap',
];

export const FOOTER_NAV: readonly { heading: string; items: readonly RouteKey[] }[] = [
  { heading: 'Product', items: ['howItWorks', 'features', 'download'] },
  { heading: 'Trust', items: ['security', 'privacy', 'openSource'] },
  { heading: 'Project', items: ['story', 'roadmap'] },
  { heading: 'Legal', items: ['legalPrivacy', 'legalTerms', 'legalLicense'] },
];
