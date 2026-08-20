export interface AboutData {
  bio: string;
  location: string;
  focus: string;
  photo_url?: string;
  title?: string;
  stats?: { label: string; value: string }[];
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
  title: string;
  company: string;
  date: string;
  description: string;
  alignment: "left" | "right";
}

export interface FileRecord {
  type: "cv" | "resume";
  file_url: string;
  label: string;
}

export interface PortfolioData {
  about: AboutData;
  projects: ProjectData[];
  learning: {
    current: LearningItem[];
    completed: LearningItem[];
  };
  careerJourney: CareerJourneyItem[];
  files: FileRecord[];
}

export const portfolioData: PortfolioData = {
  about: {
    photo_url: "/profile.png",
    title: "AI Engineer & Systems Architect",
    bio: "I build intelligent systems and scalable architectures. Passionate about applied AI, distributed systems, and crafting beautiful user experiences. Currently exploring agentic workflows, LLMs, and high-performance backend pipelines.",
    location: "Pakistan / Remote",
    focus: "Applied AI & Full Stack Engineering",
    stats: [
      { label: "Experience", value: "3+ Years" },
      { label: "Systems Built", value: "15+" },
      { label: "AI Models Tuned", value: "25+" },
      { label: "Latency Reduced", value: "40%" },
    ]
  },
  projects: [
    {
      id: "1",
      title: "Agentic Data Pipeline",
      description: "An automated data extraction tool powered by LLMs that cleans, formats, and stores unstructured text into predictable schemas.",
      tech_stack: ["Python", "OpenAI", "PostgreSQL", "FastAPI"],
      demo_url: "#",
      repo_url: "https://github.com/Hamidcodedot",
      review_text: "Saved my team 20 hours a week in manual data entry.",
      review_author: "Product Manager @ TechStartup",
    },
    {
      id: "2",
      title: "Real-time AI Vision API",
      description: "Edge-deployed object detection model optimized with TensorRT, serving via WebSockets for real-time video analytics.",
      tech_stack: ["C++", "PyTorch", "TensorRT", "React"],
      demo_url: "#",
      repo_url: "https://github.com/Hamidcodedot",
      review_text: "Incredibly low latency, exactly what we needed for the factory floor.",
      review_author: "Lead Engineer @ Manufacturing Inc",
    }
  ],
  learning: {
    current: [
      { 
        id: "1", 
        title: "Distributed Systems Engineering", 
        category: "Backend", 
        progress_percent: 65, 
        status: "current",
        description: "Focusing on consensus algorithms (Raft), sharding, and fault-tolerant architecture."
      },
      { 
        id: "2", 
        title: "Advanced RAG Techniques", 
        category: "AI", 
        progress_percent: 80, 
        status: "current",
        description: "Implementing graph-based knowledge retrieval and multi-agent debate pipelines."
      },
    ],
    completed: [
      { 
        id: "3", 
        title: "Deep Learning Specialization", 
        category: "AI", 
        progress_percent: 100, 
        status: "completed",
        description: "Neural networks, optimization algorithms, CNNs, and sequence models."
      },
      { 
        id: "4", 
        title: "Cloud Architecture & DevOps", 
        category: "Infrastructure", 
        progress_percent: 100, 
        status: "completed",
        description: "Docker, Kubernetes, CI/CD pipelines, and microservices design patterns."
      },
    ]
  },
  careerJourney: [
    {
      id: "1",
      title: "Machine Learning / Software Engineer",
      company: "Independent AI Projects & Freelance",
      date: "2023 - Present",
      description: "Leading the development of core language model features. Improved inference latency by 40% and designed autonomous agentic evaluation frameworks.",
      alignment: "right"
    },
    {
      id: "2",
      title: "Software Engineer Intern",
      company: "Tech Systems",
      date: "2022 - 2023",
      description: "Built internal tooling for data visualization using Next.js and TailwindCSS. Integrated with REST and GraphQL APIs.",
      alignment: "left"
    },
    {
      id: "3",
      title: "B.S. Computer Science",
      company: "University of Technology",
      date: "2020 - 2024",
      description: "Focused on Artificial Intelligence, Distributed Systems, and Data Structures & Algorithms.",
      alignment: "right"
    }
  ],
  files: [
    {
      type: "resume",
      file_url: "/resume.pdf",
      label: "One-Page Resume"
    },
    {
      type: "cv",
      file_url: "/cv.pdf",
      label: "Full Extended CV"
    }
  ]
};
