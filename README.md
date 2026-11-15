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

## Deploy

Every push to `main` builds a static export (`out/`) and publishes it to GitHub Pages through `.github/workflows/pages.yml` (OIDC, no secrets). One-time setup: Settings → Pages → Source: **GitHub Actions**. Local preview under the Pages prefix:

```bash
NEXT_PUBLIC_BASE_PATH=/my-portfolio npm run build
mkdir -p /tmp/site && rm -rf /tmp/site/my-portfolio && cp -r out /tmp/site/my-portfolio
python3 -m http.server -d /tmp/site 8080   # http://localhost:8080/my-portfolio/
```

## Security

GitHub Pages cannot send custom HTTP headers, so the CSP and referrer policy are `<meta>` tags in `src/app/[locale]/layout.tsx`; HTTPS/HSTS is handled by github.io. The site has no API routes, forms or storage. Dependabot and CI (`npm audit`, lint, build) run on GitHub.

## Previous static site

The existing HTML site, assets, documentation and MIT license from the remote repository are preserved. Next.js serves the portfolio from `src/app/`; the root HTML files are the previous static version.
