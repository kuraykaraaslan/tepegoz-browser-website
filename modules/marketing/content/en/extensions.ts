import type { PageContent } from '@/types/content';

/**
 * Source: tepegoz-browser/docs/website/extensions.md (status: needs-assets)
 * @sourceSha256 ceceab4b (2026-08-23)
 *
 * Build note from the source, carried forward: one card per extension, each
 * with a real screenshot of its panel. Nine cards. The panel shots do not
 * exist yet, so the page ships with an honest asset gap rather than icons
 * standing in for working surfaces.
 *
 * That note stays here, in a comment, and it is worth saying why at length. The
 * gallery's pending copy below used to be the build note transposed into the
 * page: "these are working surfaces and they photograph well; icons alone would
 * undersell them" is the instruction's own argument for why the shots are
 * required, published to a visitor who was never asked to take them and could
 * not if they were. It survived review because it is fluent — and because
 * `content:check` greps for the literal marker token, which a transposition
 * carries no trace of. The rule that check stands in for is broader than the
 * token it can see: an instruction is addressed to whoever builds the page, copy
 * is addressed to whoever reads it, and the two are not interchangeable however
 * well the sentence scans. So the pending strings below say what is missing and
 * why it is not here yet, to someone who came to look at the extensions — and
 * they promise no date, because nobody has earned the right to promise one.
 *
 * That gap is a `gallery` with `expected: 9` and no items rather than an
 * `assetPlaceholder`, and the difference is not cosmetic. Nine panel shots will
 * not arrive in one sitting — they need nine separate capture sessions against a
 * running build — so the page's real future state is *some* of nine, for
 * months. `assetPlaceholder` can only say "none yet"; the moment the first shot
 * landed, someone would have had to choose between deleting the slot (and
 * silently promising nine while showing one) or keeping a panel that says
 * nothing arrived while one plainly has. A gallery renders what exists and a
 * badged "N of 9 captured" beside it, so partial delivery is representable the
 * day it happens instead of being a small dishonesty to be discovered later.
 */
