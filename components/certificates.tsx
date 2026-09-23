import { CheckCircle2, ExternalLink, ShieldCheck } from "lucide-react";
import { Reveal } from "./reveal";
import { AnthropicIcon, AwsIcon } from "./icons";
import { certificates } from "@/data/certificates";

function IssuerIcon({ issuer }: { issuer: string }) {
  if (issuer.includes("Anthropic")) {
    return <AnthropicIcon className="h-7 w-7" />;
  }
  if (issuer.includes("AWS") || issuer.includes("Amazon")) {
    return <AwsIcon className="h-7 w-7" />;
  }
  return <ShieldCheck className="h-7 w-7 text-[var(--accent)]" />;
}

export function Certificates() {
  if (!certificates.length) return null;

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
                Verified professional credentials and foundational frameworks in modern AI engineering &amp; cloud systems.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-1.5 text-xs text-[var(--text-secondary)] self-start md:self-auto">
              <ShieldCheck size={14} className="text-[var(--accent)]" />
              <span>Verified Credentials</span>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {certificates.map((cert, index) => (
            <Reveal key={cert.title} delay={index * 0.1}>
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)] sm:p-8">
                <div>
                  <div className="flex items-start gap-4">
                    {/* Issuer Logo Badge */}
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--text-primary)] shadow-sm group-hover:scale-105 transition-transform">
                      <IssuerIcon issuer={cert.issuer} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--accent-text)]">
                          {cert.category}
                        </span>

                        {cert.verificationUrl && cert.verificationUrl !== "#" && (
                          <a
                            href={cert.verificationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 font-mono text-xs text-[var(--accent-text)] hover:underline"
                          >
                            <span>Verify</span>
                            <ExternalLink size={12} />
                          </a>
                        )}
                      </div>

                      <h3 className="mt-2 text-lg font-semibold tracking-tight text-[var(--text-primary)] sm:text-xl group-hover:text-[var(--accent-text)] transition-colors">
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

                  <p className="mt-5 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-[var(--border)] pt-5">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-tertiary)] mb-2.5">
                    Skills &amp; Frameworks Covered
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--bg-elevated)] px-2.5 py-1 text-xs text-[var(--text-secondary)]"
                      >
                        <CheckCircle2 size={11} className="text-[var(--accent)] shrink-0" />
                        <span>{skill}</span>
                      </span>
                    ))}
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
