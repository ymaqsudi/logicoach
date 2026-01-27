"use client";

import { motion, useReducedMotion } from "framer-motion";

const signals = [
  "Sounds confident in training, hesitates in real conversations",
  "Feedback arrives after habits are already formed",
  "Managers lack visibility into true readiness",
  "Confidence without proof becomes risk",
];

export function ProblemSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#F7F8FA]">
      {/* subtle atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-indigo-100/60 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-32">
        <div className="grid gap-20 md:grid-cols-12 items-start">
          {/* LEFT — headline */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5"
          >
            <div className="mb-6 h-1.5 w-16 rounded-full bg-indigo-600" />

            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
              Training builds confidence.
              <span className="block text-slate-600">
                Pressure reveals reality.
              </span>
            </h2>
          </motion.div>

          {/* RIGHT — narrative + signals */}
          <div className="md:col-span-7">
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="max-w-2xl text-xl leading-relaxed text-slate-700"
            >
              Most professional communication training optimizes for comfort.
              Workshops feel productive. Role-play feels controlled.
            </motion.p>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 max-w-2xl text-xl leading-relaxed text-slate-700"
            >
              Then conversations become unscripted. Time tightens. Stakes rise.
              Performance falls back to instinct.
            </motion.p>

            {/* signals */}
            <div className="mt-14 grid gap-5 sm:grid-cols-2">
              {signals.map((s, i) => (
                <motion.div
                  key={s}
                  initial={reduce ? false : { opacity: 0, y: 14 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: reduce ? 0 : 0.15 + i * 0.08,
                  }}
                  whileHover={{
                    y: -4,
                    boxShadow: "0 20px 40px rgba(79,70,229,0.12)",
                    transition: { duration: 0.2 },
                  }}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <p className="text-base font-medium text-slate-800">{s}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
