import { TECH_CATEGORIES } from '../../data/technologies'

export default function Technologies() {
  return (
    <section className="section section-dark" id="technologies">
      <div className="container position-relative">
        <div className="section-head center reveal">
          <span className="section-label light">Tech Stack</span>
          <h2 className="section-title" style={{ color: '#fff' }}>Technologies We <span className="text-gradient">Work With</span></h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,.55)' }}>A modern, proven toolkit chosen for performance, maintainability, and long-term growth.</p>
        </div>

        <div className="tech-grid reveal">
          {TECH_CATEGORIES.map((cat, i) => (
            <div className={`tech-category-card${i === 0 ? '' : ` reveal-delay-${Math.min(i, 4)}`}`} key={cat.title}>
              <div className="tech-category-header">
                <div className="tech-category-icon">
                  <i className={`bi ${cat.icon}`} aria-hidden="true"></i>
                </div>
                <h3 className="tech-category-title">{cat.title}</h3>
              </div>
              <div className="tech-category-chips">
                {cat.chips.map((chip) => (
                  <span className="tech-chip-new" key={chip.label}>
                    <span className={`tech-chip-monogram ${chip.cls}`}>{chip.monogram}</span>
                    <span className="tech-chip-name">{chip.label}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="tech-note-new text-center reveal">
          <i className="bi bi-info-circle" aria-hidden="true"></i>
          This stack is presented as company capability. Tailored technology choices are recommended per project.
        </p>
      </div>
    </section>
  )
}
