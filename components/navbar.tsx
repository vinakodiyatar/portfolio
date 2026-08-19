"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { ThemeToggle } from "./theme-toggle";
import { socials } from "@/data/skills";

const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#ai", label: "AI" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-colors duration-300 ${
          scrolled
            ? "border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="container-page flex h-16 items-center justify-between">
          <Link
            href="/#top"
            className="font-mono text-sm font-medium tracking-tight text-[var(--text-primary)]"
          >
            {"</dev>"}
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              <GithubIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              <LinkedinIcon className="h-[18px] w-[18px]" />
            </a>
            <ThemeToggle />
            <a
              href={socials.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border)] px-3 py-1.5 text-sm text-[var(--text-primary)] transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface)]"
            >
              <FileText size={14} />
              Resume
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-primary)] md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </div>

      {open && (
        <div className="border-b border-[var(--border)] bg-[var(--bg)] px-6 pb-6 pt-2 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-4 border-t border-[var(--border)] pt-4">
            <a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="text-[var(--text-secondary)]">
              <GithubIcon className="h-5 w-5" />
            </a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="text-[var(--text-secondary)]">
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <ThemeToggle />
            <a
              href={socials.resume}
              target="_blank"
              rel="noreferrer"
              className="ml-auto inline-flex items-center gap-1.5 rounded-lg border border-[var(--border)] px-3 py-1.5 text-sm text-[var(--text-primary)]"
            >
              <FileText size={14} />
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
