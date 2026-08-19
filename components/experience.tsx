import { Reveal } from "./reveal";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="border-t border-[var(--border)] py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl">
            Experience
          </h2>
        </Reveal>

        <div className="mt-12 space-y-10">
          {experience.map((entry, i) => (
            <Reveal key={`${entry.company}-${i}`} delay={i * 0.08}>
              <div className="grid gap-2 border-l border-[var(--border)] pl-6 sm:grid-cols-[220px_1fr] sm:gap-8">
                <div>
                  <p className="font-medium text-[var(--text-primary)]">{entry.role}</p>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">{entry.company}</p>
                  <p className="mt-2 font-mono text-xs text-[var(--text-tertiary)]">
                    {entry.dates}
                  </p>
                  <p className="mt-0.5 font-mono text-xs text-[var(--text-tertiary)]">
                    {entry.location}
                  </p>
                </div>
                <ul className="space-y-2.5">
                  {entry.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-sm leading-relaxed text-[var(--text-secondary)]"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--border-strong)]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
