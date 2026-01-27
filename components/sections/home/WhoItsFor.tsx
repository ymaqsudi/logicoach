"use client";

import { motion, useReducedMotion } from "framer-motion";

export function WhoItsFor() {
  const reduce = useReducedMotion();

  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-32">
        {/* Header */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
            Built for environments
            <span className="block text-indigo-600">
              where performance is visible.
            </span>
          </h2>

          <p className="mt-8 text-xl leading-relaxed text-slate-600">
            LogiCoach is designed for settings where communication is evaluated
            in real time — not rehearsed in private and assumed to transfer.
          </p>
        </motion.div>

        {/* Audiences */}
        <div className="grid gap-10 md:grid-cols-12 items-stretch">
          <AudienceCard
            span="md:col-span-4"
            index="01"
            title="Sales leadership"
            body="Enablement and revenue leaders responsible for ensuring reps are ready before high-stakes conversations — not diagnosing gaps after deals are lost."
          />

          <AudienceCard
            span="md:col-span-4 md:mt-12"
            index="02"
            title="Executive communication programs"
            body="Organizations developing leaders who must think clearly, respond decisively, and perform under scrutiny in boardrooms and public forums."
          />

          <AudienceCard
            span="md:col-span-4 md:mt-24"
            index="03"
            title="Universities & professional training"
            body="Institutions that require structured evaluation, repeatable standards, and measurable communication outcomes — not participation-based learning."
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- helpers ---------- */

function AudienceCard({
  index,
  title,
  body,
  span,
}: {
  index: string;
  title: string;
  body: string;
  span?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative rounded-3xl border border-slate-200 bg-slate-50 p-10 ${span}`}
    >
      {/* accent rail */}
      <div className="absolute left-0 top-0 h-full w-1 rounded-l-3xl bg-indigo-600" />

      <div className="pl-6">
        <span className="text-sm font-semibold tracking-widest text-indigo-600">
          {index}
        </span>

        <h3 className="mt-4 text-2xl font-semibold text-slate-900">{title}</h3>

        <p className="mt-4 text-lg leading-relaxed text-slate-600">{body}</p>
      </div>
    </motion.div>
  );
}
