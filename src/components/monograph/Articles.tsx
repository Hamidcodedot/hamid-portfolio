"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArticleItem } from "@/lib/data";
import { BookOpen, Clock, ArrowRight, X } from "lucide-react";

interface ArticlesProps {
  articles: ArticleItem[];
}

export default function Articles({ articles }: ArticlesProps) {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  return (
    <section id="articles" className="py-20 md:py-28 px-6 max-w-6xl mx-auto border-t border-espresso-border">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-brass mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Research &amp; Writings</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-ivory font-normal">
            Articles &amp; Thoughts
          </h2>
        </div>
        <p className="font-sans text-sm text-ivory-muted max-w-md">
          Field notes on artificial intelligence, distributed systems, and the discipline of simple software.
        </p>
      </div>

      {/* 2-Column Clean Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article, idx) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="p-6 sm:p-7 rounded-lg border border-espresso-border bg-espresso-surface/60 hover:bg-espresso-surface hover:border-espresso-borderHover transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            onClick={() => setSelectedArticle(article)}
          >
            <div>
              {/* Metadata row */}
              <div className="flex items-center justify-between text-xs font-sans text-ivory-faint mb-3">
                <span className="px-2 py-0.5 rounded bg-espresso-elevated text-brass text-[11px] font-medium tracking-wide">
                  {article.category}
                </span>
                <span className="flex items-center gap-1 text-[11px]">
                  <Clock className="w-3 h-3 text-ivory-faint" />
                  {article.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl sm:text-2xl text-ivory font-normal leading-snug mb-3 group-hover:text-brass-light transition-colors">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="font-sans text-sm text-ivory-muted leading-relaxed mb-6 font-normal">
                {article.excerpt}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-espresso-border/50 text-xs font-sans">
              <span className="text-ivory-faint">{article.date}</span>
              <span className="inline-flex items-center gap-1.5 text-brass font-medium group-hover:translate-x-1 transition-transform">
                <span>Read Article</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Clean Reading Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-2xl bg-espresso-surface border border-brass/30 p-5 sm:p-8 rounded-lg shadow-2xl relative max-h-[90vh] overflow-y-auto overscroll-contain"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 min-w-[44px] min-h-[44px] flex items-center justify-center text-ivory-faint hover:text-ivory rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-brass"
                aria-label="Close article modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-wrap items-center gap-2 text-xs font-sans text-brass mb-3 pr-10">
                <span className="uppercase tracking-wider font-semibold">{selectedArticle.category}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
                <span>•</span>
                <span>{selectedArticle.date}</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl text-ivory font-normal mb-6 leading-tight">
                {selectedArticle.title}
              </h2>

              <div className="prose prose-invert prose-stone font-sans text-sm sm:text-base text-ivory-muted leading-relaxed space-y-4">
                <p>{selectedArticle.excerpt}</p>
                <p>
                  Engineering software for durability requires eliminating unnecessary abstractions. When building with modern tools like language models, TensorRT, or Raft consensus, the secret to reliability is strict contract adherence and radical simplicity.
                </p>
                <p>
                  By verifying inputs early, locking data schemas to deterministic JSON structures, and keeping components modular, systems remain performant and maintainable for years to come.
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-espresso-border flex flex-wrap justify-between items-center gap-3">
                <span className="text-xs text-ivory-faint font-sans">
                  Published by Hamid Shahid
                </span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="min-h-[44px] px-5 py-2.5 text-xs font-sans uppercase tracking-wider bg-brass text-espresso font-semibold rounded hover:bg-brass-light transition-colors active:scale-[0.98]"
                >
                  Close Reading
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
