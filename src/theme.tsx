import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'
const KEY = 'sb_portfolio_theme'

function initial(): Theme {
  const saved = localStorage.getItem(KEY)
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(initial)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem(KEY, theme)
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  return { theme, toggle }
}

export function ThemeToggle({ theme, toggle }: { theme: Theme; toggle: () => void }) {
  return (
    <button className="theme-toggle" onClick={toggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} title="Toggle theme">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        {theme === 'dark' ? (
          <>
            <circle cx="12" cy="12" r="4.6" stroke="currentColor" strokeWidth="1.8" />
            <path
              d="M12 2.6v2.4M12 19v2.4M2.6 12H5M19 12h2.4M5.3 5.3l1.7 1.7M17 17l1.7 1.7M18.7 5.3 17 7M7 17l-1.7 1.7"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </>
        ) : (
          <>
            <path d="M20.4 14.1A8.8 8.8 0 0 1 9.9 3.6a8.8 8.8 0 1 0 10.5 10.5Z" fill="currentColor" />
          </>
        )}
      </svg>
    </button>
  )
}