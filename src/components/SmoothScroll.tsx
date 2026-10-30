"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    // Respect user's motion preferences
    if (typeof window === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let lenis: Lenis | null = null;
    let rafId: number;

    try {
      lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.5,
        infinite: false,
      });

      (window as any).__lenis = lenis;

      const raf = (time: number) => {
        if (lenis) lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);

      const handleAnchorClick = (e: MouseEvent) => {
        const target = (e.target as HTMLElement)?.closest("a");
        if (!target) return;
        const href = target.getAttribute("href");

        if (href && (href.startsWith("#") || href.startsWith("/#"))) {
          const hash = href.startsWith("/#") ? href.substring(1) : href;
          if (hash.length > 1) {
            const el = document.querySelector(hash);
            if (el && (href.startsWith("#") || window.location.pathname === "/")) {
              e.preventDefault();
              if (lenis) {
                lenis.scrollTo(el as HTMLElement, {
                  offset: -70,
                  duration: 1.2,
                  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                });
              } else {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }
          }
        }
      };

      document.addEventListener("click", handleAnchorClick);

      return () => {
        if (rafId) cancelAnimationFrame(rafId);
        document.removeEventListener("click", handleAnchorClick);
        if (lenis) {
          lenis.destroy();
          delete (window as any).__lenis;
        }
      };
    } catch (err) {
      console.warn("SmoothScroll init fallback to native smooth scroll:", err);
    }
  }, []);

  return <>{children}</>;
}
