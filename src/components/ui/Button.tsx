import React from "react";
import { ArrowUpRight } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline" | "soft" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  iconRight?: React.ReactNode;
  children: React.ReactNode;
}

export function Button({
  variant = "soft",
  size = "md",
  href,
  iconRight,
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const sizeClasses = {
    sm: "h-8 px-3 text-xs gap-1.5",
    md: "h-10 px-5 text-xs sm:text-sm gap-2",
    lg: "h-12 px-6 text-sm sm:text-base gap-2.5",
  }[size];

  const variantClasses = {
    solid:
      "btn-asym bg-ivory text-espresso hover:bg-ivory-muted active:scale-[0.98] font-semibold transition-all duration-150 border border-transparent shadow-none",
    outline:
      "btn-asym-mirror bg-transparent text-ivory border border-espresso-border hover:border-brass/70 hover:bg-espresso-surface/80 active:scale-[0.98] font-medium transition-all duration-150",
    soft:
      "rounded-lg bg-espresso-surface text-ivory hover:bg-espresso-elevated hover:text-brass-light border border-espresso-border active:scale-[0.98] font-medium transition-all duration-150",
    ghost:
      "rounded-lg bg-transparent text-ivory-muted hover:text-ivory hover:bg-espresso-surface/50 active:scale-[0.98] font-medium transition-all duration-150",
  }[variant];

  const baseClasses = `inline-flex items-center justify-center select-none font-sans outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-espresso disabled:opacity-50 disabled:pointer-events-none ${sizeClasses} ${variantClasses} ${className}`;

  const defaultIcon = variant === "solid" && iconRight === undefined ? (
    <ArrowUpRight className="w-3.5 h-3.5 -ml-0.5" aria-hidden="true" />
  ) : iconRight;

  if (href) {
    return (
      <a href={href} className={baseClasses} role="button">
        {children}
        {defaultIcon}
      </a>
    );
  }

  return (
    <button className={baseClasses} disabled={disabled} {...props}>
      {children}
      {defaultIcon}
    </button>
  );
}

export default Button;
