import type { PageContent } from '@/types/content';

/**
 * Source: tepegoz-browser/docs/website/turkey.md (status: ready)
 *
 * Note from the source: this is the one page where the Turkish version is the
 * original and the English version explains the position to an outside reader.
 * When the `tr` locale is added, that file is authored, not translated from
 * this one.
 */
export const turkey: PageContent = {
  route: '/turkey',
  title: 'Türkiye — Tepegöz',
  description:
    'Full Turkish parity, a dedicated Turkish keyboard pipeline, and a public-service track — built in Turkey, for people who use Turkish every day.',
  status: 'ready',

  hero: {
    eyebrow: 'Türkiye',
    headline: 'Turkish is not a translation here. It is a first language.',
    subhead:
      'Written in Turkey, for people who use Turkish every day — with the keyboard handling, the public-service work, and the language parity that implies.',
    ctas: [
      { label: 'The story behind the name', href: '/story', variant: 'primary' },
      { label: 'Get Tepegöz', href: '/download', variant: 'outline' },
    ],
  },

  sections: [
    {
      id: 'parity',
      eyebrow: 'Parity, enforced by the build',
      heading: 'A hardcoded string fails the build. A missing translation is a type error.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Every user-facing string in Tepegöz comes from a typed catalogue with English and Turkish at **full parity**, added in the same change. This is not a convention people are asked to follow: the build enforces it.',
            "You can switch language at runtime, without a restart, and the browser starts in your operating system's language.",
          ],
        },
      ],
    },

    {
      id: 'keyboard',
      eyebrow: 'The keyboard, done properly',
      heading: 'Turkish input breaks software in specific, well-known ways.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'The dotted and dotless `i`, the `ç ğ ı ö ş ü` set, dead keys, and the fact that Q and F layouts are both in real use.',
            'Tepegöz has a dedicated input pipeline for this, with a **regression matrix** that runs in continuous integration — and it works independently of which language the interface is set to, because plenty of people run an English interface and type Turkish all day.',
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Why this is worth a section on a marketing site',
          body: [
            'In the published user-feedback studies for rival agentic browsers, non-English keyboard and IME handling is filed as a **P0 blocker**, with Turkish named among the first languages needing repair and side-panel input specifically broken. This is the one place in the comparison where the honest answer is that Tepegöz is ahead — so it is tested, not just claimed.',
          ],
        },
      ],
    },

    {
      id: 'public-services',
      eyebrow: 'Public services',
      heading: 'A browser that automates tasks in Turkey eventually meets e-Devlet, GİB, SGK and MHRS.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'These are not ordinary websites: a mistake has consequences that a retry cannot undo, and the sites themselves are sensitive by category.',
            'The design position is already fixed and recorded: **reading is free, writing is force-asked** with biometric confirmation, regardless of the autonomy level in use — and the whole `gov.tr` and `bel.tr` tree, along with Turkish banking, ships switched off behind a per-category grant that only you can enable.',
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Status, stated plainly',
          body: [
            'The classification layer is built and reviewed. The actual recipes and locale packs do not exist yet. This is planned work with the trust model settled first, not a shipping feature.',
          ],
        },
      ],
    },

    {
      id: 'local',
      eyebrow: 'Local, in both senses',
      heading: 'Your data stays on your machine.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Local-first means your data stays on your machine — relevant anywhere, and particularly relevant when the alternative is a browser that ships your logged-in sessions to a server in another jurisdiction.',
            'Tepegöz has no backend, no account and no telemetry, and it can run its agent entirely on a model on your own hardware, with no network dependency at all.',
          ],
        },
      ],
    },
  ],

  closing: {
    heading: 'Yerli, her anlamda.',
    ctas: [
      { label: 'The story behind the name', href: '/story', variant: 'primary' },
      { label: 'Get Tepegöz', href: '/download', variant: 'outline' },
    ],
  },
};
