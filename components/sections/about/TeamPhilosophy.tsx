"use client";

export function TeamPhilosophy() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-36">
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <div className="mb-6 h-1.5 w-16 rounded-full bg-[var(--accent-600)]" />

          <h2 className="text-4xl font-semibold tracking-tight text-slate-950">
            Our philosophy
          </h2>

          <p className="mt-6 text-xl leading-relaxed text-slate-700">
            Everything we build, coach, and measure is guided by a small set of
            principles. These aren’t values posters — they’re operational
            constraints.
          </p>
        </div>

        {/* Principles */}
        <div className="grid gap-12 md:grid-cols-3">
          <Principle
            title="Performance over polish"
            body="We care about how ideas land under pressure — not how smooth they sound in rehearsal. Real environments expose real skill."
          />
          <Principle
            title="Structure creates freedom"
            body="Clear frameworks give communicators room to adapt in real time, instead of clinging to memorized scripts."
          />
          <Principle
            title="Measurement creates trust"
            body="Objective signals matter more than opinion when evaluating readiness, improvement, and real capability."
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- Helper ---------- */

function Principle({ title, body }: { title: string; body: string }) {
  return (
    <div className="relative rounded-3xl border border-slate-200 bg-[var(--soft-50)] p-8 transition hover:shadow-md">
      {/* Accent rail */}
      <div className="mb-6 h-1.5 w-14 rounded-full bg-[var(--accent-600)]" />

      <h3 className="text-xl font-semibold text-slate-950">{title}</h3>

      <p className="mt-4 text-base leading-relaxed text-slate-600">{body}</p>
    </div>
  );
}
