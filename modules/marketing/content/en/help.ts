import type { PageContent } from '@/types/content';
import { REPO_FILES } from '@/libs/config/site';

/**
 * Source: tepegoz-browser/docs/website/help.md (status: needs-assets)
 *
 * Build note from the source, carried forward: this is the hub page. Each
 * numbered guide becomes its own child route once written; until then the
 * guides are listed, not linked, so the page carries no dead ends. The FAQ is
 * final copy.
 *
 * One reconciliation: the source FAQ answers "Will it solve CAPTCHAs?" with an
 * unqualified yes. `features.md` — and the rest of this site — places automatic
 * CAPTCHA/2FA clearing in Planned, with handoff as today's behaviour. The
 * answer below follows the site, because the claims track the code.
 */
export const help: PageContent = {
  route: '/help',
  title: 'Help and documentation — Tepegöz',
  description:
    'Install, add a model key, run your first agent task, set up a tunnel, and understand what Tepegöz will refuse to do.',
  status: 'needs-assets',

  hero: {
    eyebrow: 'Help',
    headline: 'Getting started, and getting unstuck.',
    subhead:
      'The guides below are being written from a real build. The frequently-asked answers are final — including the ones about what the browser will not do.',
    ctas: [
      { label: 'Get Tepegöz', href: '/download', variant: 'primary' },
      { label: 'Ask in the open', href: REPO_FILES.discussions, variant: 'outline', external: true },
    ],
  },

  sections: [
    {
      id: 'guides',
      eyebrow: 'Guides',
      heading: 'Four tracks, from first launch to what the kernel refuses.',
      blocks: [
        {
          kind: 'callout',
          tone: 'info',
          body: [
            'Each guide becomes its own page as it is written, with screenshots from a real build. They are listed here so you can see the shape of the documentation before it is all in place.',
          ],
        },
        {
          kind: 'cards',
          columns: 2,
          items: [
            {
              title: 'First steps',
              body: 'Install — building from source until a release exists · Add a model key — Anthropic, OpenAI, Gemini or Kimi, and where it is stored · Run entirely offline with a local model · Your first agent task — the command palette, the four modes, reading the plan.',
            },
            {
              title: 'The agent',
              body: 'The four modes — Chat, Do, Make and Tasks · Reading the live console — steps, observations, cost, errors · Approvals — risk tiers, what stops and asks, and why some things never unlock · Macros · Scheduled tasks · Connecting MCP servers.',
            },
            {
              title: 'Browser',
              body: 'Tabs, groups and profiles · Downloads and quarantine · Extensions — the nine that ship, and how to configure them · Turkish keyboard — Q and F layouts, dead keys, switching interface language.',
            },
            {
              title: 'Privacy and network',
              body: 'Per-tab VPN and Tor — importing a configuration, binding a tab or a group · When a tunnel drops — what the kill switch does and what you will see · Where your data lives — the profile directory, what you can export, what a backup misses.',
            },
          ],
        },
      ],
    },

    {
      id: 'faq',
      eyebrow: 'Frequently asked',
      heading: 'The short answers.',
      blocks: [
        {
          kind: 'cards',
          columns: 2,
          items: [
            {
              title: 'Do I need an account?',
              body: 'No. There is no Tepegöz account and no way to create one.',
            },
            {
              title: 'Do I need to pay Tepegöz?',
              body: 'No. The browser is free software and there is nothing to buy. If you use the agent, you pay **your AI provider** directly at their prices, using your own key. We take no cut and see no traffic. A local model costs nothing but your hardware.',
            },
            {
              title: 'Which models work?',
              body: 'Anthropic, OpenAI, Google Gemini and Kimi, plus local models running on your own machine.',
            },
            {
              title: 'Is my API key safe?',
              body: "It is encrypted through your operating system's keychain and never leaves the privileged process — not into a log, not into the interface, not into a prompt. Nothing is proxied through a server of ours, because there is no server.",
            },
            {
              title: 'Can the agent spend my money?',
              body: 'Only from a wallet mandate you wrote — a ceiling, a payee list and an expiry, recorded before the run. Outside an active mandate, a financial step needs an explicit confirmation that names the action. Either way the decision is enforced in the privileged process rather than in the window you are looking at, and the agent cannot widen a mandate it holds.',
            },
            {
              title: 'Can it log into my bank?',
              body: 'Only if you enable it. Banking, crypto, health and password-manager sites — including Turkish banking and the whole `gov.tr` tree — ship switched off behind a per-category grant. Nothing the agent does turns one on; you do, deliberately, and you can revoke it at any time.',
            },
            {
              title: 'Will it solve CAPTCHAs?',
              body: 'Today it detects CAPTCHA and two-factor prompts and hands them to you — the run pauses rather than retrying blindly. Automatic clearing is planned, with two-factor codes completed by the credential broker so the model never sees them, and handoff kept as the fallback. Whether automating a given site is permitted is between you and that site; see [/legal/terms](/legal/terms).',
            },
            {
              title: 'Are the builds signed?',
              body: 'Yes — code-signed on Windows and notarized on macOS, so neither SmartScreen nor Gatekeeper will warn you. Every release also publishes a checksum. If you would rather not run a binary at all, [/download](/download) has the three commands that build the same application from source.',
            },
            {
              title: 'Is it stable?',
              body: 'No. It is pre-release: early software with no independent security audit and no independently measured automation. Known problems are published rather than discovered by you.',
            },
            {
              title: 'Does it work on macOS and Linux?',
              body: 'It builds and passes the full test suite on both on every push, but Windows 11 is the primary target and gets the hands-on testing. Reports from the other two are genuinely useful.',
            },
            {
              title: 'How do I report a bug? A security hole?',
              body: 'Bugs: GitHub Issues, with a reproduction. **Security: never in a public issue** — use private vulnerability reporting or email. See [/security](/security).',
            },
          ],
        },
      ],
    },
  ],

  closing: {
    heading: 'Still stuck?',
    body: ['Bugs and questions go to the repository. Security reports never do — those have their own private channel.'],
    ctas: [
      { label: 'Get Tepegöz', href: '/download', variant: 'primary' },
      { label: 'Report security privately', href: '/security', variant: 'outline' },
      { label: 'GitHub Discussions', href: REPO_FILES.discussions, variant: 'ghost', external: true },
    ],
  },
};
