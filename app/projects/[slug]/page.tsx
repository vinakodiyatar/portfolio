import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ArrowDown } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { GithubIcon } from "@/components/icons";
import { getProjectBySlug, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.description,
  };
}

const ARCHITECTURE_LAYERS = ["Frontend", "Next.js / React", "API", "Node.js", "Database / AWS / AI Services"];

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 sm:pt-40">
        <div className="container-page max-w-4xl">
          <Reveal>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              <ArrowLeft size={14} />
              All projects
            </Link>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="mt-8">
              <span className="rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-2.5 py-1 text-[11px] font-medium text-[var(--accent-text)]">
                {project.category}
              </span>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
                {project.name}
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)]">
                {project.description}
              </p>
            </div>
          </Reveal>

          {(project.links.github || project.links.liveUrl) && (
            <Reveal delay={0.1}>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-4 py-2.5 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface)]"
                  >
                    <GithubIcon className="h-4 w-4" />
                    View Code
                  </a>
                )}
                {project.links.liveUrl && (
                  <a
                    href={project.links.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-[var(--text-primary)] px-4 py-2.5 text-sm font-medium text-[var(--bg)] transition-opacity hover:opacity-90"
                  >
                    Live Demo
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </Reveal>
          )}

          <div className="mt-14 space-y-14">
            <Reveal>
              <section>
                <h2 className="text-sm font-mono tracking-[0.12em] text-[var(--text-tertiary)]">
                  OVERVIEW
                </h2>
                <p className="mt-4 leading-relaxed text-[var(--text-secondary)]">
                  {project.description}
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="text-sm font-mono tracking-[0.12em] text-[var(--text-tertiary)]">
                  PROBLEM
                </h2>
                <p className="mt-4 leading-relaxed text-[var(--text-secondary)]">
                  {project.problem}
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="text-sm font-mono tracking-[0.12em] text-[var(--text-tertiary)]">
                  SOLUTION
                </h2>
                <p className="mt-4 leading-relaxed text-[var(--text-secondary)]">
                  {project.solution}
                </p>
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {project.features.map((f) => (
                    <li
                      key={f}
                      className="flex gap-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2.5 text-sm text-[var(--text-secondary)]"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="text-sm font-mono tracking-[0.12em] text-[var(--text-tertiary)]">
                  ARCHITECTURE
                </h2>
                <div className="mt-6 flex flex-col items-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8">
                  {ARCHITECTURE_LAYERS.map((layer, i) => (
                    <div key={layer} className="flex flex-col items-center gap-2">
                      <div className="rounded-lg border border-[var(--border-strong)] bg-[var(--bg-elevated)] px-5 py-2.5 font-mono text-sm text-[var(--text-primary)]">
                        {layer}
                      </div>
                      {i < ARCHITECTURE_LAYERS.length - 1 && (
                        <ArrowDown size={14} className="text-[var(--text-tertiary)]" />
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="text-sm font-mono tracking-[0.12em] text-[var(--text-tertiary)]">
                  KEY ENGINEERING CHALLENGES
                </h2>
                <ul className="mt-6 space-y-3">
                  {project.challenges.map((c) => (
                    <li
                      key={c}
                      className="flex gap-3 text-sm leading-relaxed text-[var(--text-secondary)]"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--border-strong)]" />
                      {c}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="text-sm font-mono tracking-[0.12em] text-[var(--text-tertiary)]">
                  TECHNOLOGIES
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs text-[var(--text-secondary)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </section>
            </Reveal>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
