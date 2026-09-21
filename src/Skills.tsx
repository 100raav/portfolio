import { RADAR, TECH_TILES } from './data'
import Reveal from './Reveal'
import RadarChart from './RadarChart'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <Reveal>
        <div className="sec-head">
          <span className="sec-tag">05 · Skills</span>
          <h2>
            Tech <span className="grad">Stack</span>
          </h2>
          <p className="sec-sub">Core strengths across the full stack — measured against real, shipped work.</p>
        </div>
      </Reveal>

      <div className="skills-grid">
        <Reveal className="radar-slot">
          <RadarChart items={RADAR} />
        </Reveal>
        <Reveal delay={120} className="tile-slot">
          <div className="tiles">
            {TECH_TILES.map(([id, label]) => (
              <div key={id} className="tile" title={label}>
                <img
                  src={id === 'html5' || id === 'css3'
                    ? `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${id}/${id}-original.svg`
                    : `https://skillicons.dev/icons?i=${id}`}
                  alt={label}
                  width={40}
                  loading="lazy"
                />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}