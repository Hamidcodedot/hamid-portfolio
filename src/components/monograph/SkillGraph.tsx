"use client";

import { CertificationItem, SkillItem } from "@/lib/data";
import { Award, ArrowUpRight, CheckCircle2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { getTechIcon } from "./TechLogo";

interface SkillGraphProps {
  skills?: SkillItem[];
  certifications: CertificationItem[];
}

interface StackCategory {
  id: string;
  title: string;
  subtitle: string;
  pills: string[];
  spanTwoColumns?: boolean;
}

const STACK_CATEGORIES: StackCategory[] = [
  {
    id: "agentic-ai",
    title: "AGENTIC AI & LLM SYSTEMS",
    subtitle: "Deterministic schemas, edge proxies and agentic execution",
    pills: [
      "OpenAI API",
      "LangGraph",
      "Zod Schemas",
      "Pydantic / Instructor",
      "DSPy",
      "Prompt Engineering",
    ],
    spanTwoColumns: true,
  },
  {
    id: "rag-retrieval",
    title: "RAG & VECTOR RETRIEVAL",
    subtitle: "Semantic search, vector indexing and citations",
    pills: [
      "pgvector",
      "Vector Embeddings",
      "Cosine Similarity",
      "Supabase Vector",
      "Semantic Caching",
    ],
  },
  {
    id: "machine-learning",
    title: "MACHINE LEARNING & MATH",
    subtitle: "Stanford & DeepLearning.AI verified foundations",
    pills: [
      "PyTorch",
      "TensorFlow",
      "Scikit-Learn",
      "NumPy & Pandas",
      "Linear Algebra",
      "Neural Networks",
    ],
  },
  {
    id: "fullstack-runtimes",
    title: "FULL-STACK & RUNTIMES",
    subtitle: "Asynchronous APIs, queues and ACID databases",
    pills: [
      "TypeScript 5",
      "Next.js 14",
      "FastAPI",
      "Python 3.12",
      "PostgreSQL",
      "Redis",
    ],
  },
  {
    id: "devops-edge",
    title: "DEVOPS, CLOUD & EDGE",
    subtitle: "Edge middleware, containerization and CI/CD",
    pills: [
      "Edge Runtime",
      "Docker",
      "Linux Shell",
      "GitHub Actions",
      "Git",
      "Vercel",
    ],
  },
];

export default function SkillGraph({ certifications }: SkillGraphProps) {
  return (
    <section id="architecture" className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-14 sm:py-20 md:py-28 border-b border-espresso-border relative">
      <div id="skills" className="absolute -top-20" />

      {/* Section Header */}
      <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-4 sm:pb-6 border-b border-espresso-border/50 gap-4">
        <div>
          <span className="font-mono text-[10px] sm:text-[11px] text-brass uppercase tracking-[0.24em] block mb-2">
            CHAPTER I // ARCHITECTURE &amp; SYSTEMS TAXONOMY
          </span>
          <h2 className="font-sans text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-ivory">
            STACK
          </h2>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-ivory-muted">
          <span className="w-2.5 h-2.5 bg-[#2563eb] rounded-[2px]" />
          <span>What I reach for .</span>
        </div>
      </ScrollReveal>

      {/* Dev Jhawar Unified Blueprint Grid Box */}
      <ScrollReveal className="mb-14 sm:mb-20">
        <div className="bg-espresso-surface/70 border border-espresso-border rounded-lg overflow-hidden shadow-sm grid grid-cols-1 md:grid-cols-2">
          {/* 1. AGENTIC AI & LLM SYSTEMS (Spans 2 columns) */}
          <div className="col-span-1 md:col-span-2 p-5 sm:p-7 md:p-8 border-b border-espresso-border bg-espresso-surface/40 hover:bg-espresso-surface/80 transition-colors">
            <h3 className="font-sans font-extrabold text-lg sm:text-xl text-ivory uppercase tracking-tight mb-1">
              {STACK_CATEGORIES[0].title}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-ivory-muted font-normal mb-5">
              {STACK_CATEGORIES[0].subtitle}
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {STACK_CATEGORIES[0].pills.map((tech) => (
                <div
                  key={tech}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[4px] border border-espresso-border bg-espresso-deep/80 hover:border-brass/40 hover:bg-espresso-deep text-ivory-muted hover:text-ivory font-mono text-xs transition-all duration-150 group/pill cursor-default"
                >
                  <span className="text-brass/80 group-hover/pill:text-brass flex-shrink-0 transition-colors">
                    {getTechIcon(tech, "w-3.5 h-3.5")}
                  </span>
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 2. RAG & VECTOR RETRIEVAL (Row 2 Left) */}
          <div className="p-5 sm:p-7 md:p-8 border-b md:border-r border-espresso-border bg-espresso-surface/40 hover:bg-espresso-surface/80 transition-colors">
            <h3 className="font-sans font-extrabold text-lg sm:text-xl text-ivory uppercase tracking-tight mb-1">
              {STACK_CATEGORIES[1].title}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-ivory-muted font-normal mb-5">
              {STACK_CATEGORIES[1].subtitle}
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {STACK_CATEGORIES[1].pills.map((tech) => (
                <div
                  key={tech}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[4px] border border-espresso-border bg-espresso-deep/80 hover:border-brass/40 hover:bg-espresso-deep text-ivory-muted hover:text-ivory font-mono text-xs transition-all duration-150 group/pill cursor-default"
                >
                  <span className="text-brass/80 group-hover/pill:text-brass flex-shrink-0 transition-colors">
                    {getTechIcon(tech, "w-3.5 h-3.5")}
                  </span>
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. MACHINE LEARNING & MATH (Row 2 Right) */}
          <div className="p-5 sm:p-7 md:p-8 border-b border-espresso-border bg-espresso-surface/40 hover:bg-espresso-surface/80 transition-colors">
            <h3 className="font-sans font-extrabold text-lg sm:text-xl text-ivory uppercase tracking-tight mb-1">
              {STACK_CATEGORIES[2].title}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-ivory-muted font-normal mb-5">
              {STACK_CATEGORIES[2].subtitle}
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {STACK_CATEGORIES[2].pills.map((tech) => (
                <div
                  key={tech}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[4px] border border-espresso-border bg-espresso-deep/80 hover:border-brass/40 hover:bg-espresso-deep text-ivory-muted hover:text-ivory font-mono text-xs transition-all duration-150 group/pill cursor-default"
                >
                  <span className="text-brass/80 group-hover/pill:text-brass flex-shrink-0 transition-colors">
                    {getTechIcon(tech, "w-3.5 h-3.5")}
                  </span>
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. FULL-STACK & RUNTIMES (Row 3 Left) */}
          <div className="p-5 sm:p-7 md:p-8 border-b md:border-b-0 md:border-r border-espresso-border bg-espresso-surface/40 hover:bg-espresso-surface/80 transition-colors">
            <h3 className="font-sans font-extrabold text-lg sm:text-xl text-ivory uppercase tracking-tight mb-1">
              {STACK_CATEGORIES[3].title}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-ivory-muted font-normal mb-5">
              {STACK_CATEGORIES[3].subtitle}
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {STACK_CATEGORIES[3].pills.map((tech) => (
                <div
                  key={tech}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[4px] border border-espresso-border bg-espresso-deep/80 hover:border-brass/40 hover:bg-espresso-deep text-ivory-muted hover:text-ivory font-mono text-xs transition-all duration-150 group/pill cursor-default"
                >
                  <span className="text-brass/80 group-hover/pill:text-brass flex-shrink-0 transition-colors">
                    {getTechIcon(tech, "w-3.5 h-3.5")}
                  </span>
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 5. DEVOPS, CLOUD & EDGE (Row 3 Right) */}
          <div className="p-5 sm:p-7 md:p-8 bg-espresso-surface/40 hover:bg-espresso-surface/80 transition-colors">
            <h3 className="font-sans font-extrabold text-lg sm:text-xl text-ivory uppercase tracking-tight mb-1">
              {STACK_CATEGORIES[4].title}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-ivory-muted font-normal mb-5">
              {STACK_CATEGORIES[4].subtitle}
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {STACK_CATEGORIES[4].pills.map((tech) => (
                <div
                  key={tech}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[4px] border border-espresso-border bg-espresso-deep/80 hover:border-brass/40 hover:bg-espresso-deep text-ivory-muted hover:text-ivory font-mono text-xs transition-all duration-150 group/pill cursor-default"
                >
                  <span className="text-brass/80 group-hover/pill:text-brass flex-shrink-0 transition-colors">
                    {getTechIcon(tech, "w-3.5 h-3.5")}
                  </span>
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Professional Accreditations Section */}
      <div id="accreditations" className="pt-6 sm:pt-8">
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-4 sm:pb-6 border-b border-espresso-border/50 gap-4">
          <div>
            <span className="font-mono text-[10px] sm:text-[11px] text-brass uppercase tracking-[0.24em] block mb-2">
              CHAPTER II // PROVENANCE &amp; ACCREDITATIONS
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ivory font-normal">
              Professional Accreditations
            </h3>
          </div>
          <p className="font-sans text-xs sm:text-sm text-ivory-muted max-w-md font-light leading-relaxed">
            Verified academic credentials in{" "}
            <span className="font-montserrat font-medium text-amber-100">machine learning foundations</span>,
            neural architectures, and mathematical optimization.
          </p>
        </ScrollReveal>

        {/* Uniform Verification Plates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {certifications.map((cert, idx) => (
            <ScrollReveal
              key={cert.id}
              delayMs={idx * 50}
              className="bg-espresso-surface/70 border border-espresso-border hover:border-brass/45 rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 shadow-sm group"
            >
              <div>
                <div className="flex items-center justify-between border-b border-espresso-border/50 pb-3 mb-3.5">
                  <span className="font-mono text-[11px] text-brass uppercase tracking-wider font-medium">
                    {cert.platform}
                  </span>
                  <span className="font-mono text-[11px] text-ivory-faint">
                    Issued: {cert.date}
                  </span>
                </div>

                <h4 className="font-serif text-lg sm:text-xl text-ivory font-normal mb-1.5 group-hover:text-brass-light transition-colors">
                  {cert.title}
                </h4>

                <div className="text-xs font-sans text-ivory-muted font-light mb-4">
                  Issued by <span className="text-ivory font-medium">{cert.issuer}</span>
                </div>

                {/* Skills tags with vector logos */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skills.map((s) => (
                    <div
                      key={s}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] bg-espresso-deep border border-espresso-border text-ivory-muted text-xs font-mono"
                    >
                      <span className="text-brass flex-shrink-0">{getTechIcon(s, "w-3 h-3")}</span>
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Verification / Certificate Links */}
              <div className="pt-3.5 border-t border-espresso-border/50 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center space-x-1.5 font-mono text-[11px] text-ivory-faint">
                  {cert.credentialId && (
                    <>
                      <span className="text-ivory-faint/70">ID:</span>
                      <span className="text-brass tracking-normal">{cert.credentialId}</span>
                    </>
                  )}
                </div>

                <div className="flex items-center gap-2.5">
                  {cert.fileUrl && (
                    <a
                      href={cert.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs text-ivory-muted hover:text-ivory py-1.5 px-3 rounded-[4px] border border-espresso-border bg-espresso-deep/60 hover:border-brass/40 transition-colors min-h-[38px] active:scale-[0.98]"
                    >
                      <span>Certificate PDF</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-ivory-faint" />
                    </a>
                  )}
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs text-brass hover:text-brass-light py-1.5 px-3 rounded-[4px] border border-brass/30 bg-espresso-deep hover:border-brass transition-colors min-h-[38px] active:scale-[0.98]"
                    >
                      <span>Verify</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
