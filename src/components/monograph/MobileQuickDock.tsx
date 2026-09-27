"use client";

import Link from "next/link";
import { Compass, GitBranch, BookOpen, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollState } from "@/hooks/useScrollDirection";

export default function MobileQuickDock() {
  const { scrollY } = useScrollState();
  const visible = scrollY > 120;

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          key="mobile-dock"
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.96 }}
          transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
          aria-label="Mobile quick navigation dock"
          className="fixed bottom-4 left-4 right-4 z-40 sm:hidden mx-auto max-w-xs"
        >
          <div className="bg-espresso-deep/92 backdrop-blur-lg border border-brass/35 shadow-2xl rounded-full p-1.5 flex items-center justify-between px-3">
            <a
              href="/#about"
              className="flex flex-col items-center justify-center min-w-[44px] min-h-[44px] rounded-full text-ivory-muted hover:text-brass transition-[transform,color] duration-150 ease-out-expo active:scale-[0.93] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass"
              title="Odyssey Origin"
              aria-label="Odyssey Origin"
            >
              <Compass className="w-4 h-4 text-brass" />
              <span className="text-[9px] font-mono uppercase tracking-wider text-ivory-faint mt-0.5">Origin</span>
            </a>

            <a
              href="/#work-tree"
              className="flex flex-col items-center justify-center min-w-[44px] min-h-[44px] rounded-full text-ivory-muted hover:text-brass transition-[transform,color] duration-150 ease-out-expo active:scale-[0.93] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass"
              title="Production Systems"
              aria-label="Production Systems"
            >
              <GitBranch className="w-4 h-4 text-brass" />
              <span className="text-[9px] font-mono uppercase tracking-wider text-ivory-faint mt-0.5">Systems</span>
            </a>

            <Link
              href="/articles"
              className="flex flex-col items-center justify-center min-w-[44px] min-h-[44px] rounded-full text-ivory-muted hover:text-brass transition-[transform,color] duration-150 ease-out-expo active:scale-[0.93] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass"
              title="Field Notes & Articles"
              aria-label="Field Notes & Articles"
            >
              <BookOpen className="w-4 h-4 text-brass" />
              <span className="text-[9px] font-mono uppercase tracking-wider text-ivory-faint mt-0.5">Articles</span>
            </Link>

            <a
              href="/#contact"
              className="flex flex-col items-center justify-center min-w-[44px] min-h-[44px] rounded-full bg-brass/15 border border-brass/40 text-brass hover:bg-brass hover:text-espresso transition-[transform,background-color,color] duration-150 ease-out-expo active:scale-[0.93] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass px-2"
              title="Contact & Advisory"
              aria-label="Contact & Advisory"
            >
              <Mail className="w-4 h-4" />
              <span className="text-[9px] font-mono uppercase tracking-wider font-semibold mt-0.5">Contact</span>
            </a>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
