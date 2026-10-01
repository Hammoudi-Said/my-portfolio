"use client";

import React from "react";
import { Building2, Calendar, MapPin, Award, GraduationCap, CheckCircle2 } from "lucide-react";
import { EXPERIENCES, EDUCATION, CERTIFICATIONS } from "@/lib/data";

export function ExperienceTimeline() {
  return (
    <div className="space-y-12">
      {/* Certifications Banner */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-sky-400" />
          <h3 className="text-xl font-bold text-white">Professional Certifications</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CERTIFICATIONS.map((c, i) => (
            <div
              key={i}
              className={`p-4 rounded-xl border bg-gradient-to-br ${c.color} flex flex-col justify-between space-y-2 backdrop-blur-md`}
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-300">
                  {c.issuer}
                </span>
                <h4 className="text-sm font-bold text-white mt-0.5">{c.name}</h4>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </span>
                <span className="text-slate-300">{c.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enterprise Experience Timeline */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Building2 className="w-5 h-5 text-sky-400" />
          <h3 className="text-xl font-bold text-white">Enterprise Track Record</h3>
        </div>

        <div className="space-y-6">
          {EXPERIENCES.map((exp, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-all space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                    {exp.current && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 text-[10px] font-mono border border-emerald-800">
                        Current Mission
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mt-1">
                    <span className="text-sky-400 font-bold">{exp.company}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {exp.location}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {exp.period}</span>
                  </div>
                </div>

                {exp.highlightMetric && (
                  <div className="self-start sm:self-center px-3 py-1.5 rounded-xl bg-slate-950 border border-sky-500/40 text-xs font-mono font-bold text-sky-300">
                    {exp.highlightMetric}
                  </div>
                )}
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{exp.description}</p>

              <div className="space-y-2">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Key Impact & Deliverables:</div>
                <ul className="space-y-1.5">
                  {exp.achievements.map((ach, idx) => (
                    <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 mt-1.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {exp.skills.map((s, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-md bg-slate-950 text-slate-400 text-[11px] font-mono border border-slate-800"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-purple-400" />
          <h3 className="text-xl font-bold text-white">Academic Background</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {EDUCATION.map((edu, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-slate-900/30 border border-slate-800 space-y-2"
            >
              <span className="text-[10px] font-mono text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-900/60">
                {edu.period}
              </span>
              <h4 className="text-sm font-bold text-white">{edu.degree}</h4>
              <p className="text-xs text-slate-400 font-mono">{edu.school}</p>
              <p className="text-xs text-slate-400">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
