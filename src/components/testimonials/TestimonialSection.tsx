"use client";

import React, { useState } from "react";
import { Star, MessageSquarePlus, CheckCircle2, Building2 } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { FeedbackModal } from "./FeedbackModal";

export function TestimonialSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-xs font-mono text-emerald-400 mb-2">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Verified Client Endorsements</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">Client Feedback & Mission Testimonials</h3>
          <p className="text-xs text-slate-400 mt-1">
            Real feedback from engineering leaders and team leads at ADEO and Decathlon.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-sky-400 border border-sky-500/30 hover:border-sky-500/60 text-xs font-bold flex items-center gap-2 transition-all shadow-lg hover:shadow-sky-500/10"
        >
          <MessageSquarePlus className="w-4 h-4" />
          <span>Leave a Recommendation</span>
        </button>
      </div>

      {/* Testimonials Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.id}
            className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/70 transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] font-mono text-slate-500">{t.date}</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed italic">
                &ldquo;{t.content}&rdquo;
              </p>
            </div>

            <div className="border-t border-slate-800/70 pt-3 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-1">
                  <span>{t.authorName}</span>
                  <span className="text-[10px] text-emerald-400 font-normal">● verified</span>
                </div>
                <div className="text-[11px] text-slate-400">{t.authorTitle}</div>
              </div>

              <div className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-[11px] font-mono text-sky-400">
                <Building2 className="w-3 h-3" />
                <span>{t.authorCompany}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <FeedbackModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
