import { ArrowRight, CircleDot } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { SystemGraph } from "./system-graph";
import { Reveal } from "./reveal";
import { socials } from "@/data/skills";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] grid-fade" />

      <div className="container-page grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <p className="font-mono text-xs tracking-[0.18em] text-[var(--accent-text)]">
              BACKEND • FULL-STACK • AI ENGINEERING
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-[3.4rem]">
              Building scalable web systems and AI-powered products.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              I&apos;m a backend-focused software engineer specializing in Node.js,
              Next.js, AWS and modern AI applications. I build reliable APIs,
              production systems and intelligent products.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--text-primary)] px-4 py-2.5 text-sm font-medium text-[var(--bg)] transition-opacity hover:opacity-90"
              >
                View Projects
                <ArrowRight size={15} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-4 py-2.5 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface)]"
              >
                Let&apos;s Connect
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[var(--text-secondary)]">
              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-[var(--text-primary)]"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-[var(--text-primary)]"
              >
                <LinkedinIcon className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={socials.resume}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-[var(--text-primary)]"
              >
                Resume
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-1.5 text-xs text-[var(--text-secondary)]">
              <CircleDot size={12} className="text-[var(--accent)]" />
              Open to opportunities
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="hidden justify-self-center lg:flex">
          <SystemGraph />
        </Reveal>
      </div>
    </section>
  );
}
