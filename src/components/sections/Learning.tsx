"use client";

import { useState } from "react";
import { CheckCircle2, PlayCircle, ExternalLink } from "lucide-react";
import clsx from "clsx";
import { formatUrl } from "@/lib/utils";
import { motion } from "framer-motion";

type LearningItem = {
  id: string;
  title: string;
  category: string;
  status: "current" | "completed";
  progress_percent: number;
  resource_url?: string;
  description?: string;
};

export default function Learning({ data }: { data: { current: LearningItem[], completed: LearningItem[] } }) {
  const [activeTab, setActiveTab] = useState<"current" | "completed">("current");

  const currentItems = data?.current || [];
  const completedItems = data?.completed || [];

  return (
    <section id="learning" className="py-24 border-t border-black/5 dark:border-white/10 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold font-syne mb-12 text-gray-900 dark:text-white">
          Knowledge Base<span className="text-teal-500">.</span>
        </h2>

        <div className="flex space-x-2 border-b border-black/10 dark:border-white/10 mb-10 w-max">
          <button
            onClick={() => setActiveTab("current")}
            className={clsx(
              "px-6 py-4 text-sm font-medium transition-all relative",
              activeTab === "current" ? "text-teal-600 dark:text-teal-400" : "text-gray-500 dark:hover:text-gray-300 hover:text-gray-800"
            )}
          >
            Currently Learning
            {activeTab === "current" && (
              <motion.div layoutId="underline" className="absolute left-0 bottom-0 w-full h-[2px] bg-teal-500" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("completed")}
            className={clsx(
              "px-6 py-4 text-sm font-medium transition-all relative",
              activeTab === "completed" ? "text-gray-900 dark:text-white" : "text-gray-500 dark:hover:text-gray-300 hover:text-gray-800"
            )}
          >
            Completed
            {activeTab === "completed" && (
              <motion.div layoutId="underline" className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-900 dark:bg-white" />
            )}
          </button>
        </div>

        <div className="min-h-[300px]">
          {activeTab === "current" && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="grid md:grid-cols-2 gap-6 max-h-[450px] overflow-y-auto pr-4"
            >
              {currentItems.map((item) => (
                <div key={item.id} className="p-6 bg-white/40 dark:bg-black/40 backdrop-blur-md border border-black/5 dark:border-white/10 rounded-xl hover:border-teal-500/30 transition-colors shadow-[0_4px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.2)]">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-3">
                      <PlayCircle className="text-teal-500" size={20} />
                      <h3 className="font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                    </div>
                    {item.resource_url && (
                      <a href={formatUrl(item.resource_url)} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-teal-600 dark:hover:text-teal-400"><ExternalLink size={16} /></a>
                    )}
                  </div>
                  <span className="text-xs uppercase tracking-wider text-gray-600 dark:text-gray-500 block mb-4">{item.category}</span>
                  {item.description && (
                    <p className="text-gray-700 dark:text-gray-400 text-sm mb-5 font-light leading-relaxed">
                      {item.description}
                    </p>
                  )}
                  
                  <div className="w-full bg-black/10 dark:bg-white/10 rounded-full h-1.5 overflow-hidden backdrop-blur-sm">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress_percent}%` }}
                      viewport={{ once: true }}
                      className="bg-teal-500 h-1.5 rounded-full"
                    />
                  </div>
                  <div className="text-right mt-2 text-xs text-gray-600 dark:text-gray-500 font-mono">
                    {item.progress_percent}%
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "completed" && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="grid gap-4 max-h-[450px] overflow-y-auto pr-4"
            >
              {completedItems.map((item) => (
                <div key={item.id} className="flex items-center p-4 bg-white/40 dark:bg-black/40 backdrop-blur-md border border-black/5 dark:border-white/10 rounded-lg hover:bg-white/60 dark:hover:bg-black/60 transition-colors shadow-sm">
                  <CheckCircle2 className="text-green-500 mr-4 flex-shrink-0" size={20} />
                  <div className="flex-grow">
                    <h3 className="text-gray-900 dark:text-white font-medium">{item.title}</h3>
                    <span className="text-xs text-gray-600 dark:text-gray-500 block mb-1">{item.category}</span>
                    {item.description && (
                      <p className="text-gray-700 dark:text-gray-400 text-sm font-light mt-1">{item.description}</p>
                    )}
                  </div>
                  {item.resource_url && (
                    <a href={formatUrl(item.resource_url)} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white px-3"><ExternalLink size={16} /></a>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
