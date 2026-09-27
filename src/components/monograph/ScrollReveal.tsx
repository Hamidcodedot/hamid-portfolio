"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useScrollState, ScrollDirection } from "@/hooks/useScrollDirection";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  distance?: number;
  duration?: number;
  directionAware?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  delayMs = 0,
  distance = 26,
  duration = 0.45,
  directionAware = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { direction } = useScrollState();
  const [entryDir, setEntryDir] = useState<ScrollDirection>("down");

  const isInView = useInView(ref, {
    margin: "-30px 0px -30px 0px",
    once: false,
  });

  // Track entry direction while off-screen to determine whether to glide in from above or below
  useEffect(() => {
    if (!isInView && directionAware) {
      setEntryDir(direction);
    }
  }, [isInView, direction, directionAware]);

  const targetOffset = shouldReduceMotion
    ? 0
    : !directionAware
    ? distance
    : entryDir === "up"
    ? -distance
    : distance;

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: targetOffset,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
            }
          : {
              opacity: 0,
              y: targetOffset,
            }
      }
      transition={{
        duration: shouldReduceMotion ? 0.2 : duration,
        delay: isInView ? (delayMs ? delayMs / 1000 : 0) : 0,
        ease: [0.23, 1, 0.32, 1], // Emil Kowalski responsive ease-out curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
