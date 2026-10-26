# Personal Website

![Svelte](https://img.shields.io/badge/Svelte-5-ff3e00?logo=svelte&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646cff?logo=vite&logoColor=white)
![i18n](https://img.shields.io/badge/languages-EN%20%7C%20SL%20%7C%20DE-0ea5e9)
![Docker](https://img.shields.io/badge/deploy-Docker%20%7C%20nginx-2496ed?logo=docker&logoColor=white)

My CV as a trading-card collection. Experience, skills and education are dealt as holo cards in scrollable stacks along a timeline, because a plain résumé is a common drop and this one should be a rare.

## Features

- Trading-card UI: foil borders, art window, stat footer and holo shine on hover
- Horizontal scroll-snap card stacks with prev/next buttons, dots and touch swipe
- Timeline for experience and education
- Three languages (English, Slovenian, German); the card colours change with the language
- Scroll-reveal animations
- Static output, no backend

## Stack and reasoning

| Concern | Choice | Why |
| --- | --- | --- |
| UI | Svelte 5 | Small bundles and little boilerplate for a mostly static page |
| Build | Vite 6 | Fast dev server, simple static build |
| Content | Plain JS module (`src/lib/content.js`) | All text for every language in one place, no CMS needed |
| Styling | Hand-written CSS with custom properties | A few theme tokens drive the per-language colours; no framework required |
| Delivery | Docker + nginx-unprivileged | Tiny non-root image serving static files |

## Getting started

Requires Node 22.

```sh
npm ci
npm run dev
```

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Build to `dist/` |
| `npm run preview` | Serve the production build locally |

## Project layout

```
src/
  App.svelte     Page composition
  app.css        Theme and card tokens
  lib/           Card, CardStack, Timeline, Hero, Skills, Experience, Education
  lib/content.js Text content for all languages
public/images/   Card art
```

## Deployment

CI runs on every branch. The `Dockerfile` builds the site and serves `dist/` with nginx on port 8080. See `cicd_plan.md` and `implementation_plan.md` for the pipeline and design plans.
