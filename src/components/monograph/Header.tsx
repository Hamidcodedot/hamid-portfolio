"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import AudioPlayer from "./AudioPlayer";
import { Menu, X, ArrowUpRight, Compass, Layers, GitBranch, BookOpen, GraduationCap, Mail } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMobileMenuOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "About", href: "/#about", icon: <Compass className="w-4 h-4 text-brass" /> },
    { label: "Systems", href: "/#work-tree", icon: <GitBranch className="w-4 h-4 text-brass" /> },
    { label: "Architecture", href: "/#architecture", icon: <Layers className="w-4 h-4 text-brass" /> },
    { label: "Articles", href: "/articles", icon: <BookOpen className="w-4 h-4 text-brass" /> },
    { label: "Education", href: "/#journey", icon: <GraduationCap className="w-4 h-4 text-brass" /> },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-espresso/95 backdrop-blur-md border-b border-espresso-border/60 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 h-16 sm:h-20 flex items-center justify-between gap-3 sm:gap-6">
        {/* Brand Monogram */}
        <Link 
          href="/" 
          className="flex items-center gap-2.5 sm:gap-3 group transition-transform active:scale-[0.98] whitespace-nowrap flex-shrink-0"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-brass/40 overflow-hidden flex items-center justify-center bg-espresso-surface p-1 group-hover:border-brass transition-colors shadow-sm">
            <img src="/logo.svg" alt="Hamid Shahid Odyssey Logo" className="w-full h-full object-contain" />
          </div>
          <span className="font-serif tracking-wide text-sm sm:text-base font-medium text-ivory group-hover:text-brass transition-colors">
            Hamid Shahid <span className="text-ivory-faint font-mono text-[11px] font-light tracking-wider hidden xs:inline">— Odyssey</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs tracking-wider font-mono text-ivory-muted hover:text-brass transition-colors py-1 relative group whitespace-nowrap"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brass transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Trailing Controls: Audio & Contact */}
        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
          <AudioPlayer />

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-medium rounded-full bg-brass text-espresso hover:bg-brass-light transition-all active:scale-[0.98] shadow-sm shadow-brass/10 whitespace-nowrap flex-shrink-0"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-ivory-muted hover:text-ivory focus:outline-none focus-visible:ring-2 focus-visible:ring-brass rounded active:scale-95 transition-transform"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-brass" /> : <Menu className="w-5 h-5 text-ivory" />}
          </button>
        </div>
      </div>

      {/* Mobile Backdrop & Drawer */}
      {mobileMenuOpen && (
        <>
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 top-16 bg-espresso-deep/80 backdrop-blur-sm z-40 lg:hidden"
            aria-hidden="true"
          />
          <div className="relative z-50 lg:hidden border-b border-espresso-border bg-espresso-surface/98 px-5 py-4 flex flex-col gap-1 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[48px] flex items-center justify-between text-xs font-mono tracking-wider uppercase text-ivory-muted hover:text-brass py-2.5 px-3 rounded-lg hover:bg-espresso-elevated/60 transition-colors"
              >
                <span className="flex items-center gap-3">
                  {link.icon}
                  <span>{link.label}</span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-ivory-faint" />
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[48px] flex items-center justify-center gap-2 w-full text-center py-3 text-xs font-mono font-semibold uppercase tracking-wider bg-brass text-espresso rounded-lg mt-2 active:scale-[0.98] shadow-sm shadow-brass/20"
            >
              <Mail className="w-4 h-4" />
              <span>Get in Touch</span>
            </a>
          </div>
        </>
      )}
    </header>
  );
}
