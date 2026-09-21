import { useEffect, useState } from 'react'
import { PROFILE } from './data'
import { Preloader } from './Preloader'
import Nav from './Nav'
import Hero from './Hero'
import About from './About'
import Stats from './Stats'
import Experience from './Experience'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'

export default function App() {
  const [booted, setBooted] = useState(false)

  useEffect(() => {
    const t = setInterval(() => setBooted(true), 1600)
    return () => clearInterval(t)
  }, [])

  return (
    <>
      <Preloader done={booted} />
      <Nav />
      <main>
        <Hero />
        <About />
        <Stats />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <span>
          © {new Date().getFullYear()} <b>Saurav Bichha</b> · Design + code, built to production standard
        </span>
        <a href={PROFILE.github} target="_blank" rel="noreferrer">
          github.com/{PROFILE.username}
        </a>
      </footer>
    </>
  )
}