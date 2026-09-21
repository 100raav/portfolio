<div align="center">

# Saurav Bichha — Portfolio

**Animated, futuristic, single-page developer portfolio — built with React, TypeScript & Vite**

[![Built with](https://img.shields.io/badge/React-18-%2361DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-%233178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-6-%23646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Deployed](https://img.shields.io/badge/deploy-GitHub%20Pages-%23222222?logo=github&logoColor=white)](https://100raav.github.io/portfolio/)
[![License](https://img.shields.io/badge/license-MIT-%23f472b6)](LICENSE)

**Live site → [100raav.github.io/portfolio](https://100raav.github.io/portfolio/)**

</div>

---

## About

A production-grade personal portfolio for Saurav Bichha — a full-stack software engineer
(Java · Spring Boot · React · Node.js). The site is fully animated, responsive, theme-aware,
and reflects only **real, verifiable work**: real education, real experience, real peer reviews
and real public projects.

Nothing on the site is placeholder or sample data.

## Highlights

- **Futuristic, engineer-grade visuals** — animated particle network, circuit-board background,
  glowing grid, floating code glyphs, and a live developer terminal in the hero.
- **Animated profile summary** — key highlights typed out live in a terminal window.
- **Tech Stack as an animated radar graph** — skills visualize as an interactive radar chart that
  grows into view, alongside technology logos.
- **Full branding** — official logos for GitHub, LinkedIn, LeetCode, GeeksforGeeks, Web of Science
  and ORCID; every logo is a live link.
- **Light & dark mode** — theme toggle in the navigation, respects the system preference and is
  persisted across visits.
- **Completely responsive** — off-canvas navigation on mobile, adaptive grids, no horizontal scroll.

## Sections

| Section | Content |
| --- | --- |
| Hero | Animated typewriter roles, developer terminal, engineering-focused intro |
| About | Professional profile summary (animated) + at-a-glance facts |
| Focus | Four engineering discipline cards |
| Education | Verified academic timeline (SEE → Senior Secondary → B.Tech CSE) |
| Experience | Real roles — The Skybrisk, Labmentix, Oasis Infobyte, Web of Science reviewer |
| Selected Work | Six featured public repositories with links |
| Skills | Animated radar chart + technology stack logos |
| Contact | Branded links to GitHub, LinkedIn, LeetCode, GfG, Web of Science, ORCID + email |

## Tech Stack

- **React 18 + TypeScript 5** — type-safe component architecture
- **Vite 6** — fast development and optimized production builds
- **Pure CSS** — all animations (particles, typewriter, scroll-reveal, radar growth) hand-rolled,
  no animation libraries
- **GitHub Pages** — automatic deploys via GitHub Actions

## Local development

```bash
git clone https://github.com/100raav/portfolio.git
cd portfolio
npm install
npm run dev      # https-style dev server with HMR
```

### Production

```bash
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which installs, type-checks, builds
and publishes `dist/` to GitHub Pages using the `peaceiris/actions-gh-pages` action.

## License

MIT. All projects, roles and achievements referenced on the site belong to their respective owners.

---

<div align="center">

**Built and designed by [Saurav Bichha](https://github.com/100raav) — engineered to production standard.**

</div>