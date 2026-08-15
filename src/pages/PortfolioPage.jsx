import { useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import PageHero from '../components/layout/PageHero'
import CtaPanel from '../components/layout/CtaPanel'
import ProjectCard from '../components/sections/ProjectCard'
import { PROJECTS, FILTERS } from '../data/projects'
import useFilteredProjects from '../hooks/useFilteredProjects'

export default function PortfolioPage() {
  const gridRef = useRef(null)
  const { filter, applyFilter } = useFilteredProjects(PROJECTS)

  useEffect(() => {
    const items = gridRef.current ? gridRef.current.querySelectorAll('.project-item') : []
    items.forEach((item) => {
      if (item.style.display !== 'none') {
        item.classList.remove('is-visible')
        void item.offsetWidth
        item.classList.add('is-visible')
      }
    })
  }, [filter])

  return (
    <>
      <Helmet>
        <title>Portfolio | Recent Projects | Preyova Technologies</title>
        <meta name="description" content="Explore sample projects by Preyova Technologies — e-commerce platforms, business management systems, mobile apps, inventory systems, corporate websites and web applications." />
        <meta name="keywords" content="Preyova portfolio, software projects, web projects, mobile apps, e-commerce projects, sample projects" />
        <link rel="canonical" href="https://www.preyova.in/portfolio" />
      </Helmet>

      <PageHero
        label="Our Portfolio"
        title={<>Recent <span className="text-gradient">Projects</span></>}
        lead={<>Sample project showcases for demonstration. <span className="placeholder-tag">Editable Placeholders</span></>}
        current="Portfolio"
      />

      <section className="section" id="portfolio">
        <div className="container">
          <div className="filter-bar reveal" role="group" aria-label="Filter projects by category">
            {FILTERS.map((f) => (
              <button
                type="button"
                className={`filter-btn${filter === f.key ? ' active' : ''}`}
                data-filter={f.key}
                aria-pressed={filter === f.key}
                key={f.key}
                onClick={() => applyFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="row g-4" id="projectGrid" ref={gridRef}>
            {PROJECTS.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                linkTo="/contact"
                revealClass="reveal"
                style={{ display: filter === 'all' || filter === project.category ? '' : 'none' }}
              />
            ))}
          </div>

          <p className="text-center text-muted mt-5 mb-0 reveal">
            <i className="bi bi-info-circle me-2" aria-hidden="true"></i>
            These are sample placeholders. Contact us to see work relevant to your industry.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <CtaPanel
            title={<>Want to Build Something <span className="text-gradient">Like This?</span></>}
            subtitle="Tell us about your product idea and let's turn it into a real, working solution."
            buttonLabel="Start a Project"
          />
        </div>
      </section>
    </>
  )
}
