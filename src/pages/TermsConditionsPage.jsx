import { Helmet } from 'react-helmet-async'
import PageHero from '../components/layout/PageHero'
import CtaPanel from '../components/layout/CtaPanel'
import { SITE_CONFIG } from '../data/site'

const SECTIONS = [
  {
    icon: 'bi-file-earmark-text',
    title: '1. Introduction & Acceptance of Terms',
    paras: [
      'These Terms and Conditions ("Terms") govern your use of the website and services provided by Preyova Technologies ("we", "us", "our"). By accessing our website, submitting an enquiry, or engaging our services, you agree to be bound by these Terms, along with our Privacy Policy.',
      'If you do not agree with any part of these Terms, you should not use our website or services. Where these Terms conflict with a specific written agreement signed between you and Preyova Technologies, the signed agreement shall take precedence.',
    ],
  },
  {
    icon: 'bi-briefcase',
    title: '2. Services Provided',
    paras: ['We provide software development, consulting, and related technology services, including but not limited to:'],
    list: [
      'Web application development and website design.',
      'Mobile application development for iOS and Android.',
      'Custom software development and enterprise integrations.',
      'E-commerce solutions and payment integrations.',
      'Maintenance, support, and technology consulting.',
    ],
    paras2: [
      'The scope, deliverables, timelines, and pricing for any project are defined in a separate proposal, statement of work, or service agreement. These Terms apply to all such engagements unless the specific agreement states otherwise.',
    ],
  },
  {
    icon: 'bi-globe',
    title: '3. Acceptable Use of Our Website',
    paras: ['When using our website, you agree not to:'],
    list: [
      'Use the website in any way that violates applicable laws or regulations.',
      'Attempt to gain unauthorised access to our systems, servers, or networks.',
      'Upload or transmit malicious code, viruses, or harmful content.',
      'Scrape, copy, or reproduce website content without prior written permission.',
      'Impersonate another person or misrepresent your affiliation with any party.',
      'Interfere with the normal operation or security of the website.',
    ],
  },
  {
    icon: 'bi-copyright',
    title: '4. Intellectual Property Rights',
    paras: [
      'All content on our website — including text, graphics, logos, images, code samples, and design elements — is the property of Preyova Technologies or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from this content without our prior written consent.',
      'Upon full payment for a project, ownership of the custom deliverables (such as developed source code for your specific project) is transferred to you as described in the project agreement. We retain ownership of pre-existing tools, frameworks, libraries, and reusable components used to deliver your project, which are licensed to you for the purpose of using the deliverable.',
    ],
  },
  {
    icon: 'bi-person-check',
    title: '5. Client Obligations & Project Scope',
    paras: ['To deliver projects effectively, clients agree to:'],
    list: [
      'Provide accurate and complete information, requirements, and feedback in a timely manner.',
      'Designate a single point of contact who can make decisions on behalf of the client.',
      'Grant access to the systems, accounts, and materials reasonably required to complete the work.',
      'Review and approve deliverables, milestones, and change requests within agreed timelines.',
    ],
    paras2: [
      'Delays caused by the client in providing inputs or approvals may adjust project timelines accordingly. Any request that expands the agreed scope will be handled through a formal change request, with associated costs and timeline adjustments agreed in advance.',
    ],
  },
  {
    icon: 'bi-credit-card',
    title: '6. Proposals, Payments & Billing',
    paras: ['Details on pricing and payment terms:'],
    list: [
      'Pricing is defined in each proposal, quotation, or service agreement and is exclusive of applicable taxes unless stated otherwise.',
      'Payment schedules typically follow milestones or agreed intervals; invoices are payable within the timeframe stated on the invoice.',
      'Projects commence only after the initial payment or advance, as specified in the agreement, is received.',
      'Late payments may be subject to interest at the rate permitted by applicable law.',
      'Invoices for subscriptions or recurring maintenance services must be paid in advance of the relevant service period.',
    ],
  },
  {
    icon: 'bi-boxes',
    title: '7. Third-Party Services & Open-Source Software',
    paras: [
      'Our solutions may rely on third-party services, APIs, hosting platforms, or open-source libraries. We do not warrant the availability, performance, or ongoing licensing of such third-party components, and we are not responsible for their behaviour or policies. Any open-source components remain subject to their respective licences.',
      'Where a project depends on a third-party platform (such as a payment gateway, cloud provider, or marketplace), the terms of that platform apply to your use of it, and you are responsible for maintaining any accounts you own.',
    ],
  },
  {
    icon: 'bi-incognito',
    title: '8. Confidentiality',
    paras: [
      'Both parties agree to keep confidential any non-public information disclosed during the course of the engagement, including business plans, technical specifications, source code, client data, and pricing terms. Confidential information shall only be used to fulfil the purpose of the engagement and may be disclosed only to those personnel who need to know it.',
      'These confidentiality obligations survive the termination of any engagement and remain in effect for the period specified in the relevant agreement (or, if not specified, for three years following termination).',
    ],
  },
  {
    icon: 'bi-exclamation-triangle',
    title: '9. Warranties & Disclaimer',
    paras: [
      'We warrant that services will be performed in a professional and workmanlike manner in line with the agreed specification. The website and services are provided "as is" and "as available" without warranties of any kind, whether express or implied, including merchantability, fitness for a particular purpose, non-infringement, or uninterrupted availability.',
      'We do not warrant that the website or any deliverable will be error-free, free from vulnerabilities, or operate without interruption. You are responsible for applying appropriate security controls and backups to production environments.',
    ],
  },
  {
    icon: 'bi-shield-exclamation',
    title: '10. Limitation of Liability',
    paras: [
      'To the maximum extent permitted by law, Preyova Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data, or business opportunities, arising out of or related to your use of the website or our services.',
      'Our total aggregate liability for any claim arising from an engagement shall not exceed the total fees paid by you for the specific project or service giving rise to the claim.',
    ],
  },
  {
    icon: 'bi-shield-plus',
    title: '11. Indemnification',
    paras: [
      'You agree to indemnify and hold harmless Preyova Technologies, its directors, employees, and affiliates from any claims, damages, losses, or expenses (including legal fees) arising out of your use of the website, your breach of these Terms, or your violation of any rights of a third party.',
    ],
  },
  {
    icon: 'bi-stop-circle',
    title: '12. Suspension & Termination',
    paras: [
      'We may suspend or terminate access to the website, or terminate an engagement, if you breach these Terms, fail to pay amounts due, or act in a way that threatens the security or integrity of our systems or staff. Either party may terminate an engagement in accordance with the notice provisions of the applicable agreement.',
      'Upon termination, you remain responsible for payments for work completed up to the termination date, and each party shall return or destroy the other party\'s confidential information as instructed.',
    ],
  },
  {
    icon: 'bi-bank',
    title: '13. Governing Law & Jurisdiction',
    paras: [
      'These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in Chennai, Tamil Nadu, India.',
    ],
  },
  {
    icon: 'bi-arrow-repeat',
    title: '14. Changes to These Terms',
    paras: [
      'We may revise these Terms from time to time. The most current version will always be posted on this page with a revised "Last Updated" date. Continued use of the website or services after changes take effect constitutes acceptance of the updated Terms.',
    ],
  },
  {
    icon: 'bi-envelope',
    title: '15. Contact Us',
    paras: ['If you have any questions about these Terms and Conditions, please contact us:'],
    list: [
      `Email: ${SITE_CONFIG.email}`,
      `Phone: ${SITE_CONFIG.phone}`,
      `Address: ${SITE_CONFIG.location}`,
    ],
  },
]

