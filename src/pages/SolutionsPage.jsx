import { Helmet } from 'react-helmet-async'
import PageHero from '../components/layout/PageHero'
import CtaPanel from '../components/layout/CtaPanel'
import WhyCard from '../components/sections/WhyCard'
import { SOLUTIONS, OUTCOME_CARDS } from '../data/solutions'

export default function SolutionsPage() {
  return (
    <>
      <Helmet>
        <title>Digital Solutions | CRM, ERP, E-Commerce &amp; More | Preyova Technologies</title>
        <meta name="description" content="Explore Preyova Technologies solutions: business management software, CRM, ERP, e-commerce platforms, inventory management, custom web apps, mobile apps and automation." />
        <meta name="keywords" content="CRM solutions, ERP solutions, e-commerce platform, inventory management software, business management software, automation, Preyova" />
        <link rel="canonical" href="https://www.preyova.in/solutions" />
      </Helmet>

      <PageHero
        label="Our Solutions"
        title={<>Digital Solutions for <span className="text-gradient">Growing Businesses</span></>}
        lead="Purpose-built platforms and applications that streamline operations, connect systems, and help your business scale with confidence."
        current="Solutions"
      />

      <section className="section">
        <div className="container">
          <div className="row g-4">
            {SOLUTIONS.map((sol, i) => (
              <div className={`col-lg-6 reveal${i % 2 === 0 ? '' : ' reveal-delay-1'}`} key={sol.title}>
                <article className="solution-card">
                  <div className="solution-icon"><i className={`bi ${sol.icon}`} aria-hidden="true"></i></div>
                  <div>
                    <h3>{sol.title}</h3>
                    <p>{sol.descFull}</p>
                    <ul className="list-unstyled d-flex flex-column gap-1 mt-2 mb-0 small text-muted">
                      {sol.features.map((f) => (
                        <li key={f}>
                          <i className="bi bi-check2 icon-check me-2" aria-hidden="true"></i>{f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </div>
            ))}
          </div>

          <p className="text-center text-muted mt-4 mb-0 reveal">
            <i className="bi bi-info-circle me-2" aria-hidden="true"></i>Each solution is customized for your industry, team size, and workflows.
          </p>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="container">
          <div className="section-head center reveal">
            <span className="section-label">Outcome Driven</span>
            <h2 className="section-title">Every Solution Is Built To Deliver <span className="text-gradient">Results</span></h2>
            <p className="section-subtitle">We design solutions around measurable outcomes — efficiency, visibility, growth, and control.</p>
          </div>
          <div className="row g-4">
            {OUTCOME_CARDS.map((card, i) => (
              <div className={`col-md-6 col-lg-3 reveal${i === 0 ? '' : ` reveal-delay-${i}`}`} key={card.num}>
                <WhyCard {...card} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <CtaPanel
            badge="Let's Collaborate"
            title={<>Have an Idea? Let&apos;s Build It <span className="text-gradient">Together.</span></>}
            subtitle="Tell us about your business challenge, product idea, or technology requirement. Our team will help you shape it into a scalable solution."
            buttonLabel="Start a Conversation"
            image={{ src: '/images/cta-tech.png', alt: 'Illustration of a web and mobile technology solution', width: 900, height: 640 }}
          />
        </div>
      </section>
    </>
  )
}
