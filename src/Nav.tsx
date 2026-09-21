import { useEffect, useState } from 'react'
import { PROFILE } from './data'
import { Logo } from './Preloader'
import { ThemeToggle, type Theme } from './theme'

const LINKS = [
  ['about', 'About'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['contact', 'Contact'],
] as const

export default function Nav({ theme, toggleTheme }: { theme: Theme; toggleTheme: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a className="nav-brand" href="#home" onClick={() => setOpen(false)}>
          <Logo size={36} />
          <span className="nav-name">Saurav<span className="nav-dot">.</span>dev</span>
        </a>
        <button className="hamburger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          <span /><span /><span />
        </button>
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {LINKS.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <ThemeToggle theme={theme} toggle={toggleTheme} />
          <a className="nav-cta" href={`mailto:${PROFILE.email}`}>Hire Me</a>
        </nav>
      </div>
    </header>
  )
}