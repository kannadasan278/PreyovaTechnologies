import { Link } from 'react-router-dom'
import ProjectCard from '../sections/ProjectCard'
import { PROJECTS } from '../../data/projects'

export default function PortfolioPreview() {
  return (
    <section className="section section-tinted" id="portfolio">
      <div className="container">
        <div className="section-head center reveal">
          <span className="section-label">Our Work</span>
          <h2 className="section-title">Recent <span className="text-gradient">Projects</span></h2>
          <p className="section-subtitle">
            Sample project showcases for demonstration.
            <span className="placeholder-tag">Editable Placeholder</span>
          </p>
        </div>

        <div className="row g-4">
          {PROJECTS.slice(0, 3).map((project, i) => (
            <ProjectCard key={project.title} project={project} linkTo="/portfolio" delay={i} />
          ))}
        </div>

        <div className="text-center mt-5 reveal">
          <Link to="/portfolio" className="btn btn-navy">View All Projects <i className="bi bi-arrow-right"></i></Link>
        </div>
      </div>
    </section>
  )
}
