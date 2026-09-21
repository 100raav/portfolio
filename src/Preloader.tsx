function Logo({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" role="img" aria-label="SB monogram">
      <defs>
        <linearGradient id="lgLogo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#22d3ee" />
          <stop offset="0.5" stopColor="#a78bfa" />
          <stop offset="1" stopColor="#f472b6" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="#0a1020" stroke="#233150" />
      <rect x="8" y="8" width="84" height="84" rx="16" fill="none" stroke="url(#lgLogo)" strokeOpacity="0.5" />
      <text x="50" y="63" textAnchor="middle" fontSize="40" fontWeight="800" fill="url(#lgLogo)" fontFamily="Verdana">
        SB
      </text>
      <circle cx="50" cy="50" r="46" fill="none" stroke="url(#lgLogo)" strokeWidth="1" strokeDasharray="6 10" opacity="0.6">
        <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="10s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}

export function Preloader({ done }: { done: boolean }) {
  return (
    <div className={`preloader ${done ? 'hide' : ''}`} aria-hidden={done}>
      <div className="preloader-inner">
        <Logo size={84} />
        <div className="loader-bar">
          <div className="loader-fill" />
        </div>
        <p>INITIALIZING PORTFOLIO</p>
      </div>
    </div>
  )
}

export { Logo }