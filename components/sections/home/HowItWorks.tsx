"use client";

import { motion, useReducedMotion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Scenario",
    body: "Participants enter structured, realistic conversations designed to surface real habits — not rehearsed answers.",
  },
  {
    step: "02",
    title: "Coaching",
    body: "Coaches intervene between rounds, tightening structure, reasoning, and delivery while it’s still fresh.",
  },
  {
    step: "03",
    title: "Presentation",
    body: "Participants present in visible environments that mirror real pressure and accountability.",
  },
  {
    step: "04",
    title: "Measurement",
    body: "Objective signals track clarity, control, and persuasion across time — not opinions.",
  },
];

export function HowItWorks() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        {/* Header */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 max-w-2xl"
        >
          <div className="mb-5 h-1 w-14 rounded-full bg-indigo-600" />

          <h2 className="text-4xl font-semibold tracking-tight text-slate-900">
            How LogiCoach works
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            A repeatable loop designed to expose habits, shape behavior, and
            verify improvement under pressure.
          </p>
        </motion.div>

        {/* Flow */}
        <div className="relative grid gap-10 md:grid-cols-4">
          {/* connector line */}
          <div className="absolute top-6 left-0 right-0 hidden h-px bg-slate-200 md:block" />

          {steps.map((s, i) => (
            <Step key={s.step} index={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- helper ---------- */

function Step({
  step,
  title,
  body,
  index,
}: {
  step: string;
  title: string;
  body: string;
  index: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="relative rounded-2xl border border-slate-200 bg-slate-50 p-6 text-left"
    >
      <div className="mb-4 flex items-center gap-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white">
          {step}
        </span>
        <div className="h-px flex-1 bg-slate-200" />
      </div>

      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-base leading-relaxed text-slate-600">{body}</p>
    </motion.div>
  );
}
