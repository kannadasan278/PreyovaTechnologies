import WhyCard from '../sections/WhyCard'
import { WHY_CARDS } from '../../data/home'

export default function WhyChooseUs() {
  return (
    <section className="section section-dark" id="why">
      <div className="hero-grid" aria-hidden="true"></div>
      <div className="orb orb-2" aria-hidden="true"></div>
      <div className="container position-relative">
        <div className="section-head center reveal">
          <span className="section-label light">Why Choose Us</span>
          <h2 className="section-title" style={{ color: '#fff' }}>Why Businesses Choose <span className="text-gradient">Preyova</span></h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,.6)' }}>A technology partner focused on outcomes, not just deliverables.</p>
        </div>

        <div className="row g-4">
          {WHY_CARDS.map((card, i) => (
            <div className={`col-md-6 col-lg-4 reveal${i % 3 === 0 ? '' : ` reveal-delay-${i % 3}`}`} key={card.num}>
              <WhyCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
