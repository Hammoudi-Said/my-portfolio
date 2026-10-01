"use client";

import React, { useState } from "react";
import { Download, Phone, Mail, Calendar, QrCode, FileText, Check, Share2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { PROFILE } from "@/lib/data";

export function DigitalVisitCard() {
  const [copiedLink, setCopiedLink] = useState(false);
  const [showQr, setShowQr] = useState(false);

  // Generate a standard RFC 2426 vCard format (.vcf)
  const downloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
N:HAMMOUDI;Said;;;
FN:Said HAMMOUDI
ORG:Freelance Cloud & Platform Engineering
TITLE:Senior Cloud & Platform Engineer
TEL;TYPE=CELL:${PROFILE.phone}
EMAIL;TYPE=INTERNET,PREF:${PROFILE.email}
URL:https://said-hammoudi.vercel.app
NOTE:GCP Associate Cloud Engineer, HashiCorp Terraform 003, Multi-Cloud Landing Zones & Platform APIs
URL;TYPE=LinkedIn:${PROFILE.socials.linkedin}
URL;TYPE=GitHub:${PROFILE.socials.github}
END:VCARD`;

    const blob = new Blob([vCardData], { type: "text/vcard;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Said_HAMMOUDI_Cloud_Engineer.vcf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Said HAMMOUDI - Freelance Cloud & Platform Engineer",
          text: "Senior Cloud & Platform Engineer (GCP, AWS, Terraform, FastAPI). Check portfolio & contact info:",
          url: window.location.href,
        });
      } catch {
        // Fallback to copy link
        copyLink();
      }
    } else {
      copyLink();
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="relative max-w-xl mx-auto rounded-3xl p-1 bg-gradient-to-br from-sky-500/40 via-purple-500/30 to-slate-800 shadow-2xl overflow-hidden">
      <div className="rounded-[22px] bg-slate-950 p-6 sm:p-8 space-y-6 relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Card Header & Avatar Badge */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-400 via-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl font-black shadow-lg font-mono">
                SH
              </div>
              <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-950 shadow" />
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-800/80 text-[10px] font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for Missions</span>
              </div>
              <h3 className="text-xl font-extrabold text-white mt-1">{PROFILE.name}</h3>
              <p className="text-xs font-mono text-sky-400">{PROFILE.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setShowQr(!showQr)}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
              title="Show QR Code"
            >
              <QrCode className="w-4 h-4" />
            </button>
            <button
              onClick={handleShare}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
              title="Share Card"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* QR Code Overlay (if toggled) */}
        {showQr && (
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-2 animate-in fade-in zoom-in-95 duration-200">
            <p className="text-xs text-slate-300 font-mono">Scan to open Said&apos;s portfolio on mobile</p>
            <div className="flex justify-center p-3 bg-white rounded-xl max-w-[160px] mx-auto">
              {/* SVG QR Code pattern representing the site URL */}
              <svg className="w-32 h-32" viewBox="0 0 100 100" fill="none">
                <rect width="100" height="100" fill="white" />
                <path
                  d="M10 10h30v30H10zM15 15v20h20V15H15zm5 5h10v10H20V20zM60 10h30v30H60zM65 15v20h20V15H65zm5 5h10v10H70V20zM10 60h30v30H10zM15 65v20h20V65H15zm5 5h10v10H20V70zM50 15h5v5h-5zm0 15h10v5H50zm15 35h5v5h-5zm10 0h10v10H75zm-15 15h15v5H60zm20 5h10v10H80zm-30 0h5v10h-5zm5-10h10v5H55z"
                  fill="#0f172a"
                />
              </svg>
            </div>
            <button
              onClick={() => setShowQr(false)}
              className="text-[11px] text-slate-400 hover:text-white underline"
            >
              Hide QR
            </button>
          </div>
        )}

        {/* Quick Contact Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
          <a
            href={`mailto:${PROFILE.email}`}
            className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-sky-500/50 flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors group"
          >
            <Mail className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
            <span className="truncate">{PROFILE.email}</span>
          </a>

          <a
            href={`tel:${PROFILE.phone}`}
            className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-sky-500/50 flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors group"
          >
            <Phone className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span>{PROFILE.phoneDisplay}</span>
          </a>

          <a
            href={PROFILE.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-sky-500/50 flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors group"
          >
            <LinkedinIcon className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
            <span className="truncate">linkedin.com/in/mohamed-said-hammoudi</span>
          </a>

          <a
            href={PROFILE.socials.github}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-sky-500/50 flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors group"
          >
            <GithubIcon className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
            <span>github.com/Hammoudi-Said</span>
          </a>
        </div>

        {/* Primary Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {/* Save to Phone Contacts (vCard) */}
          <button
            onClick={downloadVCard}
            className="px-4 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-sky-500/20 active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>Save Contact (.vcf)</span>
          </button>

          {/* Book 30-Min Discovery Call */}
          <a
            href={PROFILE.calendarLink}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 font-bold text-xs flex items-center justify-center gap-2 transition-all"
          >
            <Calendar className="w-4 h-4 text-sky-400" />
            <span>Book 30-Min Call</span>
          </a>
        </div>

        {/* Download Official CV */}
        <div className="text-center pt-1 border-t border-slate-800/80">
          <a
            href="/cv-said-hammoudi.pdf"
            download="CV_Said_Hammoudi.pdf"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-sky-400 transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Download Official Resume (PDF)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
