import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PROFILE } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Said HAMMOUDI | Freelance Senior Cloud & Platform Engineer",
  description:
    "Freelance Senior Cloud & Platform Engineer (ex-ADEO, ex-Decathlon). Specialized in Multi-Cloud Landing Zones (GCP, AWS), Custom Terraform Providers (Golang), and Internal Developer Platforms (FastAPI).",
  keywords: [
    "Said Hammoudi",
    "Mohamed-Said Hammoudi",
    "Freelance Cloud Engineer",
    "Platform Engineer Freelance",
    "GCP Architect",
    "Terraform Provider Golang",
    "Landing Zone Multi-cloud",
    "FastAPI Cloud Provisioning",
    "DevOps Freelance Paris Lille",
    "GCP Associate Cloud Engineer",
    "HashiCorp Terraform Certified",
  ],
  authors: [{ name: "Said HAMMOUDI", url: "https://said-hammoudi.vercel.app" }],
  creator: "Said HAMMOUDI",
  openGraph: {
    title: "Said HAMMOUDI | Freelance Senior Cloud & Platform Engineer",
    description:
      "Architecting Resilient Multi-Cloud Landing Zones, Custom Terraform Providers & Internal Provisioning APIs. Ex-ADEO, ex-Decathlon.",
    url: "https://said-hammoudi.vercel.app",
    siteName: "Said HAMMOUDI Portfolio",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Said HAMMOUDI | Freelance Senior Cloud & Platform Engineer",
    description: "Multi-Cloud Landing Zones, Custom Go Terraform Providers & Platform Engineering.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PROFILE.name,
    legalName: PROFILE.legalName,
    jobTitle: PROFILE.role,
    description: PROFILE.summary,
    email: PROFILE.email,
    telephone: PROFILE.phone,
    url: "https://said-hammoudi.vercel.app",
    sameAs: [PROFILE.socials.linkedin, PROFILE.socials.github],
    knowsAbout: [
      "Google Cloud Platform",
      "Amazon Web Services",
      "Terraform",
      "Golang",
      "Python",
      "FastAPI",
      "Platform Engineering",
      "CI/CD",
      "Landing Zones",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Université de Lille",
    },
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#060913] text-slate-100 min-h-screen selection:bg-sky-500 selection:text-slate-950`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
