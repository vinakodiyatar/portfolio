import { Sparkles } from "lucide-react";
import { Reveal } from "./reveal";
import { currentlyExploring } from "@/data/skills";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_360px] lg:gap-16">
        <div>
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl">
              About Me
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-[1.05rem]">
              <p>
                I&apos;m a backend-focused developer working across the MERN
                stack and Next.js, with a strong focus on Node.js APIs,
                database design and production backend architecture. Most of
                my work centers on building and operating systems that hold
                up in production &mdash; clear API boundaries, sensible data
                models, and infrastructure on AWS that doesn&apos;t fall over.
              </p>
              <p>
                Alongside that, I&apos;m actively building toward AI
                engineering: working with LLM APIs, retrieval-augmented
                generation, and early agentic AI patterns using tools like
                MCP. I approach AI features the same way I approach backend
                systems &mdash; as something to design, test, and reason
                about, not just plug in.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <div className="flex items-center gap-2 text-sm font-medium text-[var(--text-primary)]">
              <Sparkles size={15} className="text-[var(--accent)]" />
              Currently exploring
            </div>
            <ul className="mt-4 space-y-3">
              {currentlyExploring.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-[var(--text-secondary)]"
                >
                  <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
