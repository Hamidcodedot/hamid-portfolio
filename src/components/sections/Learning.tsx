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
    <section id="learning" className="py-24 border-t border-gray-800/30">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold font-syne mb-12 text-white">
          Knowledge Base<span className="text-teal">.</span>
        </h2>

        <div className="flex space-x-2 border-b border-gray-800 mb-10 w-max">
          <button
            onClick={() => setActiveTab("current")}
            className={clsx(
              "px-6 py-4 text-sm font-medium transition-all relative",
              activeTab === "current" ? "text-teal" : "text-gray-500 hover:text-gray-300"
            )}
          >
            Currently Learning
            {activeTab === "current" && (
              <motion.div layoutId="underline" className="absolute left-0 bottom-0 w-full h-[2px] bg-teal" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("completed")}
            className={clsx(
              "px-6 py-4 text-sm font-medium transition-all relative",
              activeTab === "completed" ? "text-white" : "text-gray-500 hover:text-gray-300"
            )}
          >
            Completed
            {activeTab === "completed" && (
              <motion.div layoutId="underline" className="absolute left-0 bottom-0 w-full h-[2px] bg-white" />
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
                <div key={item.id} className="p-6 bg-[#0a0a0a] border border-gray-800/50 rounded-xl hover:border-teal/30 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-3">
                      <PlayCircle className="text-teal" size={20} />
                      <h3 className="font-semibold text-white">{item.title}</h3>
                    </div>
                    {item.resource_url && (
                      <a href={formatUrl(item.resource_url)} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-teal"><ExternalLink size={16} /></a>
                    )}
                  </div>
                  <span className="text-xs uppercase tracking-wider text-gray-500 block mb-4">{item.category}</span>
                  {item.description && (
                    <p className="text-gray-400 text-sm mb-5 font-light leading-relaxed">
                      {item.description}
                    </p>
                  )}
                  
                  <div className="w-full bg-[#1a1a1a] rounded-full h-1.5 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress_percent}%` }}
                      viewport={{ once: true }}
                      className="bg-teal h-1.5 rounded-full"
                    />
                  </div>
                  <div className="text-right mt-2 text-xs text-gray-500 font-mono">
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
                <div key={item.id} className="flex items-center p-4 bg-[#0a0a0a] border border-gray-800/50 rounded-lg hover:bg-[#111] transition-colors">
                  <CheckCircle2 className="text-green-500 mr-4 flex-shrink-0" size={20} />
                  <div className="flex-grow">
                    <h3 className="text-white font-medium">{item.title}</h3>
                    <span className="text-xs text-gray-500 block mb-1">{item.category}</span>
                    {item.description && (
                      <p className="text-gray-400 text-sm font-light mt-1">{item.description}</p>
                    )}
                  </div>
                  {item.resource_url && (
                    <a href={formatUrl(item.resource_url)} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white px-3"><ExternalLink size={16} /></a>
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
