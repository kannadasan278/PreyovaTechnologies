import { Helmet } from 'react-helmet-async'
import PageHero from '../components/layout/PageHero'
import CtaPanel from '../components/layout/CtaPanel'
import { SITE_CONFIG } from '../data/site'

const SECTIONS = [
  {
    icon: 'bi-info-circle',
    title: '1. Introduction',
    paras: [
      `Preyova Technologies ("we", "us", "our") is committed to protecting the privacy and security of the personal information we handle. This Privacy Policy explains what information we collect, why we collect it, how we use and protect it, and the choices you have about your data when you visit our website, use our services, or otherwise interact with us.`,
      'By accessing our website or engaging our services, you agree to the practices described in this policy. If you do not agree with any part of this policy, please do not use our website or services.',
    ],
  },
  {
    icon: 'bi-database',
    title: '2. Information We Collect',
    paras: ['We collect information necessary to provide, operate, and improve our website and services. This includes:'],
    list: [
      'Contact details — name, email address, phone number, and company name you provide through enquiry forms, email, or calls.',
      'Project information — details you share about your business, requirements, and technical specifications when requesting a quote or project.',
      'Usage data — pages visited, time spent, referral source, and interactions with our website, collected anonymously where possible.',
      'Technical data — IP address, browser type and version, operating system, device type, and approximate location.',
      'Communication records — correspondence exchanged with us via email, WhatsApp, or other channels.',
    ],
    paras2: [
      'We do not collect sensitive personal data (such as health, biometric, or financial account details) unless you voluntarily provide it as part of a specific service engagement.',
    ],
  },
  {
    icon: 'bi-gear',
    title: '3. How We Use Your Information',
    paras: ['We use the information we collect to:'],
    list: [
      'Respond to your enquiries and provide the services you request.',
      'Prepare proposals, estimates, and project documentation.',
      'Improve our website content, user experience, and service quality.',
      'Send relevant updates, newsletters, or service announcements (only with your consent, and with an easy opt-out).',
      'Comply with legal and regulatory obligations, and protect our legal rights.',
      'Detect, prevent, and address technical issues or fraudulent activity.',
    ],
  },
  {
    icon: 'bi-shield-check',
    title: '4. Legal Basis for Processing',
    paras: [
      'We process personal information under the following lawful bases, in line with applicable data protection laws (including the Indian Digital Personal Data Protection Act and the EU GDPR):',
    ],
    list: [
      'Consent — where you have explicitly agreed to a specific use (for example, marketing communications).',
      'Contract — where processing is necessary to deliver a service you have requested or to take steps before entering an agreement.',
      'Legitimate interests — for operating and securing our website, understanding our audience, and developing our business, where your rights and interests do not override ours.',
      'Legal obligation — where processing is required by law.',
    ],
  },
  {
    icon: 'bi-cookie',
    title: '5. Cookies & Tracking Technologies',
    paras: [
      'Our website may use cookies and similar technologies to remember your preferences, understand how the site is used, and improve performance. You can control or disable cookies through your browser settings at any time; however, some features of the website may not function properly without them.',
      'The types of cookies we use include essential cookies (required for the website to work), analytics cookies (to understand aggregate usage), and preference cookies (to remember your choices). We do not use cookies for cross-site advertising tracking.',
    ],
  },
  {
    icon: 'bi-arrow-left-right',
    title: '6. Sharing & Disclosure',
    paras: ['We do not sell, rent, or trade your personal information. We only share data with trusted parties when necessary to deliver our services, including:'],
    list: [
      'Service providers — hosting, email, analytics, and payment platforms that process data on our behalf under strict confidentiality terms.',
      'Professional advisors — legal, accounting, or consulting advisers where reasonably required.',
      'Legal authorities — where disclosure is required by law, regulation, or a valid legal request.',
      'Business transfers — in the event of a merger, acquisition, or asset sale, where your information may be transferred as part of the business assets.',
    ],
  },
  {
    icon: 'bi-clock-history',
    title: '7. Data Retention',
    paras: [
      `We retain personal information only for as long as necessary to fulfil the purposes described in this policy, meet contractual obligations, or comply with legal requirements. After that period, data is securely deleted or anonymised. Contact and project records are typically retained for the duration of the engagement and a reasonable period afterwards for follow-up and record-keeping.`,
    ],
  },
  {
    icon: 'bi-lock',
    title: '8. Data Security',
    paras: [
      'We implement appropriate technical and organisational measures to protect your information against unauthorised access, alteration, disclosure, or destruction. These include encrypted data transmission (HTTPS), restricted internal access, secure infrastructure, and regular reviews of our security practices.',
      'While no method of transmission or storage is completely secure, we work continuously to safeguard your data and encourage you to protect your own login credentials and devices.',
    ],
  },
  {
    icon: 'bi-person-check',
    title: '9. Your Rights',
    paras: ['Depending on your jurisdiction, you may have the following rights regarding your personal information:'],
    list: [
      'Access — request a copy of the personal data we hold about you.',
      'Rectification — ask us to correct inaccurate or incomplete information.',
      'Erasure — request deletion of your data where permitted by law.',
      'Restriction & objection — limit how we process your data, or object to certain processing.',
      'Portability — request your data in a structured, machine-readable format.',
      'Withdraw consent — where processing relies on consent, you may withdraw it at any time.',
    ],
    paras2: [
      'To exercise any of these rights, contact us using the details below. We will respond within the timeframes required by applicable law, and we may ask you to verify your identity before fulfilling your request.',
    ],
  },
  {
    icon: 'bi-link-45deg',
    title: '10. Third-Party Links',
    paras: [
      'Our website may contain links to third-party websites or services that we do not operate. We are not responsible for the privacy practices or content of those external sites. We encourage you to review the privacy policies of any third-party site you visit.',
    ],
  },
  {
    icon: 'bi-person-lock',
    title: '11. Children\'s Privacy',
    paras: [
      'Our website and services are not directed at children under the age of 13, and we do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us so we can take appropriate action.',
    ],
  },
  {
    icon: 'bi-globe2',
    title: '12. International Data Transfers',
    paras: [
      'We are based in Chennai, India, and may process data with service providers located in different countries. Where personal information is transferred across borders, we take reasonable steps to ensure it receives an adequate level of protection consistent with this policy and applicable law.',
    ],
  },
  {
    icon: 'bi-pencil-square',
    title: '13. Changes to This Policy',
    paras: [
      'We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. The latest version will always be published on this page with a revised "Last Updated" date. Significant changes will be communicated through the website or direct notification where appropriate.',
    ],
  },
  {
    icon: 'bi-envelope',
    title: '14. Contact Us',
    paras: [
      `If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please reach out to us:`,
    ],
    list: [
      `Email: ${SITE_CONFIG.email}`,
      `Phone: ${SITE_CONFIG.phone}`,
      `Address: ${SITE_CONFIG.location}`,
    ],
  },
]

