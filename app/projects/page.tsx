import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Backend systems and AI-powered products — a look at what I've built with Node.js, Next.js, AWS and modern AI tooling.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 sm:pt-40">
        <div className="container-page">
          <Reveal>
            <h1 className="text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Projects
            </h1>
            <p className="mt-3 max-w-xl text-[var(--text-secondary)]">
              Real products, backend systems and AI-powered applications
              I&apos;ve built.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.06}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
