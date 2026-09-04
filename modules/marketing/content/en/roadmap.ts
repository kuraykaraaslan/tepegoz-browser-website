import type { PageContent } from '@/types/content';
import { REPO_FILES, SITE } from '@/libs/config/site';
import {
  KNOWN_ISSUES,
  KNOWN_ISSUES_HEAD,
  KNOWN_ISSUE_COLUMNS,
} from './known-issues.generated';

/**
 * Source: tepegoz-browser/docs/website/roadmap.md (status: ready)
 * @sourceSha256 5508c7ac (2026-09-02)
 *
 * BUILD NOTE from the source, carried forward: this page must be regenerated
 * whenever `phases/README.md` changes, or it becomes the thing it exists to
 * prevent. It is transcribed by hand today; generating it from the phase index
 * is tracked as the right eventual fix.
 *
 * That fix was considered and deliberately NOT taken. `phases/README.md` is a
 * 21-row engineering table whose status cells are internal shorthand; publishing
 * it would need a public override per row, and a marketing build that parses a
 * hand-edited table in another repository goes red every time that repository is
 * reformatted. `scripts/sources-check.mjs` reports the same drift by name — the
 * `@sourceSha256` stamp above is what it reads — at a fraction of the
 * brittleness, and a human still decides what the change means.
 *
 * The known-issues section below IS generated, because that document is a table
 * of facts with named columns rather than prose with a table in it. See
 * `scripts/known-issues-sync.mjs` for why the line is drawn there and nowhere
 * else. This module's stamp covers `roadmap.md`; the generated module carries
 * its own stamp for `known-issues.md`.
 */
