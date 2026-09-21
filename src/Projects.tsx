import { FEATURED, PROFILE } from './data'
import Reveal from './Reveal'

function RepoCard({ p, i }: { p: (typeof FEATURED)[number]; i: number }) {
  return (
    <a
      className="repo-card"
      href={`https://github.com/${PROFILE.username}/${p.name}`}
      target="_blank"
      rel="noreferrer"
      style={{ animationDelay: `${i * 90}ms` }}
    >
      <div className="repo-top">
        <span className="repo-glyph" style={{ color: p.color }}>{'</>'}</span>
        <span className="repo-name">{p.name}</span>
        <span className="repo-arrow">↗</span>
      </div>
      <p className="repo-desc">{p.desc}</p>
      <div className="repo-chips">
        {p.chips.map((c) => (
          <span key={c} className="repo-chip">{c}</span>
        ))}
      </div>
      <div className="repo-foot">
        <span className="repo-lang"><i style={{ background: p.color }} />Public repository · real project</span>
        <span className="repo-open">View →</span>
      </div>
    </a>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <Reveal>
        <div className="sec-head">
          <span className="sec-tag">04 · Projects</span>
          <h2>
            Selected <span className="grad">Work</span>
          </h2>
          <p className="sec-sub">A focused selection from the public repositories — each one built, tested, documented and shipped in the open.</p>
        </div>
      </Reveal>

      <div className="repo-grid">
        {FEATURED.map((p, i) => (
          <Reveal key={p.name} delay={(i % 3) * 80}>
            <RepoCard p={p} i={i} />
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="more-projects">
          More work, source and activity on{' '}
          <a href={PROFILE.github} target="_blank" rel="noreferrer">github.com/{PROFILE.username}</a>
        </p>
      </Reveal>
    </section>
  )
}