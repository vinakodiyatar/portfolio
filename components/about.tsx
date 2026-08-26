import { Sparkles, Layers, CheckCircle } from "lucide-react";
import { Reveal } from "./reveal";
import { currentlyExploring } from "@/data/skills";

const engineeringPillars = [
  "Production REST APIs & Microservices with Node.js/Express",
  "High-Throughput Database Design & Query Optimization (MongoDB)",
  "Cloud Deployments & Infrastructure on AWS (EC2, Lambda, S3, API Gateway)",
  "Third-Party API Integrations (Payments, AI, Webhooks, CRMs)",
  "Full-Stack Development with React, Next.js & TypeScript",
  "Modern Applied AI Workflows (RAG, Vector DBs, Agent Tool Calling)",
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_380px] lg:gap-16">
        <div>
          <Reveal>
            <p className="font-mono text-xs tracking-[0.18em] text-[var(--accent-text)]">
              BACKGROUND & PHILOSOPHY
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl">
              About Me
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-[1.05rem]">
              <p>
                Hello, I&apos;m <span className="font-medium text-[var(--text-primary)]">Vina Kodiyatar</span> — a Backend &amp; Full-Stack Software Engineer with <span className="font-semibold text-[var(--text-primary)]">over 2 years of hands-on experience</span> turning business requirements into resilient, production-ready systems.
              </p>

              <p>
                Throughout my 2 years in production engineering, I have focused heavily on backend architecture, API resilience, database performance, and AWS cloud deployments. I take pride in engineering scalable RESTful microservices, optimizing complex aggregation pipelines that boosted system throughput by <span className="font-medium text-[var(--text-primary)]">40%</span>, and securely integrating over <span className="font-medium text-[var(--text-primary)]">10+ third-party services</span> across payment gateways, e-commerce webhooks, and AI platforms.
              </p>

              <p>
                Beyond backend systems, I actively build full-stack interfaces using <span className="text-[var(--text-primary)]">React</span>, <span className="text-[var(--text-primary)]">Next.js</span>, and <span className="text-[var(--text-primary)]">TypeScript</span>. More recently, I have been architecting practical AI applications — leveraging <span className="text-[var(--text-primary)]">LLM APIs</span>, <span className="text-[var(--text-primary)]">RAG systems</span>, and <span className="text-[var(--text-primary)]">Agentic tool calling</span> to build production-grade, value-driven software.
              </p>

              <p>
                Whether designing database indexing strategies, reducing API latency, or containerizing services for cloud deployments, my focus is always on engineering clean, maintainable, and battle-tested code.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-8">
              <h3 className="text-xs font-mono tracking-[0.14em] text-[var(--text-tertiary)] uppercase">
                Core Engineering Capabilities
              </h3>
              <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {engineeringPillars.map((pillar) => (
                  <div
                    key={pillar}
                    className="flex items-start gap-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3 text-xs leading-relaxed text-[var(--text-secondary)]"
                  >
                    <CheckCircle size={14} className="mt-0.5 shrink-0 text-[var(--accent)]" />
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="space-y-6">
          <Reveal delay={0.16}>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <div className="flex items-center gap-2 text-sm font-medium text-[var(--text-primary)]">
                <Layers size={16} className="text-[var(--accent)]" />
                2-Year Engineering Highlights
              </div>

              <div className="mt-4 space-y-3 font-mono text-xs">
                <div className="flex justify-between border-b border-[var(--border)] pb-2 text-[var(--text-secondary)]">
                  <span>Experience Span</span>
                  <span className="font-semibold text-[var(--text-primary)]">2+ Years</span>
                </div>
                <div className="flex justify-between border-b border-[var(--border)] pb-2 text-[var(--text-secondary)]">
                  <span>Primary Focus</span>
                  <span className="font-semibold text-[var(--text-primary)]">Backend &amp; Cloud</span>
                </div>
                <div className="flex justify-between border-b border-[var(--border)] pb-2 text-[var(--text-secondary)]">
                  <span>Cloud Stack</span>
                  <span className="font-semibold text-[var(--text-primary)]">AWS (EC2, Lambda, S3)</span>
                </div>
                <div className="flex justify-between text-[var(--text-secondary)]">
                  <span>Current Direction</span>
                  <span className="font-semibold text-[var(--accent-text)]">Applied AI &amp; Agents</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <div className="flex items-center gap-2 text-sm font-medium text-[var(--text-primary)]">
                <Sparkles size={16} className="text-[var(--accent)]" />
                Currently exploring
              </div>

              <ul className="mt-4 space-y-3">
                {currentlyExploring.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-[var(--text-secondary)]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
