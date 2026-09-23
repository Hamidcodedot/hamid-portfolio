"use client";

import { useState } from "react";
import Link from "next/link";
import { articles } from "@/lib/articles";
import AudioPlayer from "@/components/monograph/AudioPlayer";
import Footer from "@/components/monograph/Footer";
import { BookOpen, Clock, ArrowRight, ArrowLeft, Search, Tag } from "lucide-react";
import { motion } from "framer-motion";

export default function ArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "AI Systems",
    "Legal Tech & SaaS",
    "Edge Architecture",
    "Engineering Philosophy",
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex min-h-screen flex-col w-full max-w-full overflow-x-hidden bg-espresso text-ivory relative canvas-grain">
      {/* Top Navigation */}
      <header className="sticky top-0 z-40 w-full bg-espresso/90 backdrop-blur-md border-b border-espresso-border transition-colors duration-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 group text-xs uppercase font-sans tracking-widest text-ivory-muted hover:text-brass transition-colors min-h-[44px]"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-brass group-hover:-translate-x-1 transition-transform" />
            <span>Return to Monograph</span>
          </Link>

          <div className="flex items-center gap-3">
            <AudioPlayer />
            <Link
              href="/#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs uppercase tracking-wider font-sans font-medium rounded-full bg-brass text-espresso font-semibold hover:bg-brass-light transition-all active:scale-[0.98] min-h-[44px]"
            >
              <span>Get in Touch</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-16 sm:py-24">
        {/* Editorial Header */}
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-brass mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Research &amp; Field Notes</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-ivory tracking-tight mb-6 leading-[1.15]">
            The Chronicle &amp;{" "}
            <span className="italic text-brass-light">Technical Writings.</span>
          </h1>

          <p className="font-sans text-base sm:text-lg text-ivory-muted leading-relaxed font-normal">
            Deep-dive explorations into AI systems architecture, edge privacy, deterministic state machines, and the discipline of durable software engineering.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-espresso-border/60 pb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 w-full md:w-auto">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`min-h-[44px] px-4 py-2 rounded-full text-xs font-sans tracking-wide transition-all ${
                    isActive
                      ? "bg-brass text-espresso font-semibold shadow-sm"
                      : "bg-espresso-surface/60 border border-espresso-border text-ivory-muted hover:text-ivory hover:border-espresso-borderHover"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-ivory-faint absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles & tags..."
              className="w-full min-h-[44px] pl-10 pr-4 py-2 rounded-full bg-espresso-surface border border-espresso-border text-xs text-ivory placeholder:text-ivory-faint/60 focus:border-brass focus:outline-none focus:ring-1 focus:ring-brass transition-all"
            />
          </div>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((article, idx) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 sm:p-8 rounded-lg border border-espresso-border bg-espresso-surface/60 hover:bg-espresso-surface hover:border-espresso-borderHover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Metadata */}
                <div className="flex items-center justify-between text-xs font-sans text-ivory-faint mb-4">
                  <span className="px-2.5 py-1 rounded bg-espresso-elevated text-brass text-[11px] font-medium tracking-wide">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px]">
                    <Clock className="w-3 h-3 text-ivory-faint" />
                    {article.readTime}
                  </span>
                </div>

                {/* Title */}
                <Link href={`/articles/${article.slug}`} className="block group-hover:text-brass-light transition-colors">
                  <h2 className="font-serif text-2xl sm:text-3xl text-ivory font-normal leading-snug mb-3">
                    {article.title}
                  </h2>
                </Link>

                {/* Excerpt */}
                <p className="font-sans text-sm text-ivory-muted leading-relaxed mb-6 font-normal">
                  {article.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-sans bg-espresso-deep border border-espresso-border/80 text-ivory-faint"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="flex items-center justify-between pt-5 border-t border-espresso-border/50 text-xs font-sans">
                <span className="text-ivory-faint text-[11px]">{article.publishedAt}</span>
                <Link
                  href={`/articles/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-brass font-medium group-hover:translate-x-1 transition-transform min-h-[44px] py-1"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="py-20 text-center border border-espresso-border rounded-lg bg-espresso-surface/30">
            <p className="font-serif text-xl text-ivory mb-2">No articles found matching criteria</p>
            <p className="font-sans text-xs text-ivory-faint mb-6">Try adjusting your category or search query.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="px-4 py-2 min-h-[44px] rounded bg-brass text-espresso text-xs font-semibold uppercase tracking-wider hover:bg-brass-light transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
