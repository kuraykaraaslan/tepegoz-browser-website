import type { PageContent } from '@/types/content';
import { REPO_FILES, SITE } from '@/libs/config/site';

/**
 * Source: tepegoz-browser/docs/website/roadmap.md (status: ready)
 *
 * BUILD NOTE from the source, carried forward: this page must be regenerated
 * whenever `phases/README.md` changes, or it becomes the thing it exists to
 * prevent. It is transcribed by hand today; generating it from the phase index
 * is tracked as the right eventual fix.
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
            'The agent end to end: command palette, live console, runtime, tool plane, browser tools — with four cloud providers and fully offline local inference',
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
          kind: 'prose',
          body: [
            'Three capabilities ship **deliberately switched off**, and one phase records a **measured refutation of its own original design** rather than quietly redesigning around the failure.',
            'Also here: proof-of-run notarisation, transaction mandates, verifiable policy bundles, governed agent endpoints, the recipe compiler, the Turkish public-service classifier and the supply-chain gate — each a decision layer that is landed, reviewed, documented, and **not yet wired to a live call**.',
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
