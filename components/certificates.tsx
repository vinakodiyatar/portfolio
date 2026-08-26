import { CheckCircle2, ShieldCheck } from "lucide-react";
import { Reveal } from "./reveal";
import { AnthropicIcon } from "./icons";
import { certificates } from "@/data/certificates";

export function Certificates() {
  const cert = certificates[0];

  if (!cert) return null;

  return (
    <section id="certificates" className="border-t border-[var(--border)] py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="font-mono text-xs tracking-[0.18em] text-[var(--accent-text)]">
                LICENSES &amp; CERTIFICATIONS
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl">
                Licenses &amp; Certifications
              </h2>
              <p className="mt-3 max-w-xl text-[var(--text-secondary)]">
                Verified professional credentials and foundational frameworks in modern AI engineering.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-1.5 text-xs text-[var(--text-secondary)] self-start md:self-auto">
              <ShieldCheck size={14} className="text-[var(--accent)]" />
              <span>Verified Credential</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 mx-auto max-w-3xl">
            <div className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 transition-all duration-300 hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)] sm:p-9">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                <div className="flex items-start gap-4">
                  {/* Anthropic Logo Badge */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--text-primary)] shadow-sm group-hover:scale-105 transition-transform">
                    <AnthropicIcon className="h-7 w-7" />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--accent-text)]">
                        {cert.category}
                      </span>
                    </div>

                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-2xl group-hover:text-[var(--accent-text)] transition-colors">
                      {cert.title}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-[var(--text-secondary)]">
                      {cert.issuer}
                    </p>

                    <p className="mt-1 font-mono text-xs text-[var(--text-tertiary)]">
                      Issued {cert.issueDate}
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                {cert.description}
              </p>

              <div className="mt-6 border-t border-[var(--border)] pt-5">
                <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-tertiary)] mb-2.5">
                  Skills &amp; Frameworks Covered
                </p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--bg-elevated)] px-2.5 py-1 text-xs text-[var(--text-secondary)]"
                    >
                      <CheckCircle2 size={11} className="text-[var(--accent)]" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
