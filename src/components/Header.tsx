import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { SITE } from "@/lib/site";

const NAV = ["services", "proof", "experience", "contact"] as const;

export function Header() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <span className="font-semibold text-white">Said Hammoudi</span>
        <nav aria-label="Main" className="hidden gap-6 text-sm text-slate-300 md:flex">
          {NAV.map((id) => (
            <a key={id} href={`#${id}`} className="hover:text-white focus-visible:text-white">
              {t(`nav.${id}`)}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div role="group" aria-label={t("a11y.language")} className="flex gap-1 text-sm">
            {routing.locales.map((l) => (
              <Link
                key={l}
                href="/"
                locale={l}
                lang={l}
                aria-current={l === locale ? "true" : undefined}
                className={`rounded px-2 py-1 uppercase ${l === locale ? "bg-slate-800 text-white" : "text-slate-400 hover:text-white"}`}
              >
                {l}
              </Link>
            ))}
          </div>
          <a
            href={`mailto:${SITE.email}`}
            className="rounded-md bg-sky-400 px-3 py-2 text-sm font-semibold text-slate-950 hover:bg-sky-300"
          >
            {t("nav.cta")}
          </a>
        </div>
      </div>
    </header>
  );
}
