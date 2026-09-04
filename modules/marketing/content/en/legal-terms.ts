import type { PageContent } from '@/types/content';

/**
 * Source: tepegoz-browser/docs/website/legal-terms.md
 * @sourceSha256 458bb6b3 (2026-08-23)
 * (status: draft-legal — DRAFT, NOT LEGAL ADVICE, DO NOT RELY ON AS-IS)
 *
 * Structural point the source asks a reviewer to preserve, repeated here so an
 * edit does not quietly lose it: **the software is not licensed by these terms.**
 * It is licensed by the AGPL-3.0, and these terms must not appear to add
 * restrictions on top of it.
 */
export const legalTerms: PageContent = {
  route: '/legal/terms',
  title: 'Terms — Tepegöz',
  description:
    'The terms covering this website. The Tepegöz software itself is governed by the AGPL-3.0, which is a licence, not a subscription.',
  status: 'draft-legal',

  hero: {
    eyebrow: 'Legal',
    headline: 'Terms',
    subhead:
      'These terms govern {{SITE_DOMAIN}} — this website. They do not govern the Tepegöz software. Last updated: {{DATE}}.',
  },

  sections: [
    {
      id: 'scope',
      heading: '1. What these terms cover',
      blocks: [
        {
          kind: 'callout',
          tone: 'info',
          title: 'They do not govern the Tepegöz software.',
          body: [
            'Tepegöz is free software licensed under the **GNU Affero General Public License v3.0**. Your rights to use, study, modify and redistribute it come from that licence and from nothing on this page. Where these terms and the AGPL-3.0 could be read to conflict, **the AGPL-3.0 governs** for the software.',
          ],
        },
      ],
    },

    {
      id: 'website',
      heading: '2. The website',
      blocks: [
        {
          kind: 'prose',
          body: [
            'The site is provided as-is. We try to keep it accurate and available, and we do not promise either. Content may change without notice.',
            'You may not use the site to break the law, to attack the infrastructure it runs on, or to attempt access to systems or data you are not entitled to. **Good-faith security research on the Tepegöz software is explicitly welcome** and is governed by the safe-harbour terms in the project\'s security policy — see [/security](/security).',
          ],
        },
      ],
    },

    {
      id: 'software',
      heading: '3. The software, in summary',
      lede: 'Read in full at [/legal/license](/legal/license). The parts most people need:',
      blocks: [
        {
          kind: 'list',
          variant: 'plain',
          items: [
            'Tepegöz is **free of charge**. There is no subscription, no account, and nothing on this site sells you the browser.',
            'It is **pre-release software**. Builds are signed, but there has been no independent security audit and the automation has not been independently benchmarked.',
            'The AGPL-3.0 disclaims warranties and limits liability. **The software is provided without warranty of any kind**, including merchantability and fitness for a particular purpose.',
            'There is **no support obligation**. Issues and security reports are read and acted on as capacity allows; nothing on this site is a service-level commitment.',
          ],
        },
      ],
    },

    {
      id: 'responsibility',
      heading: '4. What you are responsible for when you run it',
      lede: 'Tepegöz can act on websites on your behalf, using your accounts and your credentials.',
      blocks: [
        {
          kind: 'list',
          variant: 'plain',
          items: [
            '**You are responsible for what you instruct it to do**, including compliance with the terms of the websites you automate. Many services restrict automated access; that agreement is between you and them.',
            '**You bring your own AI provider key**, and your use of that provider is governed by their terms. Content the agent sends goes directly to that provider. We are not a party to it and cannot see it.',
            '**Automation can cause irreversible outcomes, including spending your money.** Sensitive categories and wallet mandates ship disabled and are enabled only by you; once enabled, the agent acts within them without asking again. Setting a ceiling, a payee list and an expiry you can live with is your responsibility, and those safeguards are not a guarantee. Judgement remains yours.',
            '**Do not use it for anything unlawful**, and do not use it to reach systems or data you are not authorised to reach.',
            '**Automated access, including automated completion of human-verification challenges, is your decision and your responsibility.** Many services restrict or prohibit it in their own terms. The software will do what you enable; whether you are permitted to is between you and the site.',
          ],
        },
      ],
    },

    {
      id: 'trademarks',
      heading: '5. Trade marks',
      blocks: [
        {
          kind: 'prose',
          body: [
            'The AGPL-3.0 grants copyright permissions; it does not grant trade mark rights. The name **Tepegöz**, the wordmark and the logo remain {{TRADEMARK_HOLDER}}\'s.',
            'You may use the name to refer to the project — including in a fork\'s documentation, to state accurately what it is derived from. You may not use the name or logo in a way that suggests your modified version is the official one, or that it is endorsed by us. Ask if you are unsure; the answer is usually yes.',
          ],
        },
      ],
    },

    {
      id: 'links',
      heading: '6. Third-party links',
      blocks: [
        {
          kind: 'prose',
          body: [
            'The site links to third-party sites, including source-code hosting and research sources. We do not control them and are not responsible for their content or their privacy practices.',
          ],
        },
      ],
    },

    {
      id: 'law',
      heading: '7. Governing law',
      blocks: [
        {
          kind: 'prose',
          body: [
            'These terms are governed by the laws of {{JURISDICTION}}, with the courts of {{VENUE}} having jurisdiction — without limiting any mandatory consumer rights you have where you live.',
          ],
        },
      ],
    },

    {
      id: 'changes',
      heading: '8. Changes',
      blocks: [
        {
          kind: 'prose',
          body: [
            'These terms may change. The current version is always the one on this page, with its "last updated" date.',
          ],
        },
      ],
    },

    {
      id: 'contact',
      heading: '9. Contact',
      blocks: [{ kind: 'prose', body: ['{{CONTACT_EMAIL}}'] }],
    },
  ],

  closing: {
    heading: 'The licence is the document that matters.',
    ctas: [
      { label: 'Read the licence', href: '/legal/license', variant: 'primary' },
      { label: 'Website privacy policy', href: '/legal/privacy', variant: 'outline' },
    ],
  },
};
