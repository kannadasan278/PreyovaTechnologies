import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import TechSphere from './TechSphere'
import { TECH_CATEGORIES } from '../../data/technologies'

const HERO_TECH_LABELS = ['React', 'Next.js', 'Node.js', 'Express.js', 'Laravel', 'MongoDB', 'MySQL', 'PostgreSQL', 'Flutter', 'React Native', 'AWS', 'Docker']
const HERO_TECH = HERO_TECH_LABELS
  .map((label) => TECH_CATEGORIES.flatMap((c) => c.chips).find((chip) => chip.label === label))
  .filter(Boolean)

const SPHERE_ICONS = [
  { cls: 'bi-cloud', pos: 'i-1' },
  { cls: 'bi-shield-check', pos: 'i-2' },
  { cls: 'bi-database', pos: 'i-3' },
  { cls: 'bi-cpu', pos: 'i-4' },
  { cls: 'bi-robot', pos: 'i-5' },
  { cls: 'bi-lightning-charge-fill', pos: 'i-6' },
]

export default function Hero2026() {
  const heroRef = useRef(null)
  const stageRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    const stage = stageRef.current
    if (!hero) return undefined

    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const hoverOk = window.matchMedia && window.matchMedia('(hover: hover)').matches

    let io = null
    let entranceTimer = null

    const startEntrance = () => {
      if (hero.classList.contains('hero-ready')) return
      hero.classList.add('hero-ready')
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          hero.classList.add('hero-in')
        })
      })
    }

    if (!reduceMotion && 'IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              startEntrance()
              io.disconnect()
            }
          })
        },
        { threshold: 0.1 },
      )
      io.observe(hero)
      entranceTimer = window.setTimeout(startEntrance, 1600)
    } else {
      startEntrance()
    }

    const onMove = (e) => {
      if (!stage) return
      const rect = stage.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1
      stage.style.setProperty('--mx', x.toFixed(3))
      stage.style.setProperty('--my', y.toFixed(3))
    }
    const onLeave = () => {
      if (!stage) return
      stage.style.setProperty('--mx', '0')
      stage.style.setProperty('--my', '0')
    }

    if (hoverOk && !reduceMotion && stage) {
      stage.addEventListener('mousemove', onMove, { passive: true })
      stage.addEventListener('mouseleave', onLeave)
    }

    return () => {
      if (io) io.disconnect()
      if (entranceTimer) window.clearTimeout(entranceTimer)
      if (stage) {
        stage.removeEventListener('mousemove', onMove)
        stage.removeEventListener('mouseleave', onLeave)
      }
    }
  }, [])

  return (
    <section className="hero hero-2026" id="home" aria-label="Introduction" ref={heroRef}>
      <div className="hero-grid" aria-hidden="true"></div>
      <div className="hero-vignette" aria-hidden="true"></div>

      <div className="container position-relative hero-content">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span className="badge-pill"><span className="dot"></span> Build. Innovate. Scale.</span>
            <h1 className="hero-title">We Build Software That <span className="text-gradient">Drives Growth</span></h1>
            <p className="hero-lead">Preyova Technologies helps businesses transform ideas into scalable, secure software — web, mobile, and enterprise solutions engineered for the modern market.</p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-gradient btn-lg">Start a Project <i className="bi bi-arrow-right"></i></Link>
              <Link to="/services" className="btn btn-outline-light btn-lg">Explore Services</Link>
            </div>
            <div className="hero-chips">
              <span className="hero-chip"><i className="bi bi-braces"></i> Modern Stack</span>
              <span className="hero-chip"><i className="bi bi-shield-check"></i> Secure</span>
              <span className="hero-chip"><i className="bi bi-graph-up-arrow"></i> Scalable</span>
              <span className="hero-chip"><i className="bi bi-headset"></i> Supported</span>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="hero-stage tech-sphere-stage" aria-hidden="true" ref={stageRef}>
              <TechSphere />
              {HERO_TECH.map((chip, i) => (
                <div className={`sphere-chip s-c-${i + 1}`} key={chip.label}>
                  <div className="sphere-chip-in">
                    <div className="sphere-chip-body">
                      <span className={`tech-monogram ${chip.cls}`}>{chip.monogram}</span>
                      <span className="sphere-chip-label">{chip.label}</span>
                    </div>
                  </div>
                </div>
              ))}
              {SPHERE_ICONS.map((ic) => (
                <div className={`sphere-icon ${ic.pos}`} key={ic.pos}>
                  <span className="sphere-icon-in"><i className={`bi ${ic.cls}`} aria-hidden="true"></i></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
