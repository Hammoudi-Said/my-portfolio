import { useTranslations } from "next-intl";
import { SITE } from "@/lib/site";

export function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="border-t border-line bg-surface py-8 text-sm text-muted">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:px-6">
        <p>
          © {new Date().getFullYear()} {SITE.legalName}. {t("rights")}
        </p>
        <div className="flex gap-6">
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink">LinkedIn</a>
          <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
