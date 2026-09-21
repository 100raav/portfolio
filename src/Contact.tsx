import { PROFILE, SOCIALS } from './data'
import Reveal from './Reveal'

const GLYPH: Record<string, string> = {
  github: 'GH',
  linkedin: 'in',
  leetcode: 'LC',
  gfg: 'GfG',
  wos: 'WoS',
  orcid: 'or',
}

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <Reveal>
        <div className="sec-head">
          <span className="sec-tag">06 · Contact</span>
          <h2>
            Let's Build <span className="grad">Together</span>
          </h2>
          <p className="sec-sub">Open to full-time roles, internships, freelance and open-source collaborations. I reply fast.</p>
        </div>
      </Reveal>

      <div className="contact-grid">
        <Reveal>
          <div className="contact-cards">
            {SOCIALS.map((s, i) => (
              <a key={s.label} className="contact-card" href={s.url} target="_blank" rel="noreferrer" style={{ animationDelay: `${i * 60}ms` }}>
                <span className="contact-glyph">{GLYPH[s.icon] || '→'}</span>
                <span className="contact-label">{s.label}</span>
                <span className="contact-arrow">↗</span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="contact-cta">
            <h3>Hire me on email</h3>
            <p>{PROFILE.email}</p>
            <a className="btn btn-primary" href={`mailto:${PROFILE.email}?subject=Let's%20build%20together`}>
              <span>Email Me</span>
            </a>
            <p className="contact-note">
              Full-stack engineer · Java · Spring Boot · React · Node.js. Remote-friendly, based in India.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}