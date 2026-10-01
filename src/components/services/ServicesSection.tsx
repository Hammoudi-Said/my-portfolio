"use client";

import React from "react";
import { Cloud, Cpu, Terminal, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import { SERVICES, PROFILE } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Cloud,
  Cpu,
  Terminal,
  Zap,
};

export function ServicesSection() {
  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/60 text-xs font-mono text-purple-400">
          <span>Freelance Cloud & Platform Engineering</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          High-Impact Architecture & Engineering Services
        </h2>
        <p className="text-xs sm:text-sm text-slate-400">
          Targeted interventions designed to accelerate product delivery, harden multi-cloud security, and eradicate operational friction.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SERVICES.map((s) => {
          const Icon = iconMap[s.iconName] || Cloud;
          return (
            <div
              key={s.id}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/80 transition-all flex flex-col justify-between group space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-sky-400 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-slate-800 text-sky-400 border border-slate-700">
                    {s.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs font-mono text-sky-400 mt-1">{s.tagline}</p>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">{s.description}</p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Key Deliverables:</div>
                  <ul className="space-y-1.5">
                    {s.deliverables.map((deliv, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`${PROFILE.calendarLink}?service=${s.id}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white flex items-center justify-center gap-2 transition-colors group-hover:border-sky-500/40"
                >
                  <span>Discuss {s.title.split(" ")[0]} Mission</span>
                  <ArrowRight className="w-3.5 h-3.5 text-sky-400 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
