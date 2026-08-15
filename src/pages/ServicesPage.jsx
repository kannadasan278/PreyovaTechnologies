import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import PageHero from '../components/layout/PageHero'
import CtaPanel from '../components/layout/CtaPanel'
import ServiceMock from '../components/sections/ServiceMock'
import { SERVICES, SERVICE_INDEX_CARDS } from '../data/services'

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Our Services | Web, Mobile &amp; Software Development | Preyova Technologies</title>
        <meta name="description" content="Preyova Technologies offers web development, mobile app development, custom software, UI/UX design, e-commerce, API integration, cloud deployment and support services." />
        <meta name="keywords" content="web development services, mobile app development, custom software development, UI UX design, e-commerce solutions, API integration, cloud deployment, Preyova" />
        <link rel="canonical" href="https://www.preyova.in/services" />
      </Helmet>

      <PageHero
        label="Our Services"
        title={<>Technology Services for <span className="text-gradient">Modern Business</span></>}
        lead="From concept to launch and beyond — a complete range of software services delivered with a business-first mindset."
        current="Services"
      />

      <section className="section section-tinted">
        <div className="container">
          <div className="row g-4">
            {SERVICE_INDEX_CARDS.map((card, i) => (
              <div className={`col-md-6 col-lg-3 reveal${i === 0 ? '' : ` reveal-delay-${i}`}`} key={card.id}>
                <div className="service-card">
                  <div className="s-icon"><i className={`bi ${card.icon}`} aria-hidden="true"></i></div>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                  <Link className="service-link" to={`/services#${card.id}`}>Learn More <i className="bi bi-arrow-right"></i></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {SERVICES.map((service, i) => {
        const even = i % 2 === 1
        const hasTechs = service.techs.length > 0
        return (
          <section
            className={`section${even ? ' section-tinted' : ''}`}
            id={service.id}
            key={service.id}
          >
            <div className="container">
              <div className="row align-items-center g-5">
                <div className={`col-lg-6${even ? ' order-lg-2' : ''}`}>
                  <div className="section-head reveal">
                    <span className="section-label">{service.num}</span>
                    <h2 className="section-title">{service.titleBefore} <span className="text-gradient">{service.titleGradient}</span></h2>
                    <p className="section-subtitle">{service.subtitle}</p>
                  </div>
                  <ul className="list-unstyled d-flex flex-column gap-2 reveal reveal-delay-1">
                    {service.features.map((f) => (
                      <li className="d-flex align-items-start gap-2" key={f}>
                        <i className="bi bi-check-circle-fill icon-check mt-1" aria-hidden="true"></i> {f}
                      </li>
                    ))}
                  </ul>
                  {hasTechs && (
                    <div className="tech-chips mt-4 reveal reveal-delay-2">
                      {service.techs.map((t) => (
                        <span className="tech-chip" key={t.label}>
                          <span className={`tech-monogram ${t.cls}`}>{t.monogram}</span> {t.label}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className={`mt-4 reveal${hasTechs ? ' reveal-delay-3' : ' reveal-delay-2'}`}>
                    <Link to="/contact" className="btn btn-gradient">{service.cta} <i className="bi bi-arrow-right"></i></Link>
                  </div>
                </div>
                <div className={`col-lg-6${even ? ' order-lg-1' : ''}`}>
                  <div className={`about-visual reveal${even ? ' reveal-left' : ' reveal-right'}`}>
                    <ServiceMock mock={service.mock} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      <section className="section">
        <div className="container">
          <CtaPanel
            title={<>Not Sure Which Service You Need? <span className="text-gradient">Let&apos;s Discuss.</span></>}
            subtitle="Tell us about your business challenge and we'll recommend the right approach."
            buttonLabel="Start a Conversation"
          />
        </div>
      </section>
    </>
  )
}
