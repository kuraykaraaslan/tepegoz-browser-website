import type { PageContent } from '@/types/content';

/**
 * Source: tepegoz-browser/docs/website/features.md (status: needs-assets)
 *
 * Two rules from the source file are load-bearing here:
 *
 *   1. Available and Planned never merge. "A single undifferentiated list is
 *      the most common way product sites lie without lying."
 *   2. `star: true` marks a mechanism the category does not offer or does the
 *      opposite of — never a performance claim. The legend below renders before
 *      the first starred item, because an unexplained ★ is noise.
 *
 * Anything decided but not yet implemented belongs in Planned. Automatic
 * CAPTCHA/2FA clearing and per-category grants are decided in ADR-0039 and
 * tracked in Phase S6 PR9; neither has landed, so both sit in Planned.
 */
export const features: PageContent = {
  route: '/features',
  title: 'Features — Tepegöz',
  description:
    'Everything Tepegöz ships today — browser, agent, security kernel, network privacy, extensions — separated honestly from what is still planned.',
  status: 'needs-assets',

  hero: {
    eyebrow: 'Features',
    headline: 'A real browser, with an agent that can drive it.',
    subhead:
      'Everything below is split into what works today and what is planned. Nothing is listed twice, and nothing planned is written as if it exists.',
  },

  sections: [
    {
      id: 'legend',
      blocks: [
        {
          kind: 'callout',
          tone: 'info',
          title: '★ marks a mechanism the category does not offer, or does the opposite of.',
          body: [
            'Every one is verifiable by reading the source — none of them is a performance claim. How well the agent completes tasks compared to the alternatives is still unmeasured, and that is on [the roadmap](/roadmap).',
          ],
        },
      ],
    },

    {
      id: 'browser',
      eyebrow: 'The browser',
      heading: 'Everything you expect a browser to already do.',
      blocks: [
        {
          kind: 'capability',
          groups: [
            {
              state: 'available',
              items: [
                '**Tabs and tab groups** with drag-to-reorder, scroll-collapse, and per-group settings — each tab an isolated view, so one page cannot reach into another',
                {
                  star: true,
                  text: '**Deterministic address bar** with inline arithmetic and prefix commands (`tab:`, `history:`, `bookmark:`) — it navigates or searches, and never starts an AI thread by accident',
                },
                '**Bookmarks** — a Chrome-style bookmarks bar with folder dropdowns and a two-pane manager with drag-and-drop, search and folders',
                '**History** with search, and back/forward dropdowns per tab',
                {
                  star: true,
                  text: '**Download manager** with pause and resume, risk classification, **quarantine before the file is trusted**, and a redacted audit record for every transfer',
                },
                {
                  star: true,
                  text: '**Upload activity** — a redacted view of what left your machine, with cancel. Most browsers have no such surface at all',
                },
                '**Find in page**, **profiles** with isolated storage, **native context menus**, per-site zoom',
                '**One keyboard-shortcut registry** — every shortcut is defined in a single place, so the same key cannot mean two things in two windows',
                '**Tray and hide-tabs modes** for work that should keep running without occupying your screen',
                '**Internal pages** for settings, downloads, uploads, bookmarks, history, extensions and tasks',
              ],
            },
            {
              state: 'planned',
              items: [
                'Reader mode, print preview and built-in PDF viewing',
                'Split view and workspaces',
                'Vertical tabs',
                'Chrome MV3 extension support, with an honest compatibility matrix rather than a blanket promise',
              ],
            },
          ],
        },
      ],
    },

    {
      id: 'agent',
      eyebrow: 'The agent',
      heading: 'The part that does the work.',
      blocks: [
        {
          kind: 'capability',
          groups: [
            {
              state: 'available',
              items: [
                '**Command palette** (`Ctrl+K`) with four modes: Chat, Do, Make, Tasks',
                '**Live agent console** — the page, the action, the observation, progress, token cost and errors, as they happen',
                '**Editable plans** with each step tagged read / state-changing / destructive / financial',
                {
                  star: true,
                  text: '**Risk-tiered approvals** — six tiers derived from the tool, its **validated arguments** and its target, not from a declared label the tool author supplied',
                },
                {
                  star: true,
                  text: '**Plan-scoped grants** that expire with the run and cannot be widened by the agent',
                },
                {
                  star: true,
                  text: '**Structural page perception** — the DOM and accessibility tree first, vision only as a fallback; pierces open shadow roots and same-origin frames',
                },
                {
                  star: true,
                  text: '**Prompt-injection screening** that strips hidden, zero-width, bidi and homoglyph vectors out of page text before the model ever sees it',
                },
                {
                  star: true,
                  text: '**Human-like input** — curved mouse paths with eased speed, jittered click and key timings, and a three-phase overshoot scroll, instead of instant straight-line jumps',
                },
                '**Loop detection** and stale-reference recovery',
                '**Human handoff for CAPTCHA and 2FA** — detected and handed to you',
                '**Searchable run history** — every past conversation and task',
                {
                  star: true,
                  text: '**Macros** — a deterministic, **model-free** automation interpreter with a sandboxed expression language; every element step **auto-waits** instead of sleeping a fixed interval. The agent can drive them too',
                },
                '**Scheduled tasks**',
                {
                  star: true,
                  text: '**Sealed unattended runs** — a scheduled run can only ever be a narrowing of what you approved while watching, and `destructive` / `financial` steps never auto-run',
                },
                {
                  star: true,
                  text: '**MCP client** — external tool servers are treated identically to built-in ones: same kernel, same approvals, same audit, and every response re-validated rather than trusted',
                },
                {
                  star: true,
                  text: '**On-device inference** for fully offline operation, with a grammar that makes a small local model physically unable to wrap its JSON in prose',
                },
                {
                  star: true,
                  text: '**No uncapped and no untimed model call is possible** — a token ceiling and a timeout are enforced before the request reaches any provider',
                },
                {
                  star: true,
                  text: '**Provider-agnostic by construction** — Anthropic, OpenAI, Gemini, Kimi and local models normalize to one canonical shape, so nothing above the gateway is written against a vendor',
                },
              ],
            },
            {
              state: 'planned',
              items: [
                '**Automatic CAPTCHA and 2FA clearing**, with handoff kept as the fallback',
                'Parallel multi-tab execution with a dependency-aware scheduler',
                'Durable checkpoint and resume, and handing an unfinished task to a different agent or model',
                'Long-term task memory with hybrid retrieval',
                "An **MCP server** surface, so other clients can drive Tepegöz's tools",
                'Integration adapters that prefer official APIs (Google Workspace, Canva) over browser automation',
              ],
            },
          ],
        },
      ],
    },

    {
      id: 'security',
      eyebrow: 'Security',
      heading: 'The limits the agent runs inside.',
      blocks: [
        {
          kind: 'capability',
          groups: [
            {
              state: 'available',
              items: [
                {
                  star: true,
                  text: '**Deterministic policy kernel** classifying every tool call **before the model runs** — security in plain code, not model guardrails',
                },
                {
                  star: true,
                  text: '**One gateway for every tool** — built-in, MCP and extension capabilities all pass the same fixed sequence, so a tool source can never be the way policy gets bypassed',
                },
                {
                  star: true,
                  text: '**Autonomy enforced in the privileged process** — the renderer displays and relays, it never decides',
                },
                {
                  star: true,
                  text: '**Egress firewall** with secret and high-entropy detection on outbound content',
                },
                {
                  star: true,
                  text: '**Credential broker and encrypted vault** — secrets are filled without the model ever seeing them, and raw passwords are never exposed over IPC',
                },
                {
                  star: true,
                  text: '**Taint tracking** — web-derived data is marked at the boundary, and tainted plus state-changing forces a confirmation',
                },
                '**Sensitive-site category map** covering banking, crypto, health, password managers, Turkish banking and the whole `gov.tr` tree',
                {
                  star: true,
                  text: '**Append-only event journal** of everything the agent did',
                },
                '**Human-in-the-loop confirmation** for destructive and financial steps, enforced at the decision path',
                {
                  star: true,
                  text: '**Folder-sandboxed file access** — your folder-grant list *is* the authorization; there is no broader filesystem reach',
                },
                '**Scoped trust profiles** — narrow what is allowed where, without turning protection off globally',
                {
                  star: true,
                  text: '**Hardened Electron shell** — one secure window factory, context isolation, sandboxing, fuses closed and verified on a packaged build',
                },
                {
                  star: true,
                  text: '**Secrets are redacted at the logger**, so a call site that forgot cannot put one in a log file',
                },
                {
                  star: true,
                  text: '**Agent output is never rendered as HTML** — markdown becomes React elements, never raw markup',
                },
                {
                  star: true,
                  text: '**`tepegoz-verify`** — a standalone command-line tool that verifies a proof-of-run bundle without a database, a network call, or trusting whoever produced it',
                },
                'Clipboard contents are kept out of persistent state, logs and journal payloads',
              ],
            },
            {
              state: 'planned',
              items: [
                '**Per-category user grants** that let you enable banking, crypto, health or password-manager automation deliberately — off by default, and never enabled by the agent',
                '**Wallet mandates** — a ceiling, a payee list and an expiry that authorize spending within bounds',
                'Fingerprinting resistance, with a published before-and-after entropy measurement',
                'Google Safe Browsing and an on-device phishing and scam classifier',
                'Third-party cookie isolation',
                'Verifiable policy bundles, transaction mandates, and governed agent endpoints',
              ],
            },
          ],
        },
        {
          kind: 'ctas',
          items: [{ label: 'How the security model works', href: '/security', variant: 'outline' }],
        },
      ],
    },

    {
      id: 'network',
      eyebrow: 'Network privacy',
      heading: 'Per-tab tunnels that fail closed.',
      blocks: [
        {
          kind: 'capability',
          groups: [
            {
              state: 'available',
              items: [
                {
                  star: true,
                  text: '**Per-tab and per-group tunnels** — bind a single tab, an entire tab group, or the whole profile. Not offered anywhere else in the category',
                },
                '**WireGuard** (userspace, no elevation, nothing bundled) and **Tor**',
                '**Tor over VPN**, chained',
                {
                  star: true,
                  text: '**Fail-closed kill switch** — if the tunnel drops, the bound tabs stop; there is no silent fallback to your real connection',
                },
                '**Route badges** on tabs and groups, computed in the privileged process, never colour-only',
                '**DNS through the tunnel**, verified by a leak test',
              ],
            },
            {
              state: 'planned',
              items: ['OpenVPN', 'Managed exit nodes, if and only if there is demand for them'],
            },
          ],
        },
      ],
    },

    {
      id: 'extensions',
      eyebrow: 'Extensions',
      heading: 'Nine first-party extensions ship with the browser.',
      blocks: [
        {
          kind: 'capability',
          groups: [
            {
              state: 'available',
              label: 'Included',
              items: [
                {
                  star: true,
                  text: '**Translate** — local-first: translation memory, then an on-device model, then a cloud fallback you approved. The page rewrite is **restoreable**; original nodes are kept rather than destroyed',
                },
                {
                  star: true,
                  text: '**Typo** — writing and spelling help, with dictionaries downloaded into your profile rather than bundled into the app',
                },
                {
                  star: true,
                  text: '**Popup Blocker (strict)** — instead of silently swallowing a pop-up, it offers the choice inline on the notification: allow, open in background, follow the redirect, or trust the site',
                },
                {
                  star: true,
                  text: '**Agent** — every tab group gets its own independent agent session, switching with the active tab',
                },
                {
                  star: true,
                  text: '**Macros** — a record/edit/replay studio beside the page, plus a manager for saved automations',
                },
                '**Adblock Shield** — ad and tracker blocking through a single network-filtering pipeline',
                '**User-Agent** — presets across Chrome/Edge/Firefox/Safari and desktop/mobile, or a custom string',
                '**Scheduled Tasks** — the surface for work that runs on a schedule',
                "**Unified Player** — one consistent video surface instead of each site's own",
              ],
            },
          ],
        },
      ],
    },

    {
      id: 'language',
      eyebrow: 'Language and access',
      heading: 'English and Turkish, at parity.',
      blocks: [
        {
          kind: 'capability',
          groups: [
            {
              state: 'available',
              items: [
                '**English and Turkish at full parity**, switchable at runtime without a restart',
                {
                  star: true,
                  text: '**A dedicated Turkish keyboard pipeline** — Q and F layouts, dead keys, `ç ğ ı ö ş ü` — with a regression matrix, independent of the interface language',
                },
                {
                  star: true,
                  text: '**Hardcoded text fails the build** — every user-facing string comes from a typed catalogue',
                },
              ],
            },
            {
              state: 'in-progress',
              items: [
                'WCAG 2.2 AA is a standing requirement, verified per surface as each one lands',
                'In-app interface scaling for high-density displays',
              ],
            },
          ],
        },
      ],
    },

    {
      id: 'under-the-hood',
      eyebrow: 'Under the hood',
      heading: 'What it is built on.',
      blocks: [
        {
          kind: 'list',
          variant: 'plain',
          items: [
            '**Electron 43**, with the renderer treated as untrusted',
            '**React and strict TypeScript** — no escape hatches: the codebase contains zero `@ts-ignore`',
            {
              star: true,
              text: '**A real-result eval harness** that drives real pages with ground-truth scoring — dev-only and never shipped in the app, because it exists to measure the product rather than to be part of it',
            },
            {
              star: true,
              text: '**One source of truth for every cross-layer contract**, with every trust boundary validating against it rather than re-declaring the shape',
            },
            {
              star: true,
              text: '**The sandboxed preload is verified dependency-free**, so the bridge cannot pull in a module it is not allowed to load',
            },
            {
              star: true,
              text: '**One outbound HTTP seam** — timeouts, redaction and error mapping live in a single place, and no vendor SDK is used',
            },
            '**Data-driven catalogs** for extensions and on-device models — adding one is a data change, not a release',
            "**Node's built-in SQLite** — no native database module, nothing to compile",
            '**Roughly seventy internal packages** behind one desktop shell, with module boundaries enforced in continuous integration',
            'Tested on Windows, macOS and Linux on every push, including an end-to-end suite that launches the built application',
          ],
        },
      ],
    },
  ],

  closing: {
    heading: 'See it for yourself.',
    ctas: [
      { label: 'Get Tepegöz', href: '/download', variant: 'primary' },
      { label: 'See what is not built yet', href: '/roadmap', variant: 'outline' },
    ],
  },
};
