"use client";

import { motion } from "framer-motion";
import { MapPin, Target, Sparkles, Code2, Award, Zap } from "lucide-react";
import { AboutData } from "@/lib/data";

export default function About({ data }: { data: AboutData }) {
  if (!data) return null;

  return (
    <section id="about" className="py-20 md:py-32 relative z-10 border-t border-slate-200 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Title */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="flex items-center space-x-2 text-teal-600 dark:text-teal-400 font-mono text-xs uppercase tracking-widest mb-3">
              <Zap size={14} />
              <span>Architect Profile</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-syne text-slate-900 dark:text-white tracking-tight">
              Overview<span className="text-teal-500 dark:text-[#00e5c0]">.</span>
            </h2>
            <p className="text-slate-500 dark:text-gray-400 text-sm mt-4 leading-relaxed max-w-sm">
              Blending artificial intelligence research with scalable software engineering to deliver production-grade systems.
            </p>
          </div>
          
          {/* Right Content */}
          <div className="lg:col-span-8 space-y-6">
            {/* Bio Card */}
            <div className="bg-white/80 dark:bg-[#131315]/80 backdrop-blur-2xl border border-slate-200/80 dark:border-white/10 rounded-2xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-lg sm:text-xl font-bold font-syne text-slate-900 dark:text-white mb-4 flex items-center">
                Engineering Philosophy <Sparkles size={16} className="ml-2 text-teal-500 dark:text-teal-400" />
              </h3>

              <p className="text-slate-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed font-light">
                {data.bio}
              </p>

              {/* Location & Current Focus */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-200 dark:border-white/10">
                <div className="flex items-start space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/5">
                  <MapPin size={20} className="text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-[11px] uppercase tracking-widest text-slate-500 dark:text-gray-400 font-mono font-semibold">Location</h4>
                    <p className="text-slate-900 dark:text-white font-medium text-sm mt-0.5">{data.location || "Remote"}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/5">
                  <Target size={20} className="text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-[11px] uppercase tracking-widest text-slate-500 dark:text-gray-400 font-mono font-semibold">Current Focus</h4>
                    <p className="text-slate-900 dark:text-white font-medium text-sm mt-0.5">{data.focus || "Applied AI & Systems"}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Metric Stats Grid */}
            {data.stats && data.stats.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {data.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-5 rounded-2xl bg-white/80 dark:bg-[#131315]/60 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl hover:border-teal-500/40 transition-all shadow-sm group"
                  >
                    <div className="text-2xl sm:text-3xl font-extrabold font-syne text-teal-600 dark:text-[#00e5c0] group-hover:scale-105 transition-transform">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-gray-400 font-mono mt-1 uppercase tracking-wider font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
