"use client";

import { motion, useReducedMotion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  distance?: number;
  duration?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  delayMs = 0,
  distance = 16,
  duration = 0.55,
  once = true,
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "0px 0px -40px 0px" }}
      transition={{
        duration,
        delay: delayMs ? delayMs / 1000 : 0,
        ease: [0.2, 0.7, 0.2, 1], // Dev Jhawar signature cubic-bezier curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
