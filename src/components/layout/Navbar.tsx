"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import clsx from "clsx";
import { ThemeToggle } from "@/components/ThemeToggle";
import Logo from "@/components/ui/Logo";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Career", href: "#career" },
  { name: "Projects", href: "#projects" },
  { name: "Learning", href: "#learning" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/85 dark:bg-[#131315]/85 backdrop-blur-2xl border-b border-slate-200/80 dark:border-white/10 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-transparent border-b border-transparent py-5"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Monogram Logo */}
        <Link href="#" aria-label="Home" onClick={(e) => scrollTo(e, '#home')} className="flex items-center space-x-3 group">
          <Logo size={38} />
          <span className="font-syne font-bold text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
            Hamid Shahid
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-slate-100/90 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-full px-4 py-1.5 backdrop-blur-xl shadow-sm">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-white/10 shadow-none hover:shadow-sm transition-all"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div className="flex items-center space-x-3">
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, '#contact')}
            className="hidden sm:inline-flex items-center px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-teal-600 hover:bg-teal-700 dark:text-black dark:bg-[#00e5c0] dark:hover:bg-[#42fdd7] rounded-full shadow-[0_0_15px_rgba(0,229,192,0.25)] hover:shadow-[0_0_25px_rgba(0,229,192,0.4)] transition-all"
          >
            Hire Me
          </a>
          <ThemeToggle />
          
          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-[#131315]/95 backdrop-blur-2xl border-b border-slate-200 dark:border-white/10 shadow-2xl">
          <ul className="flex flex-col py-4 px-6 space-y-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="block py-2 px-3 rounded-lg text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 text-base font-medium"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
