"use client";

import { FileText, FileDown, Sparkles, Download } from "lucide-react";
import { formatUrl } from "@/lib/utils";
import { FileRecord } from "@/lib/data";

export default function Resume({ files }: { files?: FileRecord[] }) {
  const getFileUrl = (type: string) => {
    if (!files) return "#";
    const match = files.find(f => f.type === type);
    return match ? formatUrl(match.file_url) : "#";
  };

  const cvUrl = getFileUrl("cv");
  const resumeUrl = getFileUrl("resume");

  return (
    <section id="resume" className="py-20 md:py-32 relative z-10 border-t border-slate-200 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
          <div>
            <div className="flex items-center space-x-2 text-teal-600 dark:text-teal-400 font-mono text-xs uppercase tracking-widest mb-3">
              <Download size={14} />
              <span>Official Documentation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-syne text-slate-900 dark:text-white tracking-tight">
              Resume & CV<span className="text-teal-500 dark:text-[#00e5c0]">.</span>
            </h2>
          </div>
          <p className="text-slate-500 dark:text-gray-400 text-sm mt-3 md:mt-0 max-w-sm">
            Comprehensive overview of academic background, technical skills, and production engineering experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* One Page Resume - High-Tech Glass with Teal Glow */}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative p-8 rounded-2xl bg-white/80 dark:bg-[#131315]/80 backdrop-blur-2xl border border-teal-500/40 hover:border-teal-500 flex items-center justify-between transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_20px_rgba(20,184,166,0.1)] dark:shadow-[0_8px_32px_rgba(0,229,192,0.15)] hover:shadow-[0_12px_40px_rgba(20,184,166,0.2)] overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-teal-500/20 transition-colors" />

            <div className="flex items-center space-x-5 relative z-10">
              <div className="w-14 h-14 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-600 dark:text-[#00e5c0] group-hover:scale-110 transition-transform">
                <FileText size={28} />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-syne group-hover:text-teal-600 dark:group-hover:text-[#00e5c0] transition-colors">
                  One-Page Resume
                </h3>
                <span className="text-[11px] font-mono text-teal-700 dark:text-teal-400 font-bold tracking-widest uppercase">
                  PDF FORMAT • CONDENSED
                </span>
              </div>
            </div>

            <div className="p-2.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-gray-400 group-hover:text-teal-600 dark:group-hover:text-white group-hover:bg-teal-500/20 transition-all relative z-10">
              <FileDown size={20} />
            </div>
          </a>

          {/* Full Extended CV - Solid Neon Teal Impact */}
          <a
            href={cvUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative p-8 rounded-2xl bg-gradient-to-r from-teal-600 to-teal-500 dark:from-[#00e5c0] dark:to-[#14b8a6] text-white dark:text-black flex items-center justify-between transition-all duration-300 hover:-translate-y-1 shadow-[0_8px_32px_rgba(20,184,166,0.25)] dark:shadow-[0_8px_32px_rgba(0,229,192,0.3)] hover:shadow-[0_12px_40px_rgba(20,184,166,0.4)] overflow-hidden"
          >
            <div className="flex items-center space-x-5 relative z-10">
              <div className="w-14 h-14 rounded-xl bg-white/15 dark:bg-black/15 border border-white/20 dark:border-black/20 flex items-center justify-center text-white dark:text-black group-hover:scale-110 transition-transform">
                <FileDown size={28} />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white dark:text-black font-syne">
                  Full Extended CV
                </h3>
                <span className="text-[11px] font-mono text-white/90 dark:text-black/80 font-bold tracking-widest uppercase">
                  PDF FORMAT • COMPLETE PORTFOLIO
                </span>
              </div>
            </div>

            <div className="p-2.5 rounded-full bg-white/15 dark:bg-black/10 border border-white/20 dark:border-black/20 text-white dark:text-black group-hover:bg-white/25 dark:group-hover:bg-black/20 transition-all relative z-10">
              <Download size={20} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
