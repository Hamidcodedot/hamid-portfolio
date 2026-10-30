"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { getTechIcon } from "./TechLogo";
import { WorkTreePillar } from "@/lib/data";

interface WorkTreeProps {
  pillars?: WorkTreePillar[];
}

interface ProjectCardData {
  id: string;
  title: string;
  status: "Live" | "In Review" | "Production";
  year: string;
  tagline: string;
  highlight: string;
  image: string;
  techStack: string[];
  demoUrl?: string;
  repoUrl: string;
  caseStudyUrl: string;
}

const PROJECTS: ProjectCardData[] = [
  {
    id: "devvproxy",
    title: "DEVVPROXY",
    status: "Live",
    year: "2026",
    tagline: "Drop-in reverse proxy that scrubs customer PII at the edge, cuts inference cloud bills with deterministic caching, and guarantees zero-downtime failover.",
    highlight: "Evaluation runs a deterministic cost ladder: edge PII filter, hash gate, semantic lookup, and fallback inference only when needed.",
    image: "/projects/devvproxy.png",
    techStack: ["TypeScript", "Next.js", "FastAPI", "Redis", "OpenAI", "Tailwind CSS"],
    demoUrl: "https://devvproxy.vercel.app",
    repoUrl: "https://github.com/Hamidcodedot/devvproxy-saylani-assignment-2",
    caseStudyUrl: "/articles/architecting-devvproxy-edge-llm-privacy",
  },
  {
    id: "jurisdraft",
    title: "JURISDRAFT",
    status: "Live",
    year: "2026",
    tagline: "Institutional Legal Tech SaaS platform engineered to automate corporate contract drafting, negotiation, and storage with schema enforcement.",
    highlight: "Automated clause synthesis validated by strict Zod schema parsing, eliminating contractual ambiguities and multi-party redline drift.",
    image: "/projects/jurisdraft.png",
    techStack: ["TypeScript", "React", "Node.js", "PostgreSQL", "Zod", "Tailwind CSS"],
    demoUrl: "https://jurisdraft-saylani.vercel.app",
    repoUrl: "https://github.com/Hamidcodedot/jurisdraft-saylani-assignment-3",
    caseStudyUrl: "/articles/engineering-jurisdraft-legal-tech-ai",
  },
  {
    id: "agentwiki",
    title: "AGENTWIKI",
    status: "Live",
    year: "2026",
    tagline: "Agentic collaborative knowledge synthesizer where autonomous AI agents verify, structure, and cite factual claims across live web corpora in real-time.",
    highlight: "Deterministic RAG extraction with multi-source consensus scoring and structured citation graph generation.",
    image: "/projects/agentwiki.png",
    techStack: ["Next.js", "TypeScript", "LangGraph", "FastAPI", "Tailwind CSS", "Supabase"],
    demoUrl: "https://agentwiki-sandy.vercel.app",
    repoUrl: "https://github.com/Hamidcodedot/agentwiki",
    caseStudyUrl: "/articles/the-architecture-of-simplicity",
  },
  {
    id: "devvkit",
    title: "DEVVKIT",
    status: "Live",
    year: "2026",
    tagline: "Comprehensive modern developer suite and architectural utility platform engineered for high-velocity software engineering and rapid systems bootstrapping.",
    highlight: "Modular AST parsers, schema transformers, and runtime code sandboxes with zero dependencies and sub-millisecond execution.",
    image: "/projects/devvkit.png",
    techStack: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Node.js", "Vite"],
    demoUrl: "https://devvkit.com",
    repoUrl: "https://github.com/Hamidcodedot",
    caseStudyUrl: "/articles/the-architecture-of-simplicity",
  },
];

