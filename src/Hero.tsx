import { PROFILE } from './data'
import ParticleCanvas from './ParticleCanvas'
import Typewriter from './Typewriter'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <ParticleCanvas />
      <div className="hero-glow glow-a" />
      <div className="hero-glow glow-b" />
      <div className="hero-grid" />

      <div className="hero-content">
        <div className="hero-chip">
          <span className="pulse-dot" />
          OPEN TO WORK · REMOTE
        </div>
        <h1 className="hero-title">
          Hi, I'm <span className="grad">Saurav Bichha</span>
        </h1>
        <p className="hero-type">
          <Typewriter words={PROFILE.roles} />
        </p>
        <p className="hero-sub">
          Full-stack engineer building production-grade software end to end — REST &amp; ERP backends,
          responsive web apps, and developer tooling. Everything I ship is real, tested, documented and
          released in the open.
        </p>
        <div className="hero-badges">
          <span><b>28+</b> Repos</span>
          <span><b>8</b> Peer Reviews</span>
          <span><b>B.Tech</b> CSE</span>
          <span><b>Java</b> · Spring · React</span>
        </div>
        <div className="hero-cta">
          <a className="btn btn-primary" href="#projects"><span>View Projects</span></a>
          <a className="btn btn-ghost" href="#contact"><span>Hire Me</span></a>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden>
        <div className="mouse">
          <div className="wheel" />
        </div>
        <span>SCROLL</span>
      </div>
    </section>
  )
}