"use client";

import React, { useState } from "react";
import { TrendingDown, ShieldCheck, CheckCircle2, Clock, Zap } from "lucide-react";
import { PROFILE } from "@/lib/data";

export function ImpactMetrics() {
  // Interactive slider state representing test automation acceleration (hours: 72h down to 0.5h)
  const [sliderVal, setSliderVal] = useState(30); // in minutes

  const isAutomated = sliderVal <= 60;

  return (
    <div className="space-y-6">
      {/* Interactive Transformation Showcase (Decathlon Case Study) */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-800/60 text-xs font-mono text-sky-400">
              <Zap className="w-3.5 h-3.5" />
              <span>Decathlon Enterprise Case Study: E2E Infrastructure Validation</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Cutting Validation Cycles from <span className="text-rose-400">3 Days</span> to <span className="text-emerald-400">30 Minutes</span>
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              By replacing manual checklists with automated <code className="text-sky-300">terraform test</code> and <code className="text-sky-300">pytest</code> suites, feature teams provision and validate multi-cloud networks in minutes instead of days.
            </p>
          </div>

          {/* Interactive Metric Comparison Card */}
          <div className="w-full lg:w-96 p-5 rounded-xl bg-slate-950/90 border border-slate-800/80 shadow-2xl space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Drag to simulate release cycle:</span>
              <span className={`font-bold ${isAutomated ? "text-emerald-400" : "text-amber-400"}`}>
                {sliderVal >= 60 ? `${(sliderVal / 60).toFixed(1)} Hours` : `${sliderVal} Minutes`}
              </span>
            </div>

            <input
              type="range"
              min="30"
              max="4320" // 3 days in minutes
              step="30"
              value={sliderVal}
              onChange={(e) => setSliderVal(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
            />

            <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span className="text-emerald-400 font-bold">30 min (Said&apos;s automated pipeline)</span>
              <span className="text-rose-400">3 days (Legacy manual)</span>
            </div>

            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-sky-400" />
                <span className="text-slate-300 font-medium">Efficiency Gain:</span>
              </div>
              <span className="font-mono font-bold text-emerald-400">
                {sliderVal <= 60 ? "98.9% Time Saved" : `${Math.round(((4320 - sliderVal) / 4320) * 100)}% Time Saved`}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of 4 Key Hard Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {PROFILE.metrics.map((m, i) => (
          <div
            key={i}
            className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all hover:bg-slate-900/80 group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase text-slate-400">{m.label}</span>
              {m.label.includes("Security") ? (
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              ) : m.label.includes("Validation") ? (
                <TrendingDown className="w-4 h-4 text-sky-400" />
              ) : (
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              )}
            </div>

            <div className="mt-3 flex items-baseline gap-2">
              <div className="text-3xl font-extrabold text-white font-mono group-hover:text-sky-300 transition-colors">
                {m.value}
              </div>
              <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                {m.change}
              </span>
            </div>

            <p className="text-xs text-slate-400 mt-2 font-sans">{m.context}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
