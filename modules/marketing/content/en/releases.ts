import type { PageContent } from '@/types/content';
import { REPO_FILES, SITE } from '@/libs/config/site';

/**
 * Source: tepegoz-browser/docs/website/release-notes.md (status: needs-assets)
 *
 * No release exists yet, so this page ships in its empty state and becomes a
 * real list at the first tag. Build note from the source: generate entries
 * from `CHANGELOG.md`, but do not paste it — the changelog is written for
 * contributors and this page is written for users. Every entry links to its
 * GitHub release for binaries and checksums.
 */
export const releases: PageContent = {
  route: '/releases',
  title: 'Releases — Tepegöz',
  description:
    'Every Tepegöz release, what changed, and what is known to be broken in it. Written for people, not for a changelog parser.',
  status: 'needs-assets',

  hero: {
    eyebrow: 'Releases',
    headline: 'No releases yet.',
    subhead:
      'Tepegöz has not been tagged. Until it is, the way to run it is to build from source — three commands and no compiler.',
    ctas: [
      { label: 'Build it', href: '/download', variant: 'primary' },
      { label: 'Follow the work', href: '/blog', variant: 'outline' },
      { label: 'Watch the repository', href: SITE.repo, variant: 'ghost', external: true },
    ],
  },

  sections: [
    {
      id: 'what-to-expect',
      eyebrow: 'When the first tag lands',
      heading: 'What every entry will say — including what is still broken.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Release notes here are written for people, not parsed from commit subjects. Every entry follows the same five headings, in this order, and the last one is not optional — a release page that never mentions defects is not being read carefully by anyone twice.',
          ],
        },
        {
          kind: 'list',
          variant: 'plain',
          items: [
            '**In one line.** What this release is for.',
            '**New.** Features you can now use, in user language.',
            '**Fixed.** What was broken and now is not.',
            '**Security.** Anything with a security consequence, including a fix credited to a reporter. If there is nothing, it says "nothing this release" rather than omitting the heading.',
            '**Known issues.** What is still wrong in this build, and the workaround if there is one.',
            '**Downloads.** Windows `.exe`, macOS `.dmg`, Linux `.deb` `.rpm` `.tar.gz` — signed and notarized, with checksums, linked from the GitHub release.',
          ],
        },
      ],
    },

    {
      id: 'versioning',
      eyebrow: 'Versioning and support',
      heading: 'Semantic versioning, and only the latest release.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Pre-1.0 means the interfaces can change between minor versions, and they will.',
            '**Only the latest release is supported.** There are no backported fixes and no long-term-support branch.',
          ],
        },
        {
          kind: 'ctas',
          items: [
            { label: 'The changelog for contributors', href: REPO_FILES.changelog, variant: 'outline', external: true },
            { label: 'GitHub releases', href: REPO_FILES.releasesLatest, variant: 'ghost', external: true },
          ],
        },
      ],
    },
  ],

  closing: {
    heading: 'Until then, build from source.',
    ctas: [
      { label: 'Build it', href: '/download', variant: 'primary' },
      { label: 'Follow the work', href: '/blog', variant: 'outline' },
    ],
  },
};
