import { PROFILE, SOCIALS } from './data'
import { BrandIcon } from './brands'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <Reveal>
        <div className="sec-head">
          <span className="sec-tag">06 · Contact</span>
          <h2>
            Let's Build <span className="grad">Together</span>
          </h2>
          <p className="sec-sub">Open to full-time roles, internships, freelance and open-source collaborations. Reach out — I reply fast.</p>
        </div>
      </Reveal>

      <div className="contact-grid">
        <Reveal>
          <div className="brand-wrap">
            {SOCIALS.map((s, i) => (
              <a key={s.id} className={`brand-link ${s.id}`} href={s.url} target="_blank" rel="noreferrer" style={{ animationDelay: `${i * 70}ms` }}>
                <BrandIcon id={s.id} size={34} />
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="contact-cta">
            <h3>Hire me</h3>
            <a className="mail" href={`mailto:${PROFILE.email}?subject=Let's%20build%20together`}>{PROFILE.email}</a>
            <p className="contact-note">
              Full-Stack Software Engineer · Java · Spring Boot · React · TypeScript · Node.js. Based in Pigauna, Jaleshwor-11, Mahottari, Nepal.
            </p>
            <a className="btn btn-primary" href={`mailto:${PROFILE.email}?subject=Let's%20build%20together`}>
              <span>Email Me</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}