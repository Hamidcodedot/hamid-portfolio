import React from "react";

interface AnimatedBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedBadge({ children, className = "" }: AnimatedBadgeProps) {
  return (
    <span className={`relative inline-flex w-fit overflow-hidden rounded-full p-px ${className}`}>
      <span
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 h-5 w-[320px] rounded-full bg-gradient-to-r from-transparent via-transparent to-brass motion-safe:animate-[chai-spin_4s_linear_infinite]"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <span className="relative z-10 inline-flex items-center gap-2 rounded-full bg-espresso-surface/95 px-3.5 sm:px-4 py-1.5 font-mono text-[11px] sm:text-xs text-ivory-muted border border-brass/25">
        {children}
      </span>
    </span>
  );
}

export default AnimatedBadge;
