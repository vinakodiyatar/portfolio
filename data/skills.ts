export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "SQL"],
  },
  {
    title: "Cloud / DevOps",
    items: [
      "AWS",
      "EC2",
      "Lambda",
      "API Gateway",
      "CloudFront",
      "Route 53",
      "CloudWatch",
      "Git",
      "GitHub Actions",
    ],
  },
  {
    title: "AI",
    items: ["LLM APIs", "RAG", "Vector Search", "AI Agents", "MCP"],
  },
];

export const currentlyExploring = [
  "AI Agents",
  "RAG",
  "LLM Applications",
  "MCP",
  "AI Automation",
];

export const aiJourney = [
  "Backend Engineering",
  "AI Applications",
  "RAG",
  "AI Agents",
  "Agentic Systems",
];

export const buildingBlocks = [
  {
    title: "Scalable Backend Systems",
    description: "APIs, services, integrations and backend architecture.",
  },
  {
    title: "AI-Powered Products",
    description: "Practical applications using LLMs, RAG and AI APIs.",
  },
  {
    title: "Cloud Infrastructure",
    description: "Deploying and operating applications using AWS.",
  },
  {
    title: "Developer Experience",
    description: "Clean APIs, maintainable architecture and reliable workflows.",
  },
];

export const socials = {
  github: "https://github.com/vinakodiyatar",
  linkedin: "www.linkedin.com/in/vina-kodiyatar",
  email: "vinakodiyatar556@gmail.com",
  resume: "https://docs.google.com/document/d/1W3l4mdHacHfP3kphhSXclUVzGcUihNCb/edit?usp=sharing&ouid=113247782817677347580&rtpof=true&sd=true",
  name: "Vina Kodiyatar",
};
