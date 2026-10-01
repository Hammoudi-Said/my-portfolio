"use client";

import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { PROFILE } from "@/lib/data";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-12 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
                SH
              </div>
              <span className="text-white font-bold text-sm">{PROFILE.name}</span>
              <span className="text-emerald-400 text-[11px] bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                ● Available for Freelance
              </span>
            </div>
            <p className="text-slate-500 text-[11px] max-w-md">
              Freelance Senior Cloud & Platform Engineer. Specializing in Multi-Cloud Landing Zones, Custom Go Terraform Providers, and Internal Developer Platforms.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PROFILE.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-850 hover:text-white border border-slate-800 transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PROFILE.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-850 hover:text-white border border-slate-800 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-850 hover:text-white border border-slate-800 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-850 hover:text-white border border-slate-800 transition-colors flex items-center gap-1 text-[11px]"
              title="Scroll to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} {PROFILE.legalName}. Built for speed, zero-infra overhead & maximum reliability.
          </div>
          <div className="flex items-center gap-4">
            <span>Powered by Next.js & Vercel Edge</span>
            <span>•</span>
            <span className="text-emerald-400 font-bold">100% Green SLA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
