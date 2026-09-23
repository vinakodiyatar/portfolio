export type Certificate = {
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  verificationUrl?: string;
  category: string;
  skills: string[];
  description: string;
};

export const certificates: Certificate[] = [
  {
    title: "AWS SimuLearn – AI Practitioner Training Badge",
    issuer: "Amazon Web Services (AWS)",
    issueDate: "Sep 2026",
    category: "Cloud & Generative AI",
    verificationUrl: "https://www.credly.com/badges/0a8ebf26-22ed-4eb1-ae82-8b3e93ac8df7/linked_in_profile",
    skills: [
      "AWS",
      "AWS Cloud",
      "Generative AI",
      "Prompt Engineering",
      "Code Generation",
      "Machine Learning",
      "Model Optimization",
      "Model Tuning",
    ],
    description:
      "Earned an AWS Credly badge demonstrating proficiency in building generative AI solutions using AWS AI services. The training covered prompt engineering, code generation, chatbot development, content moderation, and model tuning for improved performance.",
  },
  {
    title: "Certificate of Completion: AI Fluency Framework & Foundations",
    issuer: "Anthropic",
    issueDate: "Aug 2026",
    category: "AI Engineering & Foundations",
    verificationUrl: "https://verify.skilljar.com/c/57ajyei89ce5",
    skills: [
      "AI Fluency Framework",
      "Claude & LLM Architecture",
      "Prompt Engineering",
      "AI Safety & Alignment",
      "Applied AI Workflows",
    ],
    description:
      "Demonstrates foundational and practical mastery in the AI Fluency Framework, core LLM concepts, prompt design methodologies, and responsible deployment of intelligent AI applications.",
  },
];
