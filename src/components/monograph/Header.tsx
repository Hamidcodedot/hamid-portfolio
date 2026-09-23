"use client";

import { useState } from "react";
import Link from "next/link";
import AudioPlayer from "./AudioPlayer";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "/#about" },
    { label: "Systems", href: "/#work-tree" },
    { label: "Architecture", href: "/#architecture" },
    { label: "Articles", href: "/articles" },
    { label: "Education", href: "/#journey" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-espresso/90 backdrop-blur-md border-b border-espresso-border/60 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between gap-6">
        {/* Brand Monogram */}
        <Link 
          href="/" 
          className="flex items-center gap-3 group transition-transform active:scale-[0.98] whitespace-nowrap flex-shrink-0"
        >
          <div className="w-8 h-8 rounded-full border border-brass/40 overflow-hidden flex items-center justify-center bg-espresso-surface p-1 group-hover:border-brass transition-colors shadow-sm">
            <img src="/logo.svg" alt="Hamid Shahid Odyssey Logo" className="w-full h-full object-contain" />
          </div>
          <span className="font-serif tracking-wide text-sm sm:text-base font-medium text-ivory group-hover:text-brass transition-colors">
            Hamid Shahid <span className="text-ivory-faint font-mono text-[11px] font-light tracking-wider">— Odyssey</span>
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
        <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
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
            className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-ivory-muted hover:text-ivory focus:outline-none focus-visible:ring-2 focus-visible:ring-brass rounded"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-ivory" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-espresso-border bg-espresso-surface/98 px-6 py-5 flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] flex items-center text-sm font-mono tracking-wider uppercase text-ivory-muted hover:text-brass py-2 border-b border-espresso-border/50"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="min-h-[44px] flex items-center justify-center w-full text-center py-3 text-xs font-mono font-semibold uppercase tracking-wider bg-brass text-espresso rounded mt-2 active:scale-[0.98]"
          >
            Get in Touch
          </a>
        </div>
      )}
    </header>
  );
}
