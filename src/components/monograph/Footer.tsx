"use client";

import VisitorCounter from "./VisitorCounter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-espresso-border bg-espresso text-ivory-faint text-xs font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-12">
        {/* Streamlined Navigation Anchors */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-sans tracking-wide text-ivory-muted mb-8">
          <a href="/#about" className="hover:text-brass transition-colors py-1 min-h-[44px] flex items-center">
            About
          </a>
          <a href="/#work-tree" className="hover:text-brass transition-colors py-1 min-h-[44px] flex items-center">
            Systems
          </a>
          <a href="/#architecture" className="hover:text-brass transition-colors py-1 min-h-[44px] flex items-center">
            Architecture
          </a>
          <a href="/articles" className="hover:text-brass transition-colors py-1 min-h-[44px] flex items-center">
            Articles
          </a>
          <a href="/#contact" className="hover:text-brass transition-colors py-1 min-h-[44px] flex items-center">
            Contact
          </a>
          <a
            href="https://github.com/Hamidcodedot"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brass transition-colors py-1 min-h-[44px] flex items-center"
          >
            GitHub ↗
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
