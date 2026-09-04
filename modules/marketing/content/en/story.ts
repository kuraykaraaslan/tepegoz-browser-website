import type { PageContent } from '@/types/content';
import { SITE } from '@/libs/config/site';

/** Source: tepegoz-browser/docs/website/story.md (status: ready) @sourceSha256 0ebe7e04 (2026-08-23) */
export const story: PageContent = {
  route: '/story',
  title: 'The story behind Tepegöz',
  description:
    'Named for the one-eyed giant of the Book of Dede Korkut — one agent, one focused gaze on the page, acting deliberately instead of blindly.',
  status: 'ready',

  hero: {
    eyebrow: 'The story',
    headline: 'Tepegöz had one eye, and it did not miss anything.',
    subhead:
      'Why a browser built in Turkey carries the name of a monster from the Book of Dede Korkut.',
  },

  sections: [
    {
      id: 'name',
      eyebrow: 'The name',
      heading: 'Crown-of-the-head eye.',
      blocks: [
        {
          kind: 'prose',
          body: [
            '_Tepegöz_ — literally "crown-of-the-head eye" — is the one-eyed giant of Turkic myth, best known as the monster of the **Book of Dede Korkut**, the foundational epic cycle of the Oghuz Turks. He is not a minor creature. He is the antagonist an entire people had to answer for, and the story of how he was finally faced is one of the oldest surviving narratives in Turkish.',
            'Naming a browser after a monster is a deliberate joke with a serious half.',
          ],
        },
        {
          kind: 'cards',
          columns: 2,
          items: [
            {
              title: 'The serious half is the eye',
              body: 'One eye, fixed, focused, seeing the thing in front of it completely. That is the product: **one agent, one concentrated gaze on the page**, acting on what it actually observes rather than guessing at a whole world it cannot see.',
            },
            {
              title: 'The joke half is the monster',
              body: 'An agent with your logged-in browser _is_ a monster — enormously capable and, unsupervised, dangerous. Pretending otherwise is how the accidents in this category happen. We named the thing after what it is, and then we built the cage first.',
            },
          ],
        },
      ],
    },

    {
      id: 'why',
      eyebrow: 'Why this exists',
      heading: 'Every incident was the same underlying mistake.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'The AI browsers that arrived in 2025 and 2026 shared a shape: take Chromium, add a chat panel, call it agentic. Ask them to do something real and one of two things happens. Usually the work comes back to you at the last step. Occasionally the agent acts — and then you discover what it did afterwards, because there was nothing to watch and nothing to stop.',
            "Meanwhile the security incidents accumulated in public: a hidden instruction on a web page turned into a real action, an agent talked into reading a password vault, a single message that deleted files in someone's cloud storage. Every one of them the same underlying mistake — **treating the model's judgement as a security control**, when the model is the component a web page can argue with.",
            'Tepegöz starts from the opposite premise. Rules decide, and they decide before the model is consulted. The model is used for understanding and ambiguity, never to grant itself permission. Everything the agent does is written down. Anything irreversible stops and asks.',
            'That is not a feature list. It is the reason the project exists.',
          ],
        },
      ],
    },

    {
      id: 'refuses',
      eyebrow: 'Refusals',
      heading: 'Three things it refuses to do.',
      blocks: [
        {
          kind: 'list',
          variant: 'check',
          items: [
            '**It will not unlock anything on your behalf.** Every capability that can cost you something — banking, crypto, health, password managers, spending from a wallet — ships switched off. The agent cannot enable one, cannot widen one, and cannot argue its way into one. Only you open those doors.',
            '**It will not claim a benchmark it has not run.** Every capability of the agent competence program is built and none of it is independently measured. That is written on the roadmap, in the README, and on this website — because the alternative is a number nobody can check, which is what most of this category currently offers.',
            "**It will not treat Turkish as a localization task.** Turkish is a first-class language here, with a dedicated keyboard pipeline and a regression matrix, in a category where rivals' own users file non-English input as a blocking defect.",
          ],
        },
      ],
    },

    {
      id: 'going',
      eyebrow: 'Where it is going',
      heading: 'The plan is public, and unusually blunt about its own gaps.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Thirteen AI competence phases with code landed and measurement owed, network privacy working with real tunnels, and a long list of things that are honestly not built.',
            'No phase is marked finished, because a phase here closes only when its definition of done passes **and** the result is recorded — and by that bar, nothing has closed yet.',
          ],
        },
        { kind: 'ctas', items: [{ label: 'The honest status', href: '/roadmap', variant: 'outline' }] },
      ],
    },
  ],

  closing: {
    heading: 'One eye on the web.',
    ctas: [
      { label: 'See how it works', href: '/how-it-works', variant: 'primary' },
      { label: 'Read the code', href: SITE.repo, variant: 'outline', external: true },
    ],
  },
};
