# Portfolio

Bilingual (EN/FR) freelance cloud and DevOps portfolio for Said Hammoudi, built with Next.js 16 (App Router), React 19, Tailwind CSS 3 and next-intl.

## Develop

Requires Node 24 (see `mise.toml`).

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build   # also type-checks; needs network for Google Fonts
```

Copy lives in `messages/en.json` and `messages/fr.json`. Site constants (URL, email, links) are in `src/lib/site.ts`; set `NEXT_PUBLIC_SITE_URL` to override the production URL.

## Content

The page puts experience and certifications before case studies, expertise, tools, education and contact. Both languages use the same Google-style design and section structure.

The current freelance mission at Decathlon started in May 2026, within CPE's Cloud Foundation team (GCP/AWS landing zones and ongoing work on AI agents for support and technology monitoring). ADEO is marked as completed without an unconfirmed end date. Historical operational metrics belong to the 2022–2025 Decathlon mission.

The downloadable PDF is a previous CV version and does not include the current mission. Replace `public/cv-said-hammoudi.pdf` when the updated CV is ready. Certification award dates come from the CV; verification links point to the public Credly badges.

## Security

Security headers (CSP, HSTS, frame and referrer policies) are set in `next.config.ts`. The site has no API routes, forms or storage. Dependabot and CI (`npm audit`, lint, build) run on GitHub.

## Previous static site

The existing HTML site, assets, documentation and MIT license from the remote repository are preserved. Next.js serves the portfolio from `src/app/`; the root HTML files are the previous static version.
