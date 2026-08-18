import { Link } from 'react-router-dom'

export default function CtaPanel({ badge, title, subtitle, buttonLabel, image, orb = 'orb-1', className = '' }) {
  const cls = `cta-panel reveal${className ? ` ${className}` : ''}`

  return (
    <div className={cls}>
      <div className="cta-ring" aria-hidden="true"></div>
      <div className={orb} aria-hidden="true"></div>
      <div className="cta-glow" aria-hidden="true"></div>
      <div className="position-relative">
        {image ? (
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-lg-6">
              {badge && (
                <span className="badge-pill"><span className="dot"></span> {badge}</span>
              )}
              <h2>{title}</h2>
              {subtitle && <p>{subtitle}</p>}
              <Link to="/contact" className="btn btn-gradient btn-lg">
                {buttonLabel} <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="cta-visual">
                <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" />
              </div>
            </div>
          </div>
        ) : (
          <>
            <h2>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
            <Link to="/contact" className="btn btn-gradient btn-lg">
              {buttonLabel} <i className="bi bi-arrow-right"></i>
            </Link>
          </>
        )}
      </div>
      <span className="cta-chip chip-1" aria-hidden="true"><i className="bi bi-lightning-charge"></i></span>
      <span className="cta-chip chip-2" aria-hidden="true"><i className="bi bi-stars"></i></span>
      <span className="cta-chip chip-3" aria-hidden="true"><i className="bi bi-rocket-takeoff"></i></span>
    </div>
  )
}
