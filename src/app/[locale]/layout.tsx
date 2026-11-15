import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { SITE, SITE_URL } from "@/lib/site";
import "../globals.css";

const sans = Roboto({ variable: "--font-sans", subsets: ["latin"], weight: ["300", "400", "500", "700"], display: "swap" });

// GitHub Pages cannot send HTTP headers, so the CSP is delivered as a meta tag.
// frame-ancestors is ignored in meta CSP; 'unsafe-inline' is needed for Next's inline bootstrap.
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");

const OG_LOCALE = { en: "en_US", fr: "fr_FR" } as const;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    metadataBase: new URL(SITE_URL),
    title: t("title"),
    description: t("description"),
    authors: [{ name: SITE.name, url: SITE_URL }],
    creator: SITE.name,
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(routing.locales.map((l) => [l, `/${l}`])),
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `/${locale}`,
      siteName: SITE.name,
      locale: OG_LOCALE[locale],
      alternateLocale: routing.locales.filter((l) => l !== locale).map((l) => OG_LOCALE[l]),
      type: "website",
    },
    twitter: { card: "summary_large_image", title: t("title"), description: t("description") },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "meta" });

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: SITE.name, inLanguage: locale },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: SITE.name,
        jobTitle: t("ogTitle"),
        url: `${SITE_URL}/${locale}`,
        email: SITE.email,
        sameAs: [SITE.linkedin, SITE.github],
        knowsAbout: ["Google Cloud Platform", "Amazon Web Services", "Microsoft Azure", "Terraform", "CI/CD", "Platform Engineering", "Python", "Go"],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        name: `${SITE.name} - ${t("ogTitle")}`,
        url: `${SITE_URL}/${locale}`,
        description: t("description"),
        provider: { "@id": `${SITE_URL}/#person` },
        areaServed: ["FR", "EU"],
      },
    ],
  };

  return (
    <html lang={locale} className={sans.variable}>
      <head>
        <meta httpEquiv="Content-Security-Policy" content={CSP} />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body className="min-h-screen bg-white font-sans text-ink antialiased selection:bg-brand-soft">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
