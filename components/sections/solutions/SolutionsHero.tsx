"use client";

import { Users, GraduationCap, User } from "lucide-react";

export function SolutionsHero() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      {/* Subtle background wash */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(59,130,246,0.08),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-32">
        <div className="grid gap-20 md:grid-cols-12 md:items-center">
          {/* Left: Narrative */}
          <div className="md:col-span-7">
            <div className="mb-6 h-1.5 w-14 rounded-full bg-[var(--accent-600)]" />

            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-600">
              Solutions
            </p>

            <h1 className="text-5xl font-semibold tracking-tight text-slate-950">
              One system.
              <span className="block text-[var(--accent-600)]">
                Multiple environments.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-slate-700">
              LogiCoach adapts to how you operate — enterprise teams,
              universities, or individuals — while preserving consistent
              standards, scoring, and outcomes.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
              The methodology stays fixed. Deployment flexes to your reality.
            </p>
          </div>

          {/* Right: Deployment diagram */}
          <div className="md:col-span-5">
            <div className="relative rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              {/* Accent rail */}
              <div className="absolute left-10 top-0 h-1.5 w-20 rounded-full bg-[var(--accent-600)]" />

              <p className="mb-6 text-sm font-semibold text-slate-900">
                Deployment models
              </p>

              <div className="space-y-6">
                <Deployment
                  icon={Users}
                  title="Corporate teams"
                  body="Enable sales, leadership, and cross-functional teams with shared standards and measurable readiness."
                />
                <Deployment
                  icon={GraduationCap}
                  title="Institutions"
                  body="Run semester-long programs with structured evaluation, rotation models, and capstone outcomes."
                />
                <Deployment
                  icon={User}
                  title="Individuals"
                  body="Private, structured practice focused on mastery without public pressure or showcases."
                />
              </div>

              {/* Connector line */}
              <div className="mt-10 h-px w-full bg-slate-200" />
              <p className="mt-4 text-sm text-slate-600">
                Same scoring. Same coaching logic. Different scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Helper ---------- */

function Deployment({
  icon: Icon,
  title,
  body,
}: {
  icon: any;
  title: string;
  body: string;
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-600)]/10 text-[var(--accent-600)]">
        <Icon className="h-5 w-5" />
      </div>

      <div>
        <p className="text-base font-semibold text-slate-950">{title}</p>
        <p className="mt-1 text-sm leading-relaxed text-slate-600">{body}</p>
      </div>
    </div>
  );
}
