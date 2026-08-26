export type ExperienceEntry = {
  company: string;
  role: string;
  dates: string;
  duration: string;
  location: string;
  type: string;
  highlights: string[];
  skills: string[];
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Potenz Technology Private Limited",
    role: "Backend Developer",
    dates: "Aug 2024 — Present",
    duration: "Current",
    location: "Ahmedabad, India",
    type: "Full-Time",
    highlights: [
      "40% Query Optimization",
      "10+ Third-Party Integrations",
      "AWS Cloud Deployments",
      "High-Concurrency Microservices",
    ],
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS (EC2, Lambda, S3, API Gateway)",
      "Docker",
      "CI/CD",
      "REST APIs",
      "Redis",
    ],
    bullets: [
      "Architected and deployed high-performance REST APIs and microservices using Node.js, Express.js, and MongoDB, ensuring robust data validation, error handling, and high system availability.",
      "Optimized MongoDB indexing strategies and aggregation pipelines, reducing database response times and boosting overall API performance by up to 40% under high-volume workloads.",
      "Engineered automated cloud infrastructure on AWS using EC2, Lambda, API Gateway, CloudFront, Route 53, CloudWatch, and S3 with automated CI/CD pipelines and Docker containerization.",
      "Seamlessly integrated 10+ mission-critical external APIs including payment gateways, e-commerce webhooks, AI services, and real-time messaging protocols with resilient error recovery and retry policies.",
      "Collaborated with cross-functional frontend and DevOps teams to deliver secure RBAC authorization, token-based authentication, and structured logging mechanisms.",
    ],
  },
];

export const experienceStats = [
  {
    value: "2+",
    label: "Years Experience",
    sublabel: "Production Backend & Full-Stack",
  },
  {
    value: "10+",
    label: "Third-Party APIs",
    sublabel: "Payment, AI, & Webhooks",
  },
  {
    value: "40%",
    label: "Performance Gain",
    sublabel: "Optimized Query & Pipeline",
  },
  {
    value: "AWS",
    label: "Cloud Production",
    sublabel: "EC2, Lambda, S3, Serverless",
  },
];
