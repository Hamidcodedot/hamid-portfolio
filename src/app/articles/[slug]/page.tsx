import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";
import AudioPlayer from "@/components/monograph/AudioPlayer";
import Footer from "@/components/monograph/Footer";
import ArticleShareBar from "@/components/monograph/ArticleShareBar";
import { ArrowLeft, Clock, Calendar, CheckCircle2, ChevronRight, BookOpen } from "lucide-react";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const allArticles = getAllArticles();
  return allArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) {
    return {
      title: "Article Not Found — Hamid Shahid",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hamidshahid.dev";
  const articleUrl = `${siteUrl}/articles/${article.slug}`;
  const ogImageUrl = `${siteUrl}/api/og?title=${encodeURIComponent(article.title)}&category=${encodeURIComponent(article.category)}&readTime=${encodeURIComponent(article.readTime)}`;

  return {
    title: `${article.title} — Hamid Shahid`,
    description: article.excerpt,
    authors: [{ name: article.author.name, url: siteUrl }],
    keywords: article.tags,
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: articleUrl,
      siteName: "Hamid Shahid — The Odyssey",
      publishedTime: article.isoDate,
      authors: [article.author.name],
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      creator: "@Hamidcodedot",
      site: "@Hamidcodedot",
      images: [ogImageUrl],
    },
    alternates: {
      canonical: articleUrl,
    },
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const allArticles = getAllArticles();
  const currentIndex = allArticles.findIndex((a) => a.slug === article.slug);
  const nextArticle = allArticles[(currentIndex + 1) % allArticles.length];

  return (
    <div className="flex min-h-screen flex-col w-full max-w-full overflow-x-hidden bg-espresso text-ivory relative canvas-grain">
      {/* Top Header */}
      <header className="sticky top-0 z-40 w-full bg-espresso/90 backdrop-blur-md border-b border-espresso-border transition-colors duration-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 group text-xs uppercase font-sans tracking-widest text-ivory-muted hover:text-brass transition-colors min-h-[44px]"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-brass group-hover:-translate-x-1 transition-transform" />
            <span>All Articles</span>
          </Link>

          <div className="flex items-center gap-3">
            <AudioPlayer />
            <Link
              href="/"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs uppercase tracking-wider font-sans font-medium rounded border border-espresso-border hover:border-brass/40 text-ivory-muted hover:text-ivory transition-colors min-h-[44px]"
            >
              <span>Monograph Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Article Container */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-10 sm:py-20">
        {/* Article Header & Metadata */}
        <header className="mb-10 sm:mb-12 border-b border-espresso-border pb-8 sm:pb-10">
          {/* Category & Read Time */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-sans text-brass mb-4 sm:mb-6">
            <span className="px-2.5 sm:px-3 py-1 rounded-full bg-espresso-elevated border border-brass/30 text-brass text-[10.5px] sm:text-[11px] font-semibold uppercase tracking-wider">
              {article.category}
            </span>
            <span className="flex items-center gap-1 text-ivory-faint text-[10.5px] sm:text-[11px]">
              <Clock className="w-3 h-3 text-ivory-faint" />
              {article.readTime}
            </span>
            <span className="text-ivory-faint">•</span>
            <span className="flex items-center gap-1 text-ivory-faint text-[10.5px] sm:text-[11px]">
              <Calendar className="w-3 h-3 text-ivory-faint" />
              {article.publishedAt}
            </span>
          </div>

          {/* Article Title */}
          <h1 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-normal text-ivory leading-[1.2] sm:leading-[1.18] tracking-tight mb-4 sm:mb-6">
            {article.title}
          </h1>

          {/* Subtitle / Thesis */}
          <p className="font-sans text-base sm:text-lg md:text-xl text-ivory-muted leading-relaxed mb-6 sm:mb-8 font-normal">
            {article.subtitle}
          </p>

          {/* Author Byline & Social Share Cluster */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-espresso-border/50">
            {/* Author Card */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full overflow-hidden border border-brass/40 relative bg-espresso-surface">
                <Image
                  src={article.author.avatar}
                  alt={article.author.name}
                  fill
                  sizes="44px"
                  className="object-cover grayscale contrast-125"
                />
              </div>
              <div>
                <div className="text-sm font-sans font-medium text-ivory">
                  {article.author.name}
                </div>
                <div className="text-xs font-sans text-ivory-faint">
                  {article.author.role} •{" "}
                  <a
                    href="https://x.com/Hamidcodedot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brass hover:underline"
                  >
                    {article.author.handle}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Share Bar with X (Twitter) Card Support */}
            <ArticleShareBar title={article.title} slug={article.slug} />
          </div>
        </header>

        {/* Lead Excerpt Blockquote */}
        <div className="p-6 rounded-lg border-l-2 border-brass bg-espresso-surface/60 mb-12 text-base sm:text-lg font-serif italic text-ivory leading-relaxed">
          &ldquo;{article.excerpt}&rdquo;
        </div>

        {/* Article Sections */}
        <div className="space-y-12">
          {article.sections.map((section, sIdx) => (
            <section key={sIdx} className="space-y-5">
              <h2 className="font-serif text-2xl sm:text-3xl text-ivory font-normal leading-snug">
                {section.heading}
              </h2>

              {section.paragraphs.map((para, pIdx) => (
                <p
                  key={pIdx}
                  className="font-sans text-base sm:text-lg text-ivory-muted leading-relaxed font-normal"
                >
                  {para}
                </p>
              ))}

              {/* Architectural Callout */}
              {section.callout && (
                <div className="p-5 sm:p-6 rounded-lg border border-brass/30 bg-espresso-elevated/40 my-6">
                  <div className="text-xs uppercase font-sans tracking-widest text-brass font-semibold mb-2">
                    {section.callout.title}
                  </div>
                  <p className="font-sans text-sm sm:text-base text-ivory-muted leading-relaxed">
                    {section.callout.text}
                  </p>
                </div>
              )}

              {/* Code Walkthrough */}
              {section.codeBlock && (
                <div className="rounded-lg border border-espresso-border bg-[#0e0d0c] overflow-hidden my-6">
                  {section.codeBlock.caption && (
                    <div className="px-4 py-2 border-b border-espresso-border/60 bg-espresso-surface/40 flex items-center justify-between text-xs font-mono text-ivory-faint">
                      <span>{section.codeBlock.caption}</span>
                      <span className="uppercase text-[10px] text-brass">
                        {section.codeBlock.language}
                      </span>
                    </div>
                  )}
                  <pre className="p-4 sm:p-5 overflow-x-auto text-xs sm:text-sm font-mono text-ivory-muted leading-relaxed">
                    <code>{section.codeBlock.code}</code>
                  </pre>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Key Takeaways Box */}
        <div className="mt-14 p-6 sm:p-8 rounded-lg border border-brass/30 bg-espresso-surface/80">
          <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-brass mb-4">
            <CheckCircle2 className="w-4 h-4 text-brass" />
            <span>Key Engineering Takeaways</span>
          </div>

          <ul className="space-y-3">
            {article.keyTakeaways.map((takeaway, tIdx) => (
              <li
                key={tIdx}
                className="flex items-start gap-3 text-sm sm:text-base font-sans text-ivory leading-relaxed"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brass mt-2.5 flex-shrink-0" />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="mt-10 flex flex-wrap gap-2 pt-6 border-t border-espresso-border">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded text-xs font-sans bg-espresso-surface border border-espresso-border text-ivory-faint"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Next Article Recommendation Card */}
        {nextArticle && nextArticle.slug !== article.slug && (
          <div className="mt-16 pt-10 border-t border-espresso-border">
            <div className="text-xs font-sans uppercase tracking-widest text-brass mb-3">
              Read Next
            </div>
            <Link
              href={`/articles/${nextArticle.slug}`}
              className="p-6 sm:p-7 rounded-lg border border-espresso-border bg-espresso-surface/60 hover:bg-espresso-surface hover:border-brass/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
            >
              <div>
                <span className="text-xs font-sans text-ivory-faint uppercase tracking-wider block mb-1">
                  {nextArticle.category} • {nextArticle.readTime}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-ivory group-hover:text-brass-light transition-colors">
                  {nextArticle.title}
                </h3>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs font-sans text-brass font-medium flex-shrink-0">
                <span>Continue Reading</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
