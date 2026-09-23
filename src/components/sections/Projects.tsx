"use client";

import { ExternalLink, Github, MessageSquare, Code, Sparkles, FolderGit2 } from "lucide-react";
import { formatUrl } from "@/lib/utils";
import { motion } from "framer-motion";
import { ProjectData } from "@/lib/data";

export default function Projects({ projects }: { projects: ProjectData[] }) {
  return (
    <section id="projects" className="py-20 md:py-32 relative z-10 border-t border-slate-200 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
          <div>
            <div className="flex items-center space-x-2 text-teal-600 dark:text-teal-400 font-mono text-xs uppercase tracking-widest mb-3">
              <FolderGit2 size={14} />
              <span>Production Deployments</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-syne text-slate-900 dark:text-white tracking-tight">
              Selected Works<span className="text-teal-500 dark:text-[#00e5c0]">.</span>
            </h2>
          </div>
          <p className="text-slate-500 dark:text-gray-400 text-sm mt-3 md:mt-0 max-w-sm">
            Scalable architectures, agentic pipelines, and high-throughput machine learning systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="group relative bg-white/80 dark:bg-[#131315]/80 backdrop-blur-2xl border border-slate-200/80 dark:border-white/10 rounded-2xl p-6 sm:p-8 hover:border-teal-500/50 transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgba(20,184,166,0.15)] flex flex-col h-full overflow-hidden"
            >
              {/* Subtle top light reflection */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-teal-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Card Header: Title & Action Links */}
              <div className="flex justify-between items-start mb-5">
                <div>
                  <span className="text-[11px] font-mono text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-1 block font-semibold">
                    PROJECT // 0{idx + 1}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-syne text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-[#00e5c0] transition-colors">
                    {project.title}
                  </h3>
                </div>

                <div className="flex items-center space-x-2">
                  {project.repo_url && (
                    <a 
                      href={formatUrl(project.repo_url)} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:border-teal-500/40 hover:bg-teal-500/10 transition-all"
                      aria-label="Repository"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.demo_url && project.demo_url !== "#" && (
                    <a 
                      href={formatUrl(project.demo_url)} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:border-teal-500/40 hover:bg-teal-500/10 transition-all"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-6 flex-grow font-light">
                {project.description}
              </p>

              {/* Review Testimonial (if present) */}
              {project.review_text && (
                <div className="mb-6 p-4 bg-slate-50 dark:bg-black/40 rounded-xl border border-slate-200/60 dark:border-white/5 backdrop-blur-md">
                  <div className="flex items-start">
                    <MessageSquare size={16} className="text-teal-600 dark:text-[#00e5c0] mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-slate-700 dark:text-gray-300 text-xs sm:text-sm italic font-medium">"{project.review_text}"</p>
                      {project.review_author && (
                        <p className="text-teal-600 dark:text-teal-400 text-[11px] font-mono font-semibold mt-1.5">— {project.review_author}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-200 dark:border-white/5">
                {project.tech_stack?.map((tech: string) => (
                  <span 
                    key={tech} 
                    className="px-2.5 py-1 text-[11px] font-mono font-medium text-teal-700 dark:text-teal-300 bg-teal-500/10 border border-teal-500/20 rounded-md backdrop-blur-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
