import { useEffect, useRef, useState } from 'react'

interface RadarItem {
  name: string
  pct: number
}

const WEB_LEVELS = [0.2, 0.4, 0.6, 0.8, 1]

export default function RadarChart({ items }: { items: RadarItem[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setInView(true)),
      { threshold: 0.35 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const n = items.length
  const C = 260
  const R = 186
  const P = (i: number, v: number) => {
    const a = (-90 + (i * 360) / n) * (Math.PI / 180)
    return [C + Math.cos(a) * R * v, C + Math.sin(a) * R * v] as const
  }
  const ringPoly = (v: number) => items.map((_, i) => P(i, v).join(',')).join(' ')
  const poly = items.map((_, i) => P(i, items[i].pct / 100).join(',')).join(' ')

  const ticks: { x: number; y: number; key: string }[] = []
  for (const v of WEB_LEVELS) {
    for (let i = 0; i < n; i++) {
      const [x, y] = P(i, v)
      ticks.push({ x, y, key: `${i}-${v}` })
    }
  }

  return (
    <div ref={ref} className={`radar-wrap ${inView ? 'in' : ''}`}>
      <svg viewBox="0 0 520 520" className="radar" role="img" aria-label="Tech stack as a spider-web radar chart">
        <defs>
          <linearGradient id="radarFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" style={{ stopColor: 'var(--accent)', stopOpacity: 0.5 }} />
            <stop offset="0.55" style={{ stopColor: 'var(--accent-2)', stopOpacity: 0.42 }} />
            <stop offset="1" style={{ stopColor: 'var(--accent-3)', stopOpacity: 0.46 }} />
          </linearGradient>
          <radialGradient id="radarNet" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" style={{ stopColor: 'var(--accent)', stopOpacity: 0.14 }} />
            <stop offset="1" style={{ stopColor: 'var(--accent)', stopOpacity: 0 }} />
          </radialGradient>
        </defs>

        <circle cx={C} cy={C} r={R} fill="url(#radarNet)" />

        <g className="radar-web">
          {WEB_LEVELS.map((v, idx) => (
            <polygon
              key={idx}
              points={ringPoly(v)}
              className={`radar-ring r${idx}`}
              style={{ fillOpacity: 0.03 + idx * 0.012 }}
            />
          ))}
        </g>

        <g className="radar-spokes">
          {items.map((it, i) => {
            const [x, y] = P(i, 1)
            return <line key={it.name} x1={C} y1={C} x2={x} y2={y} />
          })}
        </g>

        <g className="radar-ticks">
          {ticks.map((t) => (
            <circle key={t.key} cx={t.x} cy={t.y} r="2" />
          ))}
        </g>

        <circle cx={C} cy={C} r="6" className="radar-hub" />

        <g className={`radar-blob ${inView ? 'in' : ''}`}>
          <polygon points={poly} fill="url(#radarFill)" style={{ stroke: 'var(--accent)' }} strokeWidth="2.6" strokeLinejoin="round" />
          <polygon points={poly} fill="none" style={{ stroke: 'var(--accent-3)' }} strokeWidth="1.1" strokeDasharray="4 7" strokeLinejoin="round" opacity="0.75" />
        </g>

        {items.map((it, i) => {
          const [x, y] = P(i, it.pct / 100)
          return <circle key={it.name} cx={x} cy={y} r="5" className="radar-dot" />
        })}

        <g className="radar-labels">
          {items.map((it, i) => {
            const [x, y] = P(i, 1.2)
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
      </svg>
      <p className="radar-legend">CORE PROFICIENCY · 8 ENGINEERING DOMAINS</p>
    </div>
  )
}