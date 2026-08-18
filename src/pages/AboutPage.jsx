import { Helmet } from 'react-helmet-async'
import PageHero from '../components/layout/PageHero'
import CtaPanel from '../components/layout/CtaPanel'
import AboutVisual from '../components/sections/AboutVisual'
import WhyCard from '../components/sections/WhyCard'
import { HOME_VALUES, ABOUT_VALUES, ABOUT_APPROACH } from '../data/home'

const ROWS = [
  { icon: 'bi-lightbulb', title: 'Innovation First', small: 'Ideas engineered into products' },
  { icon: 'bi-gem', title: 'Quality Driven', small: 'Clean, maintainable code' },
  { icon: 'bi-shield-check', title: 'Security Aware', small: 'Secure by design, always' },
  { icon: 'bi-people', title: 'Client Focused', small: 'Success measured by outcomes' },
]

const CODE = (
  <>
    <b>// Company essence</b><br />
    <i>const</i> preyova = {'{'}<br />
    &nbsp;&nbsp;vision: <span style={{ color: '#6EE7B7' }}>{`'build. innovate. scale.'`}</span>,<br />
    &nbsp;&nbsp;core: [<span style={{ color: '#22D3EE' }}>{`'quality', 'trust', 'growth'`}</span>]<br />
    {'}'};
  </>
)

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | Preyova Technologies</title>
        <meta name="description" content="Learn about Preyova Technologies — a technology and software solutions company focused on building modern, scalable, secure and business-oriented digital solutions." />
        <meta name="keywords" content="about Preyova, software company, IT solutions company, technology partner, Chennai" />
        <link rel="canonical" href="https://www.preyova.in/about" />
      </Helmet>

      <PageHero
        label="About Preyova"
        title={<>About <span className="text-gradient">Preyova Technologies</span></>}
        lead="A technology and software solutions company focused on building modern, scalable, secure, and business-oriented digital solutions."
        current="About"
      />

      <section className="section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="section-head reveal">
                <span className="section-label">Who We Are</span>
                <h2 className="section-title">Technology Built Around <span className="text-gradient">Your Business</span></h2>
                <p className="section-subtitle">At Preyova Technologies, we combine technology, creativity, and business understanding to build digital solutions that solve real-world challenges.</p>
              </div>
              <div className="reveal reveal-delay-1">
                <p>We are a team of engineers, designers, and strategists who believe technology should be practical, reliable, and purpose-driven. Instead of applying one-size-fits-all templates, we design each solution around your goals, your users, and your operations.</p>
                <p>From early-stage ideas to complex enterprise workflows, we help businesses modernize, automate, and grow through software that is built to last.</p>
              </div>
              <div className="row g-3 mt-2">
                {HOME_VALUES.map((v) => (
                  <div className="col-sm-6 reveal reveal-delay-2" key={v.title}>
                    <div className="value-card">
                      <div className="v-icon"><i className={`bi ${v.icon}`} aria-hidden="true"></i></div>
                      <h3>{v.title}</h3>
                      <p>{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6">
              <AboutVisual
                rows={ROWS}
                badgeIcon="bi-people"
                badgeText="Client-First"
                code={CODE}
                className="reveal reveal-right"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="container">
          <div className="section-head center reveal">
            <span className="section-label">Core Values</span>
            <h2 className="section-title">What We Stand <span className="text-gradient">For</span></h2>
            <p className="section-subtitle">The principles that guide every project and every decision we make.</p>
          </div>

          <div className="row g-4">
            {ABOUT_VALUES.map((card, i) => (
              <div className={`col-md-6 col-lg-3 reveal${i === 0 ? '' : ` reveal-delay-${i}`}`} key={card.num}>
                <WhyCard {...card} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="section-head reveal">
                <span className="section-label">Our Approach</span>
                <h2 className="section-title">Partners in Your <span className="text-gradient">Growth</span></h2>
                <p className="section-subtitle">We don&apos;t just deliver projects — we build long-term technology partnerships.</p>
              </div>
              <ul className="list-unstyled d-flex flex-column gap-3 reveal reveal-delay-1">
                {ABOUT_APPROACH.map((item) => (
                  <li className="d-flex align-items-start gap-3" key={item.title}>
                    <div className="trust-icon"><i className={`bi ${item.icon}`} aria-hidden="true"></i></div>
                    <div>
                      <strong style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}>{item.title}</strong>
                      <br />
                      <span className="text-muted">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6">
              <CtaPanel
                className="reveal-right"
                title={<>Let&apos;s Build Your <span className="text-gradient">Next Product</span></>}
                subtitle="Tell us what you're trying to achieve and let's map the path together."
                buttonLabel="Start a Project"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
