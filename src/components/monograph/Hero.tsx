"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AboutData } from "@/lib/data";
import { ArrowDown, ArrowUpRight, FileText, Sparkles } from "lucide-react";
import OdysseyVesselRotator from "./OdysseyVesselRotator";
import ScrollReveal from "./ScrollReveal";
import Highlight from "@/components/ui/Highlight";

interface HeroProps {
  data: AboutData;
}

export default function Hero({ data }: HeroProps) {
  const specializations = [
    "AI Systems Architect",
    "Zero-Latency Edge Builder",
    "Distributed Systems Engineer",
  ];

  return (
    <section
      id="about"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-10 sm:pt-14 md:pt-20 pb-14 sm:pb-20 border-b border-espresso-border overflow-hidden"
    >
      {/* Top Status Indicator Pill with Dev Jhawar simplicity */}
      <ScrollReveal delayMs={0} className="flex justify-center mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-espresso-surface/90 border border-espresso-border hover:border-brass/40 transition-colors shadow-sm text-xs font-mono text-ivory-muted">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.7)] flex-shrink-0" />
          <span>Available for High-Impact Projects &amp; Collaborations</span>
        </div>
      </ScrollReveal>

      {/* Centerpiece: Circular Archival Frame with Monogram & Radial Orbit */}
      <ScrollReveal delayMs={50} className="flex justify-center mb-6 sm:mb-8">
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 flex items-center justify-center">
          {/* Outer Dashed Orbit Ring */}
          <div className="absolute inset-0 rounded-full border border-dashed border-brass/30 animate-[spin_60s_linear_infinite]" />
          <div className="absolute -inset-2 rounded-full border border-brass/15" />

          {/* Micro Orbit Coordinates */}
          <span className="absolute -top-2.5 px-1.5 bg-espresso font-mono text-[8px] sm:text-[9px] text-brass/80 tracking-widest uppercase">
            33°41&apos;N 73°03&apos;E
          </span>
          <span className="absolute -bottom-2.5 px-1.5 bg-espresso font-mono text-[8px] sm:text-[9px] text-brass/80 tracking-widest uppercase">
            EPOCH MMXXVI
          </span>

          {/* Portrait Frame */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-2 border-brass/80 p-1 bg-gradient-to-b from-brass/30 to-espresso-surface">
            <div className="w-full h-full rounded-full overflow-hidden relative border border-brass/40 bg-espresso-deep group">
              <Image
                src={data.photo_url || "/profile.png"}
                alt={data.name}
                fill
                priority
                sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
                className="object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-[filter,transform] duration-300 ease-smooth"
              />
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Grand Editorial Typography & Kinetic Specialization Rotator */}
      <div className="max-w-4xl mx-auto text-center">
        {/* Intro greeting */}
        <ScrollReveal delayMs={80} className="mb-2">
          <p className="font-mono text-xs sm:text-sm text-brass uppercase tracking-widest">
            Hi, I&apos;m Hamid Shahid.
          </p>
        </ScrollReveal>

        {/* Editorial Headline */}
        <ScrollReveal delayMs={100}>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory tracking-tight leading-[1.2] sm:leading-[1.18] mb-4 sm:mb-5 max-w-4xl mx-auto">
            I build AI systems, deterministic edge proxies, and resilient distributed architectures.
          </h1>
        </ScrollReveal>

        {/* Odyssey Vessel Kinetic Specialization Rotator */}
        <ScrollReveal delayMs={120} className="mb-4 sm:mb-6 flex items-center justify-center">
          <OdysseyVesselRotator specializations={specializations} />
        </ScrollReveal>

        {/* Concise Intellectual Bio with ChaiUI Highlight */}
        <ScrollReveal delayMs={140}>
          <p className="font-sans text-xs xs:text-sm sm:text-base md:text-lg text-ivory-muted max-w-2xl mx-auto leading-relaxed font-light mb-8 sm:mb-10 px-2 sm:px-0">
            Architecting high-throughput inference runtimes,{" "}
            <Highlight>deterministic cognitive pipelines</Highlight>, and
            low-latency distributed backends with mathematical rigor and craft.
          </p>
        </ScrollReveal>

        {/* Hero Actions Cluster */}
        <ScrollReveal delayMs={160}>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-4 mb-10 sm:mb-14 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto">
            <a
              href="#work-tree"
              className="btn-asym inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[46px] bg-ivory text-espresso font-sans text-xs sm:text-sm font-semibold hover:bg-ivory-muted transition-all duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-espresso shadow-sm"
            >
              <span>Explore Architecture</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <a
              href="#contact"
              className="btn-asym-mirror inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[46px] border border-espresso-border bg-espresso-surface/80 hover:border-brass/70 text-ivory font-sans text-xs sm:text-sm font-medium transition-all duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-espresso"
            >
              <span>Schedule Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[46px] rounded-lg border border-espresso-border bg-espresso-surface/40 hover:border-brass/40 text-ivory-muted hover:text-ivory font-sans text-xs sm:text-sm font-medium transition-all duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-espresso"
            >
              <FileText className="w-3.5 h-3.5 text-brass" />
              <span>Curriculum Vitae</span>
            </a>
          </div>
        </ScrollReveal>

        {/* Understated Quantitative Micro-Stats Row */}
        <ScrollReveal delayMs={180}>
          <div className="grid grid-cols-3 gap-1 xs:gap-2 sm:gap-6 pt-6 sm:pt-8 border-t border-espresso-border/50 max-w-3xl mx-auto">
            <div className="py-2 px-1 xs:px-2 sm:px-4 text-center sm:text-left border-r border-espresso-border/50">
              <span className="font-serif text-lg xs:text-xl sm:text-3xl text-brass block">
                3+ Years
              </span>
              <span className="font-mono text-[9px] xs:text-[10px] sm:text-[11px] text-ivory-faint uppercase tracking-wider block mt-0.5 sm:mt-1">
                Systems Craft
              </span>
            </div>
            <div className="py-2 px-1 xs:px-2 sm:px-4 text-center sm:text-left border-r border-espresso-border/50">
              <span className="font-serif text-lg xs:text-xl sm:text-3xl text-brass block">
                9 Repos
              </span>
              <span className="font-mono text-[9px] xs:text-[10px] sm:text-[11px] text-ivory-faint uppercase tracking-wider block mt-0.5 sm:mt-1">
                Architecture
              </span>
            </div>
            <div className="py-2 px-1 xs:px-2 sm:px-4 text-center sm:text-left">
              <span className="font-serif text-lg xs:text-xl sm:text-3xl text-brass block">
                0ms
              </span>
              <span className="font-mono text-[9px] xs:text-[10px] sm:text-[11px] text-ivory-faint uppercase tracking-wider block mt-0.5 sm:mt-1">
                Edge Latency
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