const ANCHORS = ['intro', 'services', 'use', 'ip', 'obligations', 'payments', 'third-party', 'confidentiality', 'warranties', 'liability', 'indemnification', 'termination', 'law', 'changes', 'contact']

const NAV = [
  ['#intro', 'Introduction'],
  ['#services', 'Services'],
  ['#use', 'Acceptable Use'],
  ['#ip', 'Intellectual Property'],
  ['#obligations', 'Client Obligations'],
  ['#payments', 'Payments'],
  ['#third-party', 'Third-Party'],
  ['#confidentiality', 'Confidentiality'],
  ['#warranties', 'Warranties'],
  ['#liability', 'Limitation of Liability'],
  ['#indemnification', 'Indemnification'],
  ['#termination', 'Termination'],
  ['#law', 'Governing Law'],
  ['#changes', 'Changes'],
  ['#contact', 'Contact'],
]

export default function TermsConditionsPage() {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Preyova Technologies</title>
        <meta name="description" content="Terms and Conditions of Preyova Technologies — the rules governing the use of our website and the engagement of our software development services." />
        <meta name="keywords" content="Preyova terms and conditions, IT services terms, software agreement, service terms, Chennai" />
        <link rel="canonical" href="https://www.preyova.in/terms-conditions" />
      </Helmet>

      <PageHero
        label="Legal"
        title={<>Terms &amp; <span className="text-gradient">Conditions</span></>}
        lead="The terms that govern your use of our website and engagement of our services."
        current="Terms & Conditions"
      />

      <section className="section">
        <div className="container">
          <div className="legal-wrap">
            <div className="legal-update">
              <i className="bi bi-calendar-event" aria-hidden="true"></i>
              Last Updated: January 2026
            </div>

            <nav className="legal-nav" aria-label="Terms and Conditions sections">
              {NAV.map(([href, label]) => (
                <a href={href} key={href}>{label}</a>
              ))}
            </nav>

            <article className="legal-card">
              <div className="section-head">
                <span className="section-label">Agreement</span>
                <h2 className="section-title" style={{ fontSize: 'clamp(1.5rem, 2.6vw, 1.9rem)' }}>Our Commitment, Clearly Defined</h2>
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
            title={<>Have Questions About Our <span className="text-gradient">Terms?</span></>}
            subtitle="Our team can walk you through how we work, our process, and what to expect."
            buttonLabel="Talk to Us"
          />
        </div>
      </section>
    </>
  )
}
