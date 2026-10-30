"use client";

import { GraduationCap, Calendar, MapPin, Award, BookOpen, Briefcase, ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { EducationData } from "@/lib/data";

interface JourneyProps {
  education: EducationData;
}

export default function Journey({ education }: JourneyProps) {
  return (
    <section id="journey" className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-14 sm:py-20 md:py-28 border-t border-espresso-border relative">
      <div id="education" className="absolute -top-20" />

      {/* Section Header */}
      <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 pb-4 sm:pb-6 border-b border-espresso-border/50 gap-4">
        <div>
          <span className="font-mono text-[10px] sm:text-[11px] text-brass uppercase tracking-[0.24em] block mb-2">
            CHAPTER IV // ACADEMIC &amp; VENTURE RECORD
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-normal">
            Education &amp; Journey
          </h2>
        </div>
        <p className="font-sans text-xs sm:text-sm text-ivory-muted max-w-md font-light leading-relaxed">
          Rigorous computer science scholarship paired with{" "}
          <span className="font-montserrat font-medium text-amber-100">foundational mathematics</span>,
          applied systems engineering, and venture leadership.
        </p>
      </ScrollReveal>

      <div className="space-y-6 sm:space-y-8">
        {/* Primary University Scholarship Card */}
        <ScrollReveal delayMs={60}>
          <div className="bg-espresso-surface/75 border border-espresso-border hover:border-brass/45 rounded-xl p-6 sm:p-8 md:p-10 transition-all duration-200 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-baseline justify-between gap-3 mb-4 pb-4 border-b border-espresso-border/50">
              <div>
                <span className="font-mono text-xs text-brass uppercase tracking-wider block mb-1 font-medium">
                  {education.institution}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-ivory font-normal">
                  {education.degree}
                </h3>
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[4px] bg-emerald-500/10 border border-emerald-500/25 font-mono text-xs text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>CGPA: 3.38 / 4.0</span>
                </span>
                <span className="font-mono text-xs text-ivory-faint px-2.5 py-1 rounded-[4px] bg-espresso-deep border border-espresso-border">
                  {education.status.split("(")[0].trim()}
                </span>
              </div>
            </div>

            {/* Context Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-ivory-faint mb-5">
              <span className="flex items-center gap-1.5 font-mono text-[11px] sm:text-xs text-ivory-muted">
                <Calendar className="w-3.5 h-3.5 text-brass" />
                <span>{education.period}</span>
              </span>
              <span className="flex items-center gap-1.5 text-[11px] sm:text-xs text-ivory-muted">
                <MapPin className="w-3.5 h-3.5 text-brass" />
                <span>{education.location}</span>
              </span>
            </div>

            <p className="font-sans text-xs sm:text-sm text-ivory-muted leading-relaxed font-light mb-6 sm:mb-8 max-w-4xl">
              {education.description}
            </p>

            {/* Core Coursework & Focus Badges */}
            <div className="pt-4 border-t border-espresso-border/50">
              <span className="font-mono text-[10px] sm:text-[11px] text-ivory-faint uppercase tracking-wider block mb-3 font-medium">
                Core Academic Coursework &amp; Competencies:
              </span>
              <div className="flex flex-wrap gap-2">
                {education.focus.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 text-xs font-mono rounded-[4px] bg-espresso-deep/90 border border-espresso-border text-ivory-muted hover:border-brass/40 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 2-Column Secondary Record: Pre-Medical Foundations + Leadership */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {/* Pre-Medical Foundations Card */}
          {education.priorEducation && (
            <ScrollReveal delayMs={100}>
              <div className="bg-espresso-surface/60 border border-espresso-border hover:border-brass/40 p-6 sm:p-7 rounded-xl transition-all duration-200 h-full flex flex-col justify-between shadow-xs">
                <div>
                  <div className="flex items-center justify-between border-b border-espresso-border/50 pb-3 mb-3.5">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-brass font-medium flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Intermediate Pre-Medical</span>
                    </span>
                    <span className="font-mono text-[11px] text-ivory-faint uppercase">
                      {education.priorEducation.period}
                    </span>
                  </div>

                  <h4 className="font-serif text-lg sm:text-xl text-ivory font-normal mb-1.5">
                    {education.priorEducation.institution}
                  </h4>

                  <div className="text-xs font-sans text-ivory-faint mb-4">
                    {education.priorEducation.location}
                  </div>

                  <p className="text-xs sm:text-[13px] font-sans text-ivory-muted leading-relaxed font-light mb-6">
                    Pre-Medical academic track emphasizing rigorous organic chemistry, quantitative cell biology, and laboratory scientific method prior to full Computer Science transition.
                  </p>
                </div>

                <div className="pt-3.5 border-t border-espresso-border/50 flex items-center justify-between text-xs font-mono">
                  <span className="text-ivory-faint text-[11px]">Academic Standing:</span>
                  <span className="text-brass font-medium flex items-center gap-1.5 text-xs">
                    <Award className="w-3.5 h-3.5 text-brass" />
                    <span>Grade {education.priorEducation.grade}</span>
                  </span>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Venture & Leadership Card */}
          <ScrollReveal delayMs={140}>
            <div className="bg-espresso-surface/60 border border-espresso-border hover:border-brass/40 p-6 sm:p-7 rounded-xl transition-all duration-200 h-full flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between border-b border-espresso-border/50 pb-3 mb-3.5">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-brass font-medium flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>Leadership &amp; Venture</span>
                  </span>
                  <span className="font-mono text-[11px] text-ivory-faint uppercase">
                    2024 - Present
                  </span>
                </div>

                <h4 className="font-serif text-lg sm:text-xl text-ivory font-normal mb-1.5">
                  Waze Wear &amp; CLEP Initiative
                </h4>

                <div className="text-xs font-sans text-ivory-faint mb-4">
                  E-Commerce Brand &amp; University Philanthropy
                </div>

                <p className="text-xs sm:text-[13px] font-sans text-ivory-muted leading-relaxed font-light mb-6">
                  Founder of Waze Wear (digital storefront, product strategy, conversion optimization). Collection Group Leader for university Child Labour Eradication Program driving community welfare.
                </p>
              </div>

              <div className="pt-3.5 border-t border-espresso-border/50 flex items-center justify-between text-xs font-mono">
                <span className="text-ivory-faint text-[11px]">Execution Focus:</span>
                <span className="text-brass font-medium text-xs">
                  Product Strategy &amp; Social Impact
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
