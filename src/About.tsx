import { HIGHLIGHTS } from './data'
import Reveal from './Reveal'

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
        <Reveal delay={100} className="about-card">
          <span className="card-num">SB</span>
          <h3>Computer &amp; Systems Engineer</h3>
          <p>
            I design and ship production-grade software across the full stack: CLI developer tools,
            REST &amp; ERP backends, and responsive web applications — with strong foundations in data
            structures, algorithms and the software development lifecycle. Open for full-time roles,
            internships and collaborations.
          </p>
          <ul className="about-highlights">
            {HIGHLIGHTS.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </Reveal>
        <div className="about-side">
          <Reveal delay={180}>
            <div className="mini-stat">
              <span className="mini-num grad">28+</span>
              <span>public repos · all real, all verifiable</span>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="mini-stat">
              <span className="mini-num grad">8</span>
              <span>peer reviews on Web of Science</span>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="mini-stat">
              <span className="mini-num grad">3+</span>
              <span>years building in the open since 2023</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}