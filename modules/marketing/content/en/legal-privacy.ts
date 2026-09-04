import type { PageContent } from '@/types/content';

/**
 * Source: tepegoz-browser/docs/website/legal-privacy-policy.md
 * @sourceSha256 9ddf136a (2026-08-23)
 * (status: draft-legal — DRAFT, NOT LEGAL ADVICE, DO NOT RELY ON AS-IS)
 *
 * The `draft-legal` status renders a banner and marks this page `noindex`; the
 * unfilled `{{PLACEHOLDER}}` tokens are highlighted by the rich-text renderer.
 * All three are deliberate: the source file requires review by a lawyer and
 * every placeholder filled before publication.
 *
 * One deviation from the source, recorded here because it changes a factual
 * claim: the source drafts a "release notification" email-capture section. This
 * site ships no such form — it is a static export with no backend, and every
 * hosted form provider is a third-party script the site-wide rules forbid. The
 * section below therefore states that no address is collected, which is what is
 * actually true. If a form is ever added, restore the source's wording.
 */
export const legalPrivacy: PageContent = {
  route: '/legal/privacy',
  title: 'Privacy policy — Tepegöz',
  description:
    'What this website collects, why, and how to exercise your rights under KVKK and the GDPR.',
  status: 'draft-legal',

  hero: {
    eyebrow: 'Legal',
    headline: 'Website privacy policy',
    subhead:
      'This policy covers {{SITE_DOMAIN}}, the Tepegöz marketing website. Last updated: {{DATE}}.',
  },

  sections: [
    {
      id: 'scope',
      heading: 'Scope',
      blocks: [
        {
          kind: 'prose',
          body: [
            'This policy covers {{SITE_DOMAIN}}, the Tepegöz marketing website.',
            'It does **not** cover the Tepegöz browser application. The browser has no backend, no account and no telemetry, and it sends nothing to us — that is described at [/privacy](/privacy) and is a property of the software, not a promise in a policy.',
          ],
        },
      ],
    },

    {
      id: 'controller',
      heading: 'Who is responsible',
      blocks: [
        {
          kind: 'table',
          caption: 'Data controller details',
          head: ['Field', 'Value'],
          rows: [
            ['Data controller', '{{CONTROLLER_LEGAL_NAME}}'],
            ['Address', '{{CONTROLLER_ADDRESS}}'],
            ['Contact', '{{CONTACT_EMAIL}}'],
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          body: [
            'If the project is operated by an individual rather than a registered company, that must be stated plainly with the individual\'s name. A vague controller identity is itself a compliance defect.',
          ],
        },
      ],
    },

    {
      id: 'collect',
      heading: 'What we collect',
      blocks: [
        {
          kind: 'callout',
          tone: 'success',
          title: 'No email addresses are collected.',
          body: [
            'This site has no forms of any kind. There is no release-notification list, no contact form, and no newsletter. Nothing on any page transmits anything you type to anyone.',
          ],
        },
        {
          kind: 'prose',
          body: ['**Server logs.** Recorded by the hosting provider as a consequence of serving the site.'],
        },
        {
          kind: 'table',
          caption: 'Server log processing',
          head: ['Aspect', 'Detail'],
          rows: [
            ['What', 'IP address, user agent, requested URL and timestamp'],
            ['Why', 'To keep the site running and to detect abuse'],
            ['Legal basis', 'Legitimate interest (GDPR art. 6(1)(f)); KVKK art. 5/2(f)'],
            ['How long', '{{LOG_RETENTION}}'],
            ['Processor', '{{HOSTING_PROVIDER}}, {{HOSTING_LOCATION}}'],
          ],
        },
      ],
    },

    {
      id: 'not-collected',
      heading: 'What we do not collect',
      blocks: [
        {
          kind: 'list',
          variant: 'deny',
          items: [
            '**No third-party analytics.**',
            '**No advertising or tracking cookies.**',
            '**No cross-site tracking.**',
            '**No profiling, and no automated decision-making.**',
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          body: [
            "This paragraph is only allowed to exist while it stays true. Adding an analytics script to a privacy-first browser's website contradicts the product's central claim and turns this section into a false statement — which is a legal problem, not only an embarrassing one.",
          ],
        },
      ],
    },

    {
      id: 'cookies',
      heading: 'Cookies',
      blocks: [
        {
          kind: 'prose',
          body: [
            'This site sets **no cookies**. Your theme preference is stored in your browser\'s local storage, on your device, and is never transmitted anywhere. Clearing site data removes it.',
            '{{COOKIE_STATEMENT}} — a reviewer must confirm the above against the shipped build, and list any cookie individually (name, purpose, lifetime) if one is ever introduced.',
          ],
        },
      ],
    },

    {
      id: 'where',
      heading: 'Where data goes',
      blocks: [
        {
          kind: 'prose',
          body: [
            '{{DATA_LOCATION_STATEMENT}} — the hosting country must be named. If personal data leaves Türkiye, KVKK\'s cross-border transfer rules apply and the mechanism relied on must be named. If it leaves the EEA, the GDPR\'s Chapter V mechanism must be named.',
          ],
        },
      ],
    },

    {
      id: 'rights',
      heading: 'Your rights',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Under **KVKK art. 11** and the **GDPR (arts. 15–22)** you may request access to your data, correction, erasure, restriction, portability, and you may object to processing or withdraw consent at any time. Withdrawing consent does not affect processing that already happened.',
            'To exercise any of these, write to {{CONTACT_EMAIL}}. We respond within **30 days**.',
            'You may also complain to a supervisory authority — in Türkiye, the **Personal Data Protection Authority (KVKK Kurumu)**; in the EEA, your national data protection authority.',
          ],
        },
      ],
    },

    {
      id: 'children',
      heading: 'Children',
      blocks: [
        {
          kind: 'prose',
          body: [
            'This site is not directed at children under {{AGE_THRESHOLD}} and we do not knowingly collect their data.',
          ],
        },
      ],
    },

    {
      id: 'security',
      heading: 'Security',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Data in transit is protected with TLS. We will notify affected people and the relevant authority of a breach as required by KVKK and GDPR art. 33–34.',
          ],
        },
      ],
    },

    {
      id: 'changes',
      heading: 'Changes',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Material changes will be announced on this page with a new "last updated" date.',
          ],
        },
      ],
    },
  ],

  closing: {
    heading: 'The browser is a separate matter.',
    body: [
      'This policy is about the website. How the browser handles your data is a property of the software, and it is described in full at [/privacy](/privacy).',
    ],
    ctas: [{ label: 'Product privacy', href: '/privacy', variant: 'outline' }],
  },
};
