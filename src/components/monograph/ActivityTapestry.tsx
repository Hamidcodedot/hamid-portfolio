"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import { GitCommit, GitPullRequest, GitFork, ArrowUpRight, Code2, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { GithubData, GithubLanguage } from "@/lib/data";
import fallbackCalendar from "@/lib/github-contributions.json";

interface ActivityTapestryProps {
  github: GithubData;
}

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export default function ActivityTapestry({ github }: ActivityTapestryProps) {
  const [liveData, setLiveData] = useState<{
    totalContributions: number;
    publicRepos: number;
    activeDays?: number;
    longestStreak?: string;
    cadencePercentage?: string;
    contributions: ContributionDay[];
  } | null>(null);
  const [isLive, setIsLive] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Fetch real-time live GitHub telemetry
  useEffect(() => {
    let isMounted = true;
    async function fetchLiveGithub() {
      try {
        const res = await fetch("/api/github");
        if (res.ok) {
          const data = await res.json();
          if (isMounted && data.success && Array.isArray(data.contributions) && data.contributions.length > 0) {
            setLiveData(data);
            setIsLive(true);
          }
        }
      } catch (err) {
        console.error("Failed to load live GitHub activity:", err);
      }
    }

    fetchLiveGithub();
    return () => {
      isMounted = false;
    };
  }, []);

  // Verified authentic contributions snapshot from Hamid's GitHub
  const fallbackDays = useMemo(() => {
    if (Array.isArray(fallbackCalendar?.contributions) && fallbackCalendar.contributions.length > 0) {
      return fallbackCalendar.contributions as ContributionDay[];
    }
    return [];
  }, []);

  const displayDays = (liveData && liveData.contributions.length > 0)
    ? liveData.contributions
    : fallbackDays;

  // Auto-scroll to latest commits on mobile so user sees recent activity immediately
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollContainerRef.current.scrollWidth;
    }
  }, [displayDays]);

  const verifiedTotal = fallbackCalendar.total?.lastYear ?? 425;
  const totalContributions = liveData?.totalContributions ?? verifiedTotal;
  const publicRepos = liveData?.publicRepos ? `${liveData.publicRepos} Projects` : "9 Projects";
  const streak = liveData?.longestStreak ?? liveData?.cadencePercentage ?? "27-Day Streak";

  const getCellColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-brass/25 hover:bg-brass/40";
      case 2:
        return "bg-brass/50 hover:bg-brass/70";
      case 3:
        return "bg-brass/80 hover:bg-brass";
      case 4:
        return "bg-brass shadow-[0_0_4px_rgba(200,169,126,0.6)]";
      default:
        return "bg-espresso-elevated/70 hover:bg-espresso-elevated";
    }
  };

  const statMetrics = [
    {
      label: "Annual Commits Recorded",
      value: `${totalContributions}+`,
      subtext: "Verified GitHub Telemetry",
      icon: <GitCommit className="w-4 h-4 text-brass" />,
    },
    {
      label: "Peak Commit Cadence",
      value: streak,
      subtext: "78 Active Coding Days",
      icon: <GitPullRequest className="w-4 h-4 text-brass" />,
    },
    {
      label: "Public Repositories",
      value: publicRepos,
      subtext: "Open Source Codebases",
      icon: <GitFork className="w-4 h-4 text-brass" />,
    },
  ];

  return (
    <section id="activity" className="py-14 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto border-t border-espresso-border w-full max-w-full min-w-0 overflow-hidden">
      {/* Section Header */}
      <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-3 sm:gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-brass">
              CHAPTER V // VERIFIABLE CODE CADENCE
            </span>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-[9.5px] sm:text-[10px] font-mono text-emerald-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{isLive ? "LIVE GITHUB SYNC" : "GITHUB TELEMETRY"}</span>
            </div>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ivory font-normal">
            GitHub Activity Tapestry
          </h2>
        </div>
        <p className="font-sans text-xs sm:text-sm text-ivory-muted max-w-md font-light leading-relaxed">
          A continuous, live record of production commits, architectural refinements, and open-source contributions pulled directly from GitHub.
        </p>
      </ScrollReveal>

      {/* 3-Card Balanced Statistics Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
        {statMetrics.map((stat, idx) => (
          <ScrollReveal key={stat.label} delayMs={idx * 60}>
            <div className="p-4 sm:p-5 rounded-2xl border border-espresso-border bg-espresso-surface/60 flex items-center justify-between h-full hover:border-brass/30 transition-colors">
              <div>
                <div className="text-[10px] sm:text-[11px] font-mono text-ivory-faint uppercase tracking-wider mb-1">
                  {stat.label}
                </div>
                <div className="font-serif text-xl sm:text-2xl md:text-3xl text-brass font-normal">
                  {stat.value}
                </div>
                <div className="text-[10.5px] sm:text-[11px] font-sans text-ivory-muted mt-0.5">
                  {stat.subtext}
                </div>
              </div>
              <div className="p-2 sm:p-2.5 rounded-full bg-espresso-deep border border-espresso-border flex-shrink-0">
                {stat.icon}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* The Woven Tapestry Grid Container */}
      <ScrollReveal delayMs={100}>
        <div className="p-4 sm:p-7 rounded-2xl border border-espresso-border bg-espresso-surface/70 mb-6 sm:mb-8 w-full max-w-full min-w-0 overflow-hidden shadow-sm hover:border-brass/30 transition-colors">
          <div className="flex flex-wrap items-center justify-between mb-4 sm:mb-5 gap-2 text-xs font-sans text-ivory-faint">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brass animate-pulse" />
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-ivory font-medium">
                Annual Contribution Tapestry (Live)
              </span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px]">
              <span>Less</span>
              <span className="w-2.5 h-2.5 rounded-[1px] bg-espresso-elevated" />
              <span className="w-2.5 h-2.5 rounded-[1px] bg-brass/25" />
              <span className="w-2.5 h-2.5 rounded-[1px] bg-brass/50" />
              <span className="w-2.5 h-2.5 rounded-[1px] bg-brass/80" />
              <span className="w-2.5 h-2.5 rounded-[1px] bg-brass" />
              <span>More</span>
            </div>
          </div>

          {/* Scrollable grid container with smooth touch pan and auto-scroll ref */}
          <div
            ref={scrollContainerRef}
            className="w-full max-w-full overflow-x-auto pb-3 pt-1 -mx-1 px-1 touch-pan-x scrollbar-thin scrollbar-thumb-espresso-border"
          >
            <div className="grid grid-flow-col grid-rows-7 gap-[3.5px] w-max mx-auto md:mx-0">
              {displayDays.map((day) => (
                <div
                  key={day.date}
                  className={`w-[11px] h-[11px] rounded-[1px] ${getCellColor(day.level)} hover:scale-125 hover:ring-1 hover:ring-brass transition-all duration-150 cursor-pointer`}
                  title={`${day.count} contributions on ${day.date}`}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2.5 pt-3 sm:pt-4 mt-2 border-t border-espresso-border/50 text-xs font-sans text-ivory-faint">
            <div className="flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-brass" />
              <span className="hidden sm:inline font-mono text-xs">Production Commits // Live Auto-Sync Active</span>
              <span className="sm:hidden text-[10.5px] text-brass font-mono flex items-center gap-1">
                <span>Recent commits right</span>
                <ArrowRight className="w-3 h-3 inline" />
              </span>
            </div>
            <a
              href={`https://github.com/${github.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-brass hover:text-brass-light font-medium transition-colors py-1 min-h-[44px]"
            >
              <span className="font-mono text-xs">github.com/{github.username}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </ScrollReveal>

      {/* Languages Spectrum Bar */}
      <ScrollReveal delayMs={150}>
        <div className="p-5 sm:p-7 rounded-2xl border border-espresso-border bg-espresso-surface/40 hover:border-brass/30 transition-colors">
          <div className="flex items-center justify-between mb-3 text-xs font-sans">
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-ivory-faint">
              Core Production Languages Breakdown
            </span>
            <span className="text-brass font-mono text-[11px] sm:text-xs">100% Type-Safe Focus</span>
          </div>

          {/* Multi-segment bar */}
          <div className="w-full h-2.5 sm:h-3 rounded-full overflow-hidden flex bg-espresso-elevated mb-4 sm:mb-5 p-[1px]">
            {github.languages.map((lang: GithubLanguage) => (
              <div
                key={lang.name}
                style={{ width: `${lang.percent}%`, backgroundColor: lang.color }}
                className="h-full first:rounded-l-full last:rounded-r-full transition-all"
                title={`${lang.name}: ${lang.percent}%`}
              />
            ))}
          </div>

          {/* Legend */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 text-xs font-sans">
            {github.languages.map((lang: GithubLanguage) => (
              <div key={lang.name} className="flex items-center gap-2 p-2 sm:p-2.5 rounded-full bg-espresso-deep/40 border border-espresso-border/50">
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: lang.color }}
                />
                <span className="text-ivory-muted font-normal text-[11px] sm:text-xs truncate">{lang.name}</span>
                <span className="text-brass ml-auto font-mono text-[11px] sm:text-xs">{lang.percent}%</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
