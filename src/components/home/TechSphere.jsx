import { useEffect, useRef } from 'react'

const BLUE = [37, 99, 235]
const CYAN = [34, 211, 238]
const WHITE = [240, 250, 255]
const POINTS = 1000
const LINK_MAX_D2 = 0.16 * 0.16
const RING_SEG = 72
const FOCAL = 3.1
const STEP = 0.016

const RING_DEFS = [
  { nx: 0, ny: 0.96, nz: -0.28, radius: 1.62, speed: 0.16, dots: 3 },
  { nx: 0.78, ny: 0.1, nz: 0.62, radius: 1.46, speed: -0.21, dots: 2 },
  { nx: -0.42, ny: 0.88, nz: 0.2, radius: 1.3, speed: 0.27, dots: 2 },
]

export default function TechSphere({ globalMode = false }) {
  const wrapRef = useRef(null)
  const canvasRef = useRef(null)
  const globalModeRef = useRef(globalMode)

  useEffect(() => {
    globalModeRef.current = globalMode
  }, [globalMode])

  useEffect(() => {
    const wrap = wrapRef.current
    const cv = canvasRef.current
    if (!wrap || !cv || !cv.getContext) return undefined

    const ctx = cv.getContext('2d')
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const reduceMotion = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)

    let W = 0
    let H = 0
    let R = 200
    let raf = 0
    let running = false
    let time = 0
    let speedMult = 1
    const mouse = { x: 0.5, y: 0.5 }
    const mousePx = { x: -9999, y: -9999, active: false }

    const pts = []
    const golden = Math.PI * (3 - Math.sqrt(5))
    for (let i = 0; i < POINTS; i++) {
      const y = 1 - (i / (POINTS - 1)) * 2
      const r = Math.sqrt(Math.max(0, 1 - y * y))
      const th = golden * i
      const rand = Math.random()
      pts.push({
        x: Math.cos(th) * r,
        y,
        z: Math.sin(th) * r,
        sx: 0,
        sy: 0,
        zz: 0,
        sc: 1,
        isBlue: rand < 0.7,
        isCyan: rand >= 0.7 && rand < 0.84,
        isHub: i % 55 === 0,
        ph: Math.random() * Math.PI * 2,
        sp: 0.35 + Math.random() * 1.1,
      })
    }

    const links = []
    for (let i = 0; i < POINTS; i++) {
      const a = pts[i]
      for (let j = i + 1; j < POINTS; j++) {
        const b = pts[j]
        const dx = a.x - b.x
        const dy = a.y - b.y
        const dz = a.z - b.z
        if (dx * dx + dy * dy + dz * dz < LINK_MAX_D2) links.push([i, j])
      }
    }

    const rings = RING_DEFS.map((def) => {
      let ux = 1
      let uy = 0
      let uz = 0
      const dot = ux * def.nx + uy * def.ny + uz * def.nz
      ux -= def.nx * dot
      uy -= def.ny * dot
      uz -= def.nz * dot
      const ulen = Math.sqrt(ux * ux + uy * uy + uz * uz) || 1
      ux /= ulen
      uy /= ulen
      uz /= ulen
      const vx = def.ny * uz - def.nz * uy
      const vy = def.nz * ux - def.nx * uz
      const vz = def.nx * uy - def.ny * ux
      const seg = []
      for (let k = 0; k < RING_SEG; k++) {
        const a = (k / RING_SEG) * Math.PI * 2
        const ca = Math.cos(a)
        const sa = Math.sin(a)
        seg.push({ x: ux * ca + vx * sa, y: uy * ca + vy * sa, z: uz * ca + vz * sa })
      }
      return {
        seg,
        xs: new Float32Array(RING_SEG),
        ys: new Float32Array(RING_SEG),
        radius: def.radius,
        speed: def.speed,
        dots: def.dots,
      }
    })

    const ambient = []
    for (let i = 0; i < 42; i++) {
      const th = Math.random() * Math.PI * 2
      const ph = Math.acos(2 * Math.random() - 1)
      ambient.push({
        u: Math.sin(ph) * Math.cos(th),
        v: Math.cos(ph),
        w: Math.sin(ph) * Math.sin(th),
        k: 1.2 + Math.random() * 1.1,
        r: 0.5 + Math.random() * 1.2,
        a: 0.25 + Math.random() * 0.45,
        ph: Math.random() * Math.PI * 2,
        sp: 0.2 + Math.random() * 0.6,
      })
    }

    const sparks = []
    const packets = []
    let sparkTimer = 0.4
    let packetTimer = 1.2

    function resize() {
      const rect = wrap.getBoundingClientRect()
      W = Math.max(1, Math.round(rect.width))
      H = Math.max(1, Math.round(rect.height))
      cv.width = W * dpr
      cv.height = H * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      R = Math.min(W, H) * 0.42
    }

    function render() {
      if (!W || !H) return
      const tw = time * 0.6
      const cx = W / 2
      const cy = H / 2
      const rotY = time * 0.22 + 0.6 + (mouse.x - 0.5) * 0.4
      const rotX = 0.35 + Math.sin(time * 0.1) * 0.08 + (mouse.y - 0.5) * -0.25
      const zoom = 1 + Math.sin(time * 0.18) * 0.02
      const parX = (mouse.x - 0.5) * -14
      const parY = (mouse.y - 0.5) * -9
      const RR = R * zoom
      const cxr = cx + parX
      const cyr = cy + parY
      const cosY = Math.cos(rotY)
      const sinY = Math.sin(rotY)
      const cosX = Math.cos(rotX)
      const sinX = Math.sin(rotX)

      ctx.clearRect(0, 0, W, H)

      const pulse = 1 + Math.sin(time * 0.9) * 0.06 + (speedMult > 1.5 ? (speedMult - 1) * 0.18 : 0)
      const glowR = RR * (2.4 + Math.sin(time * 0.7) * 0.1 + (speedMult > 1.5 ? (speedMult - 1) * 0.6 : 0))
      const g = ctx.createRadialGradient(cxr, cyr, RR * 0.2, cxr, cyr, glowR)
      g.addColorStop(0, 'rgba(' + BLUE[0] + ',' + BLUE[1] + ',' + BLUE[2] + ',' + (0.2 * pulse).toFixed(3) + ')')
      g.addColorStop(0.55, 'rgba(' + BLUE[0] + ',' + BLUE[1] + ',' + BLUE[2] + ',' + (0.06 * pulse).toFixed(3) + ')')
      g.addColorStop(1, 'rgba(' + BLUE[0] + ',' + BLUE[1] + ',' + BLUE[2] + ',0)')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, W, H)

      const core = ctx.createRadialGradient(cxr, cyr, RR * 0.1, cxr, cyr, RR)
      core.addColorStop(0, 'rgba(' + BLUE[0] + ',' + BLUE[1] + ',' + BLUE[2] + ',0.12)')
      core.addColorStop(0.7, 'rgba(' + BLUE[0] + ',' + BLUE[1] + ',' + BLUE[2] + ',0.04)')
      core.addColorStop(1, 'rgba(' + BLUE[0] + ',' + BLUE[1] + ',' + BLUE[2] + ',0)')
      ctx.fillStyle = core
      ctx.beginPath()
      ctx.arc(cxr, cyr, RR, 0, Math.PI * 2)
      ctx.fill()

      const RAY = 110
      for (let i = 0; i < POINTS; i++) {
        const p = pts[i]
        const y1 = p.y * cosX - p.z * sinX
        const z1 = p.y * sinX + p.z * cosX
        const x2 = p.x * cosY + z1 * sinY
        const z2 = -p.x * sinY + z1 * cosY
        const sc = FOCAL / (FOCAL - z2)
        p.sx = cxr + x2 * RR * sc
        p.sy = cyr + y1 * RR * sc
        p.zz = z2
        p.sc = sc

        if (mousePx.active) {
          const mdx = p.sx - mousePx.x
          const mdy = p.sy - mousePx.y
          const md2 = mdx * mdx + mdy * mdy
          if (md2 < RAY * RAY && md2 > 0.01) {
            const inv = 1 / Math.sqrt(md2)
            const push = (1 - Math.sqrt(md2) / RAY) * 8
            p.sx += mdx * inv * push
            p.sy += mdy * inv * push
          }
        }
      }

      ctx.lineWidth = 1.15
      ctx.lineCap = 'round'
      for (let i = 0; i < links.length; i++) {
        const a = pts[links[i][0]]
        const b = pts[links[i][1]]
        if (a.zz < -0.05 || b.zz < -0.05) continue
        const alpha = (Math.min(a.zz, b.zz) + 1) * 0.5 * 0.42
        ctx.strokeStyle = 'rgba(' + BLUE[0] + ',' + BLUE[1] + ',' + BLUE[2] + ',' + alpha.toFixed(3) + ')'
        ctx.beginPath()
        ctx.moveTo(a.sx, a.sy)
        ctx.lineTo(b.sx, b.sy)
        ctx.stroke()
      }

      for (let i = 0; i < POINTS; i++) {
        const p = pts[i]
        if (p.zz < -0.97) continue
        const twinkle = 0.5 + 0.5 * Math.sin(tw * p.sp + p.ph)
        const depth = (p.zz + 1) * 0.5
        const hubBoost = p.isHub ? 1.65 : 1
        const rad = (0.7 + p.sc * 0.55) * (p.isBlue ? 1.1 : 0.85) * hubBoost
        const base = p.isCyan ? CYAN : (p.isBlue ? BLUE : WHITE)
        const alpha = (0.14 + 0.6 * depth * twinkle) * (p.isHub ? 1.25 : 1)
        if (p.isHub) {
          ctx.fillStyle = 'rgba(' + CYAN[0] + ',' + CYAN[1] + ',' + CYAN[2] + ',' + (0.18 * depth).toFixed(3) + ')'
          ctx.beginPath()
          ctx.arc(p.sx, p.sy, rad * 2.4, 0, Math.PI * 2)
          ctx.fill()
        }
        ctx.fillStyle = 'rgba(' + base[0] + ',' + base[1] + ',' + base[2] + ',' + alpha.toFixed(3) + ')'
        ctx.beginPath()
        ctx.arc(p.sx, p.sy, rad, 0, Math.PI * 2)
        ctx.fill()
      }

      for (let ri = 0; ri < rings.length; ri++) {
        const ring = rings[ri]
        const rad = RR * ring.radius
        const seg = ring.seg
        for (let k = 0; k < RING_SEG; k++) {
          const s = seg[k]
          const y1 = s.y * cosX - s.z * sinX
          const z1 = s.y * sinX + s.z * cosX
          const x2 = s.x * cosY + z1 * sinY
          const z2 = -s.x * sinY + z1 * cosY
          const sc = FOCAL / (FOCAL - z2)
          ring.xs[k] = cxr + x2 * rad * sc
          ring.ys[k] = cyr + y1 * rad * sc
        }

        ctx.strokeStyle = 'rgba(' + BLUE[0] + ',' + BLUE[1] + ',' + BLUE[2] + ',0.13)'
        ctx.lineWidth = 1
        ctx.beginPath()
        for (let k = 0; k <= RING_SEG; k++) {
          const idx = k % RING_SEG
          if (k === 0) ctx.moveTo(ring.xs[idx], ring.ys[idx])
          else ctx.lineTo(ring.xs[idx], ring.ys[idx])
        }
        ctx.stroke()

        const travel = ((time * ring.speed * (0.6 + speedMult * 0.4)) % 1 + 1) % 1
        for (let d = 0; d < ring.dots; d++) {
          const pos = (travel + d / ring.dots) % 1
          const k = Math.floor(pos * RING_SEG) % RING_SEG
          const k2 = (k + 1) % RING_SEG
          const f = pos * RING_SEG - k
          const dx = ring.xs[k] + (ring.xs[k2] - ring.xs[k]) * f
          const dy = ring.ys[k] + (ring.ys[k2] - ring.ys[k]) * f
          ctx.fillStyle = 'rgba(' + CYAN[0] + ',' + CYAN[1] + ',' + CYAN[2] + ',0.95)'
          ctx.beginPath()
          ctx.arc(dx, dy, 1.5, 0, Math.PI * 2)
          ctx.fill()
          ctx.fillStyle = 'rgba(' + CYAN[0] + ',' + CYAN[1] + ',' + CYAN[2] + ',0.3)'
          ctx.beginPath()
          ctx.arc(dx, dy, 3.1, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      packetTimer -= STEP
      const maxPackets = speedMult > 1.5 ? 14 : 6
      if (packetTimer <= 0 && packets.length < maxPackets && links.length) {
        packetTimer = (0.9 + Math.random() * 1.4) / speedMult
        const li = Math.floor(Math.random() * links.length)
        const a = pts[links[li][0]]
        const b = pts[links[li][1]]
        if (a.zz > -0.2 || b.zz > -0.2) {
          packets.push({ link: li, t: 0, speed: (0.005 + Math.random() * 0.006) * speedMult })
        }
      }
      for (let i = packets.length - 1; i >= 0; i--) {
        const pk = packets[i]
        pk.t += pk.speed
        if (pk.t >= 1) {
          packets.splice(i, 1)
          continue
        }
        const a = pts[links[pk.link][0]]
        const b = pts[links[pk.link][1]]
        const ix = a.sx + (b.sx - a.sx) * pk.t
        const iy = a.sy + (b.sy - a.sy) * pk.t
        ctx.fillStyle = 'rgba(' + CYAN[0] + ',' + CYAN[1] + ',' + CYAN[2] + ',0.95)'
        ctx.beginPath()
        ctx.arc(ix, iy, 1.5, 0, Math.PI * 2)
        ctx.fill()
        ctx.fillStyle = 'rgba(' + CYAN[0] + ',' + CYAN[1] + ',' + CYAN[2] + ',0.3)'
        ctx.beginPath()
        ctx.arc(ix, iy, 3.6, 0, Math.PI * 2)
        ctx.fill()
      }

      sparkTimer -= STEP
      const maxSparks = speedMult > 1.5 ? 28 : 16
      if (sparkTimer <= 0 && sparks.length < maxSparks) {
        sparkTimer = (0.3 + Math.random() * 0.4) / speedMult
        const p = pts[Math.floor(Math.random() * POINTS)]
        if (p.zz > -0.3) {
          sparks.push({
            x: p.sx,
            y: p.sy,
            vx: (Math.random() - 0.5) * 0.7,
            vy: (Math.random() - 0.5) * 0.7,
            life: 1,
            ttl: 0.7 + Math.random() * 0.6,
            r: 0.8 + Math.random() * 1.5,
          })
        }
      }
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i]
        s.life -= STEP / s.ttl
        s.x += s.vx
        s.y += s.vy
        if (s.life <= 0) {
          sparks.splice(i, 1)
          continue
        }
        ctx.fillStyle = 'rgba(' + CYAN[0] + ',' + CYAN[1] + ',' + CYAN[2] + ',' + (0.55 * s.life).toFixed(3) + ')'
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r + (1 - s.life) * 1.6, 0, Math.PI * 2)
        ctx.fill()
      }

      for (let i = 0; i < ambient.length; i++) {
        const a = ambient[i]
        const twinkle = 0.5 + 0.5 * Math.sin(tw * a.sp + a.ph)
        const dist = R * a.k
        const ax = a.u + Math.sin(time * 0.08 + i) * 0.05
        const ay = a.v + Math.cos(time * 0.07 + i) * 0.05
        const az = a.w
        const y1 = ay * cosX - az * sinX
        const z1 = ay * sinX + az * cosX
        const x2 = ax * cosY + z1 * sinY
        const z2 = -ax * sinY + z1 * cosY
        const sc = FOCAL / (FOCAL - z2)
        const sx = cxr + x2 * dist * sc
        const sy = cyr + y1 * dist * sc
        const depth = (z2 + 1) * 0.5
        const alpha = a.a * (0.3 + 0.7 * twinkle) * (0.4 + 0.6 * depth)
        ctx.fillStyle = 'rgba(' + CYAN[0] + ',' + CYAN[1] + ',' + CYAN[2] + ',' + alpha.toFixed(3) + ')'
        ctx.beginPath()
        ctx.arc(sx, sy, a.r, 0, Math.PI * 2)
        ctx.fill()
      }

      if (mousePx.active) {
        const cg = ctx.createRadialGradient(mousePx.x, mousePx.y, 0, mousePx.x, mousePx.y, 130)
        cg.addColorStop(0, 'rgba(' + BLUE[0] + ',' + BLUE[1] + ',' + BLUE[2] + ',0.07)')
        cg.addColorStop(0.6, 'rgba(' + BLUE[0] + ',' + BLUE[1] + ',' + BLUE[2] + ',0.02)')
        cg.addColorStop(1, 'rgba(' + BLUE[0] + ',' + BLUE[1] + ',' + BLUE[2] + ',0)')
        ctx.fillStyle = cg
        ctx.fillRect(0, 0, W, H)
      }

      const rim = ctx.createRadialGradient(cxr, cyr, RR * 0.9, cxr, cyr, RR * 1.08)
      rim.addColorStop(0, 'rgba(' + BLUE[0] + ',' + BLUE[1] + ',' + BLUE[2] + ',0)')
      rim.addColorStop(0.5, 'rgba(' + BLUE[0] + ',' + BLUE[1] + ',' + BLUE[2] + ',' + (0.13 + (speedMult > 1.5 ? (speedMult - 1) * 0.12 : 0)).toFixed(3) + ')')
      rim.addColorStop(1, 'rgba(' + BLUE[0] + ',' + BLUE[1] + ',' + BLUE[2] + ',0)')
      ctx.fillStyle = rim
      ctx.fillRect(0, 0, W, H)
    }

    function loop() {
      if (!running) return
      const target = globalModeRef.current ? 3.5 : 1
      speedMult += (target - speedMult) * 0.06
      time += STEP * speedMult
      render()
      raf = requestAnimationFrame(loop)
    }

    function start() {
      if (running || reduceMotion) return
      running = true
      loop()
    }

    function stop() {
      running = false
      if (raf) {
        cancelAnimationFrame(raf)
        raf = 0
      }
    }

    let io = null
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) start()
            else stop()
          })
        },
        { threshold: 0.05 },
      )
      io.observe(wrap)
    }

    const onMove = (e) => {
      const rect = wrap.getBoundingClientRect()
      const px = e.clientX - rect.left
      const py = e.clientY - rect.top
      mouse.x = Math.min(1, Math.max(0, px / rect.width))
      mouse.y = Math.min(1, Math.max(0, py / rect.height))
      mousePx.x = px
      mousePx.y = py
      mousePx.active = true
    }
    const onLeave = () => {
      mouse.x = 0.5
      mouse.y = 0.5
      mousePx.active = false
    }
    const onResize = () => resize()

    const hoverOk = window.matchMedia && window.matchMedia('(hover: hover)').matches
    window.addEventListener('resize', onResize)
    if (hoverOk && !reduceMotion) {
      wrap.addEventListener('mousemove', onMove, { passive: true })
      wrap.addEventListener('mouseleave', onLeave)
    }

    resize()
    if (reduceMotion) {
      time = 1.2
      render()
    } else {
      start()
    }

    return () => {
      stop()
      if (io) io.disconnect()
      window.removeEventListener('resize', onResize)
      if (hoverOk && !reduceMotion) {
        wrap.removeEventListener('mousemove', onMove)
        wrap.removeEventListener('mouseleave', onLeave)
      }
    }
  }, [])

  return (
    <div className="tech-sphere-wrap" ref={wrapRef}>
      <canvas ref={canvasRef} aria-hidden="true"></canvas>
    </div>
  )
}
