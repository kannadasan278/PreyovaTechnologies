import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Hero2026() {
  const heroRef = useRef(null)
  const stageRef = useRef(null)
  const cardRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    const stage = stageRef.current
    const card = cardRef.current
    const canvas = canvasRef.current
    if (!hero) return undefined

    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const hoverOk = window.matchMedia && window.matchMedia('(hover: hover)').matches

    let io = null
    let entranceTimer = null
    const disposers = []

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

    if (!reduceMotion) {
      if (canvas && canvas.getContext) {
        disposers.push(initParticles(canvas, hero))
      }
      if (stage && card && hoverOk) {
        disposers.push(initTilt(stage, card))
      }
    }

    return () => {
      if (io) io.disconnect()
      if (entranceTimer) window.clearTimeout(entranceTimer)
      disposers.forEach((dispose) => {
        if (dispose) dispose()
      })
    }
  }, [])

  return (
    <section className="hero hero-2026" id="home" aria-label="Introduction" ref={heroRef}>
      <div className="hero-aurora aurora-b" aria-hidden="true"></div>
      <canvas className="particle-field" aria-hidden="true" ref={canvasRef}></canvas>
      <div className="hero-floor" aria-hidden="true"></div>
      <div className="hero-beam" aria-hidden="true"></div>
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
            <div className="hero-stage" id="heroStage" ref={stageRef}>
              <div className="halo" aria-hidden="true"></div>
              <div className="orbit-ring" aria-hidden="true"></div>

              <div className="platform-card" id="platformCard" aria-hidden="true" ref={cardRef}>
                <div className="pc-bar">
                  <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                  <span className="pc-url"></span>
                  <span className="pc-status"><i className="bi bi-circle-fill"></i> Live</span>
                </div>
                <div className="pc-body">
                  <div className="pc-side">
                    <span className="s-line strong"></span>
                    <span className="s-line"></span>
                    <span className="s-line"></span>
                    <span className="s-line"></span>
                    <span className="s-line"></span>
                  </div>
                  <div className="pc-main">
                    <div className="pc-kpis">
                      <div className="pc-kpi"><span className="kpi-ico"><i className="bi bi-graph-up-arrow"></i></span><span className="kpi-txt">Scalable</span></div>
                      <div className="pc-kpi"><span className="kpi-ico"><i className="bi bi-shield-check"></i></span><span className="kpi-txt">Secure</span></div>
                      <div className="pc-kpi"><span className="kpi-ico"><i className="bi bi-lightning-charge-fill"></i></span><span className="kpi-txt">Fast</span></div>
                    </div>
                    <div className="pc-chart">
                      <svg className="pc-line" viewBox="0 0 220 70" preserveAspectRatio="none" aria-hidden="true">
                        <defs>
                          <linearGradient id="lgLine" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0" stopColor="#2563EB" />
                            <stop offset="1" stopColor="#22D3EE" />
                          </linearGradient>
                        </defs>
                        <polyline className="line-path" points="0,60 28,52 56,56 84,40 112,44 140,24 168,28 220,8" />
                      </svg>
                      <span className="bar"></span><span className="bar"></span><span className="bar"></span>
                      <span className="bar"></span><span className="bar"></span><span className="bar"></span>
                      <span className="bar"></span><span className="bar hl"></span>
                    </div>
                    <div className="pc-code">
                      <span className="c1">const</span> <span className="c3">growth</span> <span className="c-dim">=</span> <span className="c2">build</span>
                      {'({'}<br />
                      &nbsp;&nbsp;<span className="c2">scale</span>: <span className="c4">true</span>, <span className="c2">secure</span>: <span className="c4">true</span>, <span className="c2">fast</span>: <span className="c4">true</span><br />
                      {'}'});
                    </div>
                  </div>
                </div>
              </div>

              <div className="hv-float hv-float-1"><i className="bi bi-shield-check"></i> Secure &amp; Scalable</div>
              <div className="hv-float hv-float-2"><i className="bi bi-headset"></i> 24/7 Support</div>
              <div className="hv-float hv-float-3"><i className="bi bi-robot"></i> Automation Ready</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function initParticles(cv, hero) {
  const ctx = cv.getContext('2d')
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  let W = 0
  let H = 0
  let nodes = []
  let raf = 0
  let running = true
  const mouse = { x: -9999, y: -9999 }

  function seed() {
    const target = Math.min(Math.max(Math.round((W * H) / 15000), 34), 80)
    nodes = []
    for (let i = 0; i < target; i++) {
      nodes.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.7 + 0.6,
      })
    }
  }

  function resize() {
    W = cv.clientWidth
    H = cv.clientHeight
    if (!W || !H) return
    cv.width = W * dpr
    cv.height = H * dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    seed()
  }

  function draw() {
    if (!running) return
    ctx.clearRect(0, 0, W, H)
    let i
    let j
    let a
    let b
    let dx
    let dy
    let dist2

    for (i = 0; i < nodes.length; i++) {
      a = nodes[i]
      dx = a.x - mouse.x
      dy = a.y - mouse.y
      dist2 = dx * dx + dy * dy
      if (dist2 < 140 * 140 && dist2 > 0.01) {
        const f = ((140 - Math.sqrt(dist2)) / 140) * 1.1
        a.x += (dx / Math.sqrt(dist2)) * f
        a.y += (dy / Math.sqrt(dist2)) * f
      }
      a.x += a.vx
      a.y += a.vy
      if (a.x < -24) a.x = W + 24
      else if (a.x > W + 24) a.x = -24
      if (a.y < -24) a.y = H + 24
      else if (a.y > H + 24) a.y = -24
    }

    for (i = 0; i < nodes.length; i++) {
      a = nodes[i]
      for (j = i + 1; j < nodes.length; j++) {
        b = nodes[j]
        dx = a.x - b.x
        dy = a.y - b.y
        dist2 = dx * dx + dy * dy
        if (dist2 < 118 * 118) {
          const alpha = (1 - Math.sqrt(dist2) / 118) * 0.5
          ctx.strokeStyle = 'rgba(125,175,255,' + alpha.toFixed(3) + ')'
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        }
      }
    }

    for (i = 0; i < nodes.length; i++) {
      a = nodes[i]
      ctx.fillStyle = 'rgba(190,220,255,0.85)'
      ctx.beginPath()
      ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2)
      ctx.fill()
    }
    raf = requestAnimationFrame(draw)
  }

  function stop() {
    running = false
    if (raf) {
      cancelAnimationFrame(raf)
      raf = 0
    }
  }

  function start() {
    if (running) return
    running = true
    draw()
  }

  const onResize = () => resize()
  const onScroll = () => {
    const rect = cv.getBoundingClientRect()
    if (rect.bottom < 0 || rect.top > window.innerHeight) stop()
    else start()
  }
  const onMouseMove = (e) => {
    const rect = cv.getBoundingClientRect()
    mouse.x = e.clientX - rect.left
    mouse.y = e.clientY - rect.top
  }
  const onMouseLeave = () => {
    mouse.x = -9999
    mouse.y = -9999
  }

  window.addEventListener('resize', onResize)
  window.addEventListener('scroll', onScroll, { passive: true })
  if (window.matchMedia('(hover: hover)').matches) {
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    hero.addEventListener('mouseleave', onMouseLeave)
  }

  resize()
  start()

  return function cleanup() {
    stop()
    window.removeEventListener('resize', onResize)
    window.removeEventListener('scroll', onScroll)
    if (window.matchMedia('(hover: hover)').matches) {
      window.removeEventListener('mousemove', onMouseMove)
      hero.removeEventListener('mouseleave', onMouseLeave)
    }
  }
}

