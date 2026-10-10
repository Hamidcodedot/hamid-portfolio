import React from "react";

interface HighlightProps {
  children: React.ReactNode;
  className?: string;
}

export function Highlight({ children, className = "" }: HighlightProps) {
  return (
    <span className={`font-montserrat font-medium tracking-tight capitalize text-yellow-800 dark:text-orange-100 ${className}`}>
      {children}
    </span>
  );
}

export default Highlight;
