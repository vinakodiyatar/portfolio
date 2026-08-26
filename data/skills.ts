export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Microservices", "System Design", "JWT / OAuth", "Redis"],
  },
  {
    title: "Cloud / DevOps",
    items: [
      "AWS (EC2, Lambda, S3, API Gateway)",
      "CloudFront",
      "Route 53",
      "CloudWatch",
      "Docker",
      "CI/CD",
      "Git & GitHub Actions",
    ],
  },
  {
    title: "Databases",
    items: ["MongoDB", "Aggregation Pipelines", "PostgreSQL", "SQL", "Mongoose", "Prisma"],
  },
  {
    title: "AI Engineering",
    items: ["LLM APIs", "RAG Systems", "Vector Search", "AI Agents", "MCP", "Prompt Engineering"],
  },
  {
    title: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3 / Sass", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "State Management", "Responsive UI"],
  },
];

export const currentlyExploring = [
  "AI Agents & Multi-Agent Swarms",
  "RAG & Semantic Vector Search",
  "Model Context Protocol (MCP)",
  "Autonomous Tool-Calling Workflows",
  "AI Automation Pipelines",
];

export const aiJourney = [
  "Backend Architecture",
  "API Integration",
  "RAG & Vector DBs",
  "Autonomous Agents",
  "Agentic Systems",
];

export const buildingBlocks = [
  {
    title: "Scalable Backend Systems",
    description: "High-throughput REST APIs, asynchronous workers, microservices and fault-tolerant architecture.",
  },
  {
    title: "AI-Powered Products",
    description: "Production-ready applications leveraging LLMs, RAG knowledge bases, and structured tool calling.",
  },
  {
    title: "Cloud Infrastructure",
    description: "Architecting, deploying, and operating resilient cloud services on AWS with CI/CD automation.",
  },
  {
    title: "Developer & System Reliability",
    description: "Clean API contracts, observable logging, robust database indexing, and maintainable codebases.",
  },
];

export const socials = {
  github: "https://github.com/vinakodiyatar",
  linkedin: "https://www.linkedin.com/in/vina-kodiyatar",
  email: "vinakodiyatar556@gmail.com",
  resume: "https://docs.google.com/document/d/1W3l4mdHacHfP3kphhSXclUVzGcUihNCb/edit?usp=sharing&ouid=113247782817677347580&rtpof=true&sd=true",
  hashnode: "https://hashnode.com/@vinakodiyatar",
  name: "Vina Kodiyatar",
};
