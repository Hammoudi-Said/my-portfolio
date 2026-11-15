import Image from "next/image";
import { hasLocale, useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { routing } from "@/i18n/routing";
import { asset, SITE } from "@/lib/site";

interface Service { title: string; text: string }
interface Stat { value: string; label: string }
interface Cert { name: string; date: string; image: string; url: string }
interface Job { company: string; role: string; period: string; points: string[] }
interface SkillGroup { title: string; items: string[] }
interface Term { title: string; text: string }

const primary = "inline-flex items-center rounded-full bg-brand px-7 py-3 font-medium text-white hover:bg-brand-dark";
const secondary = "inline-flex items-center rounded-full border border-line px-7 py-3 font-medium text-brand hover:bg-brand-soft";
const h2 = "text-3xl font-normal text-ink sm:text-4xl";

function Section({ id, tone = "white", children }: { id: string; tone?: "white" | "surface"; children: React.ReactNode }) {
  return (
    <section id={id} className={tone === "surface" ? "bg-surface" : "bg-white"}>
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">{children}</div>
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
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-white">
        {t("a11y.skip")}
      </a>
      <Header />
      <main id="main">
        <section id="top" className="mx-auto grid max-w-5xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-28 md:grid-cols-[1fr_auto]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-1.5 text-sm font-medium text-brand-dark">
              <span aria-hidden className="h-2 w-2 rounded-full bg-brand" />
              {t("hero.badge")}
            </p>
            <h1 className="mt-6 text-4xl font-normal leading-tight text-ink sm:text-6xl">{t("hero.title")}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{t("hero.subtitle")}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={mail} className={primary}>{t("hero.cta")}</a>
              <a href={asset(SITE.cv)} className={secondary}>{t("hero.cv")}</a>
            </div>
            <p className="mt-6 text-sm text-muted">{t("hero.availability")}</p>
          </div>
          <Image
            src={asset("/said-hammoudi.png")}
            alt={t("hero.photoAlt")}
            width={240}
            height={240}
            priority
            className="h-40 w-40 rounded-full object-cover md:h-60 md:w-60"
          />
        </section>

        <Section id="services" tone="surface">
          <h2 className={h2}>{t("services.title")}</h2>
          <p className="mt-3 max-w-2xl text-muted">{t("services.subtitle")}</p>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {(t.raw("services.items") as Service[]).map((s) => (
              <article key={s.title} className="rounded-2xl border border-line bg-white p-8">
                <h3 className="text-xl font-medium text-ink">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{s.text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="proof">
          <h2 className={h2}>{t("proof.title")}</h2>
          <p className="mt-3 text-muted">{t("proof.subtitle")}</p>
          <dl className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {(t.raw("proof.stats") as Stat[]).map((s) => (
              <div key={s.value}>
                <dt className="text-3xl font-normal text-brand sm:text-4xl">{s.value}</dt>
                <dd className="mt-3 leading-relaxed text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
          <h3 className="mt-16 text-xl font-medium text-ink">{t("proof.certsTitle")}</h3>
          <ul className="mt-5 flex flex-wrap gap-3">
            {(t.raw("proof.certs") as Cert[]).map((c) => (
              <li key={c.name}>
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl border border-line px-4 py-3 text-sm text-ink hover:border-brand">
                  <Image src={asset(c.image)} alt="" width={48} height={48} className="h-12 w-12 object-contain" />
                  <span>{c.name} <span className="block text-muted">{c.date}</span></span>
                </a>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="experience" tone="surface">
          <h2 className={h2}>{t("experience.title")}</h2>
          <ol className="mt-12 divide-y divide-line border-y border-line">
            {(t.raw("experience.items") as Job[]).map((j) => (
              <li key={`${j.company}-${j.period}`} className="grid gap-4 py-8 md:grid-cols-[200px_1fr]">
                <div>
                  <h3 className="text-lg font-medium text-ink">{j.company}</h3>
                  <p className="text-sm text-muted">{j.period}</p>
                </div>
                <div>
                  <p className="font-medium text-ink">{j.role}</p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-muted">
                    {j.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="skills">
          <h2 className={h2}>{t("skills.title")}</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {(t.raw("skills.groups") as SkillGroup[]).map((g) => (
              <div key={g.title}>
                <h3 className="text-sm font-medium uppercase tracking-wide text-muted">{g.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((i) => (
                    <li key={i} className="rounded-full bg-surface px-4 py-1.5 text-sm text-ink">{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="engagement" tone="surface">
          <h2 className={h2}>{t("engagement.title")}</h2>
          <p className="mt-3 max-w-2xl text-muted">{t("engagement.subtitle")}</p>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {(t.raw("engagement.terms") as Term[]).map((s) => (
              <div key={s.title} className="rounded-2xl border border-line bg-white p-8">
                <h3 className="text-lg font-medium text-ink">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{s.text}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className={h2}>{t("contact.title")}</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{t("contact.text")}</p>
            <a href={mail} className={`${primary} mt-10`}>{t("contact.cta")}</a>
            <p className="mt-5 text-sm text-muted">{SITE.email}</p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
