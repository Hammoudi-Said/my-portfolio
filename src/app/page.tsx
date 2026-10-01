"use client";

import React from "react";
import { Terminal, ArrowRight, Calendar, Download, Layers, Sparkles } from "lucide-react";
import { PROFILE } from "@/lib/data";
import { SaidShell } from "@/components/terminal/SaidShell";
import { LandingZoneVisualizer } from "@/components/visualizer/LandingZoneVisualizer";
import { ImpactMetrics } from "@/components/metrics/ImpactMetrics";
import { ServicesSection } from "@/components/services/ServicesSection";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { PocSection } from "@/components/poc/PocSection";
import { TestimonialSection } from "@/components/testimonials/TestimonialSection";
import { DigitalVisitCard } from "@/components/card/DigitalVisitCard";

export default function Home() {
  return (
    <div className="relative overflow-hidden pt-20">
      {/* Background Cyber-Grid & Ambient Radials */}
      <div className="absolute inset-0 cyber-grid-bg pointer-events-none opacity-40" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-sky-500/10 via-purple-500/5 to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* SECTION 1: HERO */}
      <section id="overview" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-12">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 backdrop-blur-md shadow-lg text-xs font-mono text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 font-bold">Open for Freelance Missions</span>
            <span className="text-slate-500">•</span>
            <span className="text-sky-400">Paris / Lille / Remote</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.15]">
            Architecting Resilient{" "}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Multi-Cloud Foundations
            </span>{" "}
            &amp; Self-Service Platforms
          </h1>

          {/* Subtitle / Bio */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            I am <strong className="text-white font-bold">Said HAMMOUDI</strong>, Senior Cloud &amp; Platform Engineer (ex-ADEO, ex-Decathlon). I help enterprises turn complex cloud infrastructure into automated, developer-friendly platforms using <span className="text-sky-400 font-mono">GCP</span>, <span className="text-purple-400 font-mono">Terraform</span>, <span className="text-amber-400 font-mono">AWS</span>, and <span className="text-cyan-400 font-mono">FastAPI</span>.
          </p>

          {/* Social Proof Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
              ⚡ ex-ADEO Landing Zone
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
              ⚡ ex-Decathlon Cloud Foundation
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
              ⚡ Master 2 Software Engineering
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-sky-400">
              ★ GCP ACE &amp; Terraform 003 Certified
            </span>
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={PROFILE.calendarLink}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-xl shadow-sky-500/25 active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Architecture Discovery Call</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#terminal"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-sm font-mono flex items-center justify-center gap-2 transition-all"
            >
              <Terminal className="w-4 h-4 text-sky-400" />
              <span>Launch SaidShell CLI</span>
            </a>

            <a
              href="/cv-said-hammoudi.pdf"
              download="CV_Said_Hammoudi.pdf"
              className="w-full sm:w-auto px-4 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-slate-400 hover:text-white border border-slate-800 text-xs font-mono flex items-center justify-center gap-2 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>
        </div>

        {/* SECTION 2: HARD METRICS & DECATHLON SLIDER */}
        <div className="pt-8">
          <ImpactMetrics />
        </div>
      </section>

      {/* SECTION 3: SAIDSHELL TERMINAL HUD */}
      <section id="terminal" className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-xs font-mono text-emerald-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>Interactive Terminal Experience</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">SaidShell v2.4 (CloudOps CLI)</h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            Test real-time commands right in your browser. Type <code className="text-sky-300">said terraform plan</code>, <code className="text-sky-300">said certs</code>, or <code className="text-sky-300">said landing-zone</code>.
          </p>
        </div>

        <SaidShell />
      </section>

      {/* SECTION 4: MULTI-CLOUD LANDING ZONE VISUALIZER */}
      <section id="landing-zone" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-800/60 text-xs font-mono text-sky-400">
            <Layers className="w-3.5 h-3.5" />
            <span>Multi-Cloud Architecture Blueprint</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Enterprise Landing Zone Topology
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Explore how I architect zero-trust cloud foundations on Google Cloud Platform and AWS with automated guardrails and infrastructure as code.
          </p>
        </div>

        <LandingZoneVisualizer />
      </section>

      {/* SECTION 5: FREELANCE SERVICES */}
      <section id="services" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ServicesSection />
      </section>

      {/* SECTION 6: ENTERPRISE EXPERIENCE & EDUCATION */}
      <section id="experience" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ExperienceTimeline />
      </section>

      {/* SECTION 7: POC LAB & BLOGS */}
      <section id="poc" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <PocSection />
      </section>

      {/* SECTION 8: CLIENT TESTIMONIALS & FEEDBACK FORM */}
      <section id="testimonials" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <TestimonialSection />
      </section>

      {/* SECTION 9: DIGITAL VISIT CARD */}
      <section id="visit-card" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/60 text-xs font-mono text-purple-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Digital Contact Pass</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Digital Business Card (vCard)</h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
            Scan with your smartphone or tap below to save Said&apos;s direct contact coordinates straight into your phone address book.
          </p>
        </div>

        <DigitalVisitCard />
      </section>
    </div>
  );
}