function initTilt(stageEl, cardEl) {
  const maxTilt = 6

  const onMove = (e) => {
    const r = stageEl.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height

    cardEl.style.transition = 'transform .18s ease-out'
    cardEl.style.transform =
      'perspective(1000px) rotateX(' + ((0.5 - py) * maxTilt * 2).toFixed(2) +
      'deg) rotateY(' + ((px - 0.5) * maxTilt * 2).toFixed(2) + 'deg)'

    stageEl.style.transition = 'transform .25s ease-out'
    stageEl.style.transform =
      'translate3d(' + ((px - 0.5) * -14).toFixed(1) + 'px,' + ((py - 0.5) * -10).toFixed(1) + 'px,0)'
  }

  const onLeave = () => {
    cardEl.style.transition = 'transform .7s cubic-bezier(.22,.61,.36,1)'
    cardEl.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
    stageEl.style.transition = 'transform .7s cubic-bezier(.22,.61,.36,1)'
    stageEl.style.transform = 'translate3d(0,0,0)'
  }

  stageEl.addEventListener('mousemove', onMove)
  stageEl.addEventListener('mouseleave', onLeave)

  return function cleanup() {
    stageEl.removeEventListener('mousemove', onMove)
    stageEl.removeEventListener('mouseleave', onLeave)
  }
}
