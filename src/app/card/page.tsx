import React from "react";
import { Metadata } from "next";
import { DigitalVisitCard } from "@/components/card/DigitalVisitCard";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital Business Card | Said HAMMOUDI - Freelance Cloud & Platform Engineer",
  description: "Save Said HAMMOUDI's direct contact info (vCard), book a discovery call, or download official CV.",
};

export default function CardPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 flex flex-col justify-center items-center relative overflow-hidden">
      {/* Background Cyber-Grid */}
      <div className="absolute inset-0 cyber-grid-bg pointer-events-none opacity-40" />

      <div className="w-full max-w-xl mx-auto space-y-6 relative z-10">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-sky-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Full Portfolio</span>
          </Link>
          <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
            ● Direct NFC / QR Card
          </span>
        </div>

        <DigitalVisitCard />
      </div>
    </div>
  );
}
