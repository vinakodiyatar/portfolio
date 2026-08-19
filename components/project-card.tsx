import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons";
import type { Project } from "@/data/projects";

function FlowStrip({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-[11px] text-[var(--text-tertiary)]">
      {steps.map((step, i) => (
        <span key={step} className="flex items-center gap-2">
          <span className="rounded-md border border-[var(--border)] bg-[var(--bg-elevated)] px-2 py-1">
            {step}
          </span>
          {i < steps.length - 1 && <ArrowRight size={11} />}
        </span>
      ))}
    </div>
  );
}

export function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)] sm:p-8"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-2.5 py-1 text-[11px] font-medium text-[var(--accent-text)]">
            {project.category}
          </span>
          <h3
            className={`mt-4 font-semibold tracking-tight text-[var(--text-primary)] ${
              large ? "text-2xl sm:text-3xl" : "text-xl"
            }`}
          >
            {project.name}
          </h3>
        </div>
        <ArrowUpRight
          size={18}
          className="mt-1 shrink-0 text-[var(--text-tertiary)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--text-primary)]"
        />
      </div>

      <p className={`mt-3 text-[var(--text-secondary)] ${large ? "max-w-xl text-base" : "text-sm"}`}>
        {project.description}
      </p>

      {large && project.flow && (
        <div className="mt-6">
          <FlowStrip steps={project.flow} />
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.slice(0, large ? project.technologies.length : 4).map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-[var(--border)] px-2 py-1 text-[11px] text-[var(--text-tertiary)]"
          >
            {tech}
          </span>
        ))}
      </div>

      {(project.links.github || project.links.liveUrl) && (
        <div className="mt-6 flex items-center gap-4 text-xs text-[var(--text-secondary)]">
          {project.links.github && (
            <span className="inline-flex items-center gap-1.5">
              <GithubIcon className="h-3.5 w-3.5" />
              Code
            </span>
          )}
          {project.links.liveUrl && (
            <span className="inline-flex items-center gap-1.5">
              <ArrowUpRight className="h-3.5 w-3.5" />
              Live demo
            </span>
          )}
        </div>
      )}
    </Link>
  );
}
