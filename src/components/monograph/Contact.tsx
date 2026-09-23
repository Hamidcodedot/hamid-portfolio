"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { Mail, Github, Linkedin, FileText, Send, Video, ArrowUpRight, Copy, Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    scope: "systems",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("contact@hamidshahid.dev");
    setCopiedEmail(true);
    toast.success("Electronic mail address copied to clipboard.");
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      toast.error("Please fill in all communique fields before transmission.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const subject = encodeURIComponent(`[${formState.scope.toUpperCase()}] Project Inquiry from ${formState.name}`);
      const body = encodeURIComponent(
        `Correspondent: ${formState.name} (${formState.email})\nEngagement Scope: ${formState.scope}\n\nCommunique:\n${formState.message}`
      );
      window.open(`mailto:iamhamid940@gmail.com?subject=${subject}&body=${body}`, "_blank");

      setIsSubmitting(false);
      setFormState({ name: "", email: "", scope: "systems", message: "" });
      toast.success("Transmission logged. Email client dispatched.", {
        duration: 5000,
        style: {
          background: "#1c1917",
          color: "#F5F2EB",
          border: "1px solid rgba(200, 169, 126, 0.4)",
        },
      });
    }, 400);
  };

  return (
    <section id="contact" className="w-full max-w-6xl mx-auto px-6 py-20 md:py-28 border-t border-espresso-border relative">
      <div id="consultation" className="absolute -top-20" />
      <ScrollReveal>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-espresso-border/50 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.24em] text-brass mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brass" />
              <span>EPILOGUE // CONSULTATION &amp; ADVISORY</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ivory font-normal leading-tight">
              Schedule a 1:1 Architectural Consultation
            </h2>
          </div>
          <span className="font-mono text-xs text-ivory-faint tracking-widest uppercase">
            COMMUNIQUE FOLIO VII
          </span>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-start">
        {/* Column 1: Consultation Booking & Coordinates (6 cols) */}
        <ScrollReveal className="lg:col-span-6 flex flex-col justify-between" delayMs={50}>
          <div>
            <p className="font-sans text-sm sm:text-base text-ivory-muted font-light leading-relaxed mb-8">
              Engage in a direct, high-signal technical teleconference to review systems topology, low-latency AI architectures, or founding advisory partnerships.
            </p>

            {/* Minimal Google Meet Advisory Card */}
            <div className="p-6 rounded-2xl bg-espresso-surface border border-brass/30 mb-6 hover:border-brass/70 transition-all duration-300 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-full bg-brass/10 border border-brass/30 text-brass">
                    <Video className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-brass uppercase tracking-[0.2em] block font-semibold">
                      1:1 ADVISORY CALL
                    </span>
                    <h3 className="font-serif text-lg text-ivory font-normal">
                      Direct Teleconference
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-[10px] font-mono text-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Google Meet</span>
                </div>
              </div>

              <p className="font-sans text-xs text-ivory-muted leading-relaxed font-light mb-5">
                Schedule a 15–30 minute direct session over Google Meet to review systems architecture, AI inference pipelines, or engineering collaborations.
              </p>

              <a
                href="https://meet.google.com/new"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-5 rounded-full bg-brass text-espresso hover:bg-brass-light font-sans text-xs sm:text-sm font-medium flex items-center justify-center gap-2 transition-all duration-200 min-h-[44px] shadow-sm shadow-brass/10 active:scale-[0.98]"
              >
                <Video className="w-3.5 h-3.5" />
                <span>Schedule on Google Meet</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Direct Transmission Info */}
            <div className="p-4 rounded-lg bg-espresso-surface/80 border border-espresso-border flex items-center justify-between mb-6">
              <div>
                <span className="font-mono text-[10px] text-ivory-faint tracking-wider block mb-0.5">
                  Direct Electronic Transmission
                </span>
                <a
                  href="mailto:iamhamid940@gmail.com"
                  className="font-mono text-sm text-ivory hover:text-brass transition-colors select-all"
                >
                  iamhamid940@gmail.com
                </a>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2.5 rounded bg-espresso-deep border border-espresso-border text-ivory-muted hover:text-brass hover:border-brass/40 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Copy email address"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Curated Accompanying Links */}
            <div className="grid grid-cols-3 gap-2 text-xs font-sans">
              <a
                href="https://github.com/Hamidcodedot"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded border border-espresso-border bg-espresso-surface/60 hover:border-brass/40 transition-colors flex flex-col items-center justify-center gap-1.5 text-center min-h-[44px] group"
              >
                <Github className="w-4 h-4 text-brass" />
                <span className="text-[11px] font-mono text-ivory-muted group-hover:text-ivory">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/hamid-shahid-2b0448330"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded border border-espresso-border bg-espresso-surface/60 hover:border-brass/40 transition-colors flex flex-col items-center justify-center gap-1.5 text-center min-h-[44px] group"
              >
                <Linkedin className="w-4 h-4 text-brass" />
                <span className="text-[11px] font-mono text-ivory-muted group-hover:text-ivory">LinkedIn</span>
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded border border-espresso-border bg-espresso-surface/60 hover:border-brass/40 transition-colors flex flex-col items-center justify-center gap-1.5 text-center min-h-[44px] group"
              >
                <FileText className="w-4 h-4 text-brass" />
                <span className="text-[11px] font-mono text-ivory-muted group-hover:text-ivory">Resume PDF</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Column 2: Elegant Archival Correspondence Form (6 cols) */}
        <ScrollReveal className="lg:col-span-6 bg-espresso-surface border border-brass/40 p-7 sm:p-9 rounded-lg flex flex-col justify-between hover:border-brass transition-colors shadow-sm" delayMs={100}>
          <div>
            <div className="flex items-center justify-between border-b border-espresso-border/60 pb-4 mb-6">
              <h3 className="font-serif text-2xl text-ivory font-normal">
                Despatch a Communique
              </h3>
              <span className="font-mono text-[10.5px] uppercase tracking-widest text-brass">
                TRANSMISSION PORTAL
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-mono text-[11px] text-ivory-faint uppercase tracking-wider block mb-1.5">
                  Correspondent Name
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Dr. Eleanor Vance"
                  className="w-full bg-espresso-deep border border-espresso-border px-4 py-2.5 rounded text-ivory placeholder:text-ivory-faint/40 font-sans text-sm focus:border-brass focus:outline-none focus:ring-1 focus:ring-brass transition-colors min-h-[44px]"
                />
              </div>

              <div>
                <label className="font-mono text-[11px] text-ivory-faint uppercase tracking-wider block mb-1.5">
                  Electronic Mail Address
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="correspondent@institution.edu"
                  className="w-full bg-espresso-deep border border-espresso-border px-4 py-2.5 rounded text-ivory placeholder:text-ivory-faint/40 font-sans text-sm focus:border-brass focus:outline-none focus:ring-1 focus:ring-brass transition-colors min-h-[44px]"
                />
              </div>

              <div>
                <label className="font-mono text-[11px] text-ivory-faint uppercase tracking-wider block mb-1.5">
                  Engagement Scope
                </label>
                <select
                  value={formState.scope}
                  onChange={(e) => setFormState({ ...formState, scope: e.target.value })}
                  className="w-full bg-espresso-deep border border-espresso-border px-4 py-2.5 rounded text-ivory font-sans text-sm focus:border-brass focus:outline-none focus:ring-1 focus:ring-brass transition-colors min-h-[44px]"
                >
                  <option value="systems">Architectural &amp; Systems Advisory</option>
                  <option value="ai">AI Pipeline Engineering</option>
                  <option value="research">Research Collaboration &amp; Monograph Review</option>
                  <option value="fellowship">Independent Systems Fellowship</option>
                </select>
              </div>

              <div>
                <label className="font-mono text-[11px] text-ivory-faint uppercase tracking-wider block mb-1.5">
                  Detailed Communique / Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Outline the computational endeavor, latency constraint, or collaborative intent..."
                  className="w-full bg-espresso-deep border border-espresso-border px-4 py-2.5 rounded text-ivory placeholder:text-ivory-faint/40 font-sans text-sm focus:border-brass focus:outline-none focus:ring-1 focus:ring-brass transition-colors min-h-[110px] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded bg-brass text-espresso font-sans text-xs sm:text-sm font-semibold hover:bg-brass-light transition-all flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-50 min-h-[44px] shadow-sm shadow-brass/10"
              >
                <span>{isSubmitting ? "Dispatching Message..." : "Send Message →"}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

          <div className="pt-6 mt-6 border-t border-espresso-border/60 flex items-center justify-between text-[11px] font-mono text-ivory-faint">
            <span>Response window: within 24 hours</span>
            <span>Direct transmission</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
