export interface StatItem {
  label: string;
  value: string;
}

export interface AboutData {
  name: string;
  title: string;
  headline: string;
  bio: string;
  location: string;
  focus?: string;
  status: string;
  photo_url: string;
  stats: StatItem[];
}

export interface WorkTreePillar {
  id: string;
  pillarNumber: string;
  pillarTitle: string;
  systemCode: string;
  systemLabel: string;
  domain: string;
  systemName: string;
  summary: string;
  metric: string;
  metricLabel: string;
  techStack: string[];
  repoUrl: string;
  demoUrl?: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: "Applied AI & LLMs" | "Languages" | "Frontend & 3D" | "Backend & Storage" | "DevOps & Systems";
  level: "Primary Production" | "Advanced" | "Proficient";
  description: string;
  techs: string[];
}

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  tech_stack: string[];
  demo_url?: string;
  repo_url?: string;
  review_text?: string;
  review_author?: string;
  image_url?: string;
}

export interface LearningItem {
  id: string;
  title: string;
  category: string;
  status: "current" | "completed";
  progress_percent: number;
  resource_url?: string;
  description?: string;
}

export interface CareerJourneyItem {
  id: string;
  chapter: string;
  title: string;
  company: string;
  date: string;
  description: string;
  achievements: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  platform: string;
  date: string;
  credentialId?: string;
  verifyUrl?: string;
  fileUrl?: string;
  skills: string[];
}

export interface ArticleItem {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  content?: string;
  url?: string;
}

export interface PriorEducation {
  institution: string;
  degree: string;
  period: string;
  grade: string;
  location: string;
}

export interface EducationData {
  degree: string;
  status: string;
  cgpa?: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  focus: string[];
  keyCourses: string[];
  priorEducation?: PriorEducation;
}

export interface FileRecord {
  type: "cv" | "resume";
  file_url: string;
  label: string;
}

export interface GithubLanguage {
  name: string;
  percent: number;
  color: string;
}

export interface GithubData {
  username: string;
  totalContributions: string;
  languages: GithubLanguage[];
}

export interface PortfolioData {
  about: AboutData;
  workTree: WorkTreePillar[];
  skills: SkillItem[];
  certifications: CertificationItem[];
  articles: ArticleItem[];
  education: EducationData;
  github: GithubData;
  files: FileRecord[];
}

