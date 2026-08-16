import { useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import useScrollHeader from '../../hooks/useScrollHeader'
import useActiveSection from '../../hooks/useActiveSection'
import { NAV_LINKS } from '../../data/site'

export default function Header() {
  const { pathname } = useLocation()
  const collapseRef = useRef(null)
  useScrollHeader()
  const activeId = useActiveSection(pathname)

  useEffect(() => {
    const collapse = collapseRef.current
    if (!collapse) return undefined
    const onClick = (e) => {
      if (e.target.closest('a') && collapse.classList.contains('show')) {
        const toggler = document.querySelector('.navbar-toggler')
        if (toggler) toggler.click()
      }
    }
    collapse.addEventListener('click', onClick)
    return () => collapse.removeEventListener('click', onClick)
  }, [])

  const navLinkClass = ({ isActive }) => `nav-link${isActive ? ' active' : ''}`
  const techActive = pathname === '/' && activeId === 'technologies'

  return (
    <header className="site-header" id="siteHeader">
      <nav className="navbar navbar-expand-lg" aria-label="Main navigation">
        <div className="container">
          <Link className="navbar-brand" to="/" aria-label="Preyova Technologies - Home">
            <span className="brand-mark">
              <img src="/logo-light.png" alt="Preyova Technologies" className="logo-img" width="182" height="40" />
            </span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNav" ref={collapseRef}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
              {NAV_LINKS.map((link) =>
                link.hashLink ? (
                  <li className="nav-item" key={link.to}>
                    <Link
                      to={link.to}
                      className={`nav-link${techActive ? ' active' : ''}`}
                      aria-current={techActive ? 'page' : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                ) : (
                  <li className="nav-item" key={link.to}>
                    <NavLink to={link.to} end={link.end} className={navLinkClass}>
                      {link.label}
                    </NavLink>
                  </li>
                ),
              )}
            </ul>
            <Link to="/contact" className="btn btn-gradient nav-cta">Let&apos;s Talk</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
