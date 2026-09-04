import type { PageContent } from '@/types/content';
import { SITE } from '@/libs/config/site';

/**
 * Source: tepegoz-browser/docs/website/blog.md (status: ready)
 * @sourceSha256 b7fb6b12 (2026-08-23)
 *
 * Index page plus editorial policy. Posts are separate content files. The one
 * published post has its own route; the launch posts are listed but not
 * linked, because they are not written yet and this site does not ship dead
 * links.
 */
export const blog: PageContent = {
  route: '/blog',
  title: 'Build log — Tepegöz',
  description:
    'Development notes from an agentic browser built in the open — including the experiments that failed.',
  status: 'ready',

  hero: {
    eyebrow: 'Build log',
    headline: 'Build log.',
    subhead:
      'Notes from building an agentic browser in the open — architecture decisions, security work, and the experiments that did not work.',
  },

  sections: [
    {
      id: 'policy',
      eyebrow: 'Editorial policy',
      heading: 'What gets published here, and what does not.',
      blocks: [
        {
          kind: 'list',
          variant: 'check',
          items: [
            '**Publish the refutations.** When a designed approach is tested and fails, that post gets written. One phase of this project records a measured refutation of its own specification; that is the standard.',
            '**No announcement without an artifact.** A post claiming a result links to the thing that produced it.',
            '**Cadence over polish.** A short honest note every few weeks beats a quarterly essay.',
            '**No competitor dunking.** Published incidents in the category are fair to analyse, technically and without gloating — they are how the whole field learns what an agentic browser must not do.',
          ],
        },
      ],
    },

    {
      id: 'published',
      eyebrow: 'Published',
      heading: 'Out now.',
      blocks: [
        {
          kind: 'cards',
          columns: 2,
          items: [
            {
              title: 'The screenshot that captured the wrong screen',
              body: "Why a browser whose tabs are isolated `WebContentsView`s cannot screenshot itself, the OS-level workaround that captured the operator's own desktop twice and was deleted, and the `desktopCapturer` path that works. Ends where it actually ended: the capture is solved, the agent recording is not. [Read it](/blog/the-screenshot-that-captured-the-wrong-screen).",
            },
          ],
        },
      ],
    },

    {
      id: 'pipeline',
      eyebrow: 'In the pipeline',
      heading: 'Drawn from work already in the repository.',
      lede: 'Six posts that exist as material — each has a real conclusion, not a teaser. They land here as they are written.',
      blocks: [
        {
          kind: 'list',
          variant: 'plain',
          items: [
            "**Why the model is not the security control.** The failure shape behind the category's public incidents, and what a deterministic kernel that runs _before_ the model changes about it.",
            '**We tested our own sandbox design and it failed.** A phase specified an isolated-world approach for code execution. A cheap offline experiment refuted it. Why that got recorded as a result rather than quietly redesigned around.',
            '**A kill switch that fails closed, and how we proved it.** Killing a live tunnel endpoint against the built application and confirming that a proven-reachable clear path records nothing. Includes the residual leak we could not close and documented instead.',
            "**Deleting a native database.** Replacing `better-sqlite3` with Node's built-in SQLite removed a rebuild script, three CI steps, and a skip-guard that had been letting 63 tests sit out entire runs.",
            '**What a browser agent must never do on its own.** Enabling a sensitive category, widening a wallet mandate, and permission widening in general — the list, and why every one of them belongs to the user rather than the agent.',
            "**Reading everyone else's complaints.** What the published user studies of five rival agentic browsers say, what we changed because of them, and the ones we have not answered yet.",
          ],
        },
      ],
    },

    {
      id: 'subscribe',
      eyebrow: 'Follow along',
      heading: 'No email list yet.',
      blocks: [
        {
          kind: 'callout',
          tone: 'info',
          body: [
            'An email option makes this site a data controller, and the privacy policy has to be final before that field exists. Until then: watch the repository, or check back — the cadence is a note every few weeks.',
          ],
        },
      ],
    },
  ],

  closing: {
    heading: 'The only proof a pre-release project is alive.',
    ctas: [
      { label: 'Get Tepegöz', href: '/download', variant: 'primary' },
      { label: 'The honest status', href: '/roadmap', variant: 'outline' },
      { label: 'Watch the repository', href: SITE.repo, variant: 'ghost', external: true },
    ],
  },
};
