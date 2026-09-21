import { HIGHLIGHTS } from './data'
import Reveal from './Reveal'
import Typewriter from './Typewriter'

export default function About() {
  return (
    <section id="about" className="section">
      <Reveal>
        <div className="sec-head">
          <span className="sec-tag">01 · About</span>
          <h2>Profile <span className="grad">Summary</span></h2>
        </div>
      </Reveal>
      <div className="about-grid">
        <Reveal className="about-main">
          <div className="about-card">
            <img className="about-avatar" src="avatar.svg" alt="Saurav Bichha — profile photo" width={64} height={64} />
            <span className="card-num">{'</>'}</span>
            <h3>Computer &amp; Systems Engineer</h3>
            <p>
              I design and ship production-grade software across the full stack — CLI developer tools,
              REST &amp; ERP backends, and responsive web applications — with strong foundations in data
              structures, algorithms and the software development lifecycle. Continually building,
              reviewing and releasing in the open.
            </p>
          </div>
          <div className="summary-term">
            <div className="summary-head">
              <span className="summary-dot" />
              <span>$ summary — saurav.bichha</span>
            </div>
            <p className="summary-out">
              <span className="summary-prompt">› </span>
              <Typewriter words={HIGHLIGHTS} />
            </p>
            <div className="summary-scan" />
          </div>
        </Reveal>
        <div className="about-side">
          {[
            ['ROLE', 'Full-Stack Software Engineer'],
            ['DEGREE', 'B.Tech · CSE · Noida Int. Univ.'],
            ['REVIEWING', 'Web of Science · Clarivate'],
            ['BUILDING', 'In the open — since 2023'],
          ].map(([k, v], i) => (
            <Reveal key={k} delay={i * 90}>
              <div className="fact">
                <span className="fact-key">{k}</span>
                <span className="fact-val">{v}</span>
              </div>
            </Reveal>
          ))}
          <Reveal delay={380}>
            <a className="btn btn-ghost full" href="#contact"><span>Work With Me →</span></a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}