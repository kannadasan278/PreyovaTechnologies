import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import PageHero from '../components/layout/PageHero'
import CtaPanel from '../components/layout/CtaPanel'

const DOC_SECTIONS = [
  {
    icon: 'bi-rocket',
    title: 'Quick Start Guide',
    desc: 'Everything you need to know to get started with your project — from initial consultation to kickoff.',
    items: ['Project inquiry process', 'Scope & proposal workflow', 'Onboarding checklist', 'Communication channels'],
  },
  {
    icon: 'bi-code-square',
    title: 'Development Workflow',
    desc: 'How we build software — our processes, tools, and quality standards at every stage.',
    items: ['Git branching strategy', 'Code review process', 'CI/CD pipeline setup', 'Staging & production'],
  },
  {
    icon: 'bi-folder2-open',
    title: 'Project Delivery',
    desc: 'What to expect at each milestone and how we ensure smooth handoffs and launches.',
    items: ['Milestone definitions', 'Testing & QA process', 'Deployment procedures', 'Post-launch support'],
  },
  {
    icon: 'bi-key',
    title: 'API & Integration',
    desc: 'Technical documentation for APIs, third-party integrations, and webhooks we deliver.',
    items: ['REST API conventions', 'Authentication methods', 'Webhook payloads', 'Rate limiting'],
  },
]

const TECH_DOCS = [
  { label: 'React / Next.js', icon: 'bi-braces', desc: 'Frontend architecture and component patterns' },
  { label: 'Node.js / Express', icon: 'bi-hexagon', desc: 'Backend services and middleware' },
  { label: 'PHP / Laravel', icon: 'bi-filetype-php', desc: 'Laravel project structure and conventions' },
  { label: 'MongoDB', icon: 'bi-database', desc: 'Schema design and query patterns' },
  { label: 'MySQL / PostgreSQL', icon: 'bi-database', desc: 'Relational schema and migrations' },
  { label: 'Docker / AWS', icon: 'bi-cloud', desc: 'Containerization and cloud deployment' },
]

export default function DocsPage() {
  return (
    <>
      <Helmet>
        <title>Documentation | Developer Docs | Preyova Technologies</title>
        <meta name="description" content="Technical documentation and guides for Preyova Technologies projects — development workflow, API references, deployment guides, and technology stack docs." />
        <meta name="keywords" content="documentation, developer docs, API reference, tech docs, Preyova Technologies" />
        <link rel="canonical" href="https://www.preyova.in/docs" />
      </Helmet>

      <PageHero
        label="Documentation"
        title={<>Technical <span className="text-gradient">Documentation</span></>}
        lead="Guides, references, and best practices for working with our team and technology stack."
        current="Documentation"
      />

      <section className="section">
        <div className="container">
          <div className="section-head center reveal">
            <span className="section-label">Project Docs</span>
            <h2 className="section-title">How We <span className="text-gradient">Work</span></h2>
            <p className="section-subtitle">Standardized processes that keep every project transparent, on-track, and high quality.</p>
          </div>
          <div className="row g-4">
            {DOC_SECTIONS.map((section, i) => (
              <div className={`col-md-6 reveal${i === 0 ? '' : ` reveal-delay-${Math.min(i, 3)}`}`} key={section.title}>
                <div className="doc-card">
                  <div className="doc-card-header">
                    <div className="doc-card-icon">
                      <i className={`bi ${section.icon}`} aria-hidden="true"></i>
                    </div>
                    <h3>{section.title}</h3>
                  </div>
                  <p>{section.desc}</p>
                  <ul className="doc-card-list">
                    {section.items.map((item) => (
                      <li key={item}><i className="bi bi-check2" aria-hidden="true"></i> {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="container">
          <div className="section-head center reveal">
            <span className="section-label">Tech Stack</span>
            <h2 className="section-title">Technology <span className="text-gradient">References</span></h2>
            <p className="section-subtitle">Quick links to official docs and our project-specific patterns for each technology.</p>
          </div>
          <div className="row g-3">
            {TECH_DOCS.map((tech, i) => (
              <div className={`col-sm-6 col-lg-4 reveal${i === 0 ? '' : ` reveal-delay-${Math.min(i, 3)}`}`} key={tech.label}>
                <div className="tech-doc-card">
                  <i className={`bi ${tech.icon}`} aria-hidden="true"></i>
                  <div>
                    <strong>{tech.label}</strong>
                    <br />
                    <span className="text-muted">{tech.desc}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="section-head reveal">
                <span className="section-label">Need Help?</span>
                <h2 className="section-title">Can Not Find What You Need?</h2>
                <p className="section-subtitle">Our team is available to answer technical questions and provide project-specific documentation.</p>
              </div>
              <div className="d-flex gap-3 mt-3 reveal reveal-delay-1">
                <Link to="/support" className="btn btn-gradient">Visit Support <i className="bi bi-arrow-right"></i></Link>
                <Link to="/contact" className="btn btn-outline-light">Contact Us</Link>
              </div>
            </div>
            <div className="col-lg-6">
              <CtaPanel
                className="reveal-right"
                orb="orb-1"
                title={<>Ready to Start <span className="text-gradient">Building?</span></>}
                subtitle="Let us turn your idea into a well-architected, production-ready product."
                buttonLabel="Start a Project"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