export const roadmap: PageContent = {
  route: '/roadmap',
  title: 'Roadmap and honest status — Tepegöz',
  description:
    'What is built, what is landed but unproven, and what does not exist yet. No phase is marked finished, because none has met its own bar.',
  status: 'ready',

  hero: {
    eyebrow: 'Roadmap',
    headline: 'Nothing here is marked finished. That is not modesty.',
    subhead:
      'A phase closes only when its definition of done passes **and** the result is recorded as a measurement. By that rule, every phase of this project is still open — and saying so is more useful to you than a row of green ticks would be.',
  },

  sections: [
    {
      id: 'states',
      eyebrow: 'The three states',
      heading: 'Most roadmaps have two states. The third is the one that matters.',
      blocks: [
        {
          kind: 'cards',
          columns: 3,
          items: [
            {
              title: 'Built and proven',
              body: 'The code exists and its behaviour has been measured, or is deterministic enough to be tested exhaustively.',
            },
            {
              title: 'Built and unproven',
              body: 'The code exists, it is tested in isolation, and its real-world effectiveness has never been measured. **This is where most of the agent lives today.**',
            },
            {
              title: 'Not built',
              body: 'Described in the plan, absent from the product.',
            },
          ],
        },
        {
          kind: 'prose',
          body: [
            "The second category is the honest one, and it is the one that disappears from every competitor's marketing.",
          ],
        },
      ],
    },

    {
      id: 'works',
      eyebrow: 'Built and proven',
      heading: 'What works today.',
      blocks: [
        {
          kind: 'list',
          variant: 'check',
          items: [
            'A complete browser shell: tabs and groups, bookmarks, history, downloads with quarantine, uploads, find-in-page, profiles, a deterministic address bar',
            // Was: "command palette, live console, runtime, tool plane, browser
            // tools". This section is headed "What works today" and renders as a
            // check list, so the line asserts a working path rather than the
            // scope of a phase — which is why the palette could not stay inside
            // it. The palette is not on that path: `command-palette-host.tsx`
            // ends its `sources` memo `return { chat, do: [], make: [], tasks:
            // [] }` and Enter on an empty mode returns before dispatching, so
            // nothing typed there reaches the runtime. Its browser commands do
            // work, and /features lists those as available with the three empty
            // modes as in-progress; what this line needed was to name the
            // surface a run is actually handed to, which is the console.
            'The agent end to end: the console where a goal is handed over, the live step feed, runtime, tool plane, browser tools — with four cloud providers and fully offline local inference',
            'The security kernel: policy classification, risk tiers, plan-scoped grants, human-in-the-loop, credential vault and broker, egress firewall, prompt-injection screening, event journal',
            'Network privacy with **real tunnels**: userspace WireGuard and Tor, chained Tor over VPN, per-tab and per-group binding, a fail-closed kill switch verified end to end against the built application',
            'Nine first-party extensions, and an MCP client',
            'English and Turkish at full parity, with a dedicated Turkish keyboard pipeline',
            '`tepegoz-verify`, a standalone proof-of-run verifier',
          ],
        },
      ],
    },

    {
      id: 'unproven',
      eyebrow: 'Built, not proven',
      heading: 'The entire agent competence programme.',
      blocks: [
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Thirteen phases, all with capability code landed, all still owing a measurement.',
          body: [
            'The benchmark protocol is written and pre-registered — including a withdrawal clause stating the claim dies the moment it stops reproducing — and the runs have not been paid for.',
          ],
        },
        {
          // Two states rather than one list. `measurement-owed` renders as
          // "Built, not yet measured" — visibly not a success state — and
          // `frozen` reads as neither a warning nor a promise, which is what a
          // deliberate stop is. Flattening these into one heading is the exact
          // move `features.md` calls "the most common way product sites lie
          // without lying", and it is why the content model has five states.
          kind: 'capability',
          groups: [
            {
              state: 'measurement-owed',
              items: [
                'Proof-of-run notarisation',
                'Transaction mandates',
                'Verifiable policy bundles',
                'Governed agent endpoints',
                'The recipe compiler',
                'The Turkish public-service classifier',
                'The supply-chain gate',
              ],
            },
            {
              state: 'frozen',
              label: 'Stopped on purpose',
              items: [
                'Three capabilities ship **deliberately switched off**',
                'One phase records a **measured refutation of its own original design**, rather than quietly redesigning around the failure',
              ],
            },
          ],
        },
        {
          kind: 'prose',
          body: [
            'Each item in the first group is a decision layer that is landed, reviewed, documented, and **not yet wired to a live call**. Each item in the second is a decision, not a defect — and neither group is the same thing as working.',
          ],
        },
      ],
    },

    {
      id: 'not-built',
      eyebrow: 'Not built',
      heading: 'Described in the plan, absent from the product.',
      blocks: [
        {
          kind: 'capability',
          groups: [
            {
              state: 'planned',
              items: [
                'Parallel multi-tab execution',
                'Durable checkpoint, resume and hand-off between agents',
                'Long-term task memory',
                'Official-API integration adapters',
                'Google Safe Browsing',
                'An MCP **server** surface',
              ],
            },
            {
              state: 'planned',
              items: [
                'Fingerprinting resistance',
                'Chrome MV3 extension support',
                'The optional managed cloud tier and encrypted sync',
                'macOS and Linux as first-class targets',
              ],
            },
          ],
        },
      ],
    },

    {
      id: 'blockers',
      eyebrow: 'Blockers',
      heading: 'Named by kind, not lumped into "we need funding".',
      blocks: [
        {
          kind: 'table',
          caption: 'What each blocked item actually needs',
          head: ['Blocker', 'What it actually needs'],
          rows: [
            ['The agent benchmark baseline', '**API spend** — roughly $550–780 for the full sweep'],
            ['The head-to-head comparison', '**Rival subscriptions**, about $60/month — not API credit'],
            ['The local-model phase', '**Downloaded model weights**, not tokens'],
            ['The independent security audit', '**An outside reviewer**, and the budget for one'],
            ['Phase 0 closing', 'A watched CI run, and the suite executing on macOS at least once'],
          ],
        },
      ],
    },

    {
      // The one section on this site that is not written here.
      //
      // /roadmap is its home rather than a route of its own: a new RouteKey is a
      // five-file mandatory edit and where a known-issues page belongs in the
      // information architecture is an owner call, not a side effect of wiring
      // up a generator. This page already argues "nothing is finished"; the list
      // of what is currently broken is the same argument with receipts.
      id: 'known-issues',
      eyebrow: 'Known issues',
      heading: 'What is broken right now, in the repository’s own words.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'This table is generated directly from `docs/known-issues.md` in the product repository — the same file the maintainers read. It is not summarised, softened or re-ordered for the website, and if a row here ever disagrees with the repository, the repository is the one to trust.',
          ],
        },
        {
          kind: 'table',
          caption: 'Known issues and their workarounds, generated from the repository',
          // Spread and mapped rather than retyped: a column renamed upstream
          // stops the generator, and a field renamed in the generated module
          // stops the compiler. Neither can quietly reach a reader as a severity
          // printed in the workaround column.
          head: [...KNOWN_ISSUES_HEAD],
          rows: KNOWN_ISSUES.map((issue) => KNOWN_ISSUE_COLUMNS.map((column) => issue[column])),
        },
        {
          kind: 'ctas',
          items: [
            {
              label: 'The full list, in the repository',
              href: REPO_FILES.knownIssues,
              variant: 'outline',
              external: true,
            },
          ],
        },
      ],
    },

    {
      id: 'why-publish',
      eyebrow: 'Why publish this',
      heading: 'Because the alternative is a number nobody can reproduce.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'And this category already has several.',
            'An agentic browser makes an unusually large promise: that it can act for you on pages that matter. The only responsible way to make that promise is to be explicit about which parts are demonstrated, which are merely built, and which are still a sentence in a plan.',
            `All of it is maintained in the repository, per phase, with the evidence or the absence of it: [phase index](${REPO_FILES.phases}) · [known issues](${REPO_FILES.knownIssues}) · [changelog](${REPO_FILES.changelog})`,
          ],
        },
      ],
    },
  ],

  closing: {
    heading: 'Help close a gap.',
    ctas: [
      { label: 'Get Tepegöz', href: '/download', variant: 'primary' },
      { label: 'Help close a gap', href: '/open-source', variant: 'outline' },
      { label: 'Open issues', href: SITE.repoIssues, variant: 'ghost', external: true },
    ],
  },
};
