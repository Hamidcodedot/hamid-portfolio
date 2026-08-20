"use client";

import { Users, BrainCircuit, Briefcase, GraduationCap, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { CareerJourneyItem } from "@/lib/data";

export default function CareerJourney({ journeys }: { journeys: CareerJourneyItem[] }) {
  return (
    <section id="career" className="py-20 md:py-32 relative z-10 border-t border-slate-200 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
          <div>
            <div className="flex items-center space-x-2 text-teal-600 dark:text-teal-400 font-mono text-xs uppercase tracking-widest mb-3">
              <Briefcase size={14} />
              <span>Experience & Trajectory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-syne text-slate-900 dark:text-white tracking-tight">
              Career Journey<span className="text-teal-500 dark:text-[#00e5c0]">.</span>
            </h2>
          </div>
          <p className="text-slate-500 dark:text-gray-400 text-sm mt-3 md:mt-0 max-w-sm">
            Proven track record of designing machine learning systems and scaling software products.
          </p>
        </div>

        {journeys && journeys.length > 0 ? (
          <div className="relative pl-6 sm:pl-10 md:pl-12 border-l-2 border-teal-500/40 space-y-10 md:space-y-12">
            {journeys.map((item) => (
              <div 
                key={item.id} 
                className="relative"
              >
                {/* Glowing Pulsing Timeline Node */}
                <div className="absolute -left-[31px] sm:-left-[47px] md:-left-[55px] top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white dark:bg-[#131315] border-2 border-teal-600 dark:border-[#00e5c0] flex items-center justify-center shadow-[0_0_15px_rgba(20,184,166,0.3)] dark:shadow-[0_0_15px_rgba(0,229,192,0.5)]">
                  <div className="w-2 h-2 rounded-full bg-teal-600 dark:bg-[#00e5c0] animate-pulse" />
                </div>

                {/* Timeline Card */}
                <div className="bg-white/80 dark:bg-[#131315]/80 backdrop-blur-2xl border border-slate-200/80 dark:border-white/10 p-6 sm:p-7 rounded-2xl hover:border-teal-500/40 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-mono font-medium text-teal-700 dark:text-teal-400 bg-teal-500/10 border border-teal-500/20 rounded-full w-fit">
                      {item.date}
                    </span>
                    <span className="text-slate-500 dark:text-gray-400 font-mono text-xs font-medium">
                      {item.company}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white text-lg sm:text-xl font-syne mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-gray-300 font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-slate-400 dark:text-gray-500 font-mono text-sm py-8">
            No career milestones loaded.
          </div>
        )}
      </div>
    </section>
  );
}
