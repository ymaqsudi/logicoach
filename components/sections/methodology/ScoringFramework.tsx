"use client";

import { ScoringRadar } from "@/components/svg/ScoringRadar";
import { CheckCircle2 } from "lucide-react";

const signals = [
  "Clarity & structure",
  "Confidence & delivery",
  "Filler words & hesitation",
  "Message discipline",
  "Objection response quality",
];

export function ScoringFramework() {
  return (
    <section className="bg-[var(--soft-50)]">
      <div className="mx-auto max-w-7xl px-6 py-32">
        <div className="grid gap-20 md:grid-cols-12 md:items-center">
          {/* Left: Scoring explanation */}
          <div className="md:col-span-6">
            <div className="mb-6 h-1.5 w-14 rounded-full bg-[var(--accent-600)]" />

            <h2 className="text-4xl font-semibold tracking-tight text-slate-950">
              Objective scoring,
              <span className="block text-[var(--brand-700)]">not opinion</span>
            </h2>

            <p className="mt-8 max-w-xl text-xl leading-relaxed text-slate-700">
              Coaching shapes behavior. AI verifies whether that behavior
              actually changed — using consistent, repeatable performance
              signals that scale across people and programs.
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {signals.map((s) => (
                <Signal key={s} label={s} />
              ))}
            </div>
          </div>

          {/* Right: Radar visualization */}
          <div className="md:col-span-6">
            <div className="relative rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              {/* Accent rail */}
              <div className="absolute left-10 top-0 h-1.5 w-20 rounded-full bg-[var(--accent-600)]" />

              <p className="mb-6 text-sm font-semibold text-slate-900">
                Multi-dimensional performance view
              </p>

              <div className="overflow-x-auto">
                <ScoringRadar />
              </div>

              <p className="mt-6 max-w-sm text-sm leading-relaxed text-slate-600">
                Each axis represents a trained dimension of communication
                quality. Scores are comparable across sessions, participants,
                and cohorts.
              </p>

              <div className="mt-8 h-1.5 w-16 rounded-full bg-[var(--accent-600)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Helper ---------- */

function Signal({ label }: { label: string }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <CheckCircle2 className="mt-0.5 h-5 w-5 text-[var(--accent-600)]" />
      <p className="text-base font-medium text-slate-800">{label}</p>
    </div>
  );
}
