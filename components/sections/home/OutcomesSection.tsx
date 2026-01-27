"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function OutcomesSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative bg-white overflow-hidden">
      {/* subtle background wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 via-white to-white" />

      <div className="relative mx-auto max-w-7xl px-6 py-32">
        {/* Header */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-4xl"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
            The result isn’t better training.
            <span className="block text-indigo-600">
              It’s visible performance.
            </span>
          </h2>

          <p className="mt-8 text-xl leading-relaxed text-slate-600">
            When communication is trained under pressure and measured
            consistently, leaders gain clarity — not guesses.
          </p>
        </motion.div>

        {/* Outcomes grid */}
        <div className="grid gap-12 md:grid-cols-12 items-center">
          {/* Outcome bands */}
          <div className="md:col-span-7 space-y-6">
            <OutcomeBand
              index="01"
              title="Readiness you can see"
              body="Leaders know who is prepared before high-stakes conversations happen — not after performance breaks down."
            />

            <OutcomeBand
              index="02"
              title="Composure under scrutiny"
              body="Participants maintain structure, confidence, and control when conversations become unscripted or adversarial."
            />

            <OutcomeBand
              index="03"
              title="Evidence, not intuition"
              body="Progress is demonstrated through repeated performance data — not self-reported confidence or subjective reviews."
            />
          </div>

          {/* Visual anchor */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-5"
          >
            <div className="relative rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              <Image
                src="/images/svg/undraw_solution-mindset_pit7.svg"
                alt="Measured performance outcomes"
                width={420}
                height={320}
                className="mx-auto"
              />

              <p className="mt-6 text-center text-sm text-slate-500">
                Performance improvement becomes observable — not assumed.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- helpers ---------- */

function OutcomeBand({
  index,
  title,
  body,
}: {
  index: string;
  title: string;
  body: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, x: -20 }}
      whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8"
    >
      {/* background accent */}
      <div className="absolute inset-y-0 left-0 w-1 bg-indigo-600" />

      <div className="flex items-start gap-6 pl-6">
        <span className="text-sm font-semibold tracking-widest text-indigo-600">
          {index}
        </span>

        <div>
          <h3 className="text-2xl font-semibold text-slate-900">{title}</h3>
          <p className="mt-3 text-lg leading-relaxed text-slate-600">{body}</p>
        </div>
      </div>
    </motion.div>
  );
}
