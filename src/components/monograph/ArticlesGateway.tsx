"use client";

import Link from "next/link";
import { BookOpen, ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { ArticleItem } from "@/lib/data";

interface ArticlesGatewayProps {
  articles: ArticleItem[];
}

export default function ArticlesGateway({ articles }: ArticlesGatewayProps) {
  const featuredArticles = articles?.slice(0, 4) || [];
  const totalCount = articles?.length || 4;

  return (
    <section id="articles" className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-14 sm:py-20 md:py-28 border-t border-espresso-border relative">
      <div id="field-notes" className="absolute -top-20" />

      {/* Section Header */}
      <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 pb-4 sm:pb-6 border-b border-espresso-border/50 gap-4">
        <div>
          <span className="font-mono text-[10px] sm:text-[11px] text-brass uppercase tracking-[0.24em] block mb-2">
            CHAPTER III // ESSAYS &amp; TECHNICAL MONOGRAPHS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-normal">
            Articles &amp; Field Notes
          </h2>
        </div>
        <p className="font-sans text-xs sm:text-sm text-ivory-muted max-w-md font-light leading-relaxed">
          Deep architectural investigations on{" "}
          <span className="font-montserrat font-medium text-amber-100">edge AI systems</span>,
          deterministic caching, and resilient distributed platforms.
        </p>
      </ScrollReveal>

      {/* Editorial Article Grid (2-column on tablet/desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 mb-10 sm:mb-12">
        {featuredArticles.map((article, idx) => (
          <ScrollReveal key={article.id} delayMs={idx * 60}>
            <Link
              href={article.url || `/articles/${article.id}`}
              className="group bg-espresso-surface/70 border border-espresso-border hover:border-brass/50 rounded-xl p-6 sm:p-7 flex flex-col justify-between h-full transition-all duration-200 active:scale-[0.99] shadow-sm"
            >
              <div>
                {/* Meta Row: Category + Read Time + Date */}
                <div className="flex items-center justify-between text-xs font-mono mb-3.5 pb-2.5 border-b border-espresso-border/50">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[3px] bg-espresso-deep border border-espresso-border text-brass text-[11px]">
                    <BookOpen className="w-3 h-3 text-brass/80" />
                    <span>{article.category}</span>
                  </span>
                  <div className="flex items-center gap-2 text-ivory-faint text-[11px]">
                    <span>{article.readTime}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                </div>

                {/* Article Headline */}
                <h3 className="font-serif text-lg sm:text-xl text-ivory font-medium group-hover:text-brass-light transition-colors mb-3 leading-snug">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="font-sans text-xs sm:text-sm text-ivory-muted leading-relaxed font-light mb-6 line-clamp-2">
                  {article.excerpt}
                </p>
              </div>

              {/* Bottom Action Affordance */}
              <div className="pt-3.5 border-t border-espresso-border/50 flex items-center justify-between font-mono text-xs text-brass group-hover:text-brass-light transition-colors">
                <span>Read technical essay</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>

      {/* Library Archive Action */}
      <ScrollReveal className="flex justify-center">
        <Link
          href="/articles"
          className="btn-asym-mirror inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[46px] border border-espresso-border bg-espresso-surface/80 hover:border-brass/70 text-ivory font-sans text-xs sm:text-sm font-medium transition-all duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass"
        >
          <span>Explore complete technical library ({totalCount} essays)</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </ScrollReveal>
    </section>
  );
}
