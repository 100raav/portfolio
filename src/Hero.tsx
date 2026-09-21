import { PROFILE } from './data'
import ParticleCanvas from './ParticleCanvas'
import Typewriter from './Typewriter'

const TERM_LINES = [
  { p: '$ whoami', o: 'saurav.bichha — full-stack engineer' },
  { p: '$ stack', o: 'Java · Spring Boot · React · TS · Node · SQL' },
  { p: '$ reviews', o: '8 peer reviews · Web of Science · Clarivate' },
  { p: '$ status', o: 'building production-grade software' },
]

function Terminal() {
  return (
    <div className="term" role="img" aria-label="Developer terminal">
      <div className="term-bar">
        <span className="term-dot" />
        <span className="term-dot" />
        <span className="term-dot" />
        <span className="term-title">sb@dev ~ bash</span>
      </div>
      <div className="term-body">
        {TERM_LINES.map((l, i) => (
          <div key={l.p} className="term-line" style={{ animationDelay: `${0.25 + i * 0.9}s` }}>
            <span className="term-prompt">{l.p}</span>
            <span className="term-out">{l.o}</span>
          </div>
        ))}
        <span className="term-caret" style={{ animationDelay: `${0.25 + TERM_LINES.length * 0.9}s` }} />
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      <ParticleCanvas />
      <div className="hero-glow glow-a" />
      <div className="hero-glow glow-b" />
      <div className="hero-grid" />
      <span className="hero-hairline hh-top" aria-hidden />
      <span className="hero-hairline hh-bottom" aria-hidden />
      <span className="glyph g1">&lt;/&gt;</span>
      <span className="glyph g2">{'{ }'}</span>
      <span className="glyph g3">⚙</span>
      <span className="glyph g4">[ ]</span>
      <span className="glyph g5">§</span>
      <span className="glyph g6">=</span>

      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-avatar">
            <img src="avatar.svg" alt="Saurav Bichha — profile photo" width={120} height={120} />
          </div>
          <div className="hero-overline">
            <span className="overline-bar" />
            <span>ENGINEER · JAVA · SPRING BOOT · REACT</span>
          </div>
          <h1 className="hero-title">
            Hi, I'm <span className="grad">Saurav Bichha</span>
          </h1>
          <p className="hero-type">
            <Typewriter words={PROFILE.roles} />
          </p>
          <p className="hero-sub">
            I design, build and ship production-grade software end to end — REST &amp; ERP backends,
            responsive web applications and developer tooling. Everything I deliver is real, tested,
            documented and released.
          </p>
          <div className="hero-badges">
            <span><b>Java</b> · Spring Boot</span>
            <span><b>React</b> · TypeScript</span>
            <span><b>Node.js</b> · SQL</span>
            <span><b>8</b> WoS Peer Reviews</span>
          </div>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#projects"><span>View Work</span></a>
            <a className="btn btn-ghost" href="#contact"><span>Get in Touch</span></a>
          </div>
        </div>

        <div className="hero-right">
          <Terminal />
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