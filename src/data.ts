export const PROFILE = {
  name: 'Saurav Bichha',
  initials: 'SB',
  roles: [
    'Full-Stack Software Engineer',
    'Backend Engineer · Java · Spring Boot',
    'Frontend Engineer · React · TypeScript',
    'Peer Reviewer · Web of Science',
  ],
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
  'Production-grade software end to end — CLI developer tools, REST & ERP backends, and responsive web applications, each tested, documented and released.',
  'Stack of choice — Java, Spring Boot, React, TypeScript, Node.js and SQL, applied across real engineering problems.',
  'B.Tech · Computer Science & Engineering — Noida International University, 2022 – 2026.',
  '8 peer reviews recorded on the Web of Science · Clarivate.',
  'Industry experience — Full Stack Java Developer at The Skybrisk, Full Stack Developer at Labmentix, and Web Development at Oasis Infobyte.',
]

export const FOCUS = [
  {
    icon: '</>',
    title: 'Backend Engineering',
    text: 'Java · Spring Boot · REST & ERP systems — modular, secured and tested.',
  },
  {
    icon: '{ }',
    title: 'Frontend Engineering',
    text: 'React · TypeScript — responsive, animated, accessible interfaces.',
  },
  {
    icon: '⚙',
    title: 'Tooling & Automation',
    text: 'Git · CI pipelines · build systems — repeatable, verifiable workflows.',
  },
  {
    icon: '✓',
    title: 'Engineering Quality',
    text: 'Testing, documentation, code review and the full software development lifecycle.',
  },
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
    loc: 'Pune, India',
  },
  {
    years: 'Jul 2025 – Jan 2026',
    title: 'Full Stack Developer',
    org: 'Labmentix',
    meta: 'Java · Spring · HTML/CSS/JS · database operations & CRUD. End-to-end web apps in a structured team workflow.',
    chip: '7 MOS',
    loc: 'Bengaluru, India',
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
    chips: ['Spring Boot', 'REST', 'Java'],
    color: '#f472b6',
  },
  {
    name: 'Blockchain-SImulation-Project',
    desc: 'Spring Boot REST ledger — blocks, hashing, Swagger-documented.',
    chips: ['Spring Boot', 'Hashing', 'Swagger'],
    color: '#e76f00',
  },
  {
    name: 'erp-system',
    desc: 'Spring Boot ERP — modular architecture, roles, clean REST backend.',
    chips: ['Spring Boot', 'ERP', 'Security'],
    color: '#e76f00',
  },
  {
    name: 'project-xray',
    desc: 'Java/Spring repository intelligence — architecture visualisation.',
    chips: ['Java', 'Analysis', 'Diagrams'],
    color: '#22d3ee',
  },
  {
    name: 'chronovault',
    desc: 'Verified checkpoint CLI — automatic rollback built in.',
    chips: ['Java', 'CLI', 'Automation'],
    color: '#e76f00',
  },
  {
    name: 'compeng-calc',
    desc: 'Engineering calculator — Basic · Programmer · Network modes.',
    chips: ['JavaScript', 'UI', 'Tools'],
    color: '#f7df1e',
  },
]

export const RADAR = [
  { name: 'Java', pct: 95 },
  { name: 'Spring Boot', pct: 92 },
  { name: 'React', pct: 88 },
  { name: 'TypeScript', pct: 84 },
  { name: 'Node.js', pct: 82 },
  { name: 'SQL & Data', pct: 86 },
  { name: 'REST & APIs', pct: 90 },
  { name: 'Git & CI', pct: 90 },
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
  { label: 'GitHub', url: PROFILE.github, id: 'github' },
  { label: 'LinkedIn', url: PROFILE.linkedin, id: 'linkedin' },
  { label: 'LeetCode', url: PROFILE.leetcode, id: 'leetcode' },
  { label: 'GeeksforGeeks', url: PROFILE.gfg, id: 'gfg' },
  { label: 'Web of Science', url: PROFILE.wos, id: 'wos' },
  { label: 'ORCID', url: PROFILE.orcid, id: 'orcid' },
]