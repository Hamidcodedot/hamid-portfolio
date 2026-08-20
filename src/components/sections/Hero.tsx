"use client";

import { useState } from "react";
import { Github, Linkedin, Twitter, Mail, ArrowRight, FileDown, Sparkles, Terminal, Cpu } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const socialLinks = [
    { icon: <Github size={18} />, href: "https://github.com/Hamidcodedot", name: "GitHub" },
    { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/hamid-shahid-2b0448330", name: "LinkedIn" },
    { icon: <Twitter size={18} />, href: "https://x.com/ch_hamid77", name: "Twitter" },
    { icon: <Mail size={18} />, href: "mailto:iamhamid940@gmail.com", name: "Email" },
  ];

  const [imgSrc, setImgSrc] = useState("/profile.png");

  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Live Status Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-700 dark:text-teal-400 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-md w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 dark:bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600 dark:bg-teal-400"></span>
              </span>
              <span>Available for new opportunities</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold font-syne tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]">
              I engineer <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-500 to-cyan-500 dark:from-teal-400 dark:via-[#00e5c0] dark:to-cyan-400">intelligent</span> digital products.
            </h1>
            
            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-gray-300 mb-8 max-w-xl leading-relaxed font-light">
              I'm <span className="text-slate-900 dark:text-white font-semibold">Hamid Shahid</span>, an AI Engineer building scalable systems, applying machine learning research, and crafting high-performance technical architectures.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link 
                href="#projects" 
                className="inline-flex items-center px-6 py-3.5 bg-teal-600 hover:bg-teal-700 text-white dark:bg-[#00e5c0] dark:text-black font-semibold rounded-xl dark:hover:bg-[#42fdd7] transition-all duration-300 shadow-[0_4px_20px_rgba(20,184,166,0.25)] dark:shadow-[0_0_25px_rgba(0,229,192,0.3)] hover:-translate-y-0.5 text-sm sm:text-base"
              >
                Explore Selected Works
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link 
                href="#resume" 
                className="inline-flex items-center px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200/80 dark:bg-white/5 dark:hover:bg-white/10 dark:text-white font-medium rounded-xl dark:border-white/10 hover:border-teal-500/40 transition-all text-sm sm:text-base backdrop-blur-md"
              >
                <FileDown size={18} className="mr-2 text-teal-600 dark:text-teal-400" />
                Resume & CV
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-2 pt-4 border-t border-slate-200 dark:border-white/10">
              <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-gray-400 font-mono mr-2">Connect:</span>
              {socialLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="p-2.5 text-slate-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg border border-transparent hover:border-teal-500/20 transition-all duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column: High-Tech Photo Portrait Card */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            {/* Outer Glowing Ring */}
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-3xl p-1 bg-gradient-to-b from-teal-500/30 via-cyan-500/10 to-transparent shadow-[0_10px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_0_50px_rgba(0,229,192,0.15)]">
              <div className="w-full h-full rounded-[22px] bg-white/95 dark:bg-[#131315]/90 border border-slate-200 dark:border-white/10 backdrop-blur-2xl p-4 flex flex-col justify-between overflow-hidden relative group">
                
                {/* Top Terminal Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 dark:border-white/10">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <span className="text-[11px] font-mono text-teal-600 dark:text-teal-400 tracking-wider flex items-center font-medium">
                    <Terminal size={12} className="mr-1" />
                    hamid@ai-core
                  </span>
                </div>

                {/* Photo Portrait Container */}
                <div className="relative flex-grow my-3 rounded-2xl overflow-hidden bg-slate-100 dark:bg-black/60 border border-slate-200 dark:border-white/5 flex items-center justify-center group-hover:border-teal-500/30 transition-colors min-h-[320px]">
                  <img 
                    src={imgSrc} 
                    alt="Hamid Shahid - AI Engineer" 
                    onError={() => setImgSrc("/logo.png")}
                    className={imgSrc === "/logo.png" ? "w-32 h-32 object-contain group-hover:scale-105 transition-transform duration-500" : "w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"}
                  />
                  
                  {/* Subtle Tech Scanlines Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 dark:from-[#131315]/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Bottom Info Card */}
                <div className="bg-slate-50 dark:bg-black/60 border border-slate-200 dark:border-white/10 rounded-xl p-3 backdrop-blur-xl flex items-center justify-between shadow-sm">
                  <div>
                    <h3 className="text-slate-900 dark:text-white font-syne font-bold text-sm flex items-center">
                      Hamid Shahid <Sparkles size={14} className="ml-1.5 text-teal-500 dark:text-teal-400" />
                    </h3>
                    <p className="text-slate-500 dark:text-gray-400 text-xs font-mono">Applied AI & Systems</p>
                  </div>
                  <div className="flex items-center space-x-1 px-2.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-[10px] font-mono text-teal-700 dark:text-teal-300 font-semibold">
                    <Cpu size={12} className="mr-1" />
                    ONLINE
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
