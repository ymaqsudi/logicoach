"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

export function CredibilitySection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative bg-slate-50 overflow-hidden">
      {/* subtle background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-120px] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-indigo-100 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-32">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-20 md:grid-cols-12 md:items-center"
        >
          {/* Left: Authority narrative */}
          <div className="md:col-span-7">
            <div className="mb-6 h-1.5 w-16 rounded-full bg-indigo-600" />

            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
              Built by practitioners,
              <span className="block text-indigo-600">not theorists.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-slate-600">
              LogiCoach is developed and run by the team behind TechDuels — a
              collective with over seven years of experience designing,
              coaching, and evaluating live communication under pressure.
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              From competitive debate environments to professional training
              programs, TechDuels has operated real-time scenarios where
              performance is public, structured, and measurable.
            </p>

            <div className="mt-8">
              <Link
                href="https://techduels.com"
                target="_blank"
                className="inline-flex items-center text-base font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
              >
                Learn more about TechDuels →
              </Link>
            </div>
          </div>

          {/* Right: Credibility stats */}
          <div className="md:col-span-5">
            <div className="grid gap-6">
              <CredibilityCard
                title="7+ years"
                body="Running live, high-pressure communication environments"
              />
              <CredibilityCard
                title="Hundreds of sessions"
                body="Moderated, coached, and evaluated in real time"
              />
              <CredibilityCard
                title="Debate-grade standards"
                body="Clear structure, objective evaluation, public accountability"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- helpers ---------- */

function CredibilityCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <p className="text-3xl font-semibold text-slate-900">{title}</p>
      <p className="mt-3 text-base leading-relaxed text-slate-600">{body}</p>
    </div>
  );
}
