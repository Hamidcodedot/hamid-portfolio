"use client";

import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { ArticleItem } from "@/lib/data";

interface ArticlesGatewayProps {
  articles: ArticleItem[];
}

export default function ArticlesGateway({ articles }: ArticlesGatewayProps) {
  const count = articles?.length || 4;

  return (
    <section id="articles" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 max-w-4xl mx-auto border-t border-espresso-border relative">
      <div id="field-notes" className="absolute -top-20" />

      <ScrollReveal>
        <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-brass mb-2">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Technical Writings</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl text-ivory font-normal mb-6 sm:mb-8">
          Articles &amp; Field Notes
        </h2>
      </ScrollReveal>

      <ScrollReveal delayMs={80}>
        <Link
          href="/articles"
          className="group block p-5 sm:p-8 rounded-2xl bg-espresso-surface border border-espresso-border hover:border-brass/60 transition-all duration-300 active:scale-[0.99]"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 mb-3">
            <span className="font-mono text-[10.5px] sm:text-xs uppercase tracking-wider text-brass font-medium">
              Field Notes Library
            </span>
            <span className="font-mono text-[10.5px] sm:text-xs text-ivory-faint">
              {count} Articles Published
            </span>
          </div>

          <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-ivory group-hover:text-brass-light transition-colors mb-2.5 sm:mb-3">
            Read Technical Essays &amp; System Architecture Notes
          </h3>

          <p className="font-sans text-xs sm:text-sm text-ivory-muted leading-relaxed font-light mb-5 sm:mb-6">
            In-depth breakdowns covering zero-latency edge LLM proxies, contract drafting automation, 60 FPS WebGL simulation engines, and engineering simplicity.
          </p>

          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-brass font-semibold group-hover:translate-x-1 transition-transform min-h-[44px]">
            <span>Enter Articles Archive</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </Link>
      </ScrollReveal>
    </section>
  );
}
