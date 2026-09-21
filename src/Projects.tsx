import { useEffect, useState } from 'react'
import { FEATURED, PROFILE } from './data'
import { fetchRepos, type GhRepo } from './api'
import Reveal from './Reveal'

const langColor: Record<string, string> = {
  Java: '#e76f00',
  JavaScript: '#f7df1e',
  TypeScript: '#3178c6',
  HTML: '#22d3ee',
  CSS: '#1572b6',
  Python: '#3776ab',
  Shell: '#89e051',
  Dockerfile: '#2496ed',
}

function RepoCard({ name, desc, lang, stars, forks, url, featured }: { name: string; desc: string; lang: string | null; stars: number; forks: number; url: string; featured?: boolean }) {
  return (
    <a className={`repo-card ${featured ? 'featured' : ''}`} href={url} target="_blank" rel="noreferrer">
      <div className="repo-top">
        <span className="repo-glyph">{featured ? '📌' : '🗂'}</span>
        <span className="repo-name">{name}</span>
        <span className="repo-arrow">↗</span>
      </div>
      <p className="repo-desc">{desc || 'Open-source project — built, tested and documented.'}</p>
      <div className="repo-foot">
        <span className="repo-lang"><i style={{ background: langColor[lang || 'Java'] }} />{lang || 'N/A'}</span>
        {featured ? <span className="repo-star">★ {stars}</span> : null}
        {featured ? <span className="repo-fork">⑂ {forks}</span> : null}
      </div>
    </a>
  )
}

export default function Projects() {
  const [live, setLive] = useState<GhRepo[] | null>(null)
  const [err, setErr] = useState(false)

  useEffect(() => {
    let alive = true
    fetchRepos().then((r) => {
      if (!alive) return
      if (r) {
        setLive(r)
        setErr(false)
      } else {
        setErr(true)
      }
    })
    return () => {
      alive = false
    }
  }, [])

  return (
    <section id="projects" className="section">
      <Reveal>
        <div className="sec-head">
          <span className="sec-tag">04 · Projects</span>
          <h2>
            Selected <span className="grad">Work</span>
          </h2>
          <p className="sec-sub">Every project below is a real public repository — built, tested, documented and shipped in the open.</p>
        </div>
      </Reveal>

      <div className="repo-grid">
        {FEATURED.map((p, i) => (
          <Reveal key={p.name} delay={i * 60}>
            <RepoCard
              featured
              name={p.name}
              desc={p.desc}
              lang={p.lang}
              stars={0}
              forks={0}
              url={`https://github.com/${PROFILE.username}/${p.name}`}
            />
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="live-head">
          <h3>
            <span className="pulse-dot" /> Live repositories{' '}
            {live !== null && <em className="live-count">{live.length} · from the GitHub API</em>}
          </h3>
        </div>
      </Reveal>
      <div className="repo-grid">
        {(live || []).slice(0, 18).map((r, i) => (
          <Reveal key={r.name} delay={(i % 6) * 50}>
            <RepoCard name={r.name} desc={r.description || ''} lang={r.language} stars={r.stargazers_count} forks={r.forks_count} url={r.html_url} />
          </Reveal>
        ))}
        {live === null && !err && <p className="muted">Loading live repositories…</p>}
        {err && <p className="muted">Offline — showing featured projects. Check <a href={PROFILE.github}>github.com/{PROFILE.username}</a>.</p>}
        {(live || []).length === 0 && live !== null && <p className="muted">No public repositories found by the live API.</p>}
      </div>
    </section>
  )
}