import { ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";
import { aiJourney } from "@/data/skills";

export function AiJourney() {
  return (
    <section id="ai" className="border-t border-[var(--border)] py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.18em] text-[var(--accent-text)]">
            AI ENGINEERING
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl">
            Currently Building Toward AI Engineering
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">
            I&apos;m actively learning and building in this space &mdash; not
            presenting years of professional AI experience, but a deliberate,
            hands-on progression from backend engineering into applied AI.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap items-center gap-3">
            {aiJourney.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <div
                  className={`rounded-xl border px-4 py-2.5 text-sm ${
                    i === aiJourney.length - 1
                      ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent-text)]"
                      : "border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)]"
                  }`}
                >
                  {step}
                </div>
                {i < aiJourney.length - 1 && (
                  <ArrowRight size={14} className="text-[var(--text-tertiary)]" />
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-10 flex flex-wrap gap-2">
            {["LLM Applications", "RAG", "AI Agents", "Tool Calling", "MCP", "AI Automation"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-md border border-[var(--border)] bg-[var(--bg-elevated)] px-3 py-1.5 text-xs text-[var(--text-secondary)]"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
