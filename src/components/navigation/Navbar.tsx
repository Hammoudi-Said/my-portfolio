"use client";

import React, { useState, useEffect } from "react";
import { Calendar, Menu, X, FileText } from "lucide-react";
import { PROFILE } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Experience", href: "#experience" },
    { label: "Landing Zone", href: "#landing-zone" },
    { label: "Terminal", href: "#terminal" },
    { label: "Services", href: "#services" },
    { label: "POC & Blog", href: "#poc" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Visit Card", href: "#visit-card" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#overview" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 via-indigo-500 to-purple-600 flex items-center justify-center text-white font-mono font-bold text-sm shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform">
            SH
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-extrabold text-white group-hover:text-sky-400 transition-colors">
              Said HAMMOUDI
            </span>
            <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Cloud & Platform Engineer</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-mono text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-sky-400 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-sky-400 after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="/cv-said-hammoudi.pdf"
            download="CV_Said_Hammoudi.pdf"
            className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-mono flex items-center gap-1.5 transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-sky-400" />
            <span>CV.pdf</span>
          </a>

          <a
            href={PROFILE.calendarLink}
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs font-mono flex items-center gap-1.5 transition-all shadow-md shadow-sky-500/20"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Call</span>
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden p-4 bg-slate-950 border-b border-slate-800 space-y-3 font-mono text-xs animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded bg-slate-900/60 hover:bg-slate-900 text-slate-300 hover:text-sky-400 border border-slate-800/80"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800 flex gap-2">
            <a
              href="/cv-said-hammoudi.pdf"
              download
              className="flex-1 py-2 text-center rounded bg-slate-900 text-slate-200 border border-slate-700"
            >
              Download CV
            </a>
            <a
              href={PROFILE.calendarLink}
              target="_blank"
              rel="noreferrer"
              className="flex-1 py-2 text-center rounded bg-sky-500 font-bold text-slate-950"
            >
              Book Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
