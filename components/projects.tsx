import { Reveal } from "./reveal";
import { ProjectCard } from "./project-card";
import { featuredProjects } from "@/data/projects";

export function Projects() {
  const [first, ...rest] = featuredProjects;

  return (
    <section id="projects" className="border-t border-[var(--border)] py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl">
            Selected Work
          </h2>
          <p className="mt-3 max-w-xl text-[var(--text-secondary)]">
            Real products, backend systems and AI-powered applications I&apos;ve
            built.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6">
          {first && (
            <Reveal>
              <ProjectCard project={first} large />
            </Reveal>
          )}
          <div className="grid gap-6 sm:grid-cols-2">
            {rest.map((project, i) => (
              <Reveal key={project.slug} delay={(i + 1) * 0.08}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
