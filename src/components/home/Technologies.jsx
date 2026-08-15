import { TECH_CATEGORIES } from '../../data/technologies'

function TechColumn({ categories, delay = '' }) {
  return (
    <div className={`col-lg-6 reveal${delay}`}>
      {categories.map((cat) => (
        <div className="tech-category" key={cat.title}>
          <div className="tech-cat-title"><i className={`bi ${cat.icon}`} aria-hidden="true"></i> {cat.title}</div>
          <div className="tech-chips">
            {cat.chips.map((chip) => (
              <span className="tech-chip" key={chip.label}>
                <span className={`tech-monogram ${chip.cls}`}>{chip.monogram}</span> {chip.label}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Technologies() {
  return (
    <section className="section section-tinted" id="technologies">
      <div className="container">
        <div className="section-head center reveal">
          <span className="section-label">Tech Stack</span>
          <h2 className="section-title">Technologies We <span className="text-gradient">Work With</span></h2>
          <p className="section-subtitle">A modern, proven toolkit chosen for performance, maintainability, and long-term growth.</p>
        </div>

        <div className="row g-4">
          <TechColumn categories={TECH_CATEGORIES.filter((c) => c.title === 'Frontend' || c.title === 'Backend')} />
          <TechColumn
            delay="-delay-1"
            categories={TECH_CATEGORIES.filter((c) => c.title !== 'Frontend' && c.title !== 'Backend')}
          />
        </div>

        <p className="tech-note text-center reveal">
          <i className="bi bi-info-circle" aria-hidden="true"></i>
          This stack is presented as company capability. Tailored technology choices are recommended per project.
        </p>
      </div>
    </section>
  )
}
