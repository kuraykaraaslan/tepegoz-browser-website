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
  /** The repo has no ROADMAP.md and never has; `phases/README.md` is the roadmap. */
  phases: `${SITE_REPO}/blob/main/phases/README.md`,
  securityPolicy: `${SITE_REPO}/blob/main/SECURITY.md`,
  license: `${SITE_REPO}/blob/main/LICENSE`,
  readme: `${SITE_REPO}/blob/main/README.md`,
  changelog: `${SITE_REPO}/blob/main/CHANGELOG.md`,
  contributing: `${SITE_REPO}/blob/main/CONTRIBUTING.md`,
  safetyPhase: `${SITE_REPO}/blob/main/phases/ai-agent/phase-s6-safety-control-plane.md`,
  privateVulnReport: `${SITE_REPO}/security/advisories/new`,
  aiCompetence: `${SITE_REPO}/blob/main/phases/ai-agent/README.md`,
  research: `${SITE_REPO}/blob/main/docs/research/README.md`,
  recordAgentScript: `${SITE_REPO}/blob/main/scripts/record-agent.mjs`,
  tabModelAdr: `${SITE_REPO}/blob/main/docs/adr/0012-browser-tab-model.md`,
  discussions: `${SITE_REPO}/discussions`,
  releasesLatest: `${SITE_REPO}/releases`,
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
  compare: '/compare',
  extensions: '/extensions',
  networkPrivacy: '/network-privacy',
  turkey: '/turkey',
  help: '/help',
  blog: '/blog',
  blogScreenshot: '/blog/the-screenshot-that-captured-the-wrong-screen',
  releases: '/releases',
  legalPrivacy: '/legal/privacy',
  legalTerms: '/legal/terms',
  legalLicense: '/legal/license',
} as const;

export type RouteKey = keyof typeof ROUTES;

/** Every route the site builds, in sitemap order. */
export const ALL_ROUTES: readonly RouteKey[] = [
  'home',
  'howItWorks',
  'features',
  'extensions',
  'security',
  'privacy',
  'networkPrivacy',
  'download',
  'openSource',
  'story',
  'roadmap',
  'compare',
  'turkey',
  'help',
  'blog',
  'blogScreenshot',
  'releases',
  'legalPrivacy',
  'legalTerms',
  'legalLicense',
];

/** Header navigation. */
export const PRIMARY_NAV: readonly RouteKey[] = [
  'howItWorks',
  'features',
  'extensions',
  'security',
  'privacy',
  'openSource',
  'roadmap',
  'compare',
];

/**
 * Footer groups carry an `id`, not a heading.
 *
 * This file "only holds chrome: names, routes, and links" — and a heading is
 * copy, which means it has to translate. Keeping the English word here would
 * either strand it untranslated or force the dictionary key to be derived from a
 * display string, which breaks the moment the wording changes. The id is stable
 * data; `SiteFooter` turns it into a translated heading.
 */
export const FOOTER_NAV: readonly { id: 'product' | 'trust' | 'project' | 'legal'; items: readonly RouteKey[] }[] = [
  { id: 'product', items: ['howItWorks', 'features', 'extensions', 'networkPrivacy', 'download'] },
  { id: 'trust', items: ['security', 'privacy', 'openSource', 'compare'] },
  { id: 'project', items: ['story', 'roadmap', 'turkey', 'blog', 'releases'] },
  { id: 'legal', items: ['help', 'legalPrivacy', 'legalTerms', 'legalLicense'] },
];
