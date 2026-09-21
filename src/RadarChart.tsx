import { useEffect, useRef, useState } from 'react'

interface RadarItem {
  name: string
  pct: number
}

export default function RadarChart({ items }: { items: RadarItem[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setInView(true))
      },
      { threshold: 0.35 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const n = items.length
  const C = 260
  const R = 185
  const P = (i: number, v: number) => {
    const a = (-90 + (i * 360) / n) * (Math.PI / 180)
    return [C + Math.cos(a) * R * v, C + Math.sin(a) * R * v] as const
  }
  const poly = items.map((_, i) => P(i, items[i].pct / 100).join(',')).join(' ')
  const rings = [0.25, 0.5, 0.75, 1].map((v) =>
    items.map((_, i) => P(i, v).join(',')).join(' '),
  )

  return (
    <div ref={ref} className={`radar-wrap ${inView ? 'in' : ''}`}>
      <svg viewBox="0 0 520 520" className="radar" role="img" aria-label="Core skills radar chart">
        <defs>
          <linearGradient id="radarFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" style={{ stopColor: 'var(--accent)', stopOpacity: 0.55 }} />
            <stop offset="0.55" style={{ stopColor: 'var(--accent-2)', stopOpacity: 0.45 }} />
            <stop offset="1" style={{ stopColor: 'var(--accent-3)', stopOpacity: 0.5 }} />
          </linearGradient>
        </defs>

        {rings.map((pts, i) => (
          <polygon key={i} points={pts} className="radar-ring" />
        ))}

        <g className="radar-axes">
          {items.map((it, i) => {
            const [x, y] = P(i, 1)
            return <line key={it.name} x1={C} y1={C} x2={x} y2={y} />
          })}
        </g>

        <g className={`radar-blob ${inView ? 'in' : ''}`}>
          <polygon points={poly} fill="url(#radarFill)" style={{ stroke: 'var(--accent)' }} strokeWidth="2.4" strokeLinejoin="round" />
        </g>

        {items.map((it, i) => {
          const [x, y] = P(i, it.pct / 100)
          return <circle key={it.name} cx={x} cy={y} r="4.4" className="radar-dot" />
        })}

        <g className="radar-labels">
          {items.map((it, i) => {
            const [x, y] = P(i, 1.22)
            const anchor = Math.abs(x - C) < 12 ? 'middle' : x < C ? 'end' : 'start'
            const yShift = Math.abs(y - C) < 12 ? (y < C ? -6 : 14) : y < C ? -4 : 18
            return (
              <g key={`${it.name}-l`}>
                <text x={x} y={y - yShift} textAnchor={anchor} className="radar-name">
                  {it.name}
                </text>
                <text x={x} y={y - yShift + 16} textAnchor={anchor} className="radar-pct">
                  {it.pct}%
                </text>
              </g>
            )
          })}
        </g>
      </svg>
    </div>
  )
}