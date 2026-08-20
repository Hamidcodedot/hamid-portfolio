"use client";

import { useState } from "react";
import { Github, Linkedin, Twitter, Mail, Send, Sparkles, MessageSquareCode } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

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
    const loadingToast = toast.loading("Preparing message...");
    
    try {
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(`Hi Hamid Shahid,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`);
      window.location.href = `mailto:iamhamid940@gmail.com?subject=${subject}&body=${body}`;
      
      toast.success("Opening your mail client...", { id: loadingToast });
      setFormData({ name: "", email: "", message: "" });
    } catch (err: any) {
      console.error(err);
      toast.error("An error occurred: " + err.message, { id: loadingToast });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden z-10 border-t border-slate-200 dark:border-white/5">
      
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 text-teal-600 dark:text-teal-400 font-mono text-xs uppercase tracking-widest mb-3">
            <MessageSquareCode size={14} />
            <span>Direct Transmission</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-syne text-slate-900 dark:text-white tracking-tight">
            Connect With Me<span className="text-teal-500 dark:text-[#00e5c0]">.</span>
          </h2>
          <p className="text-slate-500 dark:text-gray-400 text-sm mt-3 leading-relaxed">
            Have a project in mind, an engineering opportunity, or want to collaborate on AI research? Let's talk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Form */}
          <form 
            onSubmit={handleSubmit} 
            className="lg:col-span-7 space-y-5 bg-white/80 dark:bg-[#131315]/80 backdrop-blur-2xl p-6 sm:p-8 md:p-10 border border-slate-200/80 dark:border-white/10 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative overflow-hidden"
          >
            <div className="space-y-1.5">
              <label className="text-xs uppercase tracking-widest text-slate-500 dark:text-gray-400 font-mono font-semibold block">Your Name</label>
              <input
                type="text"
                required
                disabled={isSubmitting}
                placeholder="e.g. John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl focus:border-teal-500 focus:ring-1 focus:ring-teal-500/30 outline-none text-slate-900 dark:text-white text-sm transition-all placeholder:text-slate-400 dark:placeholder:text-gray-600 font-light"
              />
            </div>
            
            <div className="space-y-1.5">
              <label className="text-xs uppercase tracking-widest text-slate-500 dark:text-gray-400 font-mono font-semibold block">Your Email</label>
              <input
                type="email"
                required
                disabled={isSubmitting}
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl focus:border-teal-500 focus:ring-1 focus:ring-teal-500/30 outline-none text-slate-900 dark:text-white text-sm transition-all placeholder:text-slate-400 dark:placeholder:text-gray-600 font-light"
              />
            </div>
            
            <div className="space-y-1.5">
              <label className="text-xs uppercase tracking-widest text-slate-500 dark:text-gray-400 font-mono font-semibold block">Message</label>
              <textarea
                required
                rows={4}
                disabled={isSubmitting}
                placeholder="Tell me about your project, architecture, or idea..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl focus:border-teal-500 focus:ring-1 focus:ring-teal-500/30 outline-none text-slate-900 dark:text-white text-sm transition-all resize-none placeholder:text-slate-400 dark:placeholder:text-gray-600 font-light"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 bg-teal-600 hover:bg-teal-700 text-white dark:bg-[#00e5c0] dark:text-black font-bold rounded-xl dark:hover:bg-[#42fdd7] transition-all duration-300 shadow-[0_4px_20px_rgba(20,184,166,0.25)] dark:shadow-[0_0_25px_rgba(0,229,192,0.3)] hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0 text-sm sm:text-base flex items-center justify-center space-x-2"
            >
              <Send size={18} />
              <span>{isSubmitting ? "Dispatching..." : "Send Transmission"}</span>
            </button>
          </form>

          {/* Right Circuit & Direct Channels */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            {/* Direct Email Card */}
            <a 
              href="mailto:iamhamid940@gmail.com"
              className="p-5 rounded-2xl bg-white/80 dark:bg-[#131315]/80 backdrop-blur-2xl border border-slate-200/80 dark:border-white/10 hover:border-teal-500/40 transition-all flex items-center space-x-4 group shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-600 dark:text-[#00e5c0] group-hover:scale-110 transition-transform">
                <Mail size={22} />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400 block font-semibold">Direct Email</span>
                <p className="text-slate-900 dark:text-white font-medium text-sm group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors">iamhamid940@gmail.com</p>
              </div>
            </a>

            {/* GitHub Card */}
            <a 
              href="https://github.com/Hamidcodedot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white/80 dark:bg-[#131315]/80 backdrop-blur-2xl border border-slate-200/80 dark:border-white/10 hover:border-teal-500/40 transition-all flex items-center space-x-4 group shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-gray-300 group-hover:text-teal-600 dark:group-hover:text-[#00e5c0] group-hover:scale-110 transition-all">
                <Github size={22} />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-gray-400 block font-semibold">GitHub Repository</span>
                <p className="text-slate-900 dark:text-white font-medium text-sm group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors">github.com/Hamidcodedot</p>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a 
              href="https://www.linkedin.com/in/hamid-shahid-2b0448330" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white/80 dark:bg-[#131315]/80 backdrop-blur-2xl border border-slate-200/80 dark:border-white/10 hover:border-teal-500/40 transition-all flex items-center space-x-4 group shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-gray-300 group-hover:text-teal-600 dark:group-hover:text-[#00e5c0] group-hover:scale-110 transition-all">
                <Linkedin size={22} />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-gray-400 block font-semibold">Professional Network</span>
                <p className="text-slate-900 dark:text-white font-medium text-sm group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors">linkedin.com/in/hamid-shahid</p>
              </div>
            </a>

            {/* Twitter / X Card */}
            <a 
              href="https://x.com/ch_hamid77" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white/80 dark:bg-[#131315]/80 backdrop-blur-2xl border border-slate-200/80 dark:border-white/10 hover:border-teal-500/40 transition-all flex items-center space-x-4 group shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-gray-300 group-hover:text-teal-600 dark:group-hover:text-[#00e5c0] group-hover:scale-110 transition-all">
                <Twitter size={22} />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-gray-400 block font-semibold">X / Twitter</span>
                <p className="text-slate-900 dark:text-white font-medium text-sm group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors">@ch_hamid77</p>
              </div>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
