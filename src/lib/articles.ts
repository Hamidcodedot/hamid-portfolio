export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  category: "AI Systems" | "Legal Tech & SaaS" | "Edge Architecture" | "Engineering Philosophy";
  readTime: string;
  publishedAt: string;
  isoDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
    handle: string;
  };
  tags: string[];
  excerpt: string;
  sections: {
    heading: string;
    paragraphs: string[];
    codeBlock?: {
      language: string;
      code: string;
      caption?: string;
    };
    callout?: {
      title: string;
      text: string;
    };
  }[];
  keyTakeaways: string[];
}

export const articles: Article[] = [
  {
    slug: "architecting-devvproxy-edge-llm-privacy",
    title: "Architecting DevvProxy: Zero-Latency Edge Privacy and Deterministic Caching for LLMs",
    subtitle: "How to scrub customer PII at the edge, slash API bills, and prevent outage cascades in production AI pipelines.",
    category: "AI Systems",
    readTime: "6 min read",
    publishedAt: "September 19, 2026",
    isoDate: "2026-09-19T00:00:00Z",
    author: {
      name: "Hamid Shahid",
      role: "AI Engineer & Systems Architect",
      avatar: "/profile.png",
      handle: "@Hamidcodedot",
    },
    tags: ["LLM Infrastructure", "Edge Proxy", "Privacy", "TypeScript", "Deterministic Caching"],
    excerpt: "Most AI prototypes fail when deployed to production because LLM latency is variable, API costs compound exponentially, and customer PII is sent raw to third-party endpoints. DevvProxy solves this at the network boundary.",
    sections: [
      {
        heading: "The Fragility of Direct-to-Provider AI Architecture",
        paragraphs: [
          "When engineering applications powered by Large Language Models, developers frequently make the mistake of having their client or backend communicate directly with LLM providers. In a controlled test environment, this works. In production, it introduces three severe systemic failure modes.",
          "First, raw personally identifiable information (PII)—including emails, social security numbers, API tokens, and internal employee identities—leaks into third-party cloud telemetry. Second, duplicate prompts across users generate duplicate billing and 800ms+ inference latency. Third, provider rate limits and brief cloud hiccups cause hard application downtime.",
        ],
        callout: {
          title: "The Invariant of Edge Scrubbing",
          text: "Never let sensitive customer payloads reach provider endpoints. Mask and sanitize tokens in memory before TCP packets leave your network perimeter.",
        },
      },
      {
        heading: "Deterministic Semantic Hash Tables at the Edge",
        paragraphs: [
          "DevvProxy sits as a lightweight reverse proxy between your application code and upstream inference engines. Before forwarding a request, it performs an in-memory SHA-256 fingerprint of the normalized prompt payload alongside temperature and system prompt parameters.",
          "If the request matches a previously executed query with identical deterministic parameters, the cached response is served in under 1ms, bypassing the cloud provider entirely.",
        ],
        codeBlock: {
          language: "typescript",
          caption: "DevvProxy Deterministic Cache Key Generation",
          code: `import { createHash } from "crypto";

export function computeCacheKey(model: string, messages: any[], temperature: number): string {
  // Normalize whitespace and serialize deterministic payload
  const normalized = JSON.stringify({
    m: model,
    t: temperature.toFixed(2),
    p: messages.map(msg => ({ r: msg.role, c: msg.content.trim() }))
  });

  return createHash("sha256").update(normalized).digest("hex");
}`,
        },
      },
      {
        heading: "Regex Token Masking with Zero Allocation",
        paragraphs: [
          "PII sanitization cannot rely on another LLM; that would double latency and introduce hallucinations into security-critical code. Instead, DevvProxy utilizes high-throughput compiled regular expressions and token replacement tables.",
          "Phone numbers, emails, IP addresses, and JWT headers are replaced with reversible surrogate tokens (e.g., `{{USER_EMAIL_TOKEN_1}}`) before reaching OpenAI or Anthropic, and re-hydrated on the streaming response back to the authenticated client.",
        ],
      },
    ],
    keyTakeaways: [
      "Edge proxies decouple your product stability from third-party LLM provider availability.",
      "Deterministic prompt fingerprinting cuts AI operating costs by up to 60% on recurring analytical workloads.",
      "Security belongs at the boundary: sanitizing PII in deterministic code guarantees compliance without model hallucinations.",
    ],
  },
  {
    slug: "engineering-jurisdraft-legal-tech-ai",
    title: "Engineering JurisDraft: Institutional-Grade Automated Contract Drafting",
    subtitle: "Building high-reliability legal SaaS with strict schema enforcement, state machines, and immutable audit logs.",
    category: "Legal Tech & SaaS",
    readTime: "8 min read",
    publishedAt: "September 17, 2026",
    isoDate: "2026-09-17T00:00:00Z",
    author: {
      name: "Hamid Shahid",
      role: "AI Engineer & Systems Architect",
      avatar: "/profile.png",
      handle: "@Hamidcodedot",
    },
    tags: ["Legal Tech", "Enterprise SaaS", "Zod Schema", "Next.js", "State Machines"],
    excerpt: "In legal tech, a 95% accurate model is a 100% liability. JurisDraft was engineered to enforce contractual correctness through deterministic schema validation and multi-tier human-in-the-loop review.",
    sections: [
      {
        heading: "The Zero-Tolerance Threshold in Legal Tech",
        paragraphs: [
          "A consumer AI writing tool can afford stylistic drift. An institutional corporate contract drafting system cannot. Missing an indemnity clause, misstating a governing law jurisdiction, or corrupting a liability cap can trigger catastrophic legal and financial damage.",
          "When designing JurisDraft, our foundational tenet was simple: LLMs are creative draft generators, but never the final authority. Every single clause, clause variant, and metadata tag must pass strict programmatic validation before touching the database.",
        ],
      },
      {
        heading: "Strict Schema Enforcement with Zod and TypeScript",
        paragraphs: [
          "We enforced strict output schemas using JSON Schema specification with structured generation APIs. If an upstream model generates a contract document, it is immediately parsed through a runtime Zod validator.",
          "Any schema violation or unexpected attribute causes the parser to reject the candidate block immediately, falling back to pre-certified institutional standard clauses.",
        ],
        codeBlock: {
          language: "typescript",
          caption: "Contract Clause Validation Contract",
          code: `import { z } from "zod";

export const ContractClauseSchema = z.object({
  id: z.string().uuid(),
  clauseType: z.enum(["indemnity", "confidentiality", "termination", "governing_law", "liability_cap"]),
  jurisdiction: z.string().min(2),
  enforceabilityScore: z.number().min(0).max(1),
  body: z.string().min(50),
  reviewedByAttorney: z.boolean().default(false),
  auditLogId: z.string()
});

export type ContractClause = z.infer<typeof ContractClauseSchema>;`,
        },
      },
      {
        heading: "Immutable Audit Trails and Multi-Tenant Isolation",
        paragraphs: [
          "Corporate legal teams require a complete evidentiary chain of custody. JurisDraft logs every keystroke, clause modification, and user consent token into an append-only ledger.",
          "By decoupling the document state machine from the user presentation layer, law firms can prove exactly which draft version was approved, when, and by whom.",
        ],
      },
    ],
    keyTakeaways: [
      "In high-stakes domains, generative AI must be bounded by deterministic validation schemas.",
      "Zod runtime validation combined with TypeScript compile-time safety prevents corrupted data from entering the database.",
      "Append-only audit ledgers turn a simple web app into an institutional-grade compliance engine.",
    ],
  },
  {
    slug: "building-3d-simulations-webgl-typescript",
    title: "Building High-Performance 3D Simulation Engines in WebGL & TypeScript",
    subtitle: "Architectural insights from Startup Empire 3D: maintaining 60 FPS in browser-based spatial simulations.",
    category: "Edge Architecture",
    readTime: "7 min read",
    publishedAt: "August 23, 2026",
    isoDate: "2026-08-23T00:00:00Z",
    author: {
      name: "Hamid Shahid",
      role: "AI Engineer & Systems Architect",
      avatar: "/profile.png",
      handle: "@Hamidcodedot",
    },
    tags: ["WebGL", "Three.js", "TypeScript", "Performance", "Game Engineering"],
    excerpt: "Rendering dynamic 3D worlds in the browser without dropping frames requires ruthless memory management, geometry instancing, and avoiding garbage collection pauses during the render loop.",
    sections: [
      {
        heading: "The Constraint of the 16.6ms Render Frame",
        paragraphs: [
          "To achieve a smooth 60 frames per second in the browser, your entire calculation—including input processing, game state simulation, transform matrix updates, and WebGL draw calls—must complete within 16.6 milliseconds.",
          "When developing Startup Empire 3D, we encountered frame drops caused by typical JavaScript habits: allocating objects inside the animation loop, triggering browser garbage collection pauses, and executing hundreds of individual draw calls.",
        ],
      },
      {
        heading: "Instanced Mesh Batching and Object Pooling",
        paragraphs: [
          "Instead of creating individual 3D meshes for hundreds of buildings, workers, and desks, we consolidated visual elements into `THREE.InstancedMesh`. This reduced WebGL draw calls from over 450 to just 6 per frame.",
          "Furthermore, zero memory allocations occur inside `requestAnimationFrame`. All vector math and matrix multiplications operate on pre-allocated object pools.",
        ],
        codeBlock: {
          language: "typescript",
          caption: "Zero-Allocation Render Tick Pattern",
          code: `// Pre-allocated scratch objects to prevent GC pauses
const scratchMatrix = new THREE.Matrix4();
const scratchPosition = new THREE.Vector3();
const scratchQuaternion = new THREE.Quaternion();
const scratchScale = new THREE.Vector3(1, 1, 1);

export function updateBuildingTransforms(instancedMesh: THREE.InstancedMesh, entities: Entity[]): void {
  for (let i = 0; i < entities.length; i++) {
    scratchPosition.set(entities[i].x, entities[i].y, entities[i].z);
    scratchMatrix.compose(scratchPosition, scratchQuaternion, scratchScale);
    instancedMesh.setMatrixAt(i, scratchMatrix);
  }
  instancedMesh.instanceMatrix.needsUpdate = true;
}`,
        },
      },
    ],
    keyTakeaways: [
      "Never allocate objects or arrays inside requestAnimationFrame.",
      "InstancedMesh batching reduces draw calls by two orders of magnitude.",
      "Spatial simulation performance is primarily a memory layout and GC mitigation challenge.",
    ],
  },
  {
    slug: "the-architecture-of-simplicity",
    title: "The Architecture of Simplicity: Why Less Code Always Wins in Production",
    subtitle: "Every line of code is a maintenance liability. Reflections on building software that lasts for years without breaking.",
    category: "Engineering Philosophy",
    readTime: "5 min read",
    publishedAt: "August 20, 2026",
    isoDate: "2026-08-20T00:00:00Z",
    author: {
      name: "Hamid Shahid",
      role: "AI Engineer & Systems Architect",
      avatar: "/profile.png",
      handle: "@Hamidcodedot",
    },
    tags: ["Software Craft", "Architecture", "Simplicity", "KISS", "System Design"],
    excerpt: "Engineering maturity is not about how many libraries, patterns, or abstractions you can fit into a codebase. It is about how few lines of code you need to solve a real human problem reliably.",
    sections: [
      {
        heading: "The Seduction of Premature Abstraction",
        paragraphs: [
          "Young engineers are often taught to build for hypothetical futures: creating factories for single implementations, wrapping simple fetch calls in multi-layered middleware, and adopting distributed architectures before validating unit economics.",
          "In production, complexity is the primary source of bugs, outages, and developer exhaustion. The simplest code that solves the problem is invariably the best code. If a single function with clear types can accomplish the task, introducing a class hierarchy is an act of technical debt.",
        ],
        callout: {
          title: "The Axiom of Radical Simplicity",
          text: "Never create abstractions, wrappers, or design patterns for problems that do not yet exist. Code must be legible and maintainable five years from now.",
        },
      },
      {
        heading: "Building for Longevity",
        paragraphs: [
          "When we inspect the systems that survive decades—UNIX utilities, SQLite, basic HTTP protocols—they all share the same DNA: tiny conceptual surfaces, deterministic interfaces, and zero unnecessary dependencies.",
          "In modern full-stack development, this means choosing standard web APIs over sprawling NPM packages, using explicit TypeScript types instead of untyped generics, and treating your dependency tree as a fortress to be defended.",
        ],
      },
    ],
    keyTakeaways: [
      "Every third-party dependency is an unvetted co-author on your project.",
      "Favor clarity over cleverness; your future self will thank you.",
      "Refactoring is not adding code; it is systematically deleting the non-essential.",
    ],
  },
];

export function getAllArticles(): Article[] {
  return articles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
