import type { PageContent } from '@/types/content';
import { REPO_FILES, SITE } from '@/libs/config/site';

/**
 * Source: tepegoz-browser/docs/website/legal-license.md (status: ready)
 * @sourceSha256 3ce1a24c (2026-08-23)
 *
 * The source's meta description is 157 characters, two over the ≤155 limit its
 * own README sets. Trimmed here to "the components it ships with"; the upstream
 * file should be corrected to match.
 */
export const legalLicense: PageContent = {
  route: '/legal/license',
  title: 'Licence — Tepegöz is AGPL-3.0',
  description:
    'Tepegöz is licensed under the GNU Affero General Public License v3.0 — what that grants you, what it asks back, and the components it ships with.',
  status: 'ready',

  hero: {
    eyebrow: 'Legal',
    headline: 'Tepegöz is licensed under the GNU Affero General Public License, version 3.',
    subhead: 'Copyright © 2026 Kuray Karaaslan.',
    ctas: [
      { label: 'Full licence text', href: REPO_FILES.license, variant: 'primary', external: true },
    ],
  },

  sections: [
    {
      id: 'plain-language',
      eyebrow: 'In plain language',
      heading: 'A convenience summary — the licence text governs.',
      lede: 'This summary is a convenience and is labelled as one. A summary never governs; the licence does.',
      blocks: [
        {
          kind: 'capability',
          groups: [
            {
              state: 'available',
              label: 'What you may do',
              items: [
                '**Use it for anything.** Personal, commercial, in an organisation, on any number of machines. No fee, no registration, no seat count.',
                '**Read all of it.** Every line of the browser is public.',
                '**Change it.** Fork it, strip it down, build something else out of it.',
                '**Share it**, modified or not.',
              ],
            },
            {
              state: 'planned',
              label: 'What the licence asks in return',
              items: [
                '**If you distribute it, distribute the source too** — your version, under the same licence, with your changes.',
                '**If you run a modified version as a network service, the people using that service must be able to get its source.** This is the "Affero" clause, and it is the reason this licence was chosen: it closes the gap where someone takes free software, modifies it, and offers it as a hosted product without giving anything back.',
                '**Keep the notices.** Copyright and licence notices stay in place.',
              ],
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'What it does not do',
          body: [
            'It does not make the software cost money, and it does not stop you charging for something you build with it.',
            'It does not give you trade mark rights — see [/legal/terms](/legal/terms).',
            '**It provides no warranty.** The software is offered as-is, and given that it is pre-release and unaudited, take that literally.',
          ],
        },
      ],
    },

    {
      id: 'why-agpl',
      eyebrow: 'Why AGPL',
      heading: 'And not MIT.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'A permissive licence would get Tepegöz into more places faster. It would also permit the specific ending this project exists to avoid: a well-resourced company takes a security-focused, local-first browser, closes the fork, ships it as a hosted service, and returns nothing — while the original\'s central promise, _you can read what is deciding on your behalf_, quietly stops being true for most of its users.',
            'AGPL removes that option. The cost is real and was accepted knowingly: some organisations will not use AGPL code at all.',
          ],
        },
      ],
    },

    {
      id: 'commercial',
      eyebrow: 'Commercial licensing',
      heading: 'A separate licence is possible.',
      blocks: [
        {
          kind: 'prose',
          body: [
            `The copyright is held by a single author, so a separate commercial licence is possible for anyone whose circumstances genuinely require one. If AGPL-3.0 does not work for your situation, write to **${SITE.securityContact}** and describe it.`,
          ],
        },
      ],
    },

    {
      id: 'contributions',
      eyebrow: 'Contributions',
      heading: 'Inbound equals outbound.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Contributions are licensed under AGPL-3.0 on the same terms as the project. There is no contributor licence agreement and no copyright assignment — your work stays yours.',
          ],
        },
        {
          kind: 'ctas',
          items: [{ label: 'How to contribute', href: '/open-source', variant: 'outline' }],
        },
      ],
    },

    {
      id: 'third-party',
      eyebrow: 'Third-party components',
      heading: 'What is redistributed, and under what.',
      lede: 'Tepegöz redistributes a small amount of third-party material, and each piece is recorded with its own licence and — where a licence requires it — a statement of what was changed.',
      blocks: [
        {
          kind: 'table',
          caption: 'Redistributed third-party components',
          head: ['Component', 'Licence'],
          rows: [
            ['`buildDomTree` perception technique', 'MIT and Apache-2.0 (browser-use, nanobrowser)'],
            ['kui-player embedded video bundle', 'Apache-2.0'],
            ['KUIreact component atoms', '0BSD'],
            ['Baloo 2 typeface', 'SIL OFL 1.1'],
          ],
        },
        {
          kind: 'prose',
          body: [
            'Dependencies installed from the public registry are not redistributed here; the notable ones and their licences are listed alongside the above.',
            `**Full notices** → [THIRD-PARTY-NOTICES.md](${SITE.repo}/blob/main/THIRD-PARTY-NOTICES.md)`,
            'If you believe something is attributed incorrectly — especially if it is your work — say so and it gets fixed. Attribution errors are treated as defects.',
          ],
        },
      ],
    },
  ],

  closing: {
    heading: 'Read the licence itself.',
    body: ['It is also included with every copy of the software.'],
    ctas: [
      { label: 'Full licence text', href: REPO_FILES.license, variant: 'primary', external: true },
      { label: 'Open source, explained', href: '/open-source', variant: 'outline' },
    ],
  },
};
