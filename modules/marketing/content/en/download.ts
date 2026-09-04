import type { PageContent } from '@/types/content';
import { REPO_FILES, SITE } from '@/libs/config/site';

/**
 * Source: tepegoz-browser/docs/website/download.md (status: ready)
 * @sourceSha256 369699c2 (2026-08-23)
 *
 * The source described two states. **State B is now live**: the first signed
 * release has shipped, so platform downloads lead and build-from-source moved
 * below them. The unsigned-binary section is gone because it no longer
 * describes reality — if signing ever lapses it comes back above the download
 * buttons, not below them.
 *
 * Still absent, deliberately: the source's notify-me email field. This is a
 * static export with no backend, every hosted form provider is a third-party
 * script the site-wide rules forbid, and a release now exists to link to.
 */
export const download: PageContent = {
  route: '/download',
  title: 'Download Tepegöz',
  description:
    'Signed builds for Windows, macOS and Linux — or three commands from source. Bring your own AI key. Pre-release, and honest about what is unproven.',
  status: 'ready',

  hero: {
    eyebrow: 'Download',
    headline: 'Download Tepegöz.',
    subhead:
      'Signed builds for Windows, macOS and Linux. No account, no telemetry, no backend — add your own AI key and it works.',
    ctas: [
      { label: 'Releases', href: `${SITE.repo}/releases/latest`, variant: 'primary', external: true },
      { label: 'What is actually finished', href: '/roadmap', variant: 'outline' },
    ],
  },

  sections: [
    {
      id: 'downloads',
      eyebrow: 'Downloads',
      heading: 'Pick your platform.',
      blocks: [
        {
          kind: 'table',
          caption: 'Available builds',
          head: ['Platform', 'Format'],
          rows: [
            ['**Windows**', 'Installer (`.exe`)'],
            ['**macOS**', 'Disk image (`.dmg`)'],
            ['**Linux**', '`.deb` · `.rpm` · `.tar.gz`'],
          ],
        },
        {
          kind: 'prose',
          body: [
            'Windows 11 is the primary target. macOS and Linux build and pass the full test suite on every push, but receive less hands-on testing.',
          ],
        },
      ],
    },

    {
      id: 'verify',
      eyebrow: 'Integrity',
      heading: 'Verify what you downloaded.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Every release publishes a checksum alongside the binaries. Builds are code-signed on Windows and notarized on macOS, so your operating system will not warn you — but the signature tells you the file came from us, and the checksum tells you it arrived intact. Both are worth thirty seconds.',
            'If you would rather not run a binary at all, **build from source** — the instructions below produce the same application from code you can read.',
          ],
        },
      ],
    },

    {
      id: 'key',
      eyebrow: 'Then add a key',
      heading: 'The browser works without one. The agent needs a model.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Open Settings and add a key from Anthropic, OpenAI, Google or Kimi — or point it at a local model and run entirely offline.',
            "Your key is encrypted through your operating system's keychain and stays in the privileged process. You pay your provider directly; there is no Tepegöz account and nothing is proxied through us.",
          ],
        },
      ],
    },

    {
      id: 'build',
      eyebrow: 'Build from source',
      heading: 'Three commands.',
      lede: 'Five minutes, and genuinely simple — there is no compiler step and no native database to rebuild.',
      blocks: [
        {
          kind: 'list',
          variant: 'plain',
          items: [
            '**Node.js 24 or newer** — the same runtime Electron 43 embeds, so the app and its tests run on identical ground',
            '**pnpm 10 or newer**',
          ],
        },
        {
          kind: 'code',
          language: 'sh',
          label: 'Terminal',
          code: `git clone ${SITE.repo}.git
cd tepegoz-browser
pnpm install --frozen-lockfile
pnpm dev`,
        },
        {
          kind: 'prose',
          body: [
            'That is the whole thing. No build tools, no Python, no C++ toolchain, no database to compile.',
          ],
        },
      ],
    },

    {
      id: 'expect',
      eyebrow: 'What you are getting',
      heading: 'Pre-release software.',
      lede: 'Things will break, and two specific gaps are worth knowing before you trust it with anything that matters.',
      blocks: [
        {
          kind: 'list',
          variant: 'deny',
          items: [
            '**No independent security audit has been performed.** The threat model is published and the architecture is readable, but no outside party has reviewed it.',
            '**The automation has not been independently benchmarked.** The adversarial battery and the head-to-head comparison are written and pre-registered; the runs have not been paid for, so there is no measured attack-success-rate or task-success number, and we will not quote one until there is.',
          ],
        },
        {
          kind: 'prose',
          body: [
            'What you can rely on: it is [AGPL-3.0](/legal/license), the entire source is public, there is no account, no telemetry and no backend — and the problems we already know about are written down instead of discovered by you.',
            `Known issues are published at [known issues](${REPO_FILES.knownIssues}). Phase-by-phase status is at [the roadmap](${REPO_FILES.phases}).`,
          ],
        },
      ],
    },
  ],

  closing: {
    heading: 'Run it, and tell us what broke.',
    ctas: [
      { label: 'Report a bug', href: SITE.repoIssues, variant: 'primary', external: true },
      { label: 'Report a vulnerability, privately', href: '/security', variant: 'outline' },
    ],
  },
};
