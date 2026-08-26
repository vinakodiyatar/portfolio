import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";
import { HashnodeIcon } from "./icons";
import { socials } from "@/data/skills";

export function Blogs() {
  return (
    <section id="blogs" className="border-t border-[var(--border)] py-14 sm:py-16">
      <div className="container-page">
        <Reveal>
          <div className="group relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)] sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--accent-text)] group-hover:scale-105 transition-transform">
                <HashnodeIcon className="h-6 w-6" />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--accent-text)]">
                    Hashnode
                  </span>
                  <span className="text-xs text-[var(--text-tertiary)] font-mono">
                    Technical Writing &amp; Insights
                  </span>
                </div>

                <h3 className="mt-1.5 text-lg font-semibold tracking-tight text-[var(--text-primary)] sm:text-xl">
                  Engineering Blog on Hashnode
                </h3>

                <p className="mt-1 max-w-xl text-sm leading-relaxed text-[var(--text-secondary)]">
                  I write technical articles and practical deep dives on scalable backend architecture, database optimization, AWS infrastructure, and applied AI systems.
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {["Backend Architecture", "Database Optimization", "AWS Cloud", "RAG & AI"].map((topic) => (
                    <span
                      key={topic}
                      className="rounded-md border border-[var(--border)] bg-[var(--bg-elevated)] px-2 py-0.5 text-[11px] text-[var(--text-tertiary)]"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <a
              href={socials.hashnode}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[var(--text-primary)] px-4 py-2.5 text-sm font-medium text-[var(--bg)] transition-opacity hover:opacity-90 self-start md:self-center"
            >
              <span>Read on Hashnode</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


