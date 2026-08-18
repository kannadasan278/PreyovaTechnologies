import { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import TechSphere from './TechSphere'
import { TECH_CATEGORIES } from '../../data/technologies'

const DEFAULT_LABELS = ['React', 'Next.js', 'Node.js', 'Express.js', 'Laravel', 'MongoDB', 'MySQL', 'PostgreSQL', 'Flutter', 'React Native', 'AWS', 'Docker']
const NETWORK_LABELS = ['JavaScript', 'TypeScript', 'Python', 'PHP', 'Git', 'Linux', 'Cloud', 'HTML5', 'CSS3', 'Bootstrap', 'CI/CD', 'PostgreSQL']

function resolveChips(labels) {
  const all = TECH_CATEGORIES.flatMap((c) => c.chips)
  return labels.map((label) => all.find((chip) => chip.label === label)).filter(Boolean)
}

const SPHERE_ICONS = [
  { cls: 'bi-globe', pos: 'i-1' },
  { cls: 'bi-shield-check', pos: 'i-2' },
  { cls: 'bi-database', pos: 'i-3' },
  { cls: 'bi-cpu', pos: 'i-4' },
  { cls: 'bi-robot', pos: 'i-5' },
  { cls: 'bi-lightning-charge-fill', pos: 'i-6' },
]

export default function Hero2026() {
  const heroRef = useRef(null)
  const stageRef = useRef(null)
  const [globalMode, setGlobalMode] = useState(false)
  const [shuffled, setShuffled] = useState(false)
  const timerRef = useRef(null)

  const handleGlobalNetwork = useCallback(() => {
    if (globalMode) return
    setGlobalMode(true)
    setShuffled(true)
    timerRef.current = window.setTimeout(() => {
      setGlobalMode(false)
      setShuffled(false)
      timerRef.current = null
    }, 2800)
  }, [globalMode])

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current)
    }
  }, [])

  const chips = shuffled ? resolveChips(NETWORK_LABELS) : resolveChips(DEFAULT_LABELS)

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
    <section className={`hero hero-2026${globalMode ? ' hero-global-active' : ''}`} id="home" aria-label="Introduction" ref={heroRef}>
      <div className="hero-vignette" aria-hidden="true"></div>

      <div className="container position-relative hero-content">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span className="badge-pill"><span className="dot"></span> Build. Innovate. Scale.</span>
            <h1 className="hero-title">Building the <span className="text-gradient">Future</span> with Technology</h1>
            <p className="hero-lead">We craft software that accelerates business — engineered for performance, security, and scale. From idea to deployment, your vision built with precision.</p>
            <div className="hero-actions">
              <Link to="/services" className="btn btn-gradient btn-lg">Explore Our Services <i className="bi bi-arrow-right"></i></Link>
              <Link to="/contact" className="btn btn-outline-light btn-lg">Start a Project</Link>
            </div>
            <button
              type="button"
              className={`btn-network${globalMode ? ' btn-network-active' : ''}`}
              onClick={handleGlobalNetwork}
              disabled={globalMode}
              aria-label="Activate Global Technology Network"
            >
              <span className="btn-network-dot" aria-hidden="true"></span>
              <span className="btn-network-label">Global Technology Network</span>
            </button>
          </div>

          <div className="col-lg-6">
            <div className="hero-stage tech-sphere-stage" aria-hidden="true" ref={stageRef}>
              <TechSphere globalMode={globalMode} />
              {chips.map((chip, i) => (
                <div className={`sphere-chip s-c-${i + 1} ${shuffled ? 'sphere-chip-shuffled' : ''}`} key={chip.label}>
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
