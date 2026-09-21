import { SKILLS, TECH_TILES } from './data'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <Reveal>
        <div className="sec-head">
          <span className="sec-tag">05 · Skills</span>
          <h2>
            Tech <span className="grad">Stack</span>
          </h2>
        </div>
      </Reveal>

      <div className="skills-grid">
        {SKILLS.map((s, i) => (
          <Reveal key={s.name} delay={i * 40}>
            <div className="skill-bar">
              <div className="skill-top">
                <span>{s.name}</span>
                <span className="skill-pct">{s.pct}%</span>
              </div>
              <div className="skill-track">
                <div className="skill-fill" style={{ width: `${s.pct}%` }} />
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="tiles">
        {TECH_TILES.map(([id, label]) => (
          <Reveal key={id} delay={60}>
            <div className="tile" title={label}>
              <img
                src={id === 'html5' || id === 'css3'
                  ? `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${id}/${id}-original.svg`
                  : `https://skillicons.dev/icons?i=${id}`}
                alt={label}
                width={42}
                loading="lazy"
              />
              <span>{label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}