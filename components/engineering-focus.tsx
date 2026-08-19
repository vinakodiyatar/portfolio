import { Server, Bot, Cloud, Code2 } from "lucide-react";
import { Reveal } from "./reveal";

const icons = [Server, Bot, Cloud, Code2];

import { buildingBlocks } from "@/data/skills";

export function EngineeringFocus() {
  return (
    <section className="border-t border-[var(--border)] py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl">
            What I Like Building
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-4">
          {buildingBlocks.map((block, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={block.title} delay={i * 0.06} className="h-full">
                <div className="h-full bg-[var(--surface)] p-6">
                  <Icon size={18} className="text-[var(--accent)]" />
                  <h3 className="mt-4 text-sm font-medium text-[var(--text-primary)]">
                    {block.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {block.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
