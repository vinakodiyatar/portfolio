export type ExperienceEntry = {
  company: string;
  role: string;
  dates: string;
  location: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Potenz Technology Private Limited",
    role: "Backend Developer",
    dates: "Aug 2024 — Present",
    location: "Ahmedabad, India",
    bullets: [
      "Designed and developed scalable REST APIs using Node.js, Express.js, and MongoDB for production applications, focusing on clean architecture, maintainability, and reliable business logic.",
      "Optimized database queries, aggregation pipelines, and API workflows, improving application performance by up to 40% while handling complex data and high-volume operations.",
      "Deployed and managed backend services on AWS using EC2, Lambda, API Gateway, CloudFront, Route 53, CloudWatch, and S3, with Docker and CI/CD for reliable production deployments.",
      "Integrated 10+ third-party APIs and services including payment, e-commerce, AI, communication, and business platforms, building secure and fault-tolerant integration workflows.",
    ],
  },
];
