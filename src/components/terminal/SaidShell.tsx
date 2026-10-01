"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, Maximize2, Minimize2, XCircle, Play, CornerDownLeft, Sparkles } from "lucide-react";
import { PROFILE, CERTIFICATIONS } from "@/lib/data";

interface HistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
}

export function SaidShell() {
  const [input, setInput] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: "init",
      command: "said --welcome",
      output: (
        <div className="space-y-2 text-slate-300">
          <div className="flex items-center gap-2 text-emerald-400 font-bold">
            <Sparkles className="w-4 h-4" />
            <span>Welcome to SaidShell v2.4 (CloudOps Interactive Environment)</span>
          </div>
          <p className="text-xs text-slate-400">
            Type <span className="text-sky-400 font-mono">help</span> or click the quick commands below to explore Said&apos;s cloud architecture, certifications, and track record.
          </p>
        </div>
      ),
    },
  ]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const executeCommand = (cmdText: string) => {
    const trimmed = cmdText.trim();
    if (!trimmed) return;

    const lower = trimmed.toLowerCase();
    let output: React.ReactNode = null;

    switch (lower) {
      case "help":
        output = (
          <div className="space-y-2 text-xs font-mono">
            <p className="text-slate-400">Available commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
              <div><span className="text-sky-400 font-semibold">said bio</span> : Overview & enterprise achievements</div>
              <div><span className="text-sky-400 font-semibold">said certs</span> : Verified cloud certifications</div>
              <div><span className="text-sky-400 font-semibold">said landing-zone</span> : Render multi-cloud architecture topology</div>
              <div><span className="text-sky-400 font-semibold">said terraform plan</span> : Emulate real-time Terraform plan diff</div>
              <div><span className="text-sky-400 font-semibold">said metrics</span> : Key impact metrics (Decathlon & ADEO)</div>
              <div><span className="text-sky-400 font-semibold">said hire</span> : Schedule a discovery call or send an inquiry</div>
              <div><span className="text-slate-400 font-semibold">clear</span> : Clear terminal screen</div>
            </div>
          </div>
        );
        break;

      case "said bio":
      case "bio":
        output = (
          <div className="space-y-2 text-xs font-mono text-slate-300">
            <p className="text-emerald-400 font-bold">{PROFILE.name} — {PROFILE.role}</p>
            <p className="text-slate-400">{PROFILE.summary}</p>
            <div className="border-t border-slate-800 pt-2 grid grid-cols-2 gap-2">
              <div><span className="text-slate-400">Location:</span> {PROFILE.location}</div>
              <div><span className="text-slate-400">Availability:</span> <span className="text-emerald-400">{PROFILE.availability}</span></div>
              <div><span className="text-slate-400">Core Stack:</span> GCP, AWS, Terraform, Python (FastAPI), Go</div>
              <div><span className="text-slate-400">Email:</span> <a href={`mailto:${PROFILE.email}`} className="text-sky-400 underline">{PROFILE.email}</a></div>
            </div>
          </div>
        );
        break;

      case "said certs":
      case "certs":
        output = (
          <div className="space-y-2 text-xs font-mono">
            <p className="text-slate-400">Verified Professional Certifications:</p>
            <div className="space-y-1.5">
              {CERTIFICATIONS.map((c, i) => (
                <div key={i} className="flex items-center justify-between p-2 rounded bg-slate-900/80 border border-slate-800">
                  <div>
                    <span className="text-emerald-400 font-semibold">[VERIFIED] </span>
                    <span className="text-slate-200">{c.name}</span>
                    <span className="text-slate-400 text-[11px] block sm:inline sm:ml-2">({c.issuer})</span>
                  </div>
                  <span className="text-sky-400 text-[11px]">{c.date}</span>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case "said landing-zone":
      case "landing-zone":
      case "said landing-zone --cloud gcp":
        output = (
          <div className="space-y-2 text-xs font-mono text-slate-300">
            <div className="text-sky-400 font-bold">Topology Map: Multi-Cloud Landing Zone (Enterprise Hub & Spoke)</div>
            <pre className="p-3 bg-slate-950 rounded border border-slate-800 text-[11px] text-sky-300 leading-relaxed overflow-x-auto">
{`+-------------------------------------------------------------------------+
| [GCP / AWS ORGANIZATION ROOT]                                           |
| Policies: IAM Least-Privilege Guardrails | FinOps Budgets | Audit Trail |
+------------------------------------+------------------------------------+
                                     |
                +--------------------+--------------------+
                |                                         |
     [HUB VPC / TRANSIT]                       [SECURITY & OPS FOUNDATION]
     • Cloud Interconnect / VPN                • HashiCorp Vault Secrets
     • Centralized Cloud NAT & Next-Gen FW     • Datadog Agent & Cloud Logging
     • Private Service Connect (PSC)           • GitHub Actions Runner Pool
                |                                         |
                +--------------------+--------------------+
                                     |
               +---------------------+---------------------+
               |                                           |
     [SPOKE 1: LANDING ZONE PROD]               [SPOKE 2: DEV PLATFORM]
     • Cloud Run (FastAPI Provisioner)          • Ephemeral Sandbox VPCs
     • Multi-Region Load Balancing              • Terraform E2E Test Harness
     • Zero-Trust Service Accounts              • Self-Service Developer APIs
+-------------------------------------------------------------------------+`}
            </pre>
            <p className="text-slate-400 text-[11px]">
              Tip: Scroll down to the <span className="text-sky-400 font-semibold">Interactive Visualizer</span> on this page to inspect live nodes & Terraform code.
            </p>
          </div>
        );
        break;

      case "said terraform plan":
      case "terraform plan":
        output = (
          <div className="space-y-2 text-xs font-mono">
            <div className="text-purple-400 font-semibold">Terraform v1.9.8 - Initializing Terraform Plugin Framework...</div>
            <div className="p-3 bg-slate-950 rounded border border-purple-900/50 text-[11px] space-y-1 overflow-x-auto">
              <div className="text-slate-400">Terraform will perform the following actions:</div>
              <div className="text-emerald-400 font-semibold">+ resource &quot;google_cloud_run_v2_service&quot; &quot;provisioning_api&quot; &#123;</div>
              <div className="text-emerald-400 pl-4">+ name     = &quot;cloud-provisioner-prod&quot;</div>
              <div className="text-emerald-400 pl-4">+ location = &quot;europe-west1&quot;</div>
              <div className="text-emerald-400 pl-4">+ ingress  = &quot;INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER&quot;</div>
              <div className="text-emerald-400 pl-4">+ template &#123;</div>
              <div className="text-emerald-400 pl-8">+ scaling &#123; min_instance_count = 0, max_instance_count = 10 &#125;</div>
              <div className="text-emerald-400 pl-8">+ containers &#123; image = &quot;europe-west1-docker.pkg.dev/prod/api:v3.13&quot; &#125;</div>
              <div className="text-emerald-400 pl-4">&#125;</div>
              <div className="text-emerald-400 font-semibold">&#125;</div>
              <div className="text-emerald-400 font-semibold">+ resource &quot;google_compute_subnetwork&quot; &quot;spoke_tier&quot; &#123;</div>
              <div className="text-emerald-400 pl-4">+ ip_cidr_range = &quot;10.150.0.0/22&quot;</div>
              <div className="text-emerald-400 pl-4">+ private_ip_google_access = true</div>
              <div className="text-emerald-400 font-semibold">&#125;</div>
              <div className="border-t border-slate-800 pt-1 text-slate-300 font-bold">
                Plan: 2 to add, 0 to change, 0 to destroy. Status: GREEN (Zero drift)
              </div>
            </div>
          </div>
        );
        break;

      case "said metrics":
      case "metrics":
        output = (
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            {PROFILE.metrics.map((m, i) => (
              <div key={i} className="p-2.5 bg-slate-900 border border-slate-800 rounded">
                <div className="text-slate-400 text-[11px]">{m.label}</div>
                <div className="text-base font-bold text-sky-400">{m.value}</div>
                <div className="text-[11px] text-emerald-400">{m.change} ({m.context})</div>
              </div>
            ))}
          </div>
        );
        break;

      case "said hire":
      case "hire":
      case "contact":
        output = (
          <div className="space-y-2 text-xs font-mono text-slate-300">
            <p className="text-emerald-400 font-bold">Schedule an Architecture Review or Mission Discovery Call:</p>
            <p className="text-slate-400">Said is currently accepting freelance missions (Multi-Cloud Landing Zones, Terraform Providers, Platform APIs).</p>
            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href={PROFILE.calendarLink}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded flex items-center gap-1.5 transition-colors"
              >
                Book 30-min Call (Cal.com)
              </a>
              <a
                href={`mailto:${PROFILE.email}?subject=Freelance%20Mission%20Inquiry%20-%20Cloud%20Architecture`}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded transition-colors"
              >
                Send Direct Email
              </a>
              <a
                href={`tel:${PROFILE.phone}`}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded transition-colors"
              >
                Call: {PROFILE.phoneDisplay}
              </a>
            </div>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        output = (
          <div className="text-xs font-mono text-rose-400">
            Command not recognized: <span className="text-white">&quot;{cmdText}&quot;</span>. Type <span className="text-sky-400 font-bold cursor-pointer underline" onClick={() => executeCommand("help")}>help</span> to see available commands.
          </div>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).substring(7),
        command: cmdText,
        output,
      },
    ]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(input);
    }
  };

  const quickCommands = [
    { label: "bio", cmd: "said bio" },
    { label: "certs", cmd: "said certs" },
    { label: "landing-zone", cmd: "said landing-zone" },
    { label: "terraform plan", cmd: "said terraform plan" },
    { label: "metrics", cmd: "said metrics" },
    { label: "hire", cmd: "said hire" },
  ];

  return (
    <div
      className={`rounded-2xl border border-slate-800/80 bg-slate-950/90 shadow-2xl backdrop-blur-xl overflow-hidden transition-all duration-300 font-mono ${
        isExpanded ? "fixed inset-4 z-50 flex flex-col" : "w-full"
      }`}
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <div className="flex items-center gap-2 ml-3 text-xs text-slate-400 font-mono">
            <TerminalIcon className="w-3.5 h-3.5 text-sky-400" />
            <span>said@cloud-platform:~</span>
            <span className="hidden sm:inline text-[11px] text-emerald-400/80 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/50">
              ● live session
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-slate-400">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 hover:text-white hover:bg-slate-800 rounded transition-colors"
            title={isExpanded ? "Minimize" : "Maximize"}
          >
            {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setHistory([])}
            className="p-1 hover:text-rose-400 hover:bg-slate-800 rounded transition-colors"
            title="Clear output"
          >
            <XCircle className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div className={`p-4 space-y-4 overflow-y-auto ${isExpanded ? "flex-1" : "max-h-[380px]"}`}>
        {history.map((item) => (
          <div key={item.id} className="space-y-1.5 text-xs">
            <div className="flex items-center gap-2 text-sky-400">
              <span className="text-emerald-400 font-bold">➜</span>
              <span className="text-slate-500">~</span>
              <span className="text-slate-200 font-semibold">{item.command}</span>
            </div>
            <div className="pl-4 text-slate-300">{item.output}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Quick Command Suggestions */}
      <div className="px-4 py-2 bg-slate-900/60 border-t border-slate-800/70 flex items-center gap-2 overflow-x-auto text-[11px]">
        <span className="text-slate-500 whitespace-nowrap">Quick run:</span>
        {quickCommands.map((q) => (
          <button
            key={q.label}
            onClick={() => executeCommand(q.cmd)}
            className="px-2 py-0.5 bg-slate-800/80 hover:bg-sky-950/80 hover:text-sky-300 hover:border-sky-500/50 text-slate-300 rounded border border-slate-700/60 whitespace-nowrap transition-colors flex items-center gap-1"
          >
            <Play className="w-2.5 h-2.5 text-sky-400" />
            {q.label}
          </button>
        ))}
      </div>

      {/* Interactive Command Input */}
      <div className="p-3 bg-slate-900/90 border-t border-slate-800 flex items-center gap-2">
        <span className="text-emerald-400 text-sm font-bold">➜</span>
        <span className="text-sky-400 text-xs font-semibold">said@cloud:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type 'help', 'said bio', 'said certs', 'said terraform plan'..."
          className="flex-1 bg-transparent text-xs text-white placeholder-slate-500 focus:outline-none font-mono"
        />
        <button
          onClick={() => executeCommand(input)}
          className="p-1.5 bg-sky-500/20 hover:bg-sky-500/30 text-sky-400 rounded transition-colors"
          title="Execute"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
