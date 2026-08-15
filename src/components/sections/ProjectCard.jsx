import { Link } from 'react-router-dom'

export default function ProjectCard({ project, linkTo, delay = 0, revealClass, style }) {
  const revealCls = revealClass || (delay === 0 ? 'reveal' : `reveal reveal-delay-${delay}`)

  return (
    <div
      className={`col-md-6 col-lg-4 project-item ${revealCls}`}
      data-category={project.category}
      style={style}
    >
      <article className="project-card">
        <div className="project-thumb">
          <span className="pt-badge">{project.badge}</span>
          <img src={project.img} alt={project.alt} width="1280" height="800" loading="lazy" />
        </div>
        <div className="project-body">
          <h3>{project.title}</h3>
          <p>{project.desc}</p>
          <div className="tech-badges">
            {project.techs.map((t) => (
              <span className="tech-badge" key={t}>{t}</span>
            ))}
          </div>
          <Link to={linkTo} className="btn btn-sm btn-outline-navy btn-project">
            View Project <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </article>
    </div>
  )
}
