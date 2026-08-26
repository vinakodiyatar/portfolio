"use client";

import { useState } from "react";
import { ArrowRight, CircleDot, Copy, Check, FileText, Zap } from "lucide-react";
import { GithubIcon, LinkedinIcon, HashnodeIcon } from "./icons";
import { SystemGraph } from "./system-graph";
import { Reveal } from "./reveal";
import { socials } from "@/data/skills";
import { experienceStats } from "@/data/experience";

export function Hero() {
  const [copied, setCopied] = useState(false);

  function handleCopyEmail() {
    navigator.clipboard.writeText(socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] grid-fade" />

      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-1 text-xs text-[var(--text-secondary)]">
                  <CircleDot size={11} className="text-emerald-400 animate-pulse" />
                  <span>Open to Full-Time &amp; Engineering Roles</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--accent)]/30 bg-[var(--accent-soft)] px-3 py-1 font-mono text-xs font-semibold text-[var(--accent-text)]">
                  <Zap size={12} />
                  2+ Years Production Experience
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <p className="mt-4 font-mono text-xs tracking-[0.18em] text-[var(--accent-text)]">
                BACKEND ARCHITECTURE • FULL-STACK • APPLIED AI
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-[3.35rem]">
                Engineering scalable backend systems &amp; intelligent AI products.
              </h1>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-5 max-w-xl text-balance text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
                I&apos;m a software engineer with <span className="font-semibold text-[var(--text-primary)]">2+ years of production experience</span> architecting high-throughput REST APIs, optimizing databases, and deploying cloud services on <span className="text-[var(--text-primary)]">AWS</span> using Node.js, Express, MongoDB, and Next.js — currently building practical <span className="text-[var(--text-primary)]">RAG &amp; Agentic AI</span> workflows.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-lg bg-[var(--text-primary)] px-4 py-2.5 text-sm font-medium text-[var(--bg)] transition-opacity hover:opacity-90 shadow-sm"
                >
                  View Projects
                  <ArrowRight size={15} />
                </a>

                <a
                  href="#experience"
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)]"
                >
                  2-Year Experience
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-3.5 py-2.5 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-emerald-400" />
                      <span className="text-xs text-emerald-400">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span className="text-xs">Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
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
                  href={socials.hashnode}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-[var(--text-primary)]"
                >
                  <HashnodeIcon className="h-4 w-4" />
                  Hashnode
                </a>

                <a
                  href={socials.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-[var(--text-primary)]"
                >
                  <FileText size={15} />
                  Resume
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="hidden justify-self-center lg:flex">
            <SystemGraph />
          </Reveal>
        </div>

        {/* 2-Year Experience & Impact Metrics Strip */}
        <Reveal delay={0.36}>
          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {experienceStats.map((stat) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 transition-all duration-300 hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)] sm:p-5"
              >
                <div className="font-mono text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl text-gradient">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-semibold text-[var(--text-primary)]">
                  {stat.label}
                </div>
                <div className="mt-0.5 text-[11px] text-[var(--text-tertiary)]">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
