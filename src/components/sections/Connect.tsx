"use client";

import { useState } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { supabase } from "@/lib/supabase";

export default function Connect() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate minor network delay for smooth UX if it's too fast
    const loadingToast = toast.loading("Sending message...");
    
    try {
      const { error } = await supabase.from('contacts').insert([formData]);
      if (error) throw new Error(error.message);
      
      toast.success("Message sent successfully!", { id: loadingToast });
      setFormData({ name: "", email: "", message: "" });
    } catch (err: any) {
      console.error(err);
      toast.error("Failed to send message: " + err.message, { id: loadingToast });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden z-10">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold font-syne mb-10 md:mb-16 text-gray-900 dark:text-white text-center">
          Connect With Me<span className="text-teal-500">.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
          {/* Left Form */}
          <motion.form 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit} 
            className="space-y-6 bg-white/40 dark:bg-black/40 backdrop-blur-xl p-8 border border-black/5 dark:border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] dark:shadow-2xl"
          >
            <div className="space-y-1">
              <label className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1 block">Name</label>
              <input
                type="text"
                required
                disabled={isSubmitting}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg focus:border-teal-500/50 outline-none text-gray-900 dark:text-white text-sm transition-all backdrop-blur-sm"
              />
            </div>
            
            <div className="space-y-1">
              <label className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1 block">Email</label>
              <input
                type="email"
                required
                disabled={isSubmitting}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg focus:border-teal-500/50 outline-none text-gray-900 dark:text-white text-sm transition-all backdrop-blur-sm"
              />
            </div>
            
            <div className="space-y-1">
              <label className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1 block">Message</label>
              <textarea
                required
                rows={4}
                disabled={isSubmitting}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg focus:border-teal-500/50 outline-none text-gray-900 dark:text-white text-sm transition-all resize-none backdrop-blur-sm"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-4 bg-teal-500 text-white dark:text-black font-semibold rounded-lg hover:bg-teal-600 dark:hover:bg-teal-400 hover:-translate-y-0.5 shadow-[0_0_20px_rgba(0,229,192,0.15)] transition-all disabled:opacity-50 disabled:hover:translate-y-0"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </motion.form>

          {/* Right SVG Circuit Board and Icons */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center items-center gap-4 sm:gap-6 flex-wrap"
          >
             {/* GitHub Circuit */}
             <a href="https://github.com/Hamidcodedot" target="_blank" rel="noopener noreferrer" className="relative group w-24 h-24 flex justify-center items-center hover:-translate-y-1 transition-transform">
               <svg className="absolute inset-0 w-full h-full text-teal-500 opacity-20 group-hover:opacity-60 transition-opacity" viewBox="0 0 100 100">
                  <path d="M50 10 L50 20 M50 80 L50 90 M10 50 L20 50 M80 50 L90 50 M25 25 L35 35 M75 75 L65 65 M25 75 L35 65 M75 25 L65 35" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <circle cx="50" cy="10" r="2" fill="currentColor" />
                  <circle cx="50" cy="90" r="2" fill="currentColor" />
                  <circle cx="10" cy="50" r="2" fill="currentColor" />
                  <circle cx="90" cy="50" r="2" fill="currentColor" />
               </svg>
               <div className="w-16 h-16 rounded-2xl bg-white/40 dark:bg-black/40 backdrop-blur-sm border border-black/5 dark:border-white/10 flex items-center justify-center relative z-10 shadow-[0_4px_30px_rgba(0,0,0,0.05)] group-hover:border-teal-500/30 transition-colors">
                  <Github size={28} className="text-gray-600 dark:text-gray-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors" />
               </div>
             </a>

             {/* LinkedIn Circuit */}
             <a href="https://www.linkedin.com/in/hamid-shahid-2b0448330" target="_blank" rel="noopener noreferrer" className="relative group w-24 h-24 flex justify-center items-center hover:-translate-y-1 transition-transform">
               <svg className="absolute inset-0 w-full h-full text-teal-500 opacity-20 group-hover:opacity-60 transition-opacity" viewBox="0 0 100 100">
                  <path d="M40 10 L40 25 M60 10 L60 25 M10 40 L25 40 M10 60 L25 60 M40 90 L40 75 M60 90 L60 75 M90 40 L75 40 M90 60 L75 60" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <circle cx="40" cy="10" r="2" fill="currentColor" />
                  <circle cx="60" cy="10" r="2" fill="currentColor" />
                  <circle cx="10" cy="40" r="2" fill="currentColor" />
                  <circle cx="10" cy="60" r="2" fill="currentColor" />
               </svg>
               <div className="w-16 h-16 rounded-2xl bg-white/40 dark:bg-black/40 backdrop-blur-sm border border-black/5 dark:border-white/10 flex items-center justify-center relative z-10 shadow-[0_4px_30px_rgba(0,0,0,0.05)] group-hover:border-teal-500/30 transition-colors">
                 <Linkedin size={28} className="text-gray-600 dark:text-gray-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors" />
               </div>
             </a>

             {/* Twitter Circuit */}
             <a href="https://x.com/ch_hamid77" target="_blank" rel="noopener noreferrer" className="relative group w-24 h-24 flex justify-center items-center hover:-translate-y-1 transition-transform">
               <svg className="absolute inset-0 w-full h-full text-teal-500 opacity-20 group-hover:opacity-60 transition-opacity" viewBox="0 0 100 100">
                  <path d="M20 20 L80 80 M80 20 L20 80" stroke="currentColor" strokeWidth="2" fill="none" />
               </svg>
               <div className="w-16 h-16 rounded-2xl bg-white/40 dark:bg-black/40 backdrop-blur-sm border border-black/5 dark:border-white/10 flex items-center justify-center relative z-10 shadow-[0_4px_30px_rgba(0,0,0,0.05)] group-hover:border-teal-500/30 transition-colors">
                  <Twitter size={24} className="text-gray-600 dark:text-gray-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors" />
               </div>
             </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
