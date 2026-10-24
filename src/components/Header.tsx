import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { SITE } from "@/lib/site";

const NAV = ["services", "proof", "experience", "contact"] as const;

export function Header() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="text-lg font-medium text-ink">Said Hammoudi</a>
        <nav aria-label="Main" className="hidden gap-8 text-sm text-muted md:flex">
          {NAV.map((id) => (
            <a key={id} href={`#${id}`} className="hover:text-ink">
              {t(`nav.${id}`)}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div role="group" aria-label={t("a11y.language")} className="flex text-sm">
            {routing.locales.map((l) => (
              <Link
                key={l}
                href="/"
                locale={l}
                lang={l}
                aria-current={l === locale ? "true" : undefined}
                className={`rounded-full px-3 py-1.5 uppercase ${l === locale ? "bg-brand-soft font-medium text-brand-dark" : "text-muted hover:text-ink"}`}
              >
                {l}
              </Link>
            ))}
          </div>
          <a
            href={`mailto:${SITE.email}`}
            className="hidden rounded-full bg-brand px-5 py-2 text-sm font-medium text-white hover:bg-brand-dark sm:inline-block"
          >
            {t("nav.cta")}
          </a>
        </div>
      </div>
    </header>
  );
}
