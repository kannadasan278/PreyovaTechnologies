import { TESTIMONIALS } from '../../data/home'

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="section-head center reveal">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What Clients <span className="text-gradient">Say</span></h2>
          <p className="section-subtitle">
            Client voices coming soon.
            <span className="placeholder-tag">Editable Placeholder</span>
          </p>
        </div>

        <div className="row g-4">
          {TESTIMONIALS.map((t, i) => (
            <div className={`col-md-6 col-lg-4 reveal${i === 0 ? '' : ` reveal-delay-${i}`}`} key={i}>
              <div className="testimonial-card">
                <i className="bi bi-quote quote" aria-hidden="true"></i>
                <p className="quote-text">&ldquo;{t.quote}&rdquo;</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar" aria-hidden="true">{t.avatar}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
