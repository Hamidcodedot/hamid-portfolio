export const placeholderData = {
  about: {
    photo_url: "", // "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
    bio: "I build intelligent systems and scalable architectures. Passionate about applied AI, distributed systems, and crafting beautiful user experiences. Currently exploring agentic workflows and large language models.",
    location: "San Francisco, CA",
    focus: "Applied AI Research",
  },
  projects: [
    {
      id: "1",
      title: "Agentic Data Pipeline",
      description: "An automated data extraction tool powered by LLMs that cleans, formats, and stores unstructured text into predictable schemas.",
      tech_stack: ["Python", "OpenAI", "PostgreSQL", "FastAPI"],
      demo_url: "#",
      repo_url: "#",
      review_text: "Saved my team 20 hours a week in manual data entry.",
      review_author: "Product Manager @ TechStartup",
    },
    {
      id: "2",
      title: "Real-time AI Vision API",
      description: "Edge-deployed object detection model optimized with TensorRT, serving via WebSockets for real-time video analytics.",
      tech_stack: ["C++", "PyTorch", "TensorRT", "React"],
      demo_url: "#",
      repo_url: "#",
      review_text: "Incredibly low latency, exactly what we needed for the factory floor.",
      review_author: "Lead Engineer @ Manufacturing Inc",
    }
  ],
  learning: {
    current: [
      { id: "1", title: "Distributed Systems Engineering", category: "Backend", progress_percent: 65, status: "current" as "current" },
      { id: "2", title: "Advanced RAG Techniques", category: "AI", progress_percent: 80, status: "current" as "current" },
    ],
    completed: [
      { id: "3", title: "Deep Learning Specialization", category: "AI", progress_percent: 100, status: "completed" as "completed" },
      { id: "4", title: "Cloud Architecture cert", category: "Infrastructure", progress_percent: 100, status: "completed" as "completed" },
    ]
  },
  careerJourney: [
    {
      id: "1",
      title: "Machine Learning Engineer",
      company: "AI Startup Inc.",
      date: "2023 - Present",
      description: "Leading the development of core language model features. Improved inference latency by 40% and designed the agentic evaluation framework.",
      alignment: "right"
    },
    {
      id: "2",
      title: "Software Engineer Intern",
      company: "Tech Giant",
      date: "Summer 2022",
      description: "Built internal tooling for data visualization using React and D3.js. Integrated with legacy GraphQL APIs.",
      alignment: "left"
    },
    {
      id: "3",
      title: "B.S. Computer Science",
      company: "University of Technology",
      date: "2020 - 2024",
      description: "Focus on Artificial Intelligence and Systems Engineering.",
      alignment: "right"
    }
  ],
  files: []
};
