import type { PageContent } from '@/types/content';

/** Source: tepegoz-browser/docs/website/how-it-works.md (status: needs-assets) @sourceSha256 5d905ef5 (2026-08-23) */
export const howItWorks: PageContent = {
  route: '/how-it-works',
  title: 'How Tepegöz works — plan, act, and stay in control',
  description:
    'Goal to plan to action, with a deterministic security kernel deciding what the agent may do before the model ever runs.',
  status: 'needs-assets',

  hero: {
    eyebrow: 'How it works',
    headline: 'You give it a goal. It gives you a plan. You keep the wheel.',
    subhead:
      'Tepegöz turns a sentence into steps, runs them on real pages, and shows you each one as it happens. What it is allowed to do is decided by rules, in the privileged process, before the model is ever consulted.',
  },

  sections: [
    {
      id: 'stages',
      eyebrow: 'The four stages',
      heading: 'From a sentence to a completed task.',
      blocks: [
        {
          kind: 'assetPlaceholder',
          label: 'Diagram of the trust boundary',
          note: 'The untrusted page on one side, the kernel and the model on the other. That boundary is the product — if a diagram is drawn, it draws the boundary.',
        },
        {
          kind: 'steps',
          items: [
            // Corrected, because the step instructed the reader to do something the code does not do.
            //
            // It read "Press `Ctrl+K` and type what you want… The command palette has four modes",
            // which is a false capability claim twice over. The palette's only host is
            // `apps/desktop/src/renderer/src/command-palette-host.tsx`, whose `sources` memo ends
            // `return { chat, do: [], make: [], tasks: [] };` — three of the four modes hold nothing.
            // And a typed goal does not fall through: Enter runs `runSelected` in
            // `extensions/ext-agent/src/command-palette.tsx`, which opens
            // `const command = results[cursor]; if (command === undefined) return;`, so on an empty
            // mode or an unmatched query it does nothing. There is no free-text dispatch in the
            // palette at all.
            //
            // The two paths that really start a run, both read in the product source:
            //   • the Agent Console composer — `extensions/ext-agent/src/panel-actions.ts` `onRun()`
            //     calls `api.runAgent({ prompt, groupId, … })`; the panel is the `com.tepegoz.agent`
            //     extension's `sidebar` surface (`manifest.ts`: `actions: { click: 'sidebar' }`),
            //     titled "Agent Console", its box placeholded "Tell Tepegöz what to do on this page…",
            //     and Enter-without-Shift submits (`panel-composer.tsx`).
            //   • the address bar's explicit `@agent` command — `packages/omnibox/src/omnibox-commands.ts`
            //     registers `{ id: 'agent', prefix: '@agent', freeText: true }` and
            //     `apps/desktop/src/renderer/src/app-omnibox-history.ts` `startAgentRun` opens the
            //     console before calling `runAgent`. Never inferred from ordinary text, which is why
            //     the address-bar sentence below is untouched and still true.
            //
            // The palette keeps its place here — it exists and it works — described for what it is.
            {
              title: 'Ask',
              body: 'Open the **Agent Console** and tell it what you want, in English or Turkish. It is the Agent panel in the toolbar, and it opens beside the page you are on: type the goal in the box at the bottom, press `Enter`, and the run starts in that same panel — the one that then shows you every step. The address bar stays a separate thing entirely. It navigates and searches, deterministically, and never turns a typo into an AI request. The one route from there to the agent is a command you type on purpose: `@agent`, then the task. `Ctrl+K` opens the command palette, which is a different surface again — today it runs browser commands (new tab, reopen a closed tab, reload, settings), and its **Do**, **Make** and **Tasks** tabs are deliberately shown empty while those modes are built. Typing a goal into the palette does not start a run.',
            },
            {
              title: 'Perceive',
              body: 'Before acting, the agent reads the page the way an assistive technology would: a structural pass over the live DOM that returns the elements a person could actually interact with — visible, on top, in the viewport — including inside open shadow roots and same-origin frames. Everything that comes back from a page is treated as **data, never as instructions**. Page text is normalized and screened for injected commands at the boundary where it enters, because a web page that can talk to your agent is a web page that can give it orders.',
            },
            {
              title: 'Decide',
              body: 'This is the part most agent products leave to the model. Tepegöz does not. Every tool call is classified by a **deterministic policy kernel** before the model runs — by tool, by argument, and by target — into one of six risk tiers: read, UI-write, data-egress, financial, credential, destructive. The tier decides what happens next: run it, ask you, or refuse outright.',
            },
            {
              title: 'Act, and show its work',
              body: 'Steps run on real tabs. The live console shows the page, the action, what was observed, progress, token cost, and errors — as it happens, not afterwards. Every step is written to an append-only event journal, so a finished run can be replayed and audited. When a step is irreversible, it stops and asks, with the specific action spelled out.',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Two consequences of deciding in the kernel',
          body: [
            '**The window you are looking at does not get a vote.** Autonomy level, permissions and approvals are enforced in the main process. A compromised or manipulated page cannot approve anything on your behalf — it does not have the ability, not merely the permission.',
            '**The sensitive categories are off until you turn them on.** Banking, crypto, health and password-manager surfaces — including Turkish banking and the whole `gov.tr` tree — sit behind a per-category grant that ships disabled. The agent cannot enable one. Only you can, and that decision is enforced in the privileged process as well.',
          ],
        },
      ],
    },

    {
      id: 'failure',
      eyebrow: 'Failure handling',
      heading: 'What it does when things go wrong.',
      lede: 'Real pages break agents. Layouts shift under them, elements disappear between the decision and the click, dialogs cover what they were about to press, and a bad loop can burn an hour and a budget doing the same thing forever.',
      blocks: [
        {
          kind: 'list',
          variant: 'check',
          items: [
            "**Stale references are caught structurally.** The agent compares the page's structure against what it saw when it decided; if the ground moved, it re-reads instead of clicking into the dark.",
            '**Loops are detected and stopped**, and the run is handed back to you rather than left to spin.',
            '**CAPTCHA and two-factor prompts are cleared automatically.** Two-factor codes are completed by the credential broker, so the second factor is filled without the model ever seeing it. A challenge the browser cannot clear is handed back to you rather than retried blindly.',
            '**Completion is checked, not assumed.** "I clicked the button" is not the same claim as "the thing happened", and the two are separated on purpose.',
          ],
        },
      ],
    },

    {
      id: 'a-real-run',
      eyebrow: 'A real run',
      heading: 'Read one, line by line.',
      lede: 'Everything above is a description. This is a run that happened: a search on a live site, a thread opened on another, two stops for approval, and a step that failed and was recovered from. It is the browser’s own event journal, replayed — not a re-enactment, and not a video you have to take on trust. It is also a **different, longer run** than the recording on the home page: reading a record costs you a glance, watching one costs you its full length, so the two were chosen for different jobs rather than forced to be the same capture.',
      blocks: [
        {
          kind: 'journalReplay',
          trace: 'reddit-electron-memory',
          label: 'Replay of a recorded agent run',
          caption:
            'This run stops twice, for two different reasons — once because the address it was about to open came from text it had read rather than from the person who set the task, and once because the step would change stored state. Both are the kernel’s classification of the call, made before the model was consulted. One step also fails here and the agent reaches the same answer another way. See [what is still unproven](/roadmap).',
        },
      ],
    },

    {
      id: 'models',
      eyebrow: 'Models',
      heading: 'Bring your own model.',
      lede: 'Tepegöz has no model of its own and no proxy in the middle. You add a key and it uses it.',
      blocks: [
        {
          kind: 'table',
          caption: 'Supported model providers',
          head: ['Provider', 'Status'],
          rows: [
            ['Anthropic (Claude)', 'Supported'],
            ['OpenAI', 'Supported'],
            ['Google Gemini', 'Supported'],
            ['Kimi', 'Supported'],
            ['Local models', 'Supported, fully offline'],
          ],
        },
        {
          kind: 'prose',
          body: [
            "Keys are stored encrypted through the operating system's keychain, held only in the privileged process, and redacted from logs. You pay your provider directly, at their prices. **Tepegöz takes no cut, sees no traffic, and needs no account.**",
            'Local models are the same seam, not a lesser mode: point it at a model on your own hardware and the browser works with no network dependency at all.',
          ],
        },
      ],
    },

    {
      id: 'never',
      eyebrow: 'Hard limits',
      heading: 'What the agent is not allowed to do.',
      lede: '"What can it do" is answered by every competitor. "What can it never do" is answered by almost none.',
      blocks: [
        {
          kind: 'list',
          variant: 'deny',
          items: [
            'It cannot approve its own permissions. Grants are minted from a plan you approved and expire with the run; the agent cannot widen a grant it holds.',
            'It cannot reach a sensitive category — banking, crypto, health, password managers — that you have not enabled yourself. Those grants ship off, and nothing the agent does turns one on.',
            'It cannot send credentials to a model. Secrets are filled by a broker that the model never sees the contents of, and that includes two-factor codes.',
            'It cannot spend outside the wallet mandate you wrote. The ceiling, the payees and the expiry are yours; the agent can spend inside them and cannot raise any of them.',
            'It cannot delete things unattended without an explicit, specific confirmation.',
            'It cannot quietly fall back to your real connection when a tunnel it was bound to drops. It stops.',
          ],
        },
      ],
    },

    {
      id: 'limits',
      eyebrow: 'The honest limits',
      heading: 'Where this is still unproven.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'The mechanisms above are built and tested. What has **not** happened is independent measurement of how well the agent completes real tasks compared to the alternatives. The benchmark protocol is written and pre-registered — including the clause that says the claim is withdrawn the moment it stops reproducing — but the runs have not been paid for.',
            'Until they are, this page describes how Tepegöz decides, not how often it succeeds. Anyone telling you their browser agent\'s success rate without a dated, blind-scored artifact is telling you a feeling.',
          ],
        },
        {
          kind: 'ctas',
          items: [{ label: 'The full status, phase by phase', href: '/roadmap', variant: 'outline' }],
        },
      ],
    },
  ],

  closing: {
    heading: 'Run it and see.',
    ctas: [
      { label: 'Get Tepegöz', href: '/download', variant: 'primary' },
      { label: 'See what it ships with', href: '/features', variant: 'outline' },
    ],
  },
};
