import { Link } from 'react-router-dom'
import { SOLUTIONS } from '../../data/solutions'

export default function SolutionCards() {
  return (
    <section className="section" id="solutions">
      <div className="container">
        <div className="section-head center reveal">
          <span className="section-label">Solutions</span>
          <h2 className="section-title">Digital Solutions for <span className="text-gradient">Growing Businesses</span></h2>
          <p className="section-subtitle">Purpose-built products that streamline operations, connect systems, and drive results.</p>
        </div>

        <div className="row g-4">
          {SOLUTIONS.map((sol, i) => (
            <div className={`col-md-6 reveal${i % 2 === 0 ? '' : ' reveal-delay-1'}`} key={sol.title}>
              <div className="solution-card">
                <div className="solution-icon"><i className={`bi ${sol.icon}`} aria-hidden="true"></i></div>
                <div>
                  <h3>{sol.title}</h3>
                  <p>{sol.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5 reveal">
          <Link to="/solutions" className="btn btn-navy">Explore Solutions <i className="bi bi-arrow-right"></i></Link>
        </div>
      </div>
    </section>
  )
}
