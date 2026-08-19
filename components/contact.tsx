"use client";

import { useState, type FormEvent } from "react";
import { Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { Reveal } from "./reveal";
import { socials } from "@/data/skills";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name || "website visitor"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${socials.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="border-t border-[var(--border)] py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl">
            Let&apos;s Build Something
          </h2>
          <p className="mt-4 max-w-md text-[var(--text-secondary)]">
            Interested in working together, discussing a project, or simply
            connecting? I&apos;d love to hear from you.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={`mailto:${socials.email}`}
              className="flex items-center gap-3 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              <Mail size={16} />
              {socials.email}
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs text-[var(--text-tertiary)]">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] outline-none transition-colors focus:border-[var(--accent)]"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs text-[var(--text-tertiary)]">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] outline-none transition-colors focus:border-[var(--accent)]"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs text-[var(--text-tertiary)]">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full resize-none rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] outline-none transition-colors focus:border-[var(--accent)]"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--text-primary)] px-4 py-2.5 text-sm font-medium text-[var(--bg)] transition-opacity hover:opacity-90"
            >
              Send Message
              <Send size={14} />
            </button>
            <p className="text-xs text-[var(--text-tertiary)]">
              Opens your email client with this message pre-filled.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
