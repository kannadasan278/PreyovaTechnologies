import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PlaceholderLink from './PlaceholderLink'
import useWhatsApp from '../../hooks/useWhatsApp'
import {
  SOCIAL_PLACEHOLDERS,
  FOOTER_COMPANY_LINKS,
  FOOTER_SERVICE_LINKS,
  FOOTER_RESOURCE_LINKS,
} from '../../data/site'

export default function Footer() {
  const { url: waUrl } = useWhatsApp()

  useEffect(() => {
    const yearEl = document.getElementById('footerYear')
    if (yearEl) yearEl.textContent = new Date().getFullYear()
  }, [])

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="container position-relative">
          <div className="row g-4">
            <div className="col-lg-4 footer-brand">
              <Link className="navbar-brand" to="/" aria-label="Preyova Technologies - Home">
                <span className="brand-mark">
                  <img src="/logo-light.png" alt="Preyova Technologies" className="logo-img" width="164" height="36" />
                </span>
              </Link>
              <p>Technology that drives your business forward. Modern software, web, and mobile solutions built to scale.</p>
              <div className="footer-social">
                {SOCIAL_PLACEHOLDERS.map((s) =>
                  s.href ? (
                    <a key={s.icon} href={s.href} target="_blank" rel="noopener" aria-label={s.label}>
                      <i className={`bi ${s.icon}`}></i>
                    </a>
                  ) : (
                    <PlaceholderLink key={s.icon} href="#" aria-label={s.label}>
                      <i className={`bi ${s.icon}`}></i>
                    </PlaceholderLink>
                  ),
                )}
                <a href={waUrl} target="_blank" rel="noopener" aria-label="WhatsApp (placeholder number)">
                  <i className="bi bi-whatsapp"></i>
                </a>
              </div>
            </div>

            <div className="col-6 col-lg-2">
              <h4 className="footer-title">Company</h4>
              <ul className="footer-links">
                {FOOTER_COMPANY_LINKS.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to}><i className="bi bi-chevron-right"></i> {link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-6 col-lg-3">
              <h4 className="footer-title">Services</h4>
              <ul className="footer-links">
                {FOOTER_SERVICE_LINKS.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to}><i className="bi bi-chevron-right"></i> {link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-3">
              <h4 className="footer-title">Resources</h4>
              <ul className="footer-links">
                {FOOTER_RESOURCE_LINKS.map((link) => (
                  <li key={link.label}>
                    {link.placeholder ? (
                      <PlaceholderLink href={`#${link.id}`} disabled>
                        <i className="bi bi-chevron-right"></i> {link.label}
                      </PlaceholderLink>
                    ) : (
                      <Link to={link.to}><i className="bi bi-chevron-right"></i> {link.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container position-relative">
          <div className="row align-items-center g-2">
            <div className="col-md-8">
              <p className="mb-0">© <span id="footerYear">2026</span> Preyova Technologies. All Rights Reserved.</p>
            </div>
            <div className="col-md-4 text-md-end">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <span className="mx-2" style={{ color: 'rgba(255,255,255,.25)' }}>|</span>
              <Link to="/terms-conditions">Terms &amp; Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
