import { useEffect, useState } from 'react'
import { PROFILE } from './data'
import { useTheme } from './theme'
import { Preloader } from './Preloader'
import Nav from './Nav'
import Hero from './Hero'
import About from './About'
import Focus from './Focus'
import Experience from './Experience'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'

export default function App() {
  const { theme, toggle } = useTheme()
  const [booted, setBooted] = useState(false)

  useEffect(() => {
    const t = setInterval(() => setBooted(true), 1600)
    return () => clearInterval(t)
  }, [])

  return (
    <>
      <Preloader done={booted} />
      <div className="bg-circuit" aria-hidden />
      <div className="bg-veil" aria-hidden />
      <Nav theme={theme} toggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <Focus />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <span>
          © {new Date().getFullYear()} <b>Saurav Bichha</b> · Full-Stack Software Engineer
        </span>
        <a href={PROFILE.github} target="_blank" rel="noreferrer">
          github.com/{PROFILE.username}
        </a>
      </footer>
    </>
  )
}