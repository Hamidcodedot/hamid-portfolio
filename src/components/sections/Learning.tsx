"use client";

import { useState } from "react";
import { CheckCircle2, PlayCircle, ExternalLink, BookOpen, Sparkles } from "lucide-react";
import clsx from "clsx";
import { formatUrl } from "@/lib/utils";
import { motion } from "framer-motion";
import { LearningItem } from "@/lib/data";

export default function Learning({ data }: { data: { current: LearningItem[], completed: LearningItem[] } }) {
  const [activeTab, setActiveTab] = useState<"current" | "completed">("current");

  const currentItems = data?.current || [];
  const completedItems = data?.completed || [];

  return (
    <section id="learning" className="py-20 md:py-32 border-t border-slate-200 dark:border-white/5 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center space-x-2 text-teal-600 dark:text-teal-400 font-mono text-xs uppercase tracking-widest mb-3">
              <BookOpen size={14} />
              <span>Continuous Research</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-syne text-slate-900 dark:text-white tracking-tight">
              Knowledge Base<span className="text-teal-500 dark:text-[#00e5c0]">.</span>
            </h2>
          </div>
          <p className="text-slate-500 dark:text-gray-400 text-sm mt-3 md:mt-0 max-w-sm">
            Tracking emerging AI architectures, systems research, and advanced engineering specializations.
          </p>
        </div>

        {/* Tab Switcher Pills */}
        <div className="inline-flex p-1.5 rounded-2xl bg-slate-100/90 dark:bg-[#131315]/80 border border-slate-200 dark:border-white/10 backdrop-blur-xl mb-10 shadow-sm">
          <button
            onClick={() => setActiveTab("current")}
            className={clsx(
              "px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all relative flex items-center space-x-2",
              activeTab === "current" 
                ? "text-white bg-teal-600 dark:text-black dark:bg-[#00e5c0] shadow-sm dark:shadow-[0_0_20px_rgba(0,229,192,0.3)]" 
                : "text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
            )}
          >
            <PlayCircle size={16} />
            <span>Currently Exploring ({currentItems.length})</span>
          </button>
          <button
            onClick={() => setActiveTab("completed")}
            className={clsx(
              "px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all relative flex items-center space-x-2",
              activeTab === "completed" 
                ? "text-white bg-teal-600 dark:text-black dark:bg-[#00e5c0] shadow-sm dark:shadow-[0_0_20px_rgba(0,229,192,0.3)]" 
                : "text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
            )}
          >
            <CheckCircle2 size={16} />
            <span>Completed ({completedItems.length})</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="min-h-[250px]">
          {activeTab === "current" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentItems.map((item) => (
                <div 
                  key={item.id} 
                  className="p-6 sm:p-7 bg-white/80 dark:bg-[#131315]/80 backdrop-blur-2xl border border-slate-200/80 dark:border-white/10 rounded-2xl hover:border-teal-500/40 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.2)] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <span className="px-2.5 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400 bg-teal-500/10 border border-teal-500/20 rounded-md">
                        {item.category}
                      </span>
                      {item.resource_url && (
                        <a href={formatUrl(item.resource_url)} target="_blank" rel="noreferrer" className="text-slate-400 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400">
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>

                    <h3 className="font-bold text-slate-900 dark:text-white text-lg font-syne mb-2">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-slate-600 dark:text-gray-300 text-sm font-light leading-relaxed mb-6">
                        {item.description}
                      </p>
                    )}
                  </div>
                  
                  {/* Progress Bar with Glowing Tip */}
                  <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/5">
                    <div className="flex justify-between text-xs font-mono text-slate-500 dark:text-gray-400 mb-2 font-medium">
                      <span>Progress</span>
                      <span className="text-teal-600 dark:text-teal-400 font-bold">{item.progress_percent}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-black/60 rounded-full h-2 overflow-hidden border border-slate-300/40 dark:border-white/5">
                      <div 
                        style={{ width: `${item.progress_percent}%` }}
                        className="bg-gradient-to-r from-teal-500 to-[#00e5c0] h-2 rounded-full shadow-[0_0_10px_rgba(20,184,166,0.5)] dark:shadow-[0_0_10px_rgba(0,229,192,0.8)] transition-all duration-700"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "completed" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {completedItems.map((item) => (
                <div 
                  key={item.id} 
                  className="flex items-start p-5 bg-white/80 dark:bg-[#131315]/80 backdrop-blur-2xl border border-slate-200/80 dark:border-white/10 rounded-xl hover:border-teal-500/40 transition-all shadow-sm"
                >
                  <div className="p-2 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-[#00e5c0] mr-4 flex-shrink-0 mt-0.5">
                    <CheckCircle2 size={18} />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-slate-900 dark:text-white font-bold text-base font-syne">{item.title}</h3>
                      <span className="text-[10px] font-mono text-teal-600 dark:text-teal-400 uppercase tracking-widest font-semibold">{item.category}</span>
                    </div>
                    {item.description && (
                      <p className="text-slate-600 dark:text-gray-300 text-xs sm:text-sm font-light mt-1">{item.description}</p>
                    )}
                  </div>
                  {item.resource_url && (
                    <a href={formatUrl(item.resource_url)} target="_blank" rel="noreferrer" className="text-slate-400 dark:text-gray-400 hover:text-teal-600 dark:hover:text-white ml-3">
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
