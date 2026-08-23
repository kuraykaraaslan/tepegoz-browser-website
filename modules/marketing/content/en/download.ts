import type { PageContent } from '@/types/content';
import { REPO_FILES, SITE } from '@/libs/config/site';

/**
 * Source: tepegoz-browser/docs/website/download.md (status: ready)
 *
 * The source file describes two states. This is **State A**: no release exists,
 * so the page is build-from-source, and there is no download button that leads
 * to a 404. State B (platform downloads at the top, unsigned-binary warning
 * promoted) is written in the source file and goes in when the first tag lands.
 *
 * The source also specifies a notify-me email field. It is deliberately absent:
 * a fully static site has no backend to receive it, every hosted form provider
 * is a third-party script, and the site-wide rule forbids those. Watching the
 * repository does the same job without making the site a data controller.
 */
export const download: PageContent = {
  route: '/download',
  title: 'Get Tepegöz — build from source',
  description:
    'There is no installer yet. Tepegöz is built from source today — three commands, no compiler, no native database. Here is exactly how.',
  status: 'ready',

  hero: {
    eyebrow: 'Get Tepegöz',
    headline: 'There is no installer yet.',
    subhead:
      'Tepegöz is pre-release. You can build and run it today in about five minutes, and the build is genuinely simple — there is no compiler step and no native database to rebuild.',
    ctas: [
      { label: 'Open the repository', href: SITE.repo, variant: 'primary', external: true },
      { label: 'What is actually finished', href: '/roadmap', variant: 'outline' },
    ],
  },

  sections: [
    {
      id: 'requirements',
      eyebrow: 'Before you start',
      heading: 'Requirements.',
      blocks: [
        {
          kind: 'list',
          variant: 'plain',
          items: [
            '**Node.js 24 or newer** — the same runtime Electron 43 embeds, so the app and its tests run on identical ground',
            '**pnpm 10 or newer**',
            'Windows 11 is the primary target. macOS and Linux build and pass the full test suite on every push, but receive less hands-on testing.',
          ],
        },
      ],
    },

    {
      id: 'build',
      eyebrow: 'Build it',
      heading: 'Three commands.',
      blocks: [
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
      id: 'notify',
      eyebrow: 'Release notifications',
      heading: 'How to hear about the first release.',
      blocks: [
        {
          kind: 'callout',
          tone: 'info',
          title: 'There is no mailing list, and that is deliberate.',
          body: [
            'Collecting an email address would make this site a data controller under Turkish and EU law, and every hosted form provider is a third-party script — which this site does not load, on any page.',
            `Use GitHub instead: **Watch → Custom → Releases** on [the repository](${SITE.repo}) sends you exactly one notification when the first release is tagged, and nothing else.`,
          ],
        },
      ],
    },

    {
      id: 'unsigned',
      eyebrow: 'When binaries exist',
      heading: 'Read this before you run an unsigned build.',
      lede: 'There are no published binaries yet. When there are, this is what you need to know — and it will move to the top of this page rather than being buried at the bottom of it.',
      blocks: [
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Builds are not code-signed.',
          body: [
            'Code signing is not configured for this project yet, which has a concrete consequence: **your operating system will warn you, and it is right to.**',
            '**Windows** will show a SmartScreen warning: "Windows protected your PC." To continue anyway, choose **More info → Run anyway**.',
            '**macOS** will refuse to open it on the first attempt. Use **System Settings → Privacy & Security → Open Anyway**.',
          ],
        },
        {
          kind: 'prose',
          body: [
            'We are not going to tell you those warnings are nothing. They exist precisely so that unsigned software has to be run deliberately. Verify the checksum published with each release, and if you would rather not run unsigned code, **build from source** — the instructions above produce the same application from code you can read.',
            'Signing is tracked as blocking for a real release.',
          ],
        },
        {
          kind: 'table',
          caption: 'Planned release formats',
          head: ['Platform', 'Format'],
          rows: [
            ['**Windows**', 'Installer (`.exe`)'],
            ['**macOS**', 'Disk image (`.dmg`)'],
            ['**Linux**', '`.deb` · `.rpm` · `.tar.gz`'],
          ],
        },
      ],
    },

    {
      id: 'expect',
      eyebrow: 'What you are getting',
      heading: 'Pre-release software.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'No stable version, no update channel, no security audit. Things will break, and the automation has not been independently benchmarked against anything.',
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