export const portfolioData: PortfolioData = {
  about: {
    name: "Hamid Shahid",
    title: "AI Systems & Full-Stack Software Engineer",
    headline: "Building Scalable AI Products & Resilient Systems with Real Business Impact.",
    bio: "Computer Science scholar at University of Agriculture, Faisalabad focused on building AI-driven digital products at the intersection of technology, business, and user behavior. Passionate about machine learning foundations, rigorous mathematical optimization, and practical software systems that endure.",
    location: "Kabirwala / Faisalabad, Pakistan",
    focus: "Applied Machine Learning & Scalable Full-Stack Systems",
    status: "Available for High-Impact Roles & Collaborations",
    photo_url: "/profile.png",
    stats: [
      { label: "University CGPA", value: "3.38 / 4.0" },
      { label: "Public Repos", value: "9" },
      { label: "2026 Contributions", value: "419" },
    ],
  },
  workTree: [
    {
      id: "ai-automation",
      pillarNumber: "01",
      systemCode: "01",
      systemLabel: "System 01 // AI Edge Proxy",
      domain: "AI & Edge Systems",
      pillarTitle: "AI & Edge Systems",
      systemName: "DevvProxy — Zero-Latency LLM Edge Proxy",
      summary: "Drop-in reverse proxy that scrubs customer PII at the edge, cuts inference cloud bills with deterministic caching, and guarantees zero-downtime failover.",
      metric: "0ms",
      metricLabel: "Deterministic Cache Latency",
      techStack: ["TypeScript", "Next.js", "Edge Middleware", "OpenAI API", "Tailwind CSS"],
      repoUrl: "https://github.com/Hamidcodedot/devvproxy-saylani-assignment-2",
      demoUrl: "https://devvproxy.vercel.app",
    },
    {
      id: "edge-vision",
      pillarNumber: "02",
      systemCode: "02",
      systemLabel: "System 02 // Legal Tech SaaS",
      domain: "Enterprise Legal Tech",
      pillarTitle: "Enterprise Legal Tech",
      systemName: "JurisDraft — Automated Contract Platform",
      summary: "Institutional Legal Tech SaaS platform engineered to automate corporate contract drafting, negotiation, and storage with schema enforcement.",
      metric: "99.9%",
      metricLabel: "Schema Validation Accuracy",
      techStack: ["TypeScript", "React", "Node.js", "PostgreSQL", "Zod"],
      repoUrl: "https://github.com/Hamidcodedot/jurisdraft-saylani-assignment-3",
      demoUrl: "https://jurisdraft-saylani.vercel.app",
    },
    {
      id: "distributed-systems",
      pillarNumber: "03",
      systemCode: "03",
      systemLabel: "System 03 // Developer Suite",
      domain: "Developer Platforms",
      pillarTitle: "Developer Platforms",
      systemName: "DevvKit — Modern Developer Suite & Toolkit",
      summary: "Comprehensive modern developer suite and architectural utility platform engineered for high-velocity software engineering and rapid systems bootstrapping.",
      metric: "Live",
      metricLabel: "Production Web Platform",
      techStack: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Node.js"],
      repoUrl: "https://github.com/Hamidcodedot",
      demoUrl: "https://devvkit.com",
    },
  ],
  skills: [
    {
      id: "ai-prompt",
      name: "Prompt Engineering & Structured Outputs",
      category: "Applied AI & LLMs",
      level: "Primary Production",
      description: "Rigid schema enforcement, deterministic JSON mode, and LLM output validation without hallucinations.",
      techs: ["OpenAI API", "Zod", "Instructor", "JSON Schema", "Few-Shot Prompting"],
    },
    {
      id: "ai-cache",
      name: "Deterministic Caching & Edge LLM Proxies",
      category: "Applied AI & LLMs",
      level: "Primary Production",
      description: "Sub-millisecond hash-based semantic caching, request multiplexing, and network boundary privacy.",
      techs: ["Edge Functions", "Redis", "Crypto Hashes", "Cloudflare Workers", "Rate Limiting"],
    },
    {
      id: "ai-rag",
      name: "RAG & Vector Retrieval Systems",
      category: "Applied AI & LLMs",
      level: "Advanced",
      description: "Context retrieval pipelines, chunking heuristics, document parsing, and semantic re-ranking.",
      techs: ["Embeddings", "Cosine Similarity", "Vector DBs", "Context Optimization"],
    },
    {
      id: "lang-ts",
      name: "TypeScript (Strict Typing & Invariants)",
      category: "Languages",
      level: "Primary Production",
      description: "Zero 'any' policy, algebraic data types, discriminated unions, and contract-driven domain modeling.",
      techs: ["TypeScript 5", "Zod", "Generics", "Strict Null Checks", "Type Guards"],
    },
    {
      id: "lang-python",
      name: "Python (AI & Backend Engineering)",
      category: "Languages",
      level: "Advanced",
      description: "Data processing, machine learning workflows, automation scripts, and asynchronous web services.",
      techs: ["Python 3.11+", "FastAPI", "NumPy", "Pandas", "Scikit-Learn", "PyTorch"],
    },
    {
      id: "lang-csharp",
      name: "C# & SQL Fundamentals",
      category: "Languages",
      level: "Proficient",
      description: "Object-oriented software design, relational query writing, indexing, and transactional guarantees.",
      techs: ["C#", ".NET Core", "PostgreSQL", "SQLite", "Relational Modeling"],
    },
    {
      id: "web-next",
      name: "Next.js 14 & Modern React Architecture",
      category: "Frontend & 3D",
      level: "Primary Production",
      description: "App Router, React Server Components (RSC), streaming SSR, server actions, and micro-animations.",
      techs: ["Next.js 14", "React 18", "Tailwind CSS", "Framer Motion", "Shadcn/UI"],
    },
    {
      id: "web-three",
      name: "Three.js & WebGL 3D Simulation",
      category: "Frontend & 3D",
      level: "Advanced",
      description: "60 FPS spatial loops, InstancedMesh batching, object pooling, and low-allocation graphics.",
      techs: ["Three.js", "WebGL", "GLTF/GLB", "Shader Basics", "Spatial Math"],
    },
    {
      id: "back-fastapi",
      name: "FastAPI & Node.js Edge Services",
      category: "Backend & Storage",
      level: "Primary Production",
      description: "High-throughput asynchronous endpoints, background worker queues, and REST/WebSocket gateways.",
      techs: ["FastAPI", "Node.js", "Pydantic", "WebSockets", "JWT Auth"],
    },
    {
      id: "back-db",
      name: "PostgreSQL & SQLite Storage",
      category: "Backend & Storage",
      level: "Advanced",
      description: "Normalized relational schemas, ACID transactions, database migrations, and performant indexes.",
      techs: ["PostgreSQL", "SQLite", "Prisma", "SQLAlchemy", "Connection Pooling"],
    },
    {
      id: "sys-edge",
      name: "Edge Middleware & PII Masking",
      category: "DevOps & Systems",
      level: "Primary Production",
      description: "Edge network filtering, regex sanitization, cryptographic masking, and client privacy compliance.",
      techs: ["Edge Runtime", "RegEx Engines", "Vercel Edge", "Privacy Invariants"],
    },
    {
      id: "sys-git",
      name: "Git Workflows & CI/CD Hygiene",
      category: "DevOps & Systems",
      level: "Primary Production",
      description: "Atomic commit structure, semantic releases, GitHub Actions, and regression prevention.",
      techs: ["Git", "GitHub Actions", "Docker Basics", "Linux Shell"],
    },
  ],
  certifications: [
    {
      id: "cert-math-ml",
      title: "Mathematics for Machine Learning and Data Science Specialization",
      issuer: "DeepLearning.AI",
      platform: "Coursera Specialization",
      date: "Dec 19, 2025",
      credentialId: "SV6WZYQW7JDT",
      verifyUrl: "https://coursera.org/verify/specialization/SV6WZYQW7JDT",
      fileUrl: "/certificates/Mathematics%20for%20Machine%20Learning%20and%20Data%20Science.pdf",
      skills: ["Linear Algebra", "Multivariate Calculus", "Probability & Statistics", "Mathematical Optimization"],
    },
    {
      id: "cert-adv-algos",
      title: "Advanced Learning Algorithms",
      issuer: "DeepLearning.AI & Stanford University",
      platform: "Coursera",
      date: "Dec 20, 2025",
      credentialId: "VCNGNYURUA0O",
      verifyUrl: "https://coursera.org/verify/VCNGNYURUA0O",
      fileUrl: "/certificates/Advanced%20Learning%20Algorithms.pdf",
      skills: ["Neural Networks", "TensorFlow", "Decision Trees", "Multi-class Classification", "Random Forests"],
    },
    {
      id: "cert-supervised-ml",
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "DeepLearning.AI & Stanford University",
      platform: "Coursera",
      date: "Dec 8, 2025",
      credentialId: "IFU0Z04LNEWY",
      verifyUrl: "https://coursera.org/verify/IFU0Z04LNEWY",
      fileUrl: "/certificates/Supervised%20Machine%20Learning.pdf",
      skills: ["Supervised ML", "Linear Regression", "Logistic Regression", "Gradient Descent", "Regularization"],
    },
    {
      id: "cert-unsupervised-ml",
      title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
      issuer: "DeepLearning.AI & Stanford University",
      platform: "Coursera",
      date: "Dec 20, 2025",
      credentialId: "BOVD0HJGFQ8F",
      verifyUrl: "https://coursera.org/verify/BOVD0HJGFQ8F",
      fileUrl: "/certificates/Unsupervised%20Learning%2C%20Recommenders%2C%20Reinforcement%20Learning.pdf",
      skills: ["K-Means Clustering", "Anomaly Detection", "Recommender Systems", "Reinforcement Learning"],
    },
    {
      id: "cert-python-ibm",
      title: "Python for Data Science, AI & Development",
      issuer: "IBM",
      platform: "Coursera",
      date: "Jul 21, 2025",
      credentialId: "JPS61TL7ET13",
      verifyUrl: "https://coursera.org/verify/JPS61TL7ET13",
      fileUrl: "/certificates/Python%20IBM.pdf",
      skills: ["Python 3", "Pandas", "NumPy", "Data Science", "AI APIs"],
    },
    {
      id: "cert-prompting-google",
      title: "Start Writing Prompts like a Pro",
      issuer: "Google Career Certificates",
      platform: "Coursera",
      date: "Jun 24, 2025",
      credentialId: "1AMO8VDRQM8O",
      verifyUrl: "https://coursera.org/verify/1AMO8VDRQM8O",
      fileUrl: "/certificates/Prompting%20by%20Google.pdf",
      skills: ["Prompt Engineering", "LLM Workflows", "Few-Shot Prompting", "Generative AI"],
    },
    {
      id: "cert-iaeng",
      title: "Professional Member — AI & Computer Science Societies",
      issuer: "International Association of Engineers (IAENG)",
      platform: "IAENG",
      date: "Aug 13, 2025",
      credentialId: "524820",
      fileUrl: "/certificates/IAENG_membership_524820%20(1).pdf",
      skills: ["IAENG Society of AI", "IAENG Society of CS", "Systems Engineering"],
    },
  ],
  articles: [
    {
      id: "1",
      title: "Architecting DevvProxy: Zero-Latency Edge Privacy and Deterministic Caching for LLMs",
      category: "AI Systems",
      readTime: "6 min read",
      date: "Sep 2026",
      excerpt: "Why most LLM demos fail in production, and how strict PII masking with deterministic caching at the network boundary makes AI reliable.",
      url: "/articles/architecting-devvproxy-edge-llm-privacy",
    },
    {
      id: "2",
      title: "Engineering JurisDraft: Institutional-Grade Automated Contract Drafting",
      category: "Legal Tech & SaaS",
      readTime: "8 min read",
      date: "Sep 2026",
      excerpt: "Building high-reliability legal tech SaaS with runtime Zod validation, multi-tier attorney review, and immutable audit ledgers.",
      url: "/articles/engineering-jurisdraft-legal-tech-ai",
    },
    {
      id: "3",
      title: "Building High-Performance 3D Simulation Engines in WebGL & TypeScript",
      category: "Edge Architecture",
      readTime: "7 min read",
      date: "Aug 2026",
      excerpt: "Maintaining 60 FPS in browser-based spatial simulations via InstancedMesh batching, object pooling, and zero-allocation render ticks.",
      url: "/articles/building-3d-simulations-webgl-typescript",
    },
    {
      id: "4",
      title: "The Architecture of Simplicity: Why Less Code Always Wins in Production",
      category: "Engineering Philosophy",
      readTime: "5 min read",
      date: "Aug 2026",
      excerpt: "Every line of code is a maintenance liability. Why avoiding unnecessary abstractions and premature frameworks leads to software that endures.",
      url: "/articles/the-architecture-of-simplicity",
    },
  ],
  education: {
    degree: "Bachelor of Science in Computer Science (BS CS)",
    status: "Undergraduate Scholar (CGPA: 3.38 / 4.0)",
    institution: "University of Agriculture, Faisalabad",
    period: "2024 — Present",
    location: "Faisalabad, Pakistan",
    description: "Pursuing rigorous foundational computer science and machine learning theory. Focus on statistical learning mathematics, multivariate calculus, linear algebra, neural network architectures, and full-stack software systems.",
    focus: [
      "Machine Learning Mathematics (Linear Algebra, Calculus, Statistics)",
      "Neural Network Architectures & Deep Learning Algorithms",
      "Full-Stack Web Systems (Next.js, TypeScript, Python)",
      "Object-Oriented Software Design (C++, C#, Python)",
    ],
    keyCourses: [
      "Mathematics for Machine Learning & Data Science",
      "Supervised & Unsupervised Machine Learning",
      "Advanced Learning Algorithms & Neural Networks",
      "Object-Oriented Programming (C++, C#)",
      "Data Structures & Algorithm Design",
      "Database Systems & Modern Web Platforms",
    ],
    priorEducation: {
      institution: "Aspire College for Boys, Kabirwala",
      degree: "Intermediate (Pre-Medical)",
      period: "2021 — 2023",
      grade: "86.4% Distinction",
      location: "Kabirwala, Pakistan",
    },
  },
  github: {
    username: "Hamidcodedot",
    totalContributions: "419",
    languages: [
      { name: "TypeScript", percent: 50, color: "#C8A97E" },
      { name: "Python", percent: 25, color: "#D4CEC3" },
      { name: "JavaScript", percent: 13, color: "#E5C497" },
      { name: "C#", percent: 13, color: "#8C8275" },
    ],
  },
  files: [
    {
      type: "resume",
      file_url: "/resume.pdf",
      label: "Official Resume (PDF)",
    },
    {
      type: "cv",
      file_url: "/cv.pdf",
      label: "Curriculum Vitae (PDF)",
    },
  ],
};
