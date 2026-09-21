export interface GhRepo {
  name: string
  description: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  html_url: string
  archived: boolean
  fork: boolean
}

export interface GhUser {
  followers: number
  following: number
  public_repos: number
  created_at: string
}

const USER = '100raav'

async function get<T>(url: string): Promise<T | null> {
  try {
    const r = await fetch(url, { headers: { Accept: 'application/vnd.github+json' } })
    if (!r.ok) return null
    return (await r.json()) as T
  } catch {
    return null
  }
}

export async function fetchUser(): Promise<GhUser | null> {
  return get<GhUser>(`https://api.github.com/users/${USER}`)
}

export async function fetchRepos(): Promise<GhRepo[]> {
  const data = await get<GhRepo[]>(
    `https://api.github.com/users/${USER}/repos?per_page=100&sort=pushed`,
  )
  return (data || []).filter((r) => !r.fork).sort((a, b) => (a.stargazers_count - b.stargazers_count) * -1)
}

export interface ApiState<T> {
  data: T | null
  loading: boolean
}

export function yearsSince(iso: string): string {
  if (!iso) return ''
  const y = (Date.now() - Date.parse(iso)) / (365.25 * 86400000)
  return y.toFixed(1)
}