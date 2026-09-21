import { useEffect, useRef, useState } from 'react'

interface RadarItem {
  name: string
  pct: number
}

function catmullRom(points: [number, number][], closed = true): string {
  let d = ''
  const pts = closed ? points.concat(points.slice(0, 2)) : points
  for (let i = 0; i < (closed ? points.length : points.length - 1); i++) {
    const p0 = pts[(i - 1 + pts.length) % pts.length]
    const p1 = pts[i]
    const p2 = pts[(i + 1) % pts.length]
    const p3 = pts[(i + 2) % pts.length]
    const c1: [number, number] = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6]
    const c2: [number, number] = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6]
    d += `${i === 0 ? 'M' : 'C'}${(i === 0 ? p1 : c1).join(' ')}${i === 0 ? '' : ` ${c2.join(' ')} ${p2.join(' ')}`}`
  }
  if (closed) d += ' Z'
  return d
}

export default function RadarChart({ items }: { items: RadarItem[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setInView(true)),
      { threshold: 0.3 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const n = items.length
  const C = 260
  const R = 190
  const P = (i: number, v: number) => {
    const a = (-90 + (i * 360) / n) * (Math.PI / 180)
    return [C + Math.cos(a) * R * v, C + Math.sin(a) * R * v] as const
  }
  const vertexPts = items.map((_, i) => P(i, items[i].pct / 100))
  const envelope = catmullRom(vertexPts as [number, number][])

  const RINGS = [0.25, 0.5, 0.75, 1]
  const ticks: { x: number; y: number; major: boolean; key: string }[] = []
  for (let deg = 0; deg < 360; deg += 6) {
    const a = (deg * Math.PI) / 180
    const major = deg % 30 === 0
    ticks.push({
      x: C + Math.cos(a) * R,
      y: C + Math.sin(a) * R,
      major,
      key: `${deg}`,
    })
  }

  const wedge = (() => {
    const a0 = (-90 - 24) * (Math.PI / 180)
    const a1 = (-90 + 24) * (Math.PI / 180)
    const p1 = [C + Math.cos(a0) * R, C + Math.sin(a0) * R]
    const p2 = [C + Math.cos(a1) * R, C + Math.sin(a1) * R]
    return `260,260 ${p1.join(' ')} ${p2.join(' ')}`
  })()

  return (
    <div ref={ref} className={`radar-wrap ${inView ? 'in' : ''}`}>
      <svg viewBox="0 0 520 520" className="radar" role="img" aria-label="Futuristic holographic skills radar">
        <defs>
          <linearGradient id="radarFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" style={{ stopColor: 'var(--accent)', stopOpacity: 0.4 }} />
            <stop offset="0.55" style={{ stopColor: 'var(--accent-2)', stopOpacity: 0.34 }} />
            <stop offset="1" style={{ stopColor: 'var(--accent-3)', stopOpacity: 0.4 }} />
          </linearGradient>
          <linearGradient id="radarSweep" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" style={{ stopColor: 'var(--accent)', stopOpacity: 0 }} />
            <stop offset="1" style={{ stopColor: 'var(--accent)', stopOpacity: 0.4 }} />
          </linearGradient>
          <radialGradient id="radarHolo" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" style={{ stopColor: 'var(--accent)', stopOpacity: 0.12 }} />
            <stop offset="1" style={{ stopColor: 'var(--accent)', stopOpacity: 0 }} />
          </radialGradient>
        </defs>

        <g className={`radar-core ${inView ? 'in' : ''}`}>
          <circle cx={C} cy={C} r={R} fill="url(#radarHolo)" />
          {RINGS.map((v, i) => (
            <circle key={i} cx={C} cy={C} r={R * v} className={`radar-ring r${i}`} />
          ))}
          <path d={`M${C} ${C - R} V${C + R} M${C - R} ${C} H${C + R}`} className="radar-cross" />
          <g className="radar-ticks">
            {ticks.map((t) => (
              <circle key={t.key} cx={t.x} cy={t.y} r={t.major ? 2.6 : 1.4} className={t.major ? 'tick-major' : 'tick-minor'} />
            ))}
          </g>

          <g className="radar-sweep">
            <animateTransform attributeName="transform" type="rotate" from={`0 ${C} ${C}`} to={`360 ${C} ${C}`} dur="3.2s" repeatCount="indefinite" />
            <polygon points={wedge} fill="url(#radarSweep)" opacity="0.45" />
            <circle cx={C} cy={C - R} r="4" fill="var(--accent)" opacity="0.95" />
          </g>

          <g className="radar-envelope">
            <path d={envelope} className={`radar-blob ${inView ? 'in' : ''}`} fill="url(#radarFill)" style={{ stroke: 'var(--accent)' }} strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d={envelope} fill="none" style={{ stroke: 'var(--accent-3)' }} strokeWidth="1.1" strokeDasharray="4 8" strokeLinejoin="round" opacity="0.7" />
          </g>

          {items.map((it, i) => {
            const [x, y] = P(i, it.pct / 100)
            return (
              <g key={it.name} className="blip" style={{ animationDelay: `${i * 90}ms` }}>
                <circle cx={x} cy={y} r="3" className="blip-core" />
                <circle cx={x} cy={y} r="3" className="blip-ping">
                  <animate attributeName="r" values="3;18;3" dur="2.4s" begin={`${i * 0.35}s`} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.95;0;0.95" dur="2.4s" begin={`${i * 0.35}s`} repeatCount="indefinite" />
                </circle>
              </g>
            )
          })}

          <g className="radar-labels">
            {items.map((it, i) => {
              const [x, y] = P(i, 1.24)
              const anchor = Math.abs(x - C) < 12 ? 'middle' : x < C ? 'end' : 'start'
              const yShift = Math.abs(y - C) < 10 ? (y < C ? -3 : 16) : y < C ? -3 : 18
              return (
                <g key={`${it.name}-l`}>
                  <text x={x} y={y - yShift} textAnchor={anchor} className="radar-name">
                    {it.name}
                  </text>
                  <text x={x} y={y - yShift + 15} textAnchor={anchor} className="radar-pct">
                    {it.pct}%
                  </text>
                </g>
              )
            })}
          </g>
        </g>
      </svg>
      <p className="radar-legend">
        <span className="legend-dot" /> SKILLS TELEMETRY · HOLOGRAPHIC RADAR
      </p>
    </div>
  )
}