export default function WorkTree({ pillars }: WorkTreeProps) {
  return (
    <section id="work-tree" className="py-14 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-espresso-border relative">
      <div id="projects" className="absolute -top-20" />

      {/* Section Header */}
      <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-3 sm:gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.24em] text-brass mb-2">
            <span className="w-1.5 h-1.5 bg-brass rounded-full" />
            <span>FEATURED SYSTEMS // PRODUCTION WORK</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-normal">
            Projects
          </h2>
        </div>
        <p className="font-sans text-xs sm:text-sm text-ivory-muted max-w-md font-light leading-relaxed">
          Production systems, edge AI gateways, and enterprise platforms engineered for verifiable throughput, deterministic safety, and craft.
        </p>
      </ScrollReveal>

      {/* Dev Jhawar 2-Column Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
        {PROJECTS.map((project, idx) => (
          <ScrollReveal key={project.id} delayMs={idx * 60}>
            <article className="group bg-espresso-surface/80 border border-espresso-border hover:border-brass/40 rounded-md p-4 sm:p-6 flex flex-col h-full transition-all duration-300 shadow-sm">
              {/* Media Frame with 1px border and subtle hover zoom displaying real interface screenshot */}
              <a
                href={project.demoUrl || project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live preview`}
                className="block relative aspect-[16/10] overflow-hidden rounded-md border border-espresso-border/90 bg-espresso-deep group/media cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={`${project.title} live interface`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-smooth group-hover/media:scale-[1.025]"
                  loading="lazy"
                />
              </a>

              {/* Card Body */}
              <div className="flex flex-col flex-1 pt-4">
                {/* Meta Row: Live Status + Year */}
                <div className="flex items-center justify-between font-mono text-xs mb-3">
                  <div className="inline-flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.7)]" />
                    <span className="font-mono text-xs text-ivory font-medium">{project.status}</span>
                  </div>
                  <span className="font-mono text-xs text-ivory-faint tracking-wider">{project.year}</span>
                </div>

                {/* Bold Punchy Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold font-sans tracking-tight uppercase text-ivory mb-2.5 group-hover:text-brass transition-colors">
                  <a
                    href={project.demoUrl || project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline underline-offset-4"
                  >
                    {project.title}
                  </a>
                </h3>

                {/* Tagline */}
                <p className="text-sm sm:text-[15px] text-ivory-muted leading-relaxed font-normal mb-3">
                  {project.tagline}
                </p>

                {/* Highlight Callout with Left Accent Bar */}
                {project.highlight && (
                  <p className="border-l-2 border-brass/70 pl-3 py-1 text-xs sm:text-[13px] font-sans text-ivory/90 mb-4 bg-brass/5 rounded-r-[2px]">
                    {project.highlight}
                  </p>
                )}

                {/* Tech Chips */}
                <ul className="flex flex-wrap gap-1.5 sm:gap-2 mb-6" aria-label="Technology stack">
                  {project.techStack.map((tech) => (
                    <li
                      key={tech}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-[4px] border border-espresso-border bg-espresso-deep/80 text-ivory-muted hover:border-brass/40 transition-colors"
                    >
                      {getTechIcon(tech, "w-3 h-3 text-brass/80 flex-shrink-0")}
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>

                {/* Actions & Case Study: Exact Dev Jhawar Hierarchy */}
                <div className="mt-auto pt-4 border-t border-espresso-border/50 flex flex-col gap-3">
                  {/* Primary Button Row: Blue Live site + White GitHub */}
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                    {project.demoUrl && project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-mono text-xs font-semibold rounded-md transition-all duration-150 active:scale-[0.98] shadow-sm"
                      >
                        <span>Live site</span>
                        <span className="text-xs">↗</span>
                      </a>
                    )}

                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-white text-zinc-950 hover:bg-zinc-100 font-mono text-xs font-semibold rounded-md transition-all duration-150 active:scale-[0.98] shadow-sm"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg>
                      <span>GitHub</span>
                    </a>
                  </div>

                  {/* Dedicated Underlined Case Study Link Below Buttons */}
                  {project.caseStudyUrl && (
                    <div>
                      <Link
                        href={project.caseStudyUrl}
                        className="inline-block font-mono text-xs text-ivory/80 hover:text-brass underline underline-offset-4 transition-colors pt-0.5"
                      >
                        Read the case study
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
