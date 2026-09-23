"use client";

import React from "react";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiTailwindcss,
  SiPython,
  SiDocker,
  SiOpenai,
  SiZod,
  SiFastapi,
  SiSqlite,
  SiThreedotjs,
  SiWebgl,
  SiVite,
  SiLinux,
  SiGithubactions,
  SiVercel,
  SiTensorflow,
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiCplusplus,
  SiGoogle,
} from "react-icons/si";
import {
  Brain,
  Binary,
  Sigma,
  LineChart,
  BarChart3,
  GitBranch,
  Share2,
  Workflow,
  Network,
  Activity,
  Boxes,
  Server,
  Award,
  Zap,
  Sparkles,
  Code,
  Terminal,
  Database,
  Layers,
  Compass,
} from "lucide-react";

interface TechLogoProps {
  name: string;
  showLabel?: boolean;
  size?: "sm" | "md";
}

export function getTechIcon(name: string, className: string = "w-4 h-4") {
  const normalized = name.toLowerCase().trim();

  // 1. Specific Frameworks & Libraries
  if (normalized.includes("typescript")) return <SiTypescript className={className} />;
  if (normalized.includes("react")) return <SiReact className={className} />;
  if (normalized.includes("next")) return <SiNextdotjs className={className} />;
  if (normalized.includes("node")) return <SiNodedotjs className={className} />;
  if (normalized.includes("postgres")) return <SiPostgresql className={className} />;
  if (normalized.includes("tailwind")) return <SiTailwindcss className={className} />;
  if (normalized.includes("python")) return <SiPython className={className} />;
  if (normalized.includes("docker")) return <SiDocker className={className} />;
  if (normalized.includes("zod")) return <SiZod className={className} />;
  if (normalized.includes("fastapi")) return <SiFastapi className={className} />;
  if (normalized.includes("sqlite")) return <SiSqlite className={className} />;
  if (normalized.includes("three")) return <SiThreedotjs className={className} />;
  if (normalized.includes("webgl")) return <SiWebgl className={className} />;
  if (normalized.includes("vite")) return <SiVite className={className} />;
  if (normalized.includes("linux")) return <SiLinux className={className} />;
  if (normalized.includes("github") || normalized.includes("ci/cd")) return <SiGithubactions className={className} />;
  if (normalized.includes("vercel")) return <SiVercel className={className} />;
  if (normalized.includes("tensorflow") || normalized.includes("keras")) return <SiTensorflow className={className} />;
  if (normalized.includes("pytorch")) return <SiPytorch className={className} />;
  if (normalized.includes("pandas")) return <SiPandas className={className} />;
  if (normalized.includes("numpy")) return <SiNumpy className={className} />;
  if (normalized.includes("scikit")) return <SiScikitlearn className={className} />;
  if (normalized.includes("c++")) return <SiCplusplus className={className} />;
  if (normalized.includes("c#") || normalized.includes("csharp")) return <Code className={className} />;
  if (normalized.includes("google")) return <SiGoogle className={className} />;

  // 2. Mathematics, Calculus, Linear Algebra & Optimization
  if (
    normalized.includes("linear algebra") ||
    normalized.includes("calculus") ||
    normalized.includes("multivariate") ||
    normalized.includes("mathematics") ||
    normalized.includes("optimization") ||
    normalized.includes("derivative")
  ) {
    return <Sigma className={className} />;
  }

  // 3. Data Science & Statistical Analytics
  if (
    normalized.includes("data science") ||
    normalized.includes("probability") ||
    normalized.includes("statistics") ||
    normalized.includes("scipy") ||
    normalized.includes("analytics")
  ) {
    return <LineChart className={className} />;
  }

  // 4. Neural Networks & Deep Learning
  if (
    normalized.includes("neural") ||
    normalized.includes("deep learning")
  ) {
    return <Network className={className} />;
  }

  // 5. Decision Trees, Forests & Classification
  if (
    normalized.includes("decision tree") ||
    normalized.includes("forest") ||
    normalized.includes("classification")
  ) {
    return <GitBranch className={className} />;
  }

  // 6. Supervised ML, Regression & General Machine Learning
  if (
    normalized.includes("supervised") ||
    normalized.includes("regression") ||
    normalized.includes("machine learning") ||
    normalized.includes("supervised ml")
  ) {
    return <Brain className={className} />;
  }

  // 7. Clustering & Grouping Algorithms
  if (
    normalized.includes("clustering") ||
    normalized.includes("k-means")
  ) {
    return <Boxes className={className} />;
  }

  // 8. Anomaly Detection & Telemetry
  if (
    normalized.includes("anomaly") ||
    normalized.includes("detection")
  ) {
    return <Activity className={className} />;
  }

  // 9. Recommender Systems & Information Filtering
  if (
    normalized.includes("recommender") ||
    normalized.includes("collaborative")
  ) {
    return <Share2 className={className} />;
  }

  // 10. Reinforcement Learning
  if (normalized.includes("reinforcement")) {
    return <Binary className={className} />;
  }

  // 11. Prompt Engineering & Workflows
  if (
    normalized.includes("prompt") ||
    normalized.includes("workflow")
  ) {
    return <Workflow className={className} />;
  }

  if (
    normalized.includes("few-shot") ||
    normalized.includes("generative") ||
    normalized.includes("structured")
  ) {
    return <Sparkles className={className} />;
  }

  // 12. OpenAI / LLMs
  if (normalized.includes("openai") || normalized.includes("llm")) {
    return <SiOpenai className={className} />;
  }

  // 13. Systems, Edge Architecture, Infrastructure
  if (
    normalized.includes("system") ||
    normalized.includes("distributed") ||
    normalized.includes("architecture") ||
    normalized.includes("devops")
  ) {
    return <Server className={className} />;
  }

  if (
    normalized.includes("edge") ||
    normalized.includes("cache") ||
    normalized.includes("proxy") ||
    normalized.includes("latency")
  ) {
    return <Zap className={className} />;
  }

  // 14. Databases & Storage
  if (
    normalized.includes("database") ||
    normalized.includes("sql") ||
    normalized.includes("vector") ||
    normalized.includes("rag") ||
    normalized.includes("redis")
  ) {
    return <Database className={className} />;
  }

  // 15. Professional Societies & Accreditations
  if (
    normalized.includes("iaeng") ||
    normalized.includes("society") ||
    normalized.includes("member") ||
    normalized.includes("credential")
  ) {
    return <Award className={className} />;
  }

  if (normalized.includes("layer") || normalized.includes("model")) {
    return <Layers className={className} />;
  }

  // Refined Fallback: Compass for intellectual exploration, avoiding generic CPU stamp
  return <Compass className={className} />;
}

export default function TechLogo({ name, showLabel = false, size = "md" }: TechLogoProps) {
  const iconSize = size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4";

  if (showLabel) {
    return (
      <span
        title={name}
        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-espresso-deep border border-espresso-border hover:border-brass/40 text-ivory-muted hover:text-ivory transition-all text-[11px] font-sans"
      >
        <span className="text-brass flex-shrink-0">{getTechIcon(name, iconSize)}</span>
        <span className="truncate max-w-[130px]">{name}</span>
      </span>
    );
  }

  return (
    <div
      title={name}
      className="p-2 rounded-lg bg-espresso-deep/90 border border-espresso-border hover:border-brass/50 text-ivory-muted hover:text-brass transition-all duration-200 shadow-sm flex items-center justify-center group"
    >
      <span className="transition-transform group-hover:scale-110 flex-shrink-0">
        {getTechIcon(name, iconSize)}
      </span>
    </div>
  );
}
