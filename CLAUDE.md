# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Freelance cloud/DevOps portfolio for Said Hammoudi, targeting startups/SMEs. Goal: win clients and drive traffic, so copy and design should favor clear services, proof (real metrics only) and a visible email call-to-action.

## Commands
- `npm run dev` (Turbopack), `npm run build`, `npm run lint` (`eslint .`; `next lint` no longer exists in Next 16).
- No test runner and no separate typecheck: `npm run build` is the type check.
- Node 24 LTS, pinned in `mise.toml`.
- Check `npm audit --omit=dev` after dependency changes (CI also runs it).

## Gotchas
- Tailwind is **v3** (`tailwind.config.ts` is live, `@tailwind` directives in `globals.css`). Do not use v4 syntax (`@import "tailwindcss"`, `@theme`). The `content` globs only cover `src/components` and `src/app`, so classes elsewhere are not generated.
- i18n uses next-intl with `/en` and `/fr` routes (`src/i18n/`). There is no middleware (`proxy.ts`) because the site is a static export; `public/index.html` redirects `/` to `/en/` or `/fr/`. All copy lives in `messages/{en,fr}.json`; keep both files in sync. Shared constants (site URL, email, links) are in `src/lib/site.ts`.
- Pages are statically generated; call `setRequestLocale(locale)` in layouts/pages. Components are server components, there is no client JS beyond Next's runtime.
- Deployed to GitHub Pages by `.github/workflows/pages.yml` on push to `main` (`output: "export"`, `trailingSlash`, `basePath` from `NEXT_PUBLIC_BASE_PATH`, `/my-portfolio` on Pages). Assets from `public/` must go through `asset()` in `src/lib/site.ts` because next/image and plain `<a>` do not add the base path. Route handlers (robots, sitemap, OG image) need `dynamic = "force-static"`.
- Pages cannot set HTTP headers, so the CSP is a `<meta>` tag in `[locale]/layout.tsx`. It allows only `'self'`: adding any third-party script, font, image host or analytics means updating it.
- JSON-LD in `[locale]/layout.tsx` escapes `<`; keep that when changing it. Do not add `Review` schema without real, verifiable testimonials.
- Design is a light, Google-style theme (Roboto, tokens `ink`, `muted`, `line`, `surface`, `brand` in `tailwind.config.ts`). Positioning: freelance Cloud Ops / Platform Engineer for long-term missions, on mission at Decathlon since May 2026 (Cloud Foundation, GCP/AWS landing zones) and open to discussing future missions; lead with custom Terraform providers and GCP/AWS landing zones; avoid the words junior/senior.
- Never add unverifiable numbers or testimonials: the old site had invented ones (99.99% SLA, -85% alerts, fake quotes) that were removed on purpose.
- The contact email in `src/lib/site.ts` is `hammoudi.pro6@gmail.com`; the phone number is deliberately not published.
- Fonts load from Google at build time, so builds need network access.
- Source files (CV PDFs, original photo) stay in `curriculum/`; only assets the site uses go in `public/`. The site links `/cv-said-hammoudi.pdf`, so updating the CV means replacing the `public/` copy.
- The old terminal, visualizer, testimonial form, visit card and confetti were cut from the MVP; recover them from git history (commit `0e60dab`) if needed.
