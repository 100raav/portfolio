import { useEffect, useState } from 'react'
import { fetchUser, fetchRepos, yearsSince, type GhRepo } from './api'
import Reveal from './Reveal'

function StatCard({ icon, value, label, hint }: { icon: string; value: string | number; label: string; hint: string }) {
  return (
    <div className="stat-card">
      <span className="stat-icon">{icon}</span>
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
      <span className="stat-hint">{hint}</span>
    </div>
  )
}

export default function Stats() {
  const [user, setUser] = useState<{ followers: number; follow: number; created: string } | null>(null)
  const [repos, setRepos] = useState<GhRepo[] | null>(null)

  useEffect(() => {
    fetchUser().then((u) => u && setUser({ followers: u.followers, follow: u.following, created: u.created_at }))
    fetchRepos().then((r) => r && setRepos(r))
  }, [])

  const js = repos?.filter((r) => r.language === 'JavaScript').length ?? 0
  const java = repos?.filter((r) => r.language === 'Java').length ?? 0
  const ts = repos?.filter((r) => r.language === 'TypeScript').length ?? 0
  const html = repos?.filter((r) => r.language === 'HTML').length ?? 0
  const reposN = repos?.length ?? 28
  const langs = (repos && repos.length ? java + ts + js : 14) + (html ? 1 : 0)

  return (
    <section className="stats-band">
      <Reveal>
        <div className="stats-grid">
          <StatCard icon="⌘" value={repos ? `${reposN}+` : '28+'} label="PUBLIC REPOSITORIES" hint="live from GitHub" />
          <StatCard icon="🎓" value="B.Tech" label="COMPUTER SCIENCE & ENG." hint="Noida International Univ." />
          <StatCard icon="🔬" value="8" label="PEER REVIEWS" hint="Web of Science · Clarivate" />
          <StatCard icon="🛠" value={`${langs}`} label="REPOS ACROSS JAVA · TS · JS" hint="primary languages" />
          <StatCard icon="🌐" value={user ? user.followers : 6} label="FOLLOWERS" hint="github.com/100raav" />
          <StatCard icon="🚀" value={user ? `${yearsSince(user.created)}y` : '3.2y'} label="BUILDING IN THE OPEN" hint="since July 2023" />
        </div>
      </Reveal>
    </section>
  )
}