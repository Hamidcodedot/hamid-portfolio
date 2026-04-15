"use client";

import { ExternalLink, Github, MessageSquare } from "lucide-react";
import { formatUrl } from "@/lib/utils";
import { motion } from "framer-motion";

type Project = {
  id: string;
  title: string;
  description: string;
  tech_stack: string[];
  demo_url?: string;
  repo_url?: string;
  review_text?: string;
  review_author?: string;
  image_url?: string;
};

export default function Projects({ projects }: { projects: Project[] }) {

  return (
    <section id="projects" className="py-16 md:py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-end mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-syne text-gray-900 dark:text-white">
            Selected Works<span className="text-teal-500">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-h-[750px] overflow-y-auto pr-2 sm:pr-4">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-white/40 dark:bg-black/40 backdrop-blur-md border border-black/5 dark:border-white/10 rounded-2xl p-5 sm:p-7 md:p-8 hover:bg-white/60 dark:hover:bg-black/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col h-full shadow-[0_4px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.2)]"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl sm:text-2xl font-bold font-syne text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex space-x-3 text-gray-500 dark:text-gray-400">
                  {project.repo_url && (
                    <a href={formatUrl(project.repo_url)} target="_blank" rel="noreferrer" className="hover:text-black dark:hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                  )}
                  {project.demo_url && (
                    <a href={formatUrl(project.demo_url)} target="_blank" rel="noreferrer" className="hover:text-black dark:hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>

              {project.review_text && (
                <div className="mb-8 p-4 bg-black/5 dark:bg-white/5 rounded-lg border border-black/5 dark:border-white/10 backdrop-blur-sm">
                  <div className="flex items-start">
                    <MessageSquare size={16} className="text-teal-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 dark:text-gray-300 text-sm italic">"{project.review_text}"</p>
                      {project.review_author && (
                        <p className="text-gray-500 dark:text-gray-400 text-xs font-semibold mt-2">— {project.review_author}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech_stack?.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 text-xs font-medium text-teal-700 dark:text-teal-300 bg-teal-500/10 border border-teal-500/20 rounded-full backdrop-blur-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
