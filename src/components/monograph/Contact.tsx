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

  const emailAddress = "iamhamid940@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    toast.success("Email address copied to clipboard.");
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      toast.error("Please fill in all fields before sending.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const subject = encodeURIComponent(`[${formState.scope.toUpperCase()}] Project Inquiry from ${formState.name}`);
      const body = encodeURIComponent(
        `Name: ${formState.name} (${formState.email})\nScope: ${formState.scope}\n\nMessage:\n${formState.message}`
      );
      window.open(`mailto:${emailAddress}?subject=${subject}&body=${body}`, "_blank");

      setIsSubmitting(false);
      setFormState({ name: "", email: "", scope: "systems", message: "" });
      toast.success("Draft created. Email client opened.", {
        duration: 4000,
        style: {
          background: "#1c1917",
          color: "#F5F2EB",
          border: "1px solid rgba(200, 169, 126, 0.4)",
        },
      });
    }, 300);
  };

  return (
    <section id="contact" className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-14 sm:py-20 md:py-28 border-t border-espresso-border relative">
      <div id="consultation" className="absolute -top-20" />

      {/* Section Header */}
      <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 pb-4 sm:pb-6 border-b border-espresso-border/50 gap-4">
        <div>
          <span className="font-mono text-[10px] sm:text-[11px] text-brass uppercase tracking-[0.24em] block mb-2">
            CHAPTER V // CONSULTATION &amp; ADVISORY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-normal leading-tight">
            Let&apos;s Build Together
          </h2>
        </div>
        <p className="font-sans text-xs sm:text-sm text-ivory-muted max-w-md font-light leading-relaxed">
          Available for systems architecture advisory,{" "}
          <span className="font-montserrat font-medium text-amber-100">high-throughput AI runtimes</span>,
          and founding engineering collaborations.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
        {/* Column 1: Direct Teleconference & Channels (5 cols on desktop) */}
        <ScrollReveal className="lg:col-span-5 flex flex-col gap-5 sm:gap-6" delayMs={50}>
          {/* Direct Teleconference Card */}
          <div className="p-6 sm:p-7 rounded-xl bg-espresso-surface/75 border border-espresso-border hover:border-brass/45 transition-all duration-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-full bg-brass/10 border border-brass/30 text-brass flex-shrink-0">
                  <Video className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-brass uppercase tracking-wider block font-medium">
                    1:1 ADVISORY SESSION
                  </span>
                  <h3 className="font-serif text-base sm:text-lg text-ivory font-normal">
                    Direct Video Call
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-[4px] bg-emerald-500/10 border border-emerald-500/25 text-[10px] font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Google Meet</span>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-ivory-muted leading-relaxed font-light mb-6">
              Schedule a 15–30 minute direct session to review systems architecture, AI inference pipelines, or founding engineering engagements.
            </p>

            <a
              href="https://meet.google.com/new"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-asym w-full py-3 px-5 bg-white text-neutral-950 hover:bg-neutral-200 font-sans text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-150 min-h-[46px] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass"
            >
              <Video className="w-4 h-4" />
              <span>Schedule on Google Meet</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Quick Copy Email Card */}
          <div className="p-4 sm:p-5 rounded-xl bg-espresso-surface/60 border border-espresso-border flex items-center justify-between shadow-xs">
            <div className="min-w-0 pr-3">
              <span className="font-mono text-[10px] text-ivory-faint uppercase tracking-wider block mb-0.5">
                Direct Email
              </span>
              <a
                href={`mailto:${emailAddress}`}
                className="font-mono text-xs sm:text-sm text-ivory hover:text-brass transition-colors truncate block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass rounded"
              >
                {emailAddress}
              </a>
            </div>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="p-2.5 rounded-lg bg-espresso-deep border border-espresso-border text-ivory-muted hover:text-brass hover:border-brass/40 transition-colors duration-150 min-h-[44px] min-w-[44px] flex items-center justify-center flex-shrink-0 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass"
              aria-label="Copy email address"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Curated External Profiles */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3 text-xs font-sans">
            <a
              href="https://github.com/Hamidcodedot"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-espresso-border bg-espresso-surface/50 hover:border-brass/40 hover:bg-espresso-surface transition-all duration-150 flex flex-col items-center justify-center gap-1.5 text-center min-h-[56px] group active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass"
            >
              <Github className="w-4 h-4 text-brass group-hover:text-brass-light transition-colors" />
              <span className="text-[11px] font-mono text-ivory-muted group-hover:text-ivory">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/hamid-shahid-2b0448330"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-espresso-border bg-espresso-surface/50 hover:border-brass/40 hover:bg-espresso-surface transition-all duration-150 flex flex-col items-center justify-center gap-1.5 text-center min-h-[56px] group active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass"
            >
              <Linkedin className="w-4 h-4 text-brass group-hover:text-brass-light transition-colors" />
              <span className="text-[11px] font-mono text-ivory-muted group-hover:text-ivory">LinkedIn</span>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-espresso-border bg-espresso-surface/50 hover:border-brass/40 hover:bg-espresso-surface transition-all duration-150 flex flex-col items-center justify-center gap-1.5 text-center min-h-[56px] group active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass"
            >
              <FileText className="w-4 h-4 text-brass group-hover:text-brass-light transition-colors" />
              <span className="text-[11px] font-mono text-ivory-muted group-hover:text-ivory">Resume PDF</span>
            </a>
          </div>
        </ScrollReveal>

        {/* Column 2: Clean Correspondence Form (7 cols on desktop) */}
        <ScrollReveal className="lg:col-span-7 bg-espresso-surface/75 border border-espresso-border hover:border-brass/40 p-6 sm:p-9 rounded-xl flex flex-col justify-between transition-colors shadow-sm" delayMs={100}>
          <div>
            <div className="flex items-center justify-between border-b border-espresso-border/50 pb-3.5 mb-6">
              <h3 className="font-serif text-xl sm:text-2xl text-ivory font-normal">
                Send a Message
              </h3>
              <span className="font-mono text-[10px] uppercase tracking-wider text-brass font-medium">
                RESPONSE IN &lt; 24H
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-[11px] text-ivory-faint uppercase tracking-wider block mb-1.5 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    autoCapitalize="words"
                    autoCorrect="off"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full bg-espresso-deep/90 border border-espresso-border px-4 py-2.5 rounded-lg text-ivory placeholder:text-ivory-faint/40 font-sans text-sm focus:outline-none focus-visible:border-brass focus-visible:ring-2 focus-visible:ring-brass transition-all min-h-[46px]"
                  />
                </div>

                <div>
                  <label className="font-mono text-[11px] text-ivory-faint uppercase tracking-wider block mb-1.5 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    inputMode="email"
                    autoCapitalize="none"
                    autoCorrect="off"
                    spellCheck={false}
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full bg-espresso-deep/90 border border-espresso-border px-4 py-2.5 rounded-lg text-ivory placeholder:text-ivory-faint/40 font-sans text-sm focus:outline-none focus-visible:border-brass focus-visible:ring-2 focus-visible:ring-brass transition-all min-h-[46px]"
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-[11px] text-ivory-faint uppercase tracking-wider block mb-1.5 font-medium">
                  Engagement Scope
                </label>
                <select
                  value={formState.scope}
                  onChange={(e) => setFormState({ ...formState, scope: e.target.value })}
                  className="w-full bg-espresso-deep/90 border border-espresso-border px-4 py-2.5 rounded-lg text-ivory font-sans text-sm focus:outline-none focus-visible:border-brass focus-visible:ring-2 focus-visible:ring-brass transition-all min-h-[46px]"
                >
                  <option value="systems">AI Systems &amp; Low-Latency Architecture</option>
                  <option value="edge">Edge Reverse Proxies &amp; Caching</option>
                  <option value="fullstack">Full-Stack Platform Engineering</option>
                  <option value="founding">Founding Engineer / Advisory Role</option>
                </select>
              </div>

              <div>
                <label className="font-mono text-[11px] text-ivory-faint uppercase tracking-wider block mb-1.5 font-medium">
                  Project Outline / Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Describe your technical challenge, latency constraint, or collaboration goals..."
                  className="w-full bg-espresso-deep/90 border border-espresso-border px-4 py-2.5 rounded-lg text-ivory placeholder:text-ivory-faint/40 font-sans text-sm focus:outline-none focus-visible:border-brass focus-visible:ring-2 focus-visible:ring-brass transition-all min-h-[110px] resize-none"
                />
              </div>

              {/* ChaiUI Signature Asymmetric Solid Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-asym w-full py-3.5 bg-white text-neutral-950 font-sans text-sm font-semibold hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass"
              >
                <span>{isSubmitting ? "Opening Email Client..." : "Send Message"}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

          <div className="pt-4 mt-6 border-t border-espresso-border/50 flex items-center justify-between text-[11px] font-mono text-ivory-faint">
            <span>Direct transmission</span>
            <span>Zero spam guarantee</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
