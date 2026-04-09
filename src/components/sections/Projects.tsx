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
    <section id="projects" className="py-24 bg-[#050505]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-syne text-white">
            Selected Works<span className="text-teal">.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-h-[750px] overflow-y-auto pr-4">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-[#0a0a0a] border border-gray-800/60 rounded-2xl p-8 hover:bg-[#0c0c0c] transition-all duration-300 hover:-translate-y-1 hover:border-gray-700 hover:shadow-2xl flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold font-syne text-white group-hover:text-teal transition-colors">
                  {project.title}
                </h3>
                <div className="flex space-x-3 text-gray-400">
                  {project.repo_url && (
                    <a href={formatUrl(project.repo_url)} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                  )}
                  {project.demo_url && (
                    <a href={formatUrl(project.demo_url)} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>

              {project.review_text && (
                <div className="mb-8 p-4 bg-[#111] rounded-lg border border-gray-800/50">
                  <div className="flex items-start">
                    <MessageSquare size={16} className="text-teal mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300 text-sm italic">"{project.review_text}"</p>
                      {project.review_author && (
                        <p className="text-gray-500 text-xs font-semibold mt-2">— {project.review_author}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech_stack?.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 text-xs font-medium text-teal bg-teal/5 border border-teal/10 rounded-full"
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
