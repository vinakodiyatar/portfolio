import { Reveal } from "./reveal";
import { skillGroups } from "@/data/skills";

export function TechStack() {
  return (
    <section id="stack" className="border-t border-[var(--border)] py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl">
            Tech Stack
          </h2>
          <p className="mt-3 max-w-xl text-[var(--text-secondary)]">
            Tools and technologies I use to design, build and operate
            production systems.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                <h3 className="font-mono text-xs tracking-[0.12em] text-[var(--text-tertiary)]">
                  {group.title.toUpperCase()}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-[var(--border)] bg-[var(--bg-elevated)] px-2.5 py-1 text-xs text-[var(--text-secondary)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
