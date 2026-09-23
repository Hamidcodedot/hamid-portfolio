"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delayMs = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let lastTriggerTime = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = lastScrollY - currentScrollY;
      const now = Date.now();

      // Detect deliberate upward scroll (delta > 8px) with a debounce lock
      if (delta > 8 && now - lastTriggerTime > 750) {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 80;
          if (isVisible) {
            lastTriggerTime = now;
            setAnimKey((prev) => prev + 1);
          }
        }
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      ref={ref}
      key={animKey}
      initial={animKey > 0 ? { opacity: 0.75, y: 18 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.55,
        delay: delayMs ? delayMs / 1000 : 0,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
