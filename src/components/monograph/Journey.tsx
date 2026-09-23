"use client";

import { GraduationCap, Calendar, MapPin, Award, BookOpen, Briefcase } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { EducationData } from "@/lib/data";

interface JourneyProps {
  education: EducationData;
}

export default function Journey({ education }: JourneyProps) {
  return (
    <section id="journey" className="w-full max-w-4xl mx-auto px-6 py-16 md:py-24 border-t border-espresso-border relative">
      <div id="education" className="absolute -top-20" />
      <ScrollReveal>
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brass mb-2">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Academic &amp; Leadership Record</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl text-ivory font-normal mb-8">
          Academic Foundations
        </h2>
      </ScrollReveal>

      <div className="space-y-6">
        {/* Primary University Education Plate */}
        <ScrollReveal delayMs={80}>
          <div className="bg-espresso-surface border border-brass/30 p-6 sm:p-8 rounded-lg hover:border-brass/60 transition-colors shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
              <div>
                <span className="font-mono text-[11px] text-brass uppercase tracking-wider block mb-1">
                  {education.institution}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-ivory font-normal">
                  {education.degree}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center px-2.5 py-1 rounded bg-brass/10 border border-brass/30 font-mono text-xs text-brass">
                  CGPA: 3.38 / 4.0
                </span>
                <span className="font-mono text-xs text-ivory-faint hidden sm:inline">
                  {education.status.split("(")[0].trim()}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-ivory-faint mb-5">
              <span className="flex items-center gap-1.5 font-mono">
                <Calendar className="w-3.5 h-3.5 text-brass" />
                {education.period}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brass" />
                {education.location}
              </span>
            </div>

            <p className="font-sans text-sm text-ivory-muted leading-relaxed font-light mb-6">
              {education.description}
            </p>

            {/* Core Competencies / Focus Pillars */}
            <div className="pt-4 border-t border-espresso-border/60">
              <span className="font-mono text-[10px] text-ivory-faint uppercase tracking-wider block mb-3">
                Core Academic Focus &amp; Coursework:
              </span>
              <div className="flex flex-wrap gap-2">
                {education.focus.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 text-[11px] font-sans rounded bg-espresso-deep border border-espresso-border text-ivory-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Prior Academic & Impact Grid (2-column on tablet/desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Prior Education Plate */}
          {education.priorEducation && (
            <ScrollReveal delayMs={120}>
              <div className="bg-espresso-surface/60 border border-espresso-border p-6 rounded-lg hover:border-brass/40 transition-colors h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-espresso-border/50 pb-2.5 mb-3">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-brass font-medium flex items-center gap-1.5">
                      <BookOpen className="w-3 h-3" />
                      Intermediate Pre-Medical
                    </span>
                    <span className="font-mono text-[10px] text-ivory-faint uppercase">
                      {education.priorEducation.period}
                    </span>
                  </div>

                  <h4 className="font-serif text-lg text-ivory font-normal mb-1">
                    {education.priorEducation.institution}
                  </h4>

                  <div className="text-xs font-sans text-ivory-faint mb-3">
                    {education.priorEducation.location}
                  </div>
                </div>

                <div className="pt-3 border-t border-espresso-border/50 flex items-center justify-between text-xs">
                  <span className="font-mono text-ivory-faint text-[11px]">Academic Standing:</span>
                  <span className="font-mono text-brass font-medium flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-brass" />
                    {education.priorEducation.grade}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Social Impact & Venture Leadership Plate */}
          <ScrollReveal delayMs={160}>
            <div className="bg-espresso-surface/60 border border-espresso-border p-6 rounded-lg hover:border-brass/40 transition-colors h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-espresso-border/50 pb-2.5 mb-3">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-brass font-medium flex items-center gap-1.5">
                    <Briefcase className="w-3 h-3" />
                    Leadership &amp; Venture
                  </span>
                  <span className="font-mono text-[10px] text-ivory-faint uppercase">
                    2024 — Present
                  </span>
                </div>

                <h4 className="font-serif text-lg text-ivory font-normal mb-1">
                  Waze Wear &amp; CLEP Initiative
                </h4>

                <p className="text-xs font-sans text-ivory-muted leading-relaxed font-light mb-3">
                  Founder of Waze Wear (digital storefront, product strategy &amp; conversion optimization). Collection Group Leader for university Child Labour Eradication Program.
                </p>
              </div>

              <div className="pt-3 border-t border-espresso-border/50 flex items-center justify-between text-xs">
                <span className="font-mono text-ivory-faint text-[11px]">Execution Focus:</span>
                <span className="font-mono text-brass font-medium">
                  Product &amp; Social Impact
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
