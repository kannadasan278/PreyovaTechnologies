import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import PageHero from '../components/layout/PageHero'
import CtaPanel from '../components/layout/CtaPanel'

const SUPPORT_TOPICS = [
  {
    icon: 'bi-gear',
    title: 'Getting Started',
    desc: 'New to working with us? Find onboarding guides, project kickoff steps, and what to expect during the development process.',
  },
  {
    icon: 'bi-tools',
    title: 'Technical Support',
    desc: 'Facing an issue with a delivered project? Reach out through the support channel and our team will respond within one business day.',
  },
  {
    icon: 'bi-arrow-repeat',
    title: 'Maintenance & Updates',
    desc: 'Information on post-launch support, maintenance packages, version upgrades, and ongoing monitoring services.',
  },
  {
    icon: 'bi-shield-lock',
    title: 'Security & Compliance',
    desc: 'Details on our security practices, data handling policies, and compliance with industry standards.',
  },
  {
    icon: 'bi-credit-card',
    title: 'Billing & Invoices',
    desc: 'Questions about payments, invoicing schedules, or contract terms? We have answers here.',
  },
  {
    icon: 'bi-chat-dots',
    title: 'FAQ',
    desc: 'Quick answers to the most common questions about our services, timelines, and pricing.',
  },
]

export default function SupportPage() {
  return (
    <>
      <Helmet>
        <title>Support | Help Center | Preyova Technologies</title>
        <meta name="description" content="Get help from Preyova Technologies — technical support, maintenance, billing queries, and FAQs for all our services and solutions." />
        <meta name="keywords" content="support, help center, technical support, maintenance, FAQ, Preyova Technologies" />
        <link rel="canonical" href="https://www.preyova.in/support" />
      </Helmet>

      <PageHero
        label="Support"
        title={<>How Can We <span className="text-gradient">Help You?</span></>}
        lead="Find answers, get help, or reach our team directly — we are here to support your project every step of the way."
        current="Support"
      />

      <section className="section">
        <div className="container">
          <div className="row g-4">
            {SUPPORT_TOPICS.map((topic, i) => (
              <div className={`col-md-6 col-lg-4 reveal${i === 0 ? '' : ` reveal-delay-${Math.min(i, 3)}`}`} key={topic.title}>
                <div className="support-card">
                  <div className="support-card-icon">
                    <i className={`bi ${topic.icon}`} aria-hidden="true"></i>
                  </div>
                  <h3>{topic.title}</h3>
                  <p>{topic.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="section-head reveal">
                <span className="section-label">Need More Help?</span>
                <h2 className="section-title">Talk to Our <span className="text-gradient">Team Directly</span></h2>
                <p className="section-subtitle">Can not find what you are looking for? Our support team is available Monday to Saturday, 10 AM – 7 PM IST.</p>
              </div>
              <ul className="list-unstyled d-flex flex-column gap-3 reveal reveal-delay-1">
                <li className="d-flex align-items-start gap-3">
                  <div className="trust-icon"><i className="bi bi-envelope" aria-hidden="true"></i></div>
                  <div>
                    <strong style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}>Email Support</strong>
                    <br />
                    <span className="text-muted">info@preyova.in — typically responds within 24 hours</span>
                  </div>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <div className="trust-icon"><i className="bi bi-telephone" aria-hidden="true"></i></div>
                  <div>
                    <strong style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}>Phone Support</strong>
                    <br />
                    <span className="text-muted">+91 63835 97098 — Monday to Saturday, 10 AM – 7 PM IST</span>
                  </div>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <div className="trust-icon"><i className="bi bi-whatsapp" aria-hidden="true"></i></div>
                  <div>
                    <strong style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}>WhatsApp</strong>
                    <br />
                    <span className="text-muted">Quick responses for existing clients and urgent queries</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <CtaPanel
                className="reveal-right"
                orb="orb-2"
                title={<>Have a <span className="text-gradient">Project Query?</span></>}
                subtitle="Reach out directly and we will get back to you within one business day."
                buttonLabel="Contact Us"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
