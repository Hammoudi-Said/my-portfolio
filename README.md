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

## Security

Security headers (CSP, HSTS, frame and referrer policies) are set in `next.config.ts`. The site has no API routes, forms or storage. Dependabot and CI (`npm audit`, lint, build) run on GitHub.
