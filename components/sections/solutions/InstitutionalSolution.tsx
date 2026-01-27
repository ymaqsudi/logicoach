"use client";

import { Calendar, Layers, GraduationCap } from "lucide-react";

export function InstitutionalSolution() {
  return (
    <section className="bg-[var(--soft-50)]">
      <div className="mx-auto max-w-7xl px-6 py-32">
        <div className="grid gap-20 md:grid-cols-12 md:items-start">
          {/* Left: Narrative */}
          <div className="md:col-span-6">
            <div className="mb-6 h-1.5 w-14 rounded-full bg-[var(--accent-600)]" />

            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Institutional
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">
              Universities & professional programs
            </h2>

            <p className="mt-6 max-w-xl text-xl leading-relaxed text-slate-700">
              Institutions use LogiCoach to create continuity across a semester
              — connecting instruction, practice, evaluation, and accountability
              inside a single system.
            </p>

            <div className="mt-12 space-y-8">
              <Benefit
                icon={Layers}
                title="Curriculum-aligned delivery"
                body="Scenarios align directly to learning objectives while preserving competitive pressure and rigor."
              />
              <Benefit
                icon={UsersIcon}
                title="Seat-based licensing"
                body="A limited number of licenses supports larger cohorts through structured rotation."
              />
              <Benefit
                icon={GraduationCap}
                title="Capstone assessment"
                body="End-of-term showcases create visible outcomes for students, faculty, and sponsors."
              />
            </div>
          </div>

          {/* Right: Semester model + visual */}
          <div className="md:col-span-6">
            <div className="relative rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              {/* Accent rail */}
              <div className="absolute left-10 top-0 h-1.5 w-20 rounded-full bg-[var(--accent-600)]" />

              <h3 className="text-xl font-semibold text-slate-950">
                Typical semester model
              </h3>

              <ul className="mt-6 space-y-4 text-lg text-slate-700">
                <li>• 10 active seats supporting rotating cohorts</li>
                <li>• Monthly group coaching sessions</li>
                <li>• Individual AI-scored practice between sessions</li>
                <li>• Final capstone showcase</li>
              </ul>

              {/* Semester lifecycle SVG */}
              <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="mb-4 text-sm font-semibold text-slate-900">
                  Semester lifecycle
                </p>

                <svg viewBox="0 0 520 160" className="w-full" aria-hidden>
                  {/* Nodes */}
                  {[
                    { x: 20, label: "Instruction" },
                    { x: 145, label: "Practice" },
                    { x: 270, label: "Evaluation" },
                    { x: 395, label: "Capstone" },
                  ].map((n, i) => (
                    <g key={n.label}>
                      <rect
                        x={n.x}
                        y="50"
                        rx="12"
                        ry="12"
                        width="110"
                        height="60"
                        fill="#ffffff"
                        stroke="#CBD5E1"
                      />
                      <text
                        x={n.x + 55}
                        y="85"
                        textAnchor="middle"
                        className="fill-slate-800 text-sm font-medium"
                      >
                        {n.label}
                      </text>

                      {i < 3 && (
                        <>
                          <line
                            x1={n.x + 110}
                            y1="80"
                            x2={n.x + 125}
                            y2="80"
                            stroke="var(--accent-600)"
                            strokeWidth="2"
                          />
                          <polygon
                            points={`${n.x + 120},75 ${n.x + 130},80 ${
                              n.x + 120
                            },85`}
                            fill="var(--accent-600)"
                          />
                        </>
                      )}
                    </g>
                  ))}

                  {/* Caption */}
                  <text
                    x="260"
                    y="145"
                    textAnchor="middle"
                    className="fill-slate-500 text-xs"
                  >
                    Learning outcomes reinforced through structured repetition
                  </text>
                </svg>
              </div>

              <div className="mt-10 text-sm text-slate-600">
                Designed for credit-bearing courses, bootcamps, and professional
                certificate programs.
              </div>

              <div className="mt-10 h-1.5 w-16 rounded-full bg-[var(--accent-600)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Helpers ---------- */

function Benefit({
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

/* Small icon helper to avoid importing Users from lucide twice */
function UsersIcon(props: any) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <circle cx="8" cy="7" r="3" />
      <circle cx="16" cy="7" r="3" />
      <path d="M2 21v-2a4 4 0 014-4h4" />
      <path d="M14 15h4a4 4 0 014 4v2" />
    </svg>
  );
}
