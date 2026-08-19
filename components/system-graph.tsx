"use client";

import { motion } from "motion/react";

type Node = { id: string; x: number; y: number; label: string; kind: "core" | "service" | "ai" };

const nodes: Node[] = [
  { id: "api", x: 200, y: 160, label: "API", kind: "core" },
  { id: "db", x: 70, y: 90, label: "DB", kind: "service" },
  { id: "cache", x: 70, y: 230, label: "Cache", kind: "service" },
  { id: "queue", x: 200, y: 40, label: "Queue", kind: "service" },
  { id: "aws", x: 330, y: 90, label: "AWS", kind: "service" },
  { id: "worker", x: 330, y: 230, label: "Worker", kind: "service" },
  { id: "llm", x: 200, y: 300, label: "LLM", kind: "ai" },
  { id: "agent", x: 200, y: 350, label: "Agent", kind: "ai" },
];

const edges: [string, string][] = [
  ["db", "api"],
  ["cache", "api"],
  ["queue", "api"],
  ["api", "aws"],
  ["api", "worker"],
  ["api", "llm"],
  ["llm", "agent"],
];

const nodeById = Object.fromEntries(nodes.map((n) => [n.id, n]));

export function SystemGraph() {
  return (
    <svg
      viewBox="0 0 400 380"
      className="h-auto w-full max-w-[380px]"
      role="img"
      aria-label="Abstract diagram of a backend system connecting to AI services"
    >
      <defs>
        <linearGradient id="edgeGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--border-strong)" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.55" />
        </linearGradient>
      </defs>

      {edges.map(([from, to], i) => {
        const a = nodeById[from];
        const b = nodeById[to];
        return (
          <motion.line
            key={`${from}-${to}`}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke="url(#edgeGradient)"
            strokeWidth={1.25}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.15 * i, ease: "easeInOut" }}
          />
        );
      })}

      {nodes.map((n, i) => {
        const isAi = n.kind === "ai";
        const isCore = n.kind === "core";
        const r = isCore ? 20 : isAi ? 15 : 13;
        return (
          <g key={n.id}>
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={r}
              fill={isAi ? "var(--accent-soft)" : "var(--surface)"}
              stroke={isCore || isAi ? "var(--accent)" : "var(--border-strong)"}
              strokeWidth={1.25}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.08 * i + 0.3 }}
            />
            {isAi && (
              <motion.circle
                cx={n.x}
                cy={n.y}
                r={r}
                fill="none"
                stroke="var(--accent)"
                strokeWidth={1}
                initial={{ opacity: 0.5, scale: 1 }}
                animate={{ opacity: 0, scale: 1.6 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.3 * i,
                  ease: "easeOut",
                }}
              />
            )}
            <text
              x={n.x}
              y={n.y + 1}
              textAnchor="middle"
              dominantBaseline="middle"
              className="select-none"
              fontFamily="var(--font-geist-mono)"
              fontSize={isCore ? 10 : 9}
              fill="var(--text-secondary)"
            >
              {n.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
