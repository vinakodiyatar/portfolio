import { GithubIcon, LinkedinIcon } from "./icons";
import { Mail, FileText } from "lucide-react";
import { socials } from "@/data/skills";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] py-10">
      <div className="container-page flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-[var(--text-primary)]">{socials.name}</p>
          <p className="mt-0.5 text-xs text-[var(--text-tertiary)]">
            Backend / Full-Stack Engineer
          </p>
        </div>

        <div className="flex items-center gap-5 text-[var(--text-secondary)]">
          <a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GithubIcon className="h-4 w-4 transition-colors hover:text-[var(--text-primary)]" />
          </a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedinIcon className="h-4 w-4 transition-colors hover:text-[var(--text-primary)]" />
          </a>
          <a href={`mailto:${socials.email}`} aria-label="Email">
            <Mail className="h-4 w-4 transition-colors hover:text-[var(--text-primary)]" />
          </a>
          <a href={socials.resume} target="_blank" rel="noreferrer" aria-label="Resume">
            <FileText className="h-4 w-4 transition-colors hover:text-[var(--text-primary)]" />
          </a>
        </div>

        <p className="text-xs text-[var(--text-tertiary)]">
          © {year} {socials.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
