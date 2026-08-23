import type { PageContent } from '@/types/content';
import { REPO_FILES, SITE } from '@/libs/config/site';

/** Source: tepegoz-browser/docs/website/security.md (status: ready) */
export const security: PageContent = {
  route: '/security',
  title: 'Security — Tepegöz',
  description:
    'How Tepegöz keeps an autonomous agent inside limits — deterministic rules, an untrusted renderer, a fail-closed kernel — and what it has not yet proven.',
  status: 'ready',

  hero: {
    eyebrow: 'Security',
    headline: 'An agent with your session is a security problem. We built for that first.',
    subhead:
      'Tepegöz renders untrusted content and lets a model act on pages you are logged into. Everything below exists because that combination is dangerous, and because several shipped products have already proved how it fails.',
  },

  sections: [
    {
      id: 'premise',
      eyebrow: 'The premise',
      heading: 'The model is not a security control. Rules are.',
      blocks: [
        {
          kind: 'prose',
          body: [
            "Give a language model your browser and you have handed it your identity — your logged-in mail, your bank, your cloud storage, your password manager. The model's judgement is now a security control, and it is a bad one: it can be argued with by a web page.",
            'So in Tepegöz the model is not a security control. **Rules are.** A deterministic kernel decides what a tool call may do before the model is consulted, and the model\'s opinion cannot widen that decision.',
          ],
        },
      ],
    },

    {
      id: 'decisions',
      eyebrow: 'Architecture',
      heading: 'The five load-bearing decisions.',
      blocks: [
        {
          kind: 'cards',
          columns: 2,
          items: [
            {
              title: 'The renderer is untrusted',
              body: 'The window you are looking at can be manipulated by the page inside it, so it is given no authority. It displays and it relays. Autonomy level, permission checks and approvals are evaluated in the privileged process against state the renderer cannot reach. A compromised renderer that tries to approve something is not disobeying a rule — it is asking a process that will not listen.',
            },
            {
              title: 'Every tool call is classified before the model runs',
              body: 'Six tiers, derived from the tool, its validated arguments and its target: **read**, **UI-write**, **data-egress**, **financial**, **credential**, **destructive**. The tier decides what happens. A step that touches money, secrets or deletion cannot be auto-approved into existence by clever phrasing, because the phrasing never reaches the decision.',
            },
            {
              title: 'Page content is data, never instruction',
              body: 'Everything a page returns is normalized and screened at the boundary where it enters — injected commands, forged system markers, and the rest of the known repertoire. This is the class of attack that took down shipped competitors: a hidden instruction on a web page that the agent read as an order from its user.',
            },
            {
              title: 'Secrets never reach the model',
              body: "Credentials live in an encrypted vault and are filled by a broker. The model can ask for a login to be performed; it cannot ask for the password, and it never sees one. Keys are held only in the privileged process, encrypted through the operating system's keychain, and redacted from logs.",
            },
            {
              title: 'It fails closed',
              body: 'When a policy, a capability check or a network binding cannot reach a decision, the answer is no. A tab bound to a tunnel that drops stops working rather than quietly falling back to your real connection — the outcome you would want if you had been asked, which is the only sensible default when you cannot be.',
            },
          ],
        },
      ],
    },

    {
      id: 'unlock',
      eyebrow: 'Who holds the keys',
      heading: 'What only you can unlock.',
      lede: 'The dangerous capabilities exist. None of them are on, and none of them can be turned on by the agent.',
      blocks: [
        {
          kind: 'list',
          variant: 'check',
          items: [
            '**Sensitive categories ship disabled** — banking, crypto, health, password managers, including Turkish banking and the whole `gov.tr` tree. Each is a separate grant you make deliberately. No autonomy level turns one on for you, and the agent has no path to enabling one itself.',
            '**Spending is bounded by a mandate you write.** The wallet, the ceiling, the payees and the expiry are yours, recorded before the run and enforced in the privileged process. The agent can spend inside that mandate and cannot widen it.',
            '**The agent cannot widen its own permissions.** Grants are minted from a plan you approved, scoped to the domains and tool classes in that plan, and they expire when the run ends.',
            '**Irreversible actions outside an active mandate require a specific confirmation** that names what is about to happen.',
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'A grant is not an autonomy level.',
          body: [
            'An autonomy level is a posture the agent runs under; a grant is a specific, revocable authorization you wrote. Autonomy can skip a prompt the kernel raised — it still cannot overturn a refusal. Only a grant can, and grants are created out of band, never by the agent and never mid-run.',
          ],
        },
      ],
    },

    {
      id: 'incidents',
      eyebrow: 'Prior art',
      heading: "Learning from other people's incidents.",
      blocks: [
        {
          kind: 'prose',
          body: [
            'The agentic browser category has a public failure record, and it is short reading. Indirect prompt injection driving real actions. An agent talked into reading a password manager\'s vault. A zero-click instruction that deleted files in connected cloud storage. Screenshots that captured logged-in sessions and shipped them to a server.',
            `Tepegöz treats each of those as a test case rather than a headline. The published incidents are being turned into adversarial scenarios that the browser must fail — because a defence with no scenario that fails without it is an assumption, not a control. The incident-derived work items are tracked in the open, in [the safety phase](${REPO_FILES.safetyPhase}). The full threat model is published at [threat model](${REPO_FILES.threatModel}), and known problems at [known issues](${REPO_FILES.knownIssues}).`,
          ],
        },
      ],
    },

    {
      id: 'reporting',
      eyebrow: 'Disclosure',
      heading: 'Reporting a vulnerability.',
      lede: 'Security reports are the most valuable contribution this project can receive, and they are handled accordingly.',
      blocks: [
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Please do not open a public issue.',
          body: [
            `Use [GitHub's private vulnerability reporting](${REPO_FILES.privateVulnReport}) on the repository, or write to \`${SITE.securityContact}\` with \`${SITE.securitySubjectTag}\` in the subject.`,
          ],
        },
        {
          kind: 'table',
          caption: 'Disclosure commitments',
          head: ['Stage', 'Commitment'],
          rows: [
            ['Acknowledgement', 'Within **5 days**'],
            ['Initial assessment', 'Within **14 days**'],
            ['Fix on the main branch', 'Best effort, tracked publicly'],
            ['Coordinated disclosure', '**90-day** default window'],
            ['Bug bounty', 'None'],
            ['Credit', 'Given, unless you would rather stay anonymous'],
          ],
        },
        {
          kind: 'prose',
          body: [
            'These are stated as a single maintainer can honestly commit. Good-faith research under that policy is authorized, and this project will not pursue legal action over it.',
            `**Full policy, scope and safe harbour** → [SECURITY.md](${REPO_FILES.securityPolicy})`,
          ],
        },
      ],
    },
  ],

  closing: {
    heading: 'Read it rather than take our word for it.',
    ctas: [
      { label: 'Read the threat model', href: REPO_FILES.threatModel, variant: 'primary', external: true },
      { label: 'See the code', href: SITE.repo, variant: 'outline', external: true },
    ],
  },
};
