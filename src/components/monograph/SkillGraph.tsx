"use client";

import { CertificationItem, SkillItem } from "@/lib/data";
import { Cpu, Terminal, Layers, ShieldCheck, Award, ArrowUpRight, CheckCircle2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import TechLogo from "./TechLogo";

interface SkillGraphProps {
  skills?: SkillItem[];
  certifications: CertificationItem[];
}

export default function SkillGraph({ certifications }: SkillGraphProps) {
  const pillars = [
    {
      number: "01",
      title: "Applied AI & LLMs",
      icon: <Cpu className="w-4 h-4 text-brass" />,
      description: "Inference kernel optimizations, deterministic schema decoding, RAG topologies, and sub-second agentic distillation pipelines.",
      technologies: ["OpenAI API", "Zod", "vLLM", "DSPy", "Vector Topologies", "LangGraph", "Prompt Engineering"],
    },
    {
      number: "02",
      title: "Full-Stack & Systems",
      icon: <Terminal className="w-4 h-4 text-brass" />,
      description: "Memory-safe asynchronous runtimes, type-directed distributed services, zero-loss queues, and low-overhead network RPC protocols.",
      technologies: ["TypeScript 5", "Python 3.12", "C#", "FastAPI", "Node.js", "PostgreSQL", "SQLite", "gRPC"],
    },
    {
      number: "03",
      title: "3D WebGL & Frontend",
      icon: <Layers className="w-4 h-4 text-brass" />,
      description: "Hardware-accelerated GLSL shader synthesis, reactive spatial client canvases, and handcrafted typographic interaction architectures.",
      technologies: ["Three.js", "WebGL", "Next.js 14", "React 18", "Tailwind CSS", "Canvas 2D", "Framer Motion"],
    },
    {
      number: "04",
      title: "Cloud & DevOps",
      icon: <ShieldCheck className="w-4 h-4 text-brass" />,
      description: "Immutable edge network filtering, client-side PII sanitization, declarative orchestration, and high-availability topologies.",
      technologies: ["Edge Runtime", "Docker", "Linux Shell", "GitHub Actions CI/CD", "Prometheus", "Git"],
    },
  ];

  return (
    <section id="architecture" className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-14 sm:py-20 md:py-28 border-b border-espresso-border relative">
      <div id="skills" className="absolute -top-20" />
      {/* Section Header */}
      <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-4 sm:pb-6 border-b border-espresso-border/50 gap-3 sm:gap-4">
        <div>
          <span className="font-mono text-[10px] sm:text-[11px] text-brass uppercase tracking-[0.24em] block mb-2">
            CHAPTER I // ARCHITECTURE &amp; SYSTEMS TAXONOMY
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ivory font-normal">
            The Engineering Matrix
          </h2>
        </div>
        <p className="font-sans text-xs sm:text-sm text-ivory-muted max-w-md font-light leading-relaxed">
          Four compressed pillars of technical capability. Zero arbitrary percentage bars, pure verified engineering craft.
        </p>
      </ScrollReveal>

      {/* Compressed 4-Pillar Architectural Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-12 sm:mb-16">
        {pillars.map((pillar, idx) => (
          <ScrollReveal
            key={pillar.number}
            delayMs={idx * 60}
            className="bg-espresso-surface/70 border border-espresso-border p-5 sm:p-6 flex flex-col justify-between hover:border-brass/50 hover:bg-espresso-surface transition-all duration-200 group rounded-2xl"
          >
            <div>
              <div className="flex items-center justify-between border-b border-espresso-border/60 pb-3 mb-4">
                <span className="font-mono text-[10px] text-brass tracking-widest uppercase font-semibold">
                  PILLAR {pillar.number}
                </span>
                <div className="p-1 rounded bg-espresso-deep border border-espresso-border">
                  {pillar.icon}
                </div>
              </div>

              <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-ivory font-normal mb-2 sm:mb-2.5 group-hover:text-brass-light transition-colors">
                {pillar.title}
              </h3>

              <p className="font-sans text-xs text-ivory-muted leading-relaxed mb-5 sm:mb-6 font-light">
                {pillar.description}
              </p>
            </div>

            {/* Tech Vector Logos with minimal label */}
            <div className="flex flex-wrap gap-1.5 pt-3 sm:pt-4 border-t border-espresso-border/50">
              {pillar.technologies.map((tech) => (
                <TechLogo key={tech} name={tech} showLabel={true} size="sm" />
              ))}
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Professional Accreditations Section */}
      <div id="accreditations" className="pt-4 sm:pt-6">
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 pb-4 border-b border-espresso-border/50 gap-3 sm:gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 sm:p-2.5 rounded bg-brass/10 border border-brass/30 text-brass flex-shrink-0">
              <Award className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <span className="font-mono text-[10px] sm:text-[11px] text-brass uppercase tracking-[0.24em] block mb-1">
                CHAPTER II // PROVENANCE &amp; ACCREDITATIONS
              </span>
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-ivory font-normal">
                Professional Accreditations
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-sans text-ivory-muted">
            <CheckCircle2 className="w-4 h-4 text-brass flex-shrink-0" />
            <span className="text-[11px] sm:text-xs">DeepLearning.AI, Stanford University, Google, IBM &amp; IAENG Verified</span>
          </div>
        </ScrollReveal>

        {/* 4 Uniform Verification Plates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {certifications.map((cert, idx) => (
            <ScrollReveal
              key={cert.id}
              delayMs={idx * 60}
              className="bg-espresso-surface/60 border border-espresso-border p-5 sm:p-6 rounded-xl flex flex-col justify-between hover:border-brass/50 hover:bg-espresso-surface transition-all group"
            >
              <div>
                <div className="flex items-center justify-between border-b border-espresso-border/50 pb-2.5 mb-3">
                  <span className="font-mono text-xs text-brass font-medium">
                    {cert.platform}
                  </span>
                  <span className="font-mono text-[10.5px] sm:text-[11px] text-ivory-faint">
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
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {cert.skills.map((s) => (
                    <TechLogo key={s} name={s} showLabel={true} size="sm" />
                  ))}
                </div>
              </div>

              {/* Direct Verification / Certificate Links */}
              <div className="pt-3.5 border-t border-espresso-border/50 flex flex-wrap items-center justify-between gap-2.5 text-xs">
                <div className="flex items-center space-x-1.5 font-mono text-[11px] text-ivory-faint">
                  {cert.credentialId && (
                    <>
                      <span className="text-[10px] sm:text-[11px] text-ivory-faint/70">ID:</span>
                      <span className="text-brass tracking-normal text-[10.5px] sm:text-[11px]">{cert.credentialId}</span>
                    </>
                  )}
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                  {cert.fileUrl && (
                    <a
                      href={cert.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-brass hover:text-brass-light flex items-center space-x-1 transition-colors py-1 min-h-[44px]"
                    >
                      <span>View Certificate</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-brass hover:text-brass-light flex items-center space-x-1 transition-colors py-1 min-h-[44px]"
                    >
                      <span>Verify Credential</span>
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