const ANCHORS = ['intro', 'info', 'use', 'basis', 'cookies', 'sharing', 'retention', 'security', 'rights', 'third-party', 'children', 'transfers', 'changes', 'contact']

const NAV = [
  ['#intro', 'Introduction'],
  ['#info', 'Information We Collect'],
  ['#use', 'How We Use It'],
  ['#basis', 'Legal Basis'],
  ['#cookies', 'Cookies'],
  ['#sharing', 'Sharing'],
  ['#retention', 'Retention'],
  ['#security', 'Security'],
  ['#rights', 'Your Rights'],
  ['#third-party', 'Third-Party Links'],
  ['#children', 'Children'],
  ['#transfers', 'Transfers'],
  ['#changes', 'Changes'],
  ['#contact', 'Contact'],
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Preyova Technologies</title>
        <meta name="description" content="Privacy Policy of Preyova Technologies — how we collect, use, and protect your personal information when you visit our website and use our services." />
        <meta name="keywords" content="Preyova privacy policy, data privacy, IT company privacy policy, personal data, Chennai" />
        <link rel="canonical" href="https://www.preyova.in/privacy-policy" />
      </Helmet>

      <PageHero
        label="Legal"
        title={<>Privacy <span className="text-gradient">Policy</span></>}
        lead="How Preyova Technologies collects, uses, and protects your personal information."
        current="Privacy Policy"
      />

      <section className="section">
        <div className="container">
          <div className="legal-wrap">
            <div className="legal-update">
              <i className="bi bi-calendar-event" aria-hidden="true"></i>
              Last Updated: January 2026
            </div>

            <nav className="legal-nav" aria-label="Privacy Policy sections">
              {NAV.map(([href, label]) => (
                <a href={href} key={href}>{label}</a>
              ))}
            </nav>

            <article className="legal-card">
              <div className="section-head">
                <span className="section-label">Overview</span>
                <h2 className="section-title" style={{ fontSize: 'clamp(1.5rem, 2.6vw, 1.9rem)' }}>Your Privacy Matters to Us</h2>
              </div>

              {SECTIONS.map((s, i) => (
                <div key={s.title} id={ANCHORS[i]}>
                  <h2 className="legal-h2"><i className={`bi ${s.icon}`} aria-hidden="true"></i>{s.title}</h2>
                  {s.paras?.map((p) => <p key={p}>{p}</p>)}
                  {s.list && (
                    <ul>{s.list.map((li) => <li key={li}>{li}</li>)}</ul>
                  )}
                  {s.paras2?.map((p) => <p key={p}>{p}</p>)}
                </div>
              ))}
            </article>
          </div>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="container">
          <CtaPanel
            orb="orb-2"
            title={<>Questions About Your <span className="text-gradient">Data?</span></>}
            subtitle="Reach out to our team and we'll be happy to clarify how we handle your information."
            buttonLabel="Contact Us"
          />
        </div>
      </section>
    </>
  )
}
