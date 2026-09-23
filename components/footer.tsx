"use client";

import { GithubIcon, LinkedinIcon, HashnodeIcon } from "./icons";
import { Mail, FileText, ArrowUp } from "lucide-react";
import { socials } from "@/data/skills";

export function Footer() {
  const year = new Date().getFullYear();

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="border-t border-[var(--border)] py-12">
      <div className="container-page flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-[var(--text-primary)]">{socials.name}</p>
          <p className="mt-0.5 text-xs text-[var(--text-tertiary)]">
            Backend &amp; Full-Stack Engineer • 2+ Years Production Experience
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-[var(--text-secondary)]">
          <a href="#about" className="text-xs hover:text-[var(--text-primary)] transition-colors">About</a>
          <a href="#experience" className="text-xs hover:text-[var(--text-primary)] transition-colors">Experience</a>
          <a href="#certificates" className="text-xs hover:text-[var(--text-primary)] transition-colors">Certificates</a>
          <a href="#projects" className="text-xs hover:text-[var(--text-primary)] transition-colors">Projects</a>
          <a href="#blogs" className="text-xs hover:text-[var(--text-primary)] transition-colors">Blogs</a>
          <a href="#contact" className="text-xs hover:text-[var(--text-primary)] transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4 text-[var(--text-secondary)]">
          <a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GithubIcon className="h-4 w-4 transition-colors hover:text-[var(--text-primary)]" />
          </a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedinIcon className="h-4 w-4 transition-colors hover:text-[var(--text-primary)]" />
          </a>
          <a href={socials.hashnode} target="_blank" rel="noreferrer" aria-label="Hashnode">
            <HashnodeIcon className="h-4 w-4 transition-colors hover:text-[var(--text-primary)]" />
          </a>
          <a href={`mailto:${socials.email}`} aria-label="Email">
            <Mail className="h-4 w-4 transition-colors hover:text-[var(--text-primary)]" />
          </a>
          <a href={socials.resume} target="_blank" rel="noreferrer" aria-label="Resume">
            <FileText className="h-4 w-4 transition-colors hover:text-[var(--text-primary)]" />
          </a>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
      <div className="container-page mt-6 border-t border-[var(--border)] pt-4 text-center">
        <p className="text-xs text-[var(--text-tertiary)]">
          © {year} {socials.name}. Built with curiosity, caffeine &amp; questionable amounts of debugging.
        </p>
      </div>
    </footer>
  );
}
