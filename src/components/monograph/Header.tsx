"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import AudioPlayer from "./AudioPlayer";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/#work-tree" },
    { label: "Stack", href: "/#architecture" },
    { label: "Articles", href: "/articles" },
    { label: "Journey", href: "/#journey" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-[background-color,backdrop-filter,border-color] duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-md border-b border-orange-50/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 sm:px-12 h-16 sm:h-20 flex items-center justify-between gap-6">
        {/* Brand Identity */}
        <Link
          href="/"
          className="flex items-center gap-3 group transition-transform duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass rounded-lg"
          aria-label="Hamid Shahid home"
        >
          <div className="w-8 h-8 rounded-full border border-orange-50/15 bg-black/30 p-1 flex items-center justify-center group-hover:border-brass/70 transition-colors shadow-xs">
            <img src="/logo.svg" alt="Hamid Shahid" className="w-full h-full object-contain" />
          </div>
          <span className="font-sans font-semibold text-sm sm:text-base tracking-tight text-white group-hover:text-amber-100 transition-colors">
            Hamid Shahid
          </span>
        </Link>

        {/* Center Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs sm:text-[13px] font-sans font-medium text-neutral-400 hover:text-white transition-colors duration-150 py-1"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Trailing Controls */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Subtle Compact Audio Soundscape Toggle */}
          <AudioPlayer compact={true} />

          {/* ChaiUI Asymmetric Primary Solid Button */}
          <a
            href="#contact"
            className="btn-asym hidden sm:inline-flex items-center gap-1.5 h-9 bg-white text-neutral-950 px-4 text-xs font-semibold hover:bg-neutral-200 transition-colors duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center text-neutral-400 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brass rounded-lg active:scale-95 transition-transform"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-neutral-300" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer (ChaiUI recipe dropdown panel) */}
      {mobileMenuOpen && (
        <>
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 top-16 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            aria-hidden="true"
          />
          <div className="relative z-50 md:hidden px-6 pb-6 pt-2">
            <div className="rounded-xl border border-orange-50/15 bg-black/90 p-4 backdrop-blur-lg flex flex-col gap-1 shadow-lg">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 px-3 rounded-lg text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/5 flex items-center justify-between transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500" />
                </a>
              ))}

              <div className="pt-3 mt-2 border-t border-orange-50/10">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-asym w-full flex items-center justify-center gap-2 h-10 bg-white text-neutral-950 text-xs font-semibold hover:bg-neutral-200 transition-colors"
                >
                  <span>Get in touch</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
