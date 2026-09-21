import { useEffect, useState } from 'react'
import { PROFILE } from './data'
import { useTheme } from './theme'
import { Preloader } from './Preloader'
import Cinematic from './Cinematic'
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
  const [cinema, setCinema] = useState(false)
  const [cinemaLeaving, setCinemaLeaving] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setBooted(true), 1300)
    const t2 = setTimeout(() => setCinema(true), 1500)
    const t3 = setTimeout(() => setCinemaLeaving(true), 4200)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [])

  return (
    <>
      <Preloader done={booted} />
      <Cinematic show={cinema} leaving={cinemaLeaving} />
      <div className="grain" aria-hidden />
      <div className="vignette" aria-hidden />
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