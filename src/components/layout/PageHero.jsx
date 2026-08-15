import { Link } from 'react-router-dom'

export default function PageHero({ label, title, lead, current }) {
  return (
    <section className="page-hero">
      <div className="hero-grid" aria-hidden="true"></div>
      <div className="orb orb-1" aria-hidden="true"></div>
      <div className="container position-relative">
        <span className="section-label light">{label}</span>
        <h1 className="page-title">{title}</h1>
        <p className="page-lead">{lead}</p>
        <nav aria-label="Breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">{current}</li>
          </ol>
        </nav>
      </div>
    </section>
  )
}
