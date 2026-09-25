"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Compass, GitBranch, BookOpen, Mail } from "lucide-react";

export default function MobileQuickDock() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal dock once scrolled past 120px
      if (window.scrollY > 120) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Mobile quick navigation dock"
      className="fixed bottom-4 left-4 right-4 z-40 sm:hidden mx-auto max-w-xs animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="bg-espresso-deep/92 backdrop-blur-lg border border-brass/35 shadow-2xl rounded-full p-1.5 flex items-center justify-between px-3">
        <a
          href="/#about"
          className="flex flex-col items-center justify-center min-w-[44px] min-h-[44px] rounded-full text-ivory-muted hover:text-brass transition-colors active:scale-90"
          title="Odyssey Origin"
          aria-label="Odyssey Origin"
        >
          <Compass className="w-4 h-4 text-brass" />
          <span className="text-[9px] font-mono uppercase tracking-wider text-ivory-faint mt-0.5">Origin</span>
        </a>

        <a
          href="/#work-tree"
          className="flex flex-col items-center justify-center min-w-[44px] min-h-[44px] rounded-full text-ivory-muted hover:text-brass transition-colors active:scale-90"
          title="Production Systems"
          aria-label="Production Systems"
        >
          <GitBranch className="w-4 h-4 text-brass" />
          <span className="text-[9px] font-mono uppercase tracking-wider text-ivory-faint mt-0.5">Systems</span>
        </a>

        <Link
          href="/articles"
          className="flex flex-col items-center justify-center min-w-[44px] min-h-[44px] rounded-full text-ivory-muted hover:text-brass transition-colors active:scale-90"
          title="Field Notes & Articles"
          aria-label="Field Notes & Articles"
        >
          <BookOpen className="w-4 h-4 text-brass" />
          <span className="text-[9px] font-mono uppercase tracking-wider text-ivory-faint mt-0.5">Articles</span>
        </Link>

        <a
          href="/#contact"
          className="flex flex-col items-center justify-center min-w-[44px] min-h-[44px] rounded-full bg-brass/15 border border-brass/40 text-brass hover:bg-brass hover:text-espresso transition-all active:scale-90 px-2"
          title="Contact & Advisory"
          aria-label="Contact & Advisory"
        >
          <Mail className="w-4 h-4" />
          <span className="text-[9px] font-mono uppercase tracking-wider font-semibold mt-0.5">Contact</span>
        </a>
      </div>
    </aside>
  );
}
