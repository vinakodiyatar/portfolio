import { FileText, ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";
import { socials } from "@/data/skills";

export function ResumeCta() {
  return (
    <section className="border-t border-[var(--border)] py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] px-8 py-14 text-center sm:px-12">
            <h2 className="mx-auto max-w-2xl text-balance text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl">
              Looking for someone who can build reliable backend systems and
              modern AI-powered products?
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={socials.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--text-primary)] px-4 py-2.5 text-sm font-medium text-[var(--bg)] transition-opacity hover:opacity-90"
              >
                <FileText size={15} />
                View Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-4 py-2.5 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface)]"
              >
                Get In Touch
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
