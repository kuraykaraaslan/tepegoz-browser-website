import type { PageContent } from '@/types/content';
import { SITE } from '@/libs/config/site';

/** Source: tepegoz-browser/docs/website/home.md (status: needs-assets) */
export const home: PageContent = {
  route: '/',
  title: 'Tepegöz — the browser that does the work',
  description:
    'An agentic, security-first, local-first browser. It plans, acts on real pages, and shows you every step. Your key, your machine, your rules.',
  status: 'needs-assets',

  hero: {
    headline: 'The browser that does the work.',
    subhead:
      'Tepegöz understands a page, plans the steps, and carries them out across real tabs — while every action stays visible, reversible, and yours to stop. Your own AI key. Your own machine. No account required.',
    ctas: [
      { label: 'Get Tepegöz', href: '/download', variant: 'primary' },
      { label: 'See how it works', href: '/how-it-works', variant: 'outline' },
    ],
    // The command palette rather than a finished task: the hero can show what
    // the product IS without implying a result it has not demonstrated. The
    // recording of the agent actually working is still owed — see the demo
    // section below, which keeps saying so.
    media: {
      src: '/screenshots/agent-demo.gif',
      alt: 'The Tepegöz window showing its extensions page: nine first-party extension cards, each with a name, a description and an enable toggle.',
      caption: 'A real capture of the running application — the nine extensions it ships with.',
      width: 1440,
      height: 900,
    },
    statusNote: {
      body: '**Pre-release.** Builds are signed and downloadable, but this is early software: there has been no independent security audit, and the automation has not been independently benchmarked.',
      href: '/roadmap',
      linkLabel: 'What that means',
    },
  },

  sections: [
    {
      id: 'problem',
      eyebrow: 'The problem',
      heading: 'Most "AI browsers" bolt a chat panel onto Chromium.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'You still do the clicking. The assistant summarizes the page you are already reading and hands the work back to you. When one of them does act, you usually cannot see what it did, cannot stop it mid-step, and find out it went wrong when something has already been sent, bought, or deleted.',
            'Tepegöz is built the other way around: an **agentic core** that can drive the browser end to end, inside a **deterministic security kernel** so that autonomy never means losing control.',
          ],
        },
      ],
    },

    {
      id: 'commitments',
      eyebrow: 'Three commitments',
      heading: 'Promises the product can be held to.',
      lede: 'Each one is a mechanism you can read in the source, not a value statement.',
      blocks: [
        {
          kind: 'cards',
          columns: 3,
          items: [
            {
              title: 'Local-first',
              body: 'The full experience runs on your machine with your own AI key — Anthropic, OpenAI, Gemini, Kimi, or a model running entirely offline on your own hardware. There is **no managed backend to depend on** and no account to create. A hosted tier may exist later; it will never be required.',
            },
            {
              title: 'Security by design',
              body: 'Web pages and the renderer are treated as untrusted. A rule-based **policy kernel classifies every tool call before the model runs**, an egress firewall blocks data from leaving to places it should not, and banking, crypto, health and password-manager sites ship switched off, and only you can enable them.',
            },
            {
              title: 'Observable and reversible',
              body: 'Every action lands in an append-only event journal. Irreversible steps — money, credentials, deletion — stop and ask you first, and the decision is enforced in the privileged process, not in the window you are looking at. You can always see what happened and why.',
            },
          ],
        },
      ],
    },

    {
      id: 'demo',
      eyebrow: 'What it actually does',
      heading: 'Ask, review the plan, watch it run.',
      blocks: [
        {
          kind: 'steps',
          items: [
            {
              title: 'Ask in plain language.',
              body: 'Press `Ctrl+K` and describe the goal — in English or Turkish.',
            },
            {
              title: 'See the plan before it runs.',
              body: 'Steps are laid out and labelled by what they touch: read, state-changing, destructive, financial.',
            },
            {
              title: 'Watch it work.',
              body: 'The live console shows the page it is on, the action it took, what it observed, and what it cost.',
            },
            {
              title: 'Keep the wheel.',
              body: 'Anything irreversible stops and asks. You can interrupt at any step, and the whole run is replayable afterwards.',
            },
          ],
        },
      ],
    },

    {
      id: 'browser',
      eyebrow: 'A browser, first',
      heading: 'Not an assistant bolted on.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Tepegöz is a browser first, and it behaves like one. Tabs and tab groups, bookmarks with a real manager, history, a download manager with quarantine, find-in-page, profiles, native context menus. The address bar is deterministic — it navigates or searches, and it **never quietly starts an AI conversation because it thought that is what you meant**.',
            'Nine first-party extensions ship with it: ad and tracker blocking, macros, translation, writing assistance, a strict popup blocker, a user-agent switcher, a unified video player, scheduled tasks, and the agent itself.',
          ],
        },
        {
          kind: 'ctas',
          items: [{ label: 'Explore the features', href: '/features', variant: 'outline' }],
        },
      ],
    },

    {
      id: 'privacy',
      eyebrow: 'Privacy',
      heading: 'A mechanism, not a promise.',
      blocks: [
        {
          kind: 'prose',
          body: [
            "Telemetry is off. Your API keys are encrypted by the operating system's own keychain and never leave the privileged process — not into a log, not into a bundle, not into a prompt. And a tab or an entire tab group can be **routed through its own WireGuard tunnel or through Tor**, including Tor over VPN, with a fail-closed kill switch: if the tunnel drops, that tab stops rather than quietly falling back to your real connection.",
          ],
        },
        {
          kind: 'ctas',
          items: [{ label: 'How privacy works', href: '/privacy', variant: 'outline' }],
        },
      ],
    },

    {
      id: 'open-source',
      eyebrow: 'Open source',
      heading: 'And the licence means it.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Tepegöz is **AGPL-3.0**. The whole browser — the security kernel, the agent runtime, the extensions — is readable, forkable, and auditable. The licence is deliberately strong: nobody gets to take this, close it, and run it as a service without giving the same freedom back.',
          ],
        },
        {
          kind: 'ctas',
          items: [
            { label: 'Read the code', href: SITE.repo, variant: 'outline', external: true },
            { label: 'What AGPL means for you', href: '/open-source', variant: 'ghost' },
          ],
        },
      ],
    },

    {
      id: 'honest',
      eyebrow: 'Where this is honest',
      heading: 'What we have not proven yet.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Every capability of the agent competence program is built and none of it is independently measured — the benchmark spend has not been paid, and until it is, "our agent is better" is a sentence this project will not write. No independent security audit has been performed. Several capabilities ship deliberately switched off.',
            'All of it is written down, per phase, with what is missing and why.',
          ],
        },
        {
          kind: 'ctas',
          items: [{ label: 'See the honest status', href: '/roadmap', variant: 'outline' }],
        },
      ],
    },

    {
      id: 'name',
      eyebrow: 'The name',
      heading: 'Named for a giant with one eye.',
      blocks: [
        {
          kind: 'prose',
          body: [
            '_Tepegöz_ is the one-eyed giant of Turkic mythology, the monster of the Book of Dede Korkut. The single eye is the point: **one agent, one focused gaze on the page**, acting deliberately instead of blindly.',
          ],
        },
        { kind: 'ctas', items: [{ label: 'Read the story', href: '/story', variant: 'outline' }] },
      ],
    },
  ],

  closing: {
    heading: 'Build it, break it, tell us what broke.',
    body: [
      'Tepegöz is pre-release and built in the open. The most valuable thing you can do right now is run it and report what fails.',
    ],
    ctas: [
      { label: 'Get Tepegöz', href: '/download', variant: 'primary' },
      { label: 'Report a security issue', href: '/security', variant: 'outline' },
    ],
  },
};
