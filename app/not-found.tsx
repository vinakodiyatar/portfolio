import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-xs tracking-[0.18em] text-[var(--accent-text)]">404</p>
      <h1 className="mt-4 text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl">
        Looks like this route doesn&apos;t exist.
      </h1>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-4 py-2.5 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface)]"
      >
        <ArrowLeft size={14} />
        Back Home
      </Link>
    </main>
  );
}
