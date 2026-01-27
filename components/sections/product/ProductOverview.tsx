"use client";

import { Layers, Brain, Users } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export function ProductOverview() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-32">
        <div className="grid gap-20 md:grid-cols-12 md:items-start">
          {/* Left: Narrative */}
          <div className="md:col-span-6">
            <div className="mb-6 h-1.5 w-14 rounded-full bg-[var(--accent-600)]" />

            <h2 className="text-4xl font-semibold tracking-tight text-slate-950">
              A complete performance system
            </h2>

            <p className="mt-6 max-w-xl text-xl leading-relaxed text-slate-700">
              LogiCoach is not a single feature or tool. It’s a structured
              system designed to move people from awareness to execution — and
              clearly signal when they’re ready.
            </p>

            <div className="mt-12 space-y-6">
              <Item
                icon={Layers}
                title="Structured scenarios"
                body="Practice is anchored to real conversations — objections, competitive narratives, and high-stakes decision moments."
              />
              <Item
                icon={Brain}
                title="Objective AI scoring"
                body="Clarity, structure, confidence, and reasoning are evaluated consistently across sessions and participants."
              />
              <Item
                icon={Users}
                title="Coaching reinforcement"
                body="Live coaching ensures feedback translates into behavior change, not just awareness."
              />
            </div>
          </div>

          {/* Right: System Anchor + Visual */}
          <div className="md:col-span-6 space-y-10">
            {/* Text anchor */}
            <div className="relative rounded-3xl border border-slate-200 bg-slate-50 p-10">
              <div className="absolute left-10 top-0 h-1.5 w-20 rounded-full bg-[var(--accent-600)]" />

              <h3 className="text-xl font-semibold text-slate-950">
                Designed for repeatability
              </h3>

              <p className="mt-4 max-w-md text-lg leading-relaxed text-slate-600">
                Every component is built to be reused across individuals,
                cohorts, and programs — without starting from scratch or
                diluting standards.
              </p>

              <div className="mt-8 space-y-3 text-base text-slate-700">
                <p>• Reusable scenario frameworks</p>
                <p>• Consistent scoring across cohorts</p>
                <p>• Clear readiness signals for leaders</p>
              </div>
            </div>

            {/* System stack SVG */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="mb-6 text-sm font-semibold text-slate-900">
                Platform architecture
              </p>

              <svg
                viewBox="0 0 360 360"
                className="w-full h-[360px]"
                aria-hidden
              >
                {[
                  {
                    title: "Practice Layer",
                    desc: "Scenario-based conversations under time pressure",
                  },
                  {
                    title: "Intelligence Layer",
                    desc: "AI scoring for clarity, structure, and delivery",
                  },
                  {
                    title: "Reinforcement Layer",
                    desc: "Coaching + reporting that drives behavior change",
                  },
                ].map((l, i) => {
                  const y = 40 + i * 100;

                  return (
                    <motion.g
                      key={l.title}
                      initial={reduce ? false : { opacity: 0, y: 12 }}
                      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: i * 0.15 }}
                    >
                      {/* Card */}
                      <rect
                        x="24"
                        y={y}
                        rx="16"
                        ry="16"
                        width="312"
                        height="72"
                        fill="var(--soft-50)"
                        stroke="var(--slate-200)"
                      />

                      {/* Accent rail */}
                      <rect
                        x="24"
                        y={y}
                        rx="16"
                        ry="16"
                        width="6"
                        height="72"
                        fill="var(--accent-600)"
                      />

                      {/* Title */}
                      <text
                        x="44"
                        y={y + 28}
                        className="fill-slate-900 text-sm font-semibold"
                      >
                        {l.title}
                      </text>

                      {/* Description */}
                      <text
                        x="44"
                        y={y + 48}
                        className="fill-slate-600 text-[13px]"
                      >
                        {l.desc}
                      </text>
                    </motion.g>
                  );
                })}
              </svg>

              <p className="mt-6 text-xs text-slate-500">
                Each layer compounds the next — practice alone is not enough.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Item({
  icon: Icon,
  title,
  body,
}: {
  icon: any;
  title: string;
  body: string;
}) {
  return (
    <div className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-600)]/10 text-[var(--accent-600)]">
        <Icon className="h-6 w-6" />
      </div>

      <div>
        <p className="text-lg font-semibold text-slate-950">{title}</p>
        <p className="mt-2 text-base leading-relaxed text-slate-600">{body}</p>
      </div>
    </div>
  );
}
