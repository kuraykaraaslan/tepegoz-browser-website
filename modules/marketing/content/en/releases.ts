import type { PageContent } from '@/types/content';
import { REPO_FILES, SITE } from '@/libs/config/site';

/**
 * Source: tepegoz-browser/docs/website/release-notes.md (status: needs-assets)
 * @sourceSha256 10cf244f (2026-08-23)
 *
 * No release exists yet, so this page ships in its empty state and becomes a
 * real list at the first tag. Build note from the source: generate entries
 * from `CHANGELOG.md`, but do not paste it — the changelog is written for
 * contributors and this page is written for users. Every entry links to its
 * GitHub release for binaries and checksums.
 *
 * Status: `ready`, promoted from `needs-assets`. The flag was inherited from
 * the source file's front matter, and on this page it was never true: it means
 * "copy is final but a required asset does not exist", and `release-notes.md`
 * asks for no asset at all. All 81 lines were searched for screenshot,
 * recording, video, diagram, capture, image, figure, mockup, illustration and
 * shot — zero hits, the front-matter `status:` line included. Nor does the
 * finished page owe the site a file: installers and checksums, when they exist,
 * are hosted on the GitHub release and linked, never shipped in this static
 * export, so no entry in the media ledger is waiting on anything here.
 *
 * The flag also contradicted the paragraph directly above it. `needs-assets`
 * means a page cannot ship as done; this page's whole design is that it *does*
 * ship, today, in its empty state, and becomes a list at the first tag. Holding
 * both was a small piece of bookkeeping nobody could act on.
 *
 * One consequence worth stating plainly, because `content:check` enforces it:
 * a `needs-assets` page must render a visible gap, so the status and the block
 * kind below had to move together. Keeping the pending-asset panel to satisfy
 * the flag — a film-reel badge over a missing git tag — would have been
 * inventing a gap to feed a checker, which is the inverse of what the check is
 * there to prevent. `/features` was reconciled the same way and for the same
 * reason.
 *
 * KNOWN CONTRADICTION, left standing on purpose: `/download` advertises "signed
 * builds" while this page says there are no releases at all, and no `v*` tag
 * exists in the repository. Both statements cannot be true of the same product
 * today. Which one gets corrected — soften the download claim, or ship the tag —
 * is an owner call about what is actually being promised, not a copy edit, so it
 * is recorded here rather than resolved by whoever touched this file last.
 */
export const releases: PageContent = {
  route: '/releases',
  title: 'Releases — Tepegöz',
  description:
    'Every Tepegöz release, what changed, and what is known to be broken in it. Written for people, not for a changelog parser.',
  status: 'ready',

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
          // Why this is a callout and not a pending-asset panel.
          //
          // It was the latter, and the pending panel renders a film-reel icon
          // over a badge reading "Asset pending". Neither is true here. What is
          // missing from this page is a git tag and the build that follows it —
          // there is no picture anybody could take that would fill this slot,
          // and no file that belongs in the media ledger. The pending panel is
          // for a hole in a layout that an image will one day occupy; this page
          // has no hole. When the first tag lands it does not gain a screenshot,
          // it gains entries, and this block goes away entirely.
          //
          // The statement is not softened by the move — it is louder. A badge
          // saying "Asset pending" is the site's vocabulary for a missing
          // capture and a reader who has seen it elsewhere will read it as one;
          // a warning callout saying the repository has not been tagged says the
          // actual thing in words. The standing editorial rule survives intact:
          // no sample entry, no stand-in version number, nothing dressed up as a
          // release that nobody can install.
          kind: 'callout',
          tone: 'warning',
          title: 'The repository has not been tagged.',
          body: [
            'There is no version tag, so there is nothing to download here and nothing to list below. Building from source is the only way to run Tepegöz today.',
            'This page stays empty until that changes. It will not be filled with an example entry or a stand-in version number: showing a release nobody can install would get wrong the one fact you came here to check.',
          ],
        },
        {
          kind: 'prose',
          body: [
            'Release notes here are written for people, not parsed from commit subjects. Every entry carries the same five headings in the same order, so you can go straight to the part you came for. The fifth is known issues, and it is in every entry — if you are deciding whether to update, what is still broken is the half of the story you need most and the half most release pages leave out.',
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
