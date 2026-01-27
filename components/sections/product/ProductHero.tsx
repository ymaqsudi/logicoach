"use client";

import { motion, useReducedMotion } from "framer-motion";

export function ProductHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-white">
      {/* subtle backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,var(--soft-50)_90%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-28 grid gap-16 md:grid-cols-12 items-center">
        {/* LEFT: Copy */}
        <div className="md:col-span-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-600">
            Product
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-950">
            Practice.
            <br />
            Feedback.
            <br />
            <span className="text-[var(--brand-700)]">
              Measurable improvement.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-xl leading-relaxed text-slate-600">
            LogiCoach is a performance system for developing clear, structured
            thinking when the stakes are real — and proving readiness before it
            matters.
          </p>
        </div>

        {/* RIGHT: System Spine */}
        <div className="md:col-span-6 flex justify-center">
          <SystemSpine />
        </div>
      </div>
    </section>
  );
}

function SystemSpine() {
  const reduce = useReducedMotion();

  const steps = [
    "Structured Practice",
    "AI Analysis",
    "Coach Feedback",
    "Repetition",
    "Readiness Signals",
  ];

  return (
    <svg viewBox="0 0 260 420" className="h-[420px] w-[260px]" aria-hidden>
      {/* vertical line */}
      <motion.line
        x1="80"
        y1="20"
        x2="80"
        y2="400"
        stroke="var(--accent-600)"
        strokeWidth="2"
        initial={reduce ? false : { pathLength: 0 }}
        animate={reduce ? undefined : { pathLength: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {steps.map((label, i) => {
        const y = 60 + i * 80;

        return (
          <g key={label}>
            {/* node */}
            <motion.circle
              cx="80"
              cy={y}
              r="10"
              fill="white"
              stroke="var(--accent-600)"
              strokeWidth="3"
              initial={reduce ? false : { scale: 0 }}
              animate={reduce ? undefined : { scale: 1 }}
              transition={{ delay: 0.2 + i * 0.15 }}
            />

            {/* label */}
            <text
              x="110"
              y={y + 5}
              className="fill-slate-700 text-sm font-medium"
            >
              {label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
