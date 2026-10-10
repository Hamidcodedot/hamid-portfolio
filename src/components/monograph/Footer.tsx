"use client";

import VisitorCounter from "./VisitorCounter";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-espresso-border bg-espresso text-ivory-faint text-xs font-sans pb-24 sm:pb-0 before:absolute before:top-0 before:left-1/2 before:h-px before:w-full before:max-w-[1440px] before:-translate-x-1/2 before:bg-brass before:opacity-25 before:[mask-image:linear-gradient(90deg,transparent_0%,black_30%,black_70%,transparent_100%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-12">
        {/* Streamlined Navigation Anchors */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-sans tracking-wide text-ivory-muted mb-6 sm:mb-8">
          <a href="/#about" className="hover:text-brass transition-colors py-1 min-h-[44px] flex items-center px-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass active:scale-[0.97]">
            About
          </a>
          <a href="/#work-tree" className="hover:text-brass transition-colors py-1 min-h-[44px] flex items-center px-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass active:scale-[0.97]">
            Systems
          </a>
          <a href="/#architecture" className="hover:text-brass transition-colors py-1 min-h-[44px] flex items-center px-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass active:scale-[0.97]">
            Architecture
          </a>
          <a href="/articles" className="hover:text-brass transition-colors py-1 min-h-[44px] flex items-center px-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass active:scale-[0.97]">
            Articles
          </a>
          <a href="/#contact" className="hover:text-brass transition-colors py-1 min-h-[44px] flex items-center px-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass active:scale-[0.97]">
            Contact
          </a>
          <a
            href="https://github.com/Hamidcodedot"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brass transition-colors py-1 min-h-[44px] inline-flex items-center gap-1 px-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass active:scale-[0.97]"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-brass" />
          </a>
        </div>

        {/* Minimal Baseline Row: Attribution & Live Telemetry Badge */}
        <div className="pt-6 border-t border-espresso-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="text-xs font-sans text-ivory-muted">
            <span className="text-ivory font-serif tracking-wide">Hamid Shahid</span>
            <span className="text-ivory-faint mx-2 font-mono">•</span>
            <span className="text-ivory-faint">Odyssey &copy; {currentYear}</span>
            <span className="text-ivory-faint mx-2 font-mono">•</span>
            <span className="text-ivory-faint font-mono text-[11px]">Multan, PK</span>
          </div>

          <VisitorCounter />
        </div>
      </div>
    </footer>
  );
}
