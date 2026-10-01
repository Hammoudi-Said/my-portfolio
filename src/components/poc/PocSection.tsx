"use client";

import React, { useState } from "react";
import { FolderGit2, BookOpen, ExternalLink, ArrowUpRight, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { POCS, BLOGS } from "@/lib/data";

export function PocSection() {
  const [activeTab, setActiveTab] = useState<"poc" | "blog">("poc");

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-800/60 text-xs font-mono text-sky-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Architecture Lab & Technical Writing</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">Proof of Concepts (POC) & Engineering Blogs</h3>
          <p className="text-xs text-slate-400 mt-1">
            Reproducible cloud blueprints, open-source code repositories, and deep-dive technical articles.
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-900 border border-slate-800">
          <button
            onClick={() => setActiveTab("poc")}
            className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-2 ${
              activeTab === "poc"
                ? "bg-sky-500 text-slate-950 shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>POC Lab ({POCS.length})</span>
          </button>
          <button
            onClick={() => setActiveTab("blog")}
            className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-2 ${
              activeTab === "blog"
                ? "bg-purple-500 text-slate-950 shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Articles & ADRs ({BLOGS.length})</span>
          </button>
        </div>
      </div>

      {activeTab === "poc" ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {POCS.map((poc) => (
            <div
              key={poc.slug}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/70 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-sky-950 text-sky-400 border border-sky-800 text-[10px] font-mono uppercase font-bold">
                    {poc.category}
                  </span>
                  <a
                    href={poc.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>

                <h4 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                  {poc.title}
                </h4>

                <p className="text-xs text-slate-300 leading-relaxed">{poc.description}</p>

                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80 text-xs">
                  <span className="text-slate-400 text-[11px] block">Impact:</span>
                  <span className="text-emerald-400 font-mono text-[11px] font-medium">{poc.impact}</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex flex-wrap gap-1">
                  {poc.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-slate-950 text-slate-400 text-[10px] font-mono border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={poc.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2 rounded-xl bg-slate-950 hover:bg-slate-850 text-xs font-mono text-sky-400 hover:text-sky-300 border border-slate-800 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Explore Blueprint</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOGS.map((blog) => (
            <div
              key={blog.slug}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/70 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>{blog.date}</span>
                  <span className="text-purple-400">{blog.readTime}</span>
                </div>

                <h4 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                  {blog.title}
                </h4>

                <p className="text-xs text-slate-300 leading-relaxed">{blog.excerpt}</p>
              </div>

              <div className="space-y-3 pt-2 border-t border-slate-800">
                <div className="flex flex-wrap gap-1">
                  {blog.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-slate-950 text-slate-400 text-[10px] font-mono border border-slate-800"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                <div className="text-xs font-mono text-purple-400 flex items-center gap-1 group-hover:underline">
                  <span>Read Full Article</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
