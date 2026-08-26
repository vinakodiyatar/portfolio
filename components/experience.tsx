import { Briefcase, Calendar, MapPin, Sparkles, TrendingUp } from "lucide-react";
import { Reveal } from "./reveal";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="border-t border-[var(--border)] py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="font-mono text-xs tracking-[0.18em] text-[var(--accent-text)]">
                CAREER TIMELINE &amp; IMPACT
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl">
                2+ Years of Engineering Experience
              </h2>
              <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">
                A proven progression of architecting scalable backend APIs, optimizing database performance,
                and managing cloud infrastructure in production environments.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-1.5 text-xs text-[var(--text-secondary)] self-start md:self-auto">
              <TrendingUp size={14} className="text-[var(--accent)]" />
              <span>Full-Stack &amp; Backend Track Record</span>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 space-y-12">
          {experience.map((entry, i) => (
            <Reveal key={`${entry.company}-${i}`} delay={i * 0.08}>
              <div className="relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:border-[var(--border-strong)] sm:p-8">
                <div className="grid gap-6 lg:grid-cols-[280px_1fr] lg:gap-10">
                  {/* Left Column: Role & Meta */}
                  <div className="space-y-3 lg:border-r lg:border-[var(--border)] lg:pr-8">
                    <div className="flex items-center gap-2">
                      <span className="rounded-md border border-[var(--border)] bg-[var(--accent-soft)] px-2.5 py-0.5 font-mono text-[11px] font-medium text-[var(--accent-text)]">
                        {entry.type}
                      </span>
                      {entry.duration && (
                        <span className="font-mono text-[11px] text-[var(--text-tertiary)]">
                          {entry.duration}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-semibold tracking-tight text-[var(--text-primary)]">
                      {entry.role}
                    </h3>

                    <div className="flex items-center gap-1.5 text-sm font-medium text-[var(--text-secondary)]">
                      <Briefcase size={14} className="text-[var(--text-tertiary)]" />
                      <span>{entry.company}</span>
                    </div>

                    <div className="space-y-1 pt-1 font-mono text-xs text-[var(--text-tertiary)]">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={13} />
                        <span>{entry.dates}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={13} />
                        <span>{entry.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Highlights, Bullets, Skills */}
                  <div className="space-y-5">
                    {/* Impact Highlights */}
                    {entry.highlights && entry.highlights.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {entry.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="inline-flex items-center gap-1 rounded-md border border-[var(--border-strong)] bg-[var(--bg-elevated)] px-2.5 py-1 text-xs font-medium text-[var(--text-primary)]"
                          >
                            <Sparkles size={11} className="text-[var(--accent)]" />
                            {highlight}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Bullet Points */}
                    <ul className="space-y-3">
                      {entry.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-sm leading-relaxed text-[var(--text-secondary)]"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skills Used */}
                    {entry.skills && entry.skills.length > 0 && (
                      <div className="border-t border-[var(--border)] pt-4">
                        <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-tertiary)] mb-2">
                          Technologies &amp; Tools Used
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {entry.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-md border border-[var(--border)] bg-[var(--bg-elevated)] px-2 py-0.5 text-[11px] text-[var(--text-secondary)]"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