export const extensions: PageContent = {
  route: '/extensions',
  title: 'Extensions — Tepegöz',
  description:
    'Nine first-party extensions ship with Tepegöz — ad blocking, macros, translation, writing help, scheduled tasks and more. Built in, not bolted on.',
  status: 'needs-assets',

  hero: {
    eyebrow: 'Extensions',
    headline: 'Nine extensions, written by us, shipped with the browser.',
    subhead:
      'Not a store full of abandoned uploads asking for permission to read everything you do. First-party features, built on the same capability plane and gated by the same security kernel as the agent.',
    ctas: [
      { label: 'See the whole feature set', href: '/features', variant: 'primary' },
      { label: 'How the capability plane works', href: '/security', variant: 'outline' },
    ],
  },

  sections: [
    {
      id: 'why-first-party',
      eyebrow: 'Why first-party',
      heading: 'The features you need most are the ones that need the most access.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'The browser extension model has an unhappy shape: the features people need most — blocking ads, automating a task, fixing their writing — are the ones that need the most access, delivered by third parties with the least accountability. Then a platform changes its rules and the ad blocker gets quietly weakened.',
            'Tepegöz builds those features itself, in the repository, under the same review as everything else. When an extension needs to act on a page, it goes through the **same policy kernel** the agent does. Nothing gets a private back door.',
            '**Every one of these can also be driven by the agent** through a declared capability contract — so "block ads on this site" or "run my invoice macro" is a sentence, not a menu hunt.',
          ],
        },
      ],
    },

    {
      id: 'the-nine',
      eyebrow: 'The nine',
      heading: 'Every one ships enabled, and every one is removable.',
      blocks: [
        {
          kind: 'figure',
          asset: 'extensions',
          describes: '5ac8ba2d',
          alt: 'The extensions page: nine first-party extension cards, each enabled, with names and descriptions.',
          caption: 'All nine, first-party, enabled by default — each one built on the shared capability plane.',
        },
        {
          kind: 'cards',
          columns: 2,
          items: [
            {
              title: 'Adblock Shield',
              body: 'Ad and tracker blocking with cosmetic filtering, applied per session partition — including inside a tunnelled tab, in the same order, with no system-wide proxy interception anywhere. Because Tepegöz is not a Chrome extension, it is not subject to the platform restrictions that hollowed out blockers elsewhere.',
            },
            // Was: "Also the home of the command palette's four modes." Three of those four hold
            // nothing. The palette is presentational and takes its commands from a host, and the
            // one host — `apps/desktop/src/renderer/src/command-palette-host.tsx` — ends its
            // `sources` memo `return { chat, do: [], make: [], tasks: [] }`; Enter on an empty mode
            // returns before dispatching, so a goal typed into the palette starts no run. /features
            // carries the full finding and the in-progress entry. What this card had to stop doing
            // is pointing a reader at the palette as the way into the agent — that is the sidebar
            // the card is about, which is why the correction makes it a shorter sentence, not a
            // longer one.
            {
              title: 'Agent',
              body: "The sidebar where you hand work to the browser, and the surface that actually drives it: the conversation, the plan, the live step feed, and the approval prompts. This extension also ships the command palette, whose **Do, Make and Tasks** modes are still empty — the tabs are there, the commands are not, and a goal typed into the palette does not start a run.",
            },
            {
              title: 'Macros',
              body: 'A deterministic successor to iMacros: record what you do, edit it as steps, replay it — **with no model in the loop**, so the same macro does the same thing every time. Two surfaces: a resizable Macro Studio beside the live page, and a manager for everything you have saved. The agent can list, run and save macros too.',
            },
            {
              title: 'Popup Blocker (strict)',
              body: 'Blocks pop-ups by default and, instead of silently swallowing them, offers the choice inline on the notification: allow, open in the background, follow the redirect, or trust this site.',
            },
            {
              title: 'Scheduled Tasks',
              body: 'Work that runs on a schedule instead of when you are watching — with the same approval rules, so an unattended run can spend only inside a wallet mandate you wrote, and still cannot delete things on its own.',
            },
            {
              title: 'Translate',
              body: 'Full-page and selection translation, local-first: translation memory first, then an on-device model if you have one installed, and only then a cloud fallback you have approved. The page rewrite is **restoreable** — original nodes are kept and can be put back, rather than the destructive replacement that breaks single-page applications.',
            },
            {
              title: 'Typo',
              body: 'Writing and spelling help for editable text on any page, analysed locally. Dictionaries are downloaded into your profile on demand, pinned by version and verified by hash — not bundled, not uploaded, not sent anywhere for "review".',
            },
            {
              title: 'User-Agent',
              body: 'Change how the browser identifies itself, from built-in presets across Chrome, Edge, Firefox and Safari on Windows, macOS and iPhone — per site or globally.',
            },
            {
              title: 'Unified Player',
              body: 'One consistent video player across sites, replacing whatever each page ships.',
            },
          ],
        },
        {
          kind: 'gallery',
          columns: 3,
          expected: 9,
          items: [],
          pendingLabel: 'Screenshots of the nine extension panels',
          pendingNote:
            'None of the nine have been photographed yet. Every shot has to come from a running build with that extension open and actually doing something, which is nine separate sittings rather than one afternoon. Nothing is standing in for them here — not an icon, not a mockup — so the count above is what exists, and it goes up one panel at a time.',
        },
      ],
    },

    {
      id: 'third-party',
      eyebrow: 'Third-party extensions',
      heading: 'What about the ones you already use?',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Limited Chrome MV3 support is planned, with an **honest compatibility matrix** rather than a promise that everything works — because it will not, and finding that out one extension at a time is a bad experience.',
            'Deep integrations that need real access, like password managers, are planned as native adapters instead of extensions. An extension is the wrong trust boundary for your credentials.',
          ],
        },
      ],
    },
  ],

  closing: {
    heading: 'Built in, not bolted on.',
    ctas: [
      { label: 'See the whole feature set', href: '/features', variant: 'primary' },
      { label: 'How the security model works', href: '/security', variant: 'outline' },
    ],
  },
};
