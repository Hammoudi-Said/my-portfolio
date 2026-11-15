import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

// Static export for GitHub Pages. Pages serves project sites under /<repo>,
// so the deploy workflow passes that prefix in NEXT_PUBLIC_BASE_PATH
// (empty for a custom domain or a <user>.github.io repository).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// GitHub Pages cannot set HTTP headers, so the CSP ships as a <meta> tag
// from src/app/[locale]/layout.tsx and other headers are not available.
const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default withNextIntl(nextConfig);
