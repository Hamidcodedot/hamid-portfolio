"use client";

import { Github, Linkedin, Twitter, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const socialLinks = [
    { icon: <Github size={20} />, href: "#", name: "GitHub" },
    { icon: <Linkedin size={20} />, href: "#", name: "LinkedIn" },
    { icon: <Twitter size={20} />, href: "#", name: "Twitter" },
    { icon: <Mail size={20} />, href: "#", name: "Email" },
  ];

  return (
    <section id="home" className="relative py-32 md:py-48 overflow-hidden min-h-[95vh] flex items-center">
      {/* Abstract Premium Grid Background */}
      <div className="absolute inset-0 z-0">
         <div 
           className="absolute inset-0 opacity-[0.03]"
           style={{
             backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }}
         />
         {/* Subtle glowing orbs */}
         <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-teal/5 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
         <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-blue-900/5 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full flex flex-col justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-teal/30 bg-teal/5 text-teal text-xs font-semibold tracking-widest uppercase mb-8">
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse mr-2"></span>
            Available for new opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-bold font-syne tracking-tight text-white mb-6 leading-tight">
            I engineer <span className="text-teal">intelligent</span> <br className="hidden md:block" />digital products.
          </h1>
          
          <h2 className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed font-light">
            I'm <span className="text-white font-medium">Hamid</span>, an AI Engineer building scalable systems, applying machine learning research, and designing elegant technical solutions.
          </h2>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Link 
              href="#projects" 
              className="group flex items-center px-8 py-3.5 bg-teal text-black font-semibold rounded-lg hover:bg-teal-hover transition-all duration-300 shadow-[0_0_20px_rgba(0,229,192,0.15)] hover:shadow-[0_0_30px_rgba(0,229,192,0.3)] hover:-translate-y-0.5"
            >
              Explore My Work
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <div className="flex items-center space-x-2 sm:border-l border-gray-800 sm:pl-6">
              {socialLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  className="p-2.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
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
