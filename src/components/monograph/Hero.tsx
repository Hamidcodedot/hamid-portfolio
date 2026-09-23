"use client";

import Image from "next/image";
import { AboutData } from "@/lib/data";
import { ArrowDown, ArrowUpRight, Compass, FileText } from "lucide-react";
import OdysseyVesselRotator from "./OdysseyVesselRotator";

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
    <section id="about" className="relative w-full max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-20 border-b border-espresso-border overflow-hidden">
      {/* Top Archival Status Indicator Pill */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full border border-brass/35 bg-espresso-surface/90 shadow-inner">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
          <span className="font-mono text-xs tracking-normal text-ivory-muted font-normal">
            Available for Projects &amp; Collaboration
          </span>
        </div>
      </div>

      {/* Centerpiece: Circular Archival Frame with Monogram & Radial Orbit */}
      <div className="flex justify-center mb-8">
        <div className="relative w-36 h-36 md:w-40 md:h-40 flex items-center justify-center">
          {/* Outer Dashed Orbit Ring */}
          <div className="absolute inset-0 rounded-full border border-dashed border-brass/30 animate-[spin_60s_linear_infinite]" />
          <div className="absolute -inset-2.5 rounded-full border border-brass/15" />

          {/* Micro Orbit Coordinates */}
          <span className="absolute -top-3 px-2 bg-espresso font-mono text-[9px] text-brass/80 tracking-widest uppercase">
            33°41&apos;N 73°03&apos;E
          </span>
          <span className="absolute -bottom-3 px-2 bg-espresso font-mono text-[9px] text-brass/80 tracking-widest uppercase">
            EPOCH MMXXVI
          </span>

          {/* Portrait Frame */}
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-2 border-brass/80 p-1 bg-gradient-to-b from-brass/30 to-espresso-surface shadow-xl">
            <div className="w-full h-full rounded-full overflow-hidden relative border border-brass/40 bg-espresso-deep group">
              <Image
                src={data.photo_url || "/profile.png"}
                alt={data.name}
                fill
                priority
                sizes="(max-width: 768px) 112px, 128px"
                className="object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Grand Editorial Typography & Kinetic Specialization Rotator */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory tracking-tight leading-[1.18] mb-5">
          An Odyssey of Engineering &amp; Systems Intelligence.
        </h1>

        {/* Odyssey Vessel Kinetic Specialization Rotator */}
        <div className="mb-6 flex items-center justify-center">
          <OdysseyVesselRotator specializations={specializations} />
        </div>

        {/* Concise Intellectual Bio */}
        <p className="font-sans text-sm sm:text-base md:text-lg text-ivory-muted max-w-2xl mx-auto leading-relaxed font-light mb-10">
          Architecting high-throughput inference runtimes, deterministic cognitive pipelines, and low-latency distributed backends with mathematical rigor and craft.
        </p>

        {/* Hero Actions Cluster */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14">
          <a
            href="#architecture"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] rounded-full bg-brass text-espresso font-sans text-xs sm:text-sm font-medium hover:bg-brass-light transition-all active:scale-[0.98] shadow-md shadow-brass/10"
          >
            <span>Explore Architecture</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>

          <a
            href="#consultation"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] rounded-full border border-espresso-border bg-espresso-surface/80 hover:border-brass/70 text-ivory font-sans text-xs sm:text-sm font-medium transition-all active:scale-[0.98]"
          >
            <span>Schedule Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] rounded-full border border-espresso-border bg-espresso-surface/40 hover:border-brass/40 text-ivory-muted hover:text-ivory font-sans text-xs sm:text-sm font-medium transition-all active:scale-[0.98]"
          >
            <FileText className="w-3.5 h-3.5 text-brass" />
            <span>Curriculum Vitae</span>
          </a>
        </div>

        {/* Understated Quantitative Micro-Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-espresso-border/50 max-w-3xl mx-auto">
          <div className="py-2 px-4 text-center sm:text-left border-b sm:border-b-0 sm:border-r border-espresso-border/50">
            <span className="font-serif text-2xl sm:text-3xl text-brass block">3+ Years</span>
            <span className="font-mono text-[11px] text-ivory-faint uppercase tracking-wider block mt-1">
              Dedicated Systems Craft
            </span>
          </div>
          <div className="py-2 px-4 text-center sm:text-left border-b sm:border-b-0 sm:border-r border-espresso-border/50">
            <span className="font-serif text-2xl sm:text-3xl text-brass block">9 Repositories</span>
            <span className="font-mono text-[11px] text-ivory-faint uppercase tracking-wider block mt-1">
              Production Architecture
            </span>
          </div>
          <div className="py-2 px-4 text-center sm:text-left">
            <span className="font-serif text-2xl sm:text-3xl text-brass block">0ms Latency</span>
            <span className="font-mono text-[11px] text-ivory-faint uppercase tracking-wider block mt-1">
              Deterministic Caching
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
