import { GithubIcon } from "./icons";
import { Reveal } from "./reveal";
import { ArrowUpRight } from "lucide-react";
import { socials } from "@/data/skills";

export function GithubSection() {
  return (
    <section className="border-t border-[var(--border)] py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 sm:flex-row sm:items-center sm:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)]">
                <GithubIcon className="h-5 w-5 text-[var(--text-primary)]" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                  Open Source &amp; GitHub
                </h2>
                <p className="mt-1.5 max-w-md text-sm text-[var(--text-secondary)]">
                  Code, experiments and the projects featured on this site
                  live on my GitHub profile.
                </p>
              </div>
            </div>
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-[var(--border)] px-4 py-2.5 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)]"
            >
              View Profile
              <ArrowUpRight size={14} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
