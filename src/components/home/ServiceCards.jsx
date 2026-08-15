import { Link } from 'react-router-dom'
import { HOME_SERVICE_CARDS } from '../../data/home'

export default function ServiceCards() {
  return (
    <section className="section section-tinted" id="services">
      <div className="container">
        <div className="section-head center reveal">
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Our Technology <span className="text-gradient">Services</span></h2>
          <p className="section-subtitle">End-to-end digital capabilities delivered with a modern, business-first approach.</p>
        </div>

        <div className="row g-4">
          {HOME_SERVICE_CARDS.map((card, i) => (
            <div className={`col-md-6 col-lg-3 reveal${i % 4 === 0 ? '' : ` reveal-delay-${i % 4}`}`} key={card.title}>
              <div className="service-card">
                <div className="s-icon"><i className={`bi ${card.icon}`} aria-hidden="true"></i></div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <Link className="service-link" to={card.to}>Learn More <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5 reveal">
          <Link to="/services" className="btn btn-outline-navy">View All Services <i className="bi bi-arrow-right"></i></Link>
        </div>
      </div>
    </section>
  )
}
