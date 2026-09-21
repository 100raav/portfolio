export const PROFILE = {
  name: 'Saurav Bichha',
  initials: 'SB',
  roles: [
    'Full-Stack Software Engineer',
    'Backend Engineer · Java · Spring Boot',
    'Frontend Engineer · React · Node.js',
    'Open-Source Builder',
    'Peer Reviewer · Web of Science',
  ],
  location: 'India · Remote-ready',
  email: '100raav73@gmail.com',
  github: 'https://github.com/100raav',
  linkedin: 'https://www.linkedin.com/in/saurav-bixa/',
  leetcode: 'https://leetcode.com/u/100raav73/',
  gfg: 'https://www.geeksforgeeks.org/profile/100raav',
  wos: 'https://www.webofscience.com/wos/author/record/NOF-2861-2025',
  orcid: 'https://orcid.org/0009-0002-8578-2330',
  username: '100raav',
}

export const HIGHLIGHTS = [
  'Full-stack engineer — production-grade software end to end: CLI developer tools, REST & ERP backends, and responsive web applications.',
  '28+ open-source repositories — every project built, tested, documented, and released in the open since 2023.',
  '8 peer reviews — recorded on the Web of Science.',
  'B.Tech · Computer Science & Engineering — Noida International University, Greater Noida.',
  'Full-stack internships — The Skybrisk (Full Stack Java Developer), Labmentix (Full Stack Developer), and Oasis Infobyte (Web Development).',
]

export const EDUCATION = [
  {
    years: '2015 – 2019',
    title: 'Secondary Education · SEE',
    org: 'Sinha Public School',
    meta: 'Grade X · Mathematics & Science',
    grade: '3.65 / 4.0',
  },
  {
    years: '2020 – 2022',
    title: 'Senior Secondary · Science',
    org: 'Sinha Public School',
    meta: 'Grade XII · Physical Sciences',
    grade: '3.08 / 4.0',
  },
  {
    years: '2022 – 2026',
    title: 'B.Tech · Computer Science & Engineering',
    org: 'Noida International University',
    meta: 'Greater Noida · Delhi NCR',
    grade: 'CGPA 7.62',
  },
]

export const EXPERIENCE = [
  {
    years: 'Jan 2026 – Jul 2026',
    title: 'Full Stack Java Developer Intern',
    org: 'The Skybrisk',
    meta: 'Full-stack program · hands-on project training under mentorship. SDLC · industry best practices.',
    chip: '7 MOS',
    loc: 'Pune · Remote',
  },
  {
    years: 'Jul 2025 – Jan 2026',
    title: 'Full Stack Developer',
    org: 'Labmentix',
    meta: 'Java · Spring · HTML/CSS/JS · database operations & CRUD. End-to-end web apps in a structured team workflow.',
    chip: '7 MOS',
    loc: 'Bengaluru · Remote',
  },
  {
    years: 'Jul 2023 – Aug 2023',
    title: 'Web Development Intern',
    org: 'Oasis Infobyte',
    meta: 'Web development & designing · frontend and responsive principles.',
    chip: '2 MOS',
    loc: 'Delhi, India',
  },
  {
    years: '2026',
    title: 'Peer Reviewer',
    org: 'Web of Science · Clarivate',
    meta: 'Journals indexed on the Web of Science.',
    chip: '8 REVIEWS',
    loc: 'Web of Science',
  },
]

export const FEATURED = [
  {
    name: 'codemeetly-backend',
    desc: 'API for the CodeMeetly collaboration platform — active development.',
    lang: 'API',
    color: '#f472b6',
  },
  {
    name: 'Blockchain-SImulation-Project',
    desc: 'Spring Boot REST ledger — blocks, hashing, Swagger docs.',
    lang: 'Java',
    color: '#e76f00',
  },
  {
    name: 'erp-system',
    desc: 'Spring Boot ERP — modules, roles, clean REST backend.',
    lang: 'Java',
    color: '#e76f00',
  },
  {
    name: 'project-xray',
    desc: 'Java/Spring repository intelligence — architecture graph.',
    lang: 'HTML',
    color: '#22d3ee',
  },
  {
    name: 'chronovault',
    desc: 'Verified checkpoint CLI — automatic rollback built in.',
    lang: 'Java',
    color: '#e76f00',
  },
  {
    name: 'compeng-calc',
    desc: 'Engineering calculator — Basic · Programmer · Network.',
    lang: 'JavaScript',
    color: '#f7df1e',
  },
]

export const SKILLS = [
  { name: 'Java', pct: 95 },
  { name: 'Spring Boot', pct: 92 },
  { name: 'React', pct: 88 },
  { name: 'TypeScript', pct: 84 },
  { name: 'Node.js', pct: 82 },
  { name: 'JavaScript', pct: 90 },
  { name: 'SQL / MySQL', pct: 85 },
  { name: 'HTML5 & CSS3', pct: 92 },
  { name: 'REST APIs', pct: 90 },
  { name: 'Git & GitHub', pct: 93 },
]

export const TECH_TILES = [
  ['java', 'Java'],
  ['spring', 'Spring Boot'],
  ['react', 'React'],
  ['typescript', 'TypeScript'],
  ['nodejs', 'Node.js'],
  ['javascript', 'JavaScript'],
  ['mysql', 'MySQL'],
  ['postgres', 'PostgreSQL'],
  ['html5', 'HTML5'],
  ['css3', 'CSS3'],
  ['gradle', 'Gradle'],
  ['git', 'Git'],
] as const

export const SOCIALS = [
  { label: 'GitHub', url: PROFILE.github, icon: 'github' },
  { label: 'LinkedIn', url: PROFILE.linkedin, icon: 'linkedin' },
  { label: 'LeetCode', url: PROFILE.leetcode, icon: 'leetcode' },
  { label: 'GeeksforGeeks', url: PROFILE.gfg, icon: 'gfg' },
  { label: 'Web of Science', url: PROFILE.wos, icon: 'wos' },
  { label: 'ORCID', url: PROFILE.orcid, icon: 'orcid' },
]