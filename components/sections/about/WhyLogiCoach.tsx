"use client";

export function WhyLogiCoach() {
  return (
    <section className="bg-[var(--soft-50)]">
      <div className="mx-auto max-w-7xl px-6 py-36">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="mb-6 h-1.5 w-16 rounded-full bg-[var(--accent-600)]" />

          <h2 className="text-4xl font-semibold tracking-tight text-slate-950">
            Why LogiCoach exists
          </h2>

          <p className="mt-6 text-xl leading-relaxed text-slate-700">
            Most communication training fails because it stops at awareness.
            LogiCoach exists to close the gap between knowing what to say and
            performing when it actually matters.
          </p>
        </div>

        {/* Reasons */}
        <div className="grid gap-10 md:grid-cols-3">
          <Reason
            title="Training without measurement"
            body="Traditional workshops rarely prove whether skills transfer into real conversations. Without signals, improvement is assumed — not verified."
          />
          <Reason
            title="Role-play without pressure"
            body="Scripted practice creates confidence in safe conditions, then collapses when real objections, stakes, and time pressure appear."
          />
          <Reason
            title="Feedback without structure"
            body="Generic advice doesn’t change behavior unless it’s anchored to a repeatable framework that can be practiced and measured."
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- Helper ---------- */

function Reason({ title, body }: { title: string; body: string }) {
  return (
    <div className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md">
      {/* Accent rail */}
      <div className="mb-6 h-1.5 w-14 rounded-full bg-[var(--accent-600)]" />

      <h3 className="text-xl font-semibold text-slate-950">{title}</h3>

      <p className="mt-4 text-base leading-relaxed text-slate-600">{body}</p>
    </div>
  );
}
