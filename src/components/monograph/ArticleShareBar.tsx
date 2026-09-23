"use client";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Link2, Check } from "lucide-react";

interface ArticleShareBarProps {
  title: string;
  slug: string;
}

export default function ArticleShareBar({ title, slug }: ArticleShareBarProps) {
  const [copied, setCopied] = useState(false);
  const [articleUrl, setArticleUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setArticleUrl(`${window.location.origin}/articles/${slug}`);
    }
  }, [slug]);

  const handleShareX = () => {
    const text = encodeURIComponent(`"${title}" by @Hamidcodedot\n\n`);
    const url = encodeURIComponent(articleUrl || `https://hamidshahid.dev/articles/${slug}`);
    const intentUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}&via=Hamidcodedot`;
    window.open(intentUrl, "_blank", "noopener,noreferrer,width=600,height=480");
  };

  const handleCopyLink = async () => {
    try {
      const url = articleUrl || `https://hamidshahid.dev/articles/${slug}`;
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast.success("Article link copied to clipboard!", {
        duration: 3000,
        style: {
          background: "#1e1c1a",
          color: "#F5F2EB",
          border: "1px solid rgba(200, 169, 126, 0.3)",
        },
      });
      setTimeout(() => setCopied(false), 2500);
    } catch {
      toast.error("Failed to copy link");
    }
  };

  return (
    <div className="flex items-center gap-2">
      {/* Share on X (Twitter) */}
      <button
        onClick={handleShareX}
        type="button"
        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-espresso-border bg-espresso-surface/80 hover:bg-espresso-elevated hover:border-brass/50 text-ivory text-xs font-sans font-medium transition-all active:scale-[0.98] min-h-[44px]"
        title="Share this article on X"
        aria-label="Share this article on X"
      >
        {/* Official X Logo SVG */}
        <svg
          viewBox="0 0 24 24"
          className="w-3.5 h-3.5 fill-current text-ivory group-hover:text-brass"
          aria-hidden="true"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
        <span>Share on X</span>
      </button>

      {/* Copy Direct Link */}
      <button
        onClick={handleCopyLink}
        type="button"
        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full border border-espresso-border bg-espresso-surface/60 hover:bg-espresso-elevated hover:border-brass/50 text-ivory-muted hover:text-ivory text-xs font-sans transition-all active:scale-[0.98] min-h-[44px]"
        title="Copy article link to clipboard"
        aria-label="Copy article link to clipboard"
      >
        {copied ? (
          <Check className="w-3.5 h-3.5 text-emerald-400" />
        ) : (
          <Link2 className="w-3.5 h-3.5 text-brass" />
        )}
        <span>{copied ? "Copied" : "Copy Link"}</span>
      </button>
    </div>
  );
}
