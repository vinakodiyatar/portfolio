export type ProjectLink = {
  github?: string;
  liveUrl?: string;
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  featured: boolean;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  challenges: string[];
  technologies: string[];
  flow?: string[];
  links: ProjectLink;
};

export const projects: Project[] = [
  {
    slug: "prompt2print",
    name: "Prompt2Print",
    category: "AI Product",
    featured: true,
    description:
      "An AI-powered image generation platform that turns user prompts into printable designs.",
    problem:
      "Turning a text idea into a physical, printable product usually means stitching together a design tool, an image generator, and a print fulfillment service by hand. There was no single flow that took a prompt all the way to a printable product.",
    solution:
      "Built an end-to-end pipeline that takes a user prompt, generates an image through an AI image-generation API, processes and prepares the output for print, and pushes the final asset into Printful for on-demand production. A credit system controls usage per user, and the backend is deployed on AWS for reliability.",
    features: [
      "AI image generation from text prompts",
      "Credit-based usage system",
      "Printful integration for on-demand printing",
      "Image processing and print-ready preparation",
      "AWS-backed infrastructure",
      "Backend APIs for generation, credits, and orders",
    ],
    challenges: [
      "Coordinating an async generation pipeline (prompt → AI → image processing → Printful) without blocking the user",
      "Designing a credit system that fairly tracks usage across generations",
      "Handling image processing for print-quality output",
      "Integrating a third-party fulfillment API (Printful) into the order flow",
    ],
    technologies: [
      "Node.js",
      "Next.js",
      "React",
      "MongoDB",
      "AWS",
      "AI image generation APIs",
      "Printful API",
    ],
    flow: ["User Prompt", "AI Generation", "Image Processing", "Product Creation", "Printful"],
    links: {},
  },
  {
    slug: "atsflow",
    name: "ATSFlow",
    category: "Backend / SaaS",
    featured: true,
    description:
      "An applicant tracking and interview scheduling platform designed around scalable backend workflows.",
    problem:
      "Coordinating interviews between employers and candidates involves job postings, candidate pipelines, availability windows, and timezone-sensitive scheduling — a workflow that gets messy fast without a system built specifically around it.",
    solution:
      "Designed a backend-first ATS around clear resource boundaries: jobs, candidates, interviews, and availability. Built REST APIs to manage each stage of the pipeline, with dedicated logic for timezone-aware availability and calendar booking, plus a credit system for platform usage.",
    features: [
      "Job posting and candidate pipeline management",
      "Interview scheduling workflows",
      "Availability management across timezones",
      "Calendar-based booking",
      "Credit system for platform usage",
      "REST API architecture",
    ],
    challenges: [
      "Modeling availability and bookings correctly across timezones",
      "Designing REST APIs that stay clean as the workflow (job → candidate → interview) grows",
      "Preventing double-booking in the scheduling logic",
      "Structuring a credit system that plugs cleanly into existing workflows",
    ],
    technologies: ["Node.js", "Next.js", "React", "MongoDB", "AWS", "REST APIs"],
    flow: ["Employer", "Job", "Candidate", "Interview", "Availability", "Booking"],
    links: {},
  },
  {
    slug: "rag-knowledge-assistant",
    name: "RAG Knowledge Assistant",
    category: "AI Engineering",
    featured: true,
    description:
      "A retrieval-augmented generation project exploring how to ground LLM answers in a specific knowledge base instead of relying on the model alone.",
    problem:
      "LLMs answer confidently even when they don't have the right context. For answers to be useful and specific, the model needs to be grounded in real, retrievable source material rather than general knowledge.",
    solution:
      "Built a RAG pipeline: source content is chunked and embedded, stored in Supabase with vector search enabled, and relevant chunks are retrieved at query time and passed into the LLM as context. The prompt layer was iterated on to keep responses grounded in the retrieved content rather than the model's own assumptions.",
    features: [
      "Document chunking and embedding pipeline",
      "Vector search over stored embeddings in Supabase",
      "Context retrieval at query time",
      "LLM integration for grounded responses",
      "Prompt engineering to reduce hallucination",
    ],
    challenges: [
      "Choosing sensible chunking strategies for retrieval quality",
      "Setting up and querying vector search in Supabase",
      "Prompt engineering to keep the model grounded in retrieved context",
    ],
    technologies: ["Supabase", "Vector Search", "LLM APIs", "Node.js", "Prompt Engineering"],
    links: {},
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
