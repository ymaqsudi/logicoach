"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export function SolutionSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-white">
      {/* soft backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-120px] top-1/3 h-[420px] w-[420px] rounded-full bg-indigo-100/60 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-32">
        {/* Header */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 max-w-3xl"
        >
          <div className="mb-6 h-1.5 w-16 rounded-full bg-indigo-600" />

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
            LogiCoach turns training
            <span className="block text-slate-600">
              into observable performance.
            </span>
          </h2>

          <p className="mt-8 text-xl leading-relaxed text-slate-700">
            We don’t optimize for awareness. We optimize for what happens when
            conversations become unscripted, competitive, and public.
          </p>
        </motion.div>

        {/* Core system */}
        <div className="grid gap-20 md:grid-cols-12 items-start">
          {/* Left: system explanation */}
          <div className="md:col-span-7 space-y-10">
            <SystemBlock
              index="01"
              title="Deliberate practice under pressure"
              body="Participants train inside structured scenarios that mirror real conversations — objections, executive scrutiny, and competitive positioning. No scripts. No hypotheticals."
            />

            <SystemBlock
              index="02"
              title="Coaching in the moment"
              body="Coaches intervene between rounds while decisions are still fresh — adjusting structure, reasoning, and delivery before habits calcify."
              accent
            />

            <SystemBlock
              index="03"
              title="Public showcase moments"
              body="Participants present in live, visible environments. This creates accountability, focus, and the same psychological pressure that defines real performance."
            />

            <SystemBlock
              index="04"
              title="Measured improvement over time"
              body="Objective scoring tracks clarity, control, and persuasion across sessions and cohorts — giving leaders evidence that skills actually transferred."
            />
          </div>

          {/* Right: visual anchor */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-5"
          >
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <p className="mb-6 text-sm font-semibold text-slate-600">
                The enablement loop
              </p>

              <div className="relative">
                <Image
                  src="/images/svg/undraw_teaching_58yg.svg"
                  alt="Coaching and learning illustration"
                  width={420}
                  height={320}
                  className="mx-auto"
                />
              </div>

              <p className="mt-6 text-sm leading-relaxed text-slate-600">
                Practice creates exposure. Coaching shapes behavior. Measurement
                proves progress.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- helper ---------- */

function SystemBlock({
  index,
  title,
  body,
  accent,
}: {
  index: string;
  title: string;
  body: string;
  accent?: boolean;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 14 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative rounded-2xl border p-8 ${
        accent ? "border-indigo-300 bg-indigo-50" : "border-slate-200 bg-white"
      }`}
    >
      <div className="mb-4 flex items-center gap-4">
        <span className="text-sm font-semibold tracking-wide text-indigo-600">
          {index}
        </span>
        <div className="h-px flex-1 bg-slate-200" />
      </div>

      <h3 className="text-2xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-4 text-lg leading-relaxed text-slate-700">{body}</p>
    </motion.div>
  );
}
