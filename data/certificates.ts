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
    title: "Certificate of Completion: AI Fluency Framework & Foundations",
    issuer: "Anthropic",
    issueDate: "Aug 2026",
    category: "AI Engineering & Foundations",
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
