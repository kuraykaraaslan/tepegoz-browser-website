import type { PageContent } from '@/types/content';
import { SITE } from '@/libs/config/site';

/** Source: tepegoz-browser/docs/website/home.md (status: needs-assets) @sourceSha256 66bec140 (2026-08-23) */
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
    // A real run, in one take, on live third-party sites — and the recording
    // home.md has been asking for since this page was written.
    //
    // FIFTY-EIGHT SECONDS, and the length is the second decision here. The first
    // capture of this task ran to 152s because it also asked for the thread's
    // comment count: Reddit served a JS challenge screen, the agent correctly
    // refused to trust what it had read, and it spent four more tool calls
    // cross-checking a number nobody came to see. Cutting the clause cut the
    // run, not the argument — the navigation still crosses an origin, so the
    // kernel still stops to ask. Nothing was sped up and nothing was edited out;
    // a shorter video here means a shorter run happened.
    //
    // What this capture does NOT contain is a failed step. The 152s run had one
    // and recovered from it, which is why that run is kept and replayed in full
    // on /how-it-works. Neither the alt text nor the caption below claims a
    // recovery, because this recording does not show one.
    //
    // `motion`, not `figure`: nothing above the fold may start moving on its own,
    // so the receiver holds the bytes back until someone presses play and the
    // poster is what paints. That also settles WCAG 2.2.2 without a pause button.
    //
    // `transcript` is present because this asset carries AUDIO — a narration
    // track — and WCAG 1.2.1 wants a text alternative for spoken content. The
    // lines below are that narration verbatim, not a summary of it.
    //
    // Dimensions are deliberately absent: they come from MEDIA['agent-run-narrated'],
    // measured from the bytes. `describes` is the acknowledgement that the alt
    // text was read against those same bytes.
    media: {
      kind: 'motion',
      asset: 'agent-run-narrated',
      describes: '62b2edba',
      alt: 'A fifty-eight second screen recording of Tepegöz carrying out a task on live websites. The goal is typed into the Agent Console: find the reddit thread about Electron app memory usage and report its title. Before anything runs, a panel titled "Review the plan" lists seven steps, each naming the tool it will call and the reason for it, each with a checkbox. The browser searches on DuckDuckGo, and then stops: a panel headed "Approval required" says the agent wants to run a tool that changes state, gives the risk class as "Page change", names the tool browser_update_location, and warns that the values for the action were taken from page content the agent read, so a page could have planted them — that this is how prompt injection turns a read into an action. The reason is labelled tainted_side_effect and the panel offers Deny and Approve. Approved, the browser opens a real Reddit thread, checks that the page genuinely loaded rather than a challenge screen, and the console reports the thread title: "Is there a way to consistently keep my Electron app under 280MB memory?" in r/electronjs.',
      caption:
        'One take, on live sites, at `ask` autonomy — nothing sped up and nothing cut. It stops once, because the address it was about to open came from text it had read rather than from the person who set the task. The gates were answered by the capture harness, not by a person. A [longer run is replayed in full](/how-it-works#a-real-run) — a different capture, which also fails a step and recovers.',
      transcript: [
        'One take of a real run, on live websites. Nothing here is staged.',
        'The task goes into the Agent Console, in plain language.',
        'The plan comes first: every tool it means to call, and the reason for it. Uncheck a step and it never runs.',
        'It searches, finds the thread, and stops before opening it.',
        'That address came from text the agent read, not from the person who asked. The kernel calls that a tainted side effect, and will not act on it quietly.',
        'Approved, it opens the page, checks what actually loaded, and answers. Your key, your machine, your rules.',
      ],
      // A frame from this recording, taken while the gate is open, so the still
      // that paints before playback is the moment the product is actually about:
      // an ordinary page on one side and the kernel asking permission on the other.
      poster: { asset: 'agent-run-poster', describes: '99896c9c' },
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
            // Corrected: this step said "Press `Ctrl+K` and describe the goal", which instructs the
            // reader to do something that does nothing. The palette's only host,
            // `apps/desktop/src/renderer/src/command-palette-host.tsx`, ends its `sources` memo with
            // `return { chat, do: [], make: [], tasks: [] };`, and Enter in
            // `extensions/ext-agent/src/command-palette.tsx` returns early when no command matches —
            // there is no free-text dispatch. The run in the recording above is started the way this
            // step now describes: the Agent Console composer, `extensions/ext-agent/src/panel-actions.ts`
            // `onRun()` → `api.runAgent(…)`. /how-it-works carries the same correction in full.
            {
              title: 'Ask in plain language.',
              body: 'Open the **Agent Console** — the Agent panel in the toolbar — and describe the goal in the box at the bottom, in English or Turkish.',
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
        // Option (a): the ask is real and unmet, so the page states it.
        //
        // This section is the one home.md attaches an asset requirement to, and
        // the requirement is specific: a chaptered recording of a task on a real
        // site that shows a confirmation gate firing and shows the agent
        // recovering from something going wrong. The four steps above *describe*
        // both; describing them is what every product site does.
        //
        // The hero recording does not discharge it, and the reason is
        // mechanical rather than a matter of taste: that run is in Fully
        // autonomous mode, where by design no gate fires. There is nothing in
        // those 76 frames for a gate chapter to point at, and nothing in them
        // fails. Reading the hero as "the demo landed" would quietly retire an
        // unmet requirement on the strength of an asset that cannot satisfy it —
        // which is exactly the substitution this slot exists to refuse.
        //
        // `assetPlaceholder` rather than a `gallery`, because this is one
        // indivisible capture. There is no partial state to represent: a
        // recording that shows the plan but no gate is not "half" of this.
        {
          kind: 'assetPlaceholder',
          label: 'A chaptered recording: a confirmation gate firing, and a recovery from failure',
          note: 'The recording at the top of this page is a real run, but it is a fully autonomous one — the mode in which, by design, nothing stops to ask. What is still owed is a longer capture of a task on a real site, chaptered against the four steps above: the plan before it runs, an irreversible step stopping for a decision, and the agent carrying on after something breaks. The clean run is the easier one to record and the less honest one to show, so this stays until the harder one exists.',
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
          items: [
            { label: 'See the honest status', href: '/roadmap', variant: 'outline' },
            { label: 'How Tepegöz compares', href: '/compare', variant: 'ghost' },
          ],
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
