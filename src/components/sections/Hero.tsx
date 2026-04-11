"use client";

import { Github, Linkedin, Twitter, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/Hamidcodedot", name: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/hamid-shahid-2b0448330", name: "LinkedIn" },
    { icon: <Twitter size={20} />, href: "https://x.com/ch_hamid77", name: "Twitter" },
    { icon: <Mail size={20} />, href: "mailto:iamhamid940@gmail.com", name: "Email" },
  ];

  return (
    <section id="home" className="relative py-32 md:py-48 overflow-hidden min-h-[95vh] flex items-center">

      
      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full flex flex-col justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-semibold tracking-widest uppercase mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse mr-2"></span>
            Available for new opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-bold font-syne tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
            I engineer <span className="text-teal-500 dark:text-teal-400">intelligent</span> <br className="hidden md:block" />digital products.
          </h1>
          
          <h2 className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl leading-relaxed font-light">
            I'm <span className="text-gray-900 dark:text-white font-medium">Hamid</span>, an AI Engineer building scalable systems, applying machine learning research, and designing elegant technical solutions.
          </h2>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Link 
              href="#projects" 
              className="group flex items-center px-8 py-3.5 bg-teal-500 text-white dark:text-black font-semibold rounded-lg hover:bg-teal-600 dark:hover:bg-teal-400 transition-all duration-300 shadow-[0_0_20px_rgba(0,229,192,0.15)] hover:shadow-[0_0_30px_rgba(0,229,192,0.3)] hover:-translate-y-0.5"
            >
              Explore My Work
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <div className="flex items-center space-x-2 sm:border-l border-gray-300 dark:border-gray-800 sm:pl-6">
              {socialLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  className="p-2.5 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-all duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
