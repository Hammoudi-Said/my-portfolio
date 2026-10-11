import Image from "next/image";
import { hasLocale, useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { routing } from "@/i18n/routing";
import { SITE } from "@/lib/site";

interface Service { title: string; text: string; points: string[] }
interface Stat { value: string; label: string }
interface Cert { name: string; date: string }
interface Job { company: string; role: string; period: string; points: string[] }
interface Step { title: string; text: string }

const cta = "inline-flex items-center rounded-md bg-sky-400 px-5 py-3 font-semibold text-slate-950 hover:bg-sky-300";
const sectionTitle = "text-2xl font-bold text-white sm:text-3xl";

function Section({ id, className = "", children }: { id: string; className?: string; children: React.ReactNode }) {
  return (
    <section id={id} className={`mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 ${className}`}>
      {children}
    </section>
  );
}

export default function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = useTranslations();
  const mail = `mailto:${SITE.email}`;

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-slate-950">
        {t("a11y.skip")}
      </a>
      <Header />
      <main id="main">
        <Section id="top" className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-sky-400">{t("hero.eyebrow")}</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">{t("hero.title")}</h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-300">{t("hero.subtitle")}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href={mail} className={cta}>{t("hero.cta")}</a>
              <a href={SITE.cv} className="font-medium text-slate-200 underline underline-offset-4 hover:text-white">
                {t("hero.cv")}
              </a>
            </div>
            <p className="mt-6 text-sm text-slate-400">{t("hero.availability")}</p>
          </div>
          <Image
            src="/said-hammoudi.png"
            alt={t("hero.photoAlt")}
            width={220}
            height={220}
            priority
            className="h-40 w-40 rounded-full border border-slate-700 object-cover md:h-56 md:w-56"
          />
        </Section>

        <Section id="services">
          <h2 className={sectionTitle}>{t("services.title")}</h2>
          <p className="mt-3 text-slate-400">{t("services.subtitle")}</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {(t.raw("services.items") as Service[]).map((s) => (
              <article key={s.title} className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
                <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-slate-300">{s.text}</p>
                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-400">
                  {s.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="proof">
          <h2 className={sectionTitle}>{t("proof.title")}</h2>
          <p className="mt-3 text-slate-400">{t("proof.subtitle")}</p>
          <dl className="mt-10 grid gap-6 md:grid-cols-3">
            {(t.raw("proof.stats") as Stat[]).map((s) => (
              <div key={s.value} className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
                <dt className="text-3xl font-bold text-sky-400">{s.value}</dt>
                <dd className="mt-2 text-sm text-slate-300">{s.label}</dd>
              </div>
            ))}
          </dl>
          <h3 className="mt-12 text-lg font-semibold text-white">{t("proof.certsTitle")}</h3>
          <ul className="mt-4 grid gap-3 md:grid-cols-3">
            {(t.raw("proof.certs") as Cert[]).map((c) => (
              <li key={c.name} className="rounded-lg border border-slate-800 px-4 py-3 text-sm">
                <span className="block text-slate-200">{c.name}</span>
                <span className="text-slate-400">{c.date}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="experience">
          <h2 className={sectionTitle}>{t("experience.title")}</h2>
          <ol className="mt-10 space-y-8">
            {(t.raw("experience.items") as Job[]).map((j) => (
              <li key={j.company} className="border-l-2 border-slate-800 pl-6">
                <h3 className="font-semibold text-white">
                  {j.company} <span className="font-normal text-slate-400">· {j.role}</span>
                </h3>
                <p className="text-sm text-slate-400">{j.period}</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-300">
                  {j.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="process">
          <h2 className={sectionTitle}>{t("process.title")}</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {(t.raw("process.steps") as Step[]).map((s, i) => (
              <li key={s.title} className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
                <span className="text-sm font-semibold text-sky-400">0{i + 1}</span>
                <h3 className="mt-1 font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{s.text}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="contact" className="text-center">
          <h2 className={sectionTitle}>{t("contact.title")}</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">{t("contact.text")}</p>
          <a href={mail} className={`${cta} mt-8`}>{t("contact.cta")}</a>
          <p className="mt-4 text-sm text-slate-400">{SITE.email}</p>
        </Section>
      </main>
      <Footer />
    </>
  );
}
