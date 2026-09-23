"use client";

import { useState } from "react";
import { WorkTreePillar } from "@/lib/data";
import { GitBranch, ArrowUpRight, Cpu, Eye, Server } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import TechLogo from "./TechLogo";

interface WorkTreeProps {
  pillars: WorkTreePillar[];
}

export default function WorkTree({ pillars }: WorkTreeProps) {
  const [activeBranch, setActiveBranch] = useState<string>(pillars[0]?.id || "ai-automation");

  const getPillarIcon = (id: string) => {
    switch (id) {
      case "ai-automation":
        return <Cpu className="w-4 h-4 text-brass" />;
      case "edge-vision":
        return <Eye className="w-4 h-4 text-brass" />;
      case "distributed-systems":
        return <Server className="w-4 h-4 text-brass" />;
      default:
        return <GitBranch className="w-4 h-4 text-brass" />;
    }
  };

  return (
    <section id="work-tree" className="py-20 md:py-28 px-6 max-w-6xl mx-auto border-t border-espresso-border relative">
      {/* Section Header */}
      <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.24em] text-brass mb-2">
            <span className="w-1.5 h-1.5 bg-brass rounded-full" />
            <span>INTERACTIVE ARCHITECTURAL TOPOLOGY</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-ivory font-normal">
            Production Systems // Core Architecture
          </h2>
        </div>
        <p className="font-sans text-sm text-ivory-muted max-w-md font-light leading-relaxed">
          Three high-reliability production systems engineered for low latency, zero-leak privacy, and verified scale. Select to inspect each architecture.
        </p>
      </ScrollReveal>

      {/* Visual Origin Root Node */}
      <ScrollReveal className="flex flex-col items-center mb-10" delayMs={50}>
        <div className="px-4 py-1.5 rounded-full border border-brass/40 bg-espresso-surface text-xs font-mono text-brass tracking-wider uppercase flex items-center gap-2 shadow-sm">
          <GitBranch className="w-3.5 h-3.5" />
          <span>Root Origin // Production Codebases</span>
        </div>
        <div className="w-[1px] h-8 bg-gradient-to-b from-brass/50 to-brass/20" />
      </ScrollReveal>

      {/* 3-Pillar Interactive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {pillars.map((pillar, idx) => {
          const isActive = activeBranch === pillar.id;

          return (
            <ScrollReveal key={pillar.id} delayMs={idx * 80}>
              <div
                onClick={() => setActiveBranch(pillar.id)}
                onMouseEnter={() => setActiveBranch(pillar.id)}
                className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between relative group h-full ${
                  isActive
                    ? "bg-espresso-surface border-brass shadow-lg shadow-brass/5"
                    : "bg-espresso-surface/50 border-espresso-border hover:border-espresso-borderHover hover:bg-espresso-surface/80"
                }`}
              >
                {/* Active Branch Indicator Dot */}
                <div
                  className={`absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-espresso transition-all duration-300 ${
                    isActive ? "bg-brass scale-110" : "bg-espresso-elevated"
                  }`}
                />

                <div>
                  {/* Pillar Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-semibold tracking-wider text-brass uppercase">
                      {pillar.systemLabel || `System ${pillar.pillarNumber}`}
                    </span>
                    <div className="p-1.5 rounded-lg bg-espresso-deep border border-espresso-border">
                      {getPillarIcon(pillar.id)}
                    </div>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-ivory font-normal mb-3 group-hover:text-brass-light transition-colors">
                    {pillar.systemName}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-ivory-muted leading-relaxed mb-6 font-light">
                    {pillar.summary}
                  </p>
                </div>

                <div>
                  {/* Highlight Metric */}
                  <div className="p-3 rounded-xl bg-espresso-deep/80 border border-espresso-border mb-5 flex items-center justify-between">
                    <div>
                      <div className="font-serif text-xl text-brass font-normal">
                        {pillar.metric}
                      </div>
                      <div className="text-[10px] font-mono text-ivory-faint uppercase tracking-wider">
                        {pillar.metricLabel}
                      </div>
                    </div>
                    {pillar.demoUrl && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-[10px] font-mono text-emerald-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Live</span>
                      </span>
                    )}
                  </div>

                  {/* Clean Minimalist Tech Stack Vector Logos */}
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    {pillar.techStack.map((tech) => (
                      <TechLogo key={tech} name={tech} size="sm" />
                    ))}
                  </div>

                  {/* Distinct Action Links: GitHub Code vs Live Production */}
                  <div className="flex items-center justify-between pt-3 border-t border-espresso-border/50">
                    <a
                      href={pillar.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-ivory-muted hover:text-brass transition-colors min-h-[44px] py-2"
                    >
                      <span>GitHub</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    {pillar.demoUrl && (
                      <a
                        href={pillar.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brass/10 hover:bg-brass text-brass hover:text-espresso border border-brass/30 transition-all font-mono text-xs font-semibold min-h-[38px]"
                      >
                        <span>Live System</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
