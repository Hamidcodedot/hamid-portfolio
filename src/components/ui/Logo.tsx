import React from "react";

interface LogoProps {
  size?: number;
  className?: string;
  showGlow?: boolean;
}

export default function Logo({ size = 36, className = "", showGlow = true }: LogoProps) {
  const gradientId = "hs-brand-gradient";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-300 group-hover:scale-105 ${className}`}
      aria-label="Hamid Shahid Logo"
    >
      <defs>
        {/* Vibrant Brand Gradient */}
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00e5c0" />
          <stop offset="50%" stopColor="#0d9488" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
      </defs>

      {/* Outer Rounded-Hex / Squircle Frame */}
      <rect
        x="3"
        y="3"
        width="58"
        height="58"
        rx="16"
        className="fill-teal-500/10 dark:fill-teal-500/10 stroke-slate-200/90 dark:stroke-white/10"
        strokeWidth="1.5"
      />

      {/* Subtle Inner Gradient Border */}
      <rect
        x="5"
        y="5"
        width="54"
        height="54"
        rx="14"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="1"
        strokeOpacity="0.4"
      />

      {/* Monogram: Precision Geometric 'H' and 'S' */}
      {/* Left Vertical Pillar (H) */}
      <path
        d="M20 18V46"
        stroke={`url(#${gradientId})`}
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Right Vertical Pillar (H) */}
      <path
        d="M44 18V46"
        stroke={`url(#${gradientId})`}
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Interlocking S Ribbon / Bridge */}
      <path
        d="M20 25C20 25 32 20 40 24C44 26 44 31 38 33L26 37C20 39 20 44 24 46C32 50 44 45 44 45"
        stroke={`url(#${gradientId})`}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Precision Micro-Accents */}
      <circle cx="20" cy="18" r="2.5" fill="#00e5c0" />
      <circle cx="44" cy="46" r="2.5" fill="#0284c7" />
      <circle cx="32" cy="35" r="1.8" fill="#14b8a6" />
    </svg>
  );
}
