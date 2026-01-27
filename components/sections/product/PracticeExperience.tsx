"use client";

import { Timer, Target, ShieldCheck, Ban } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export function PracticeExperience() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-32">
        <div className="grid gap-20 md:grid-cols-12 md:items-start">
          {/* Left: Core experience */}
          <div className="md:col-span-6">
            <div className="mb-6 h-1.5 w-14 rounded-full bg-[var(--accent-600)]" />

            <h2 className="text-4xl font-semibold tracking-tight text-slate-950">
              Structured practice under pressure
            </h2>

            <p className="mt-6 max-w-xl text-xl leading-relaxed text-slate-700">
              Participants practice by recording mock conversations designed to
              simulate real-world stakes — without scripts, hypotheticals, or
              artificial prompts.
            </p>

            <div className="mt-12 space-y-6">
              <Feature
                icon={Timer}
                title="Timed responses"
                body="Participants respond under time constraints that mirror live conversations."
              />
              <Feature
                icon={Target}
                title="Competitive positioning scenarios"
                body="Scenarios surface tradeoffs, differentiation, and strategic framing."
              />
              <Feature
                icon={ShieldCheck}
                title="Objection-first prompts"
                body="Practice begins with resistance — not agreement."
              />
            </div>
          </div>

          {/* Right: Guardrails + Visual */}
          <div className="md:col-span-6 space-y-10">
            {/* Guardrails */}
            <div className="relative rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                  <Ban className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-950">
                  What this avoids
                </h3>
              </div>

              <ul className="space-y-4 text-lg text-slate-600">
                <li>• Script memorization disguised as training</li>
                <li>• Hypothetical role-play without consequences</li>
                <li>• One-size-fits-all prompts that ignore context</li>
              </ul>

              <div className="mt-10 h-1.5 w-16 rounded-full bg-[var(--accent-600)]" />
            </div>

            {/* Pressure timeline */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="mb-6 text-sm font-semibold text-slate-900">
                Pressure progression
              </p>

              <svg
                viewBox="0 0 380 240"
                className="w-full h-[220px]"
                aria-hidden
              >
                {/* Axis */}
                <line
                  x1="60"
                  y1="190"
                  x2="340"
                  y2="190"
                  stroke="#CBD5E1"
                  strokeWidth="2"
                />
                <line
                  x1="60"
                  y1="40"
                  x2="60"
                  y2="190"
                  stroke="#CBD5E1"
                  strokeWidth="2"
                />

                {/* Curve */}
                <motion.path
                  d="M60 170 C140 150, 220 95, 340 55"
                  fill="none"
                  stroke="var(--accent-600)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                />

                {/* X labels */}
                <text x="60" y="215" className="fill-slate-600 text-xs">
                  Start
                </text>
                <text x="300" y="215" className="fill-slate-600 text-xs">
                  Live-ready
                </text>

                {/* Y label */}
                <text
                  x="20"
                  y="120"
                  className="fill-slate-600 text-xs"
                  transform="rotate(-90 20 120)"
                >
                  Pressure
                </text>
              </svg>

              <p className="mt-4 text-sm text-slate-600">
                Each session increases cognitive load, time pressure, and
                evaluative stakes — until performance stabilizes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({
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
