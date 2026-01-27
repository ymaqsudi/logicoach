export function CoachingPrinciples() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-32">
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <div className="mb-6 h-1.5 w-14 rounded-full bg-[var(--accent-600)]" />

          <h2 className="text-4xl font-semibold tracking-tight text-slate-950">
            How coaching is applied
          </h2>

          <p className="mt-6 text-xl leading-relaxed text-slate-700">
            Coaching in LogiCoach is not motivational or subjective. It follows
            a small set of principles designed to change behavior under real
            pressure.
          </p>
        </div>

        {/* Principles */}
        <div className="grid gap-10 md:grid-cols-3">
          <Principle
            index="01"
            title="Pressure first"
            body="Practice happens under time constraints and competitive pressure — because habits only reveal themselves when stakes are real."
          />
          <Principle
            index="02"
            title="Feedback in the moment"
            body="Coaches intervene between rounds and scenarios, while decisions and reasoning are still active — not days later in review."
          />
          <Principle
            index="03"
            title="Structure over scripts"
            body="Participants learn how to construct arguments and responses, not memorize talking points that fail under pressure."
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- Helper ---------- */

function Principle({
  index,
  title,
  body,
}: {
  index: string;
  title: string;
  body: string;
}) {
  return (
    <div className="group relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md">
      {/* Index */}
      <p className="mb-4 text-sm font-semibold tracking-widest text-[var(--accent-600)]">
        {index}
      </p>

      <h3 className="text-2xl font-semibold text-slate-950">{title}</h3>

      <p className="mt-5 text-base leading-relaxed text-slate-700">{body}</p>

      {/* Accent rail */}
      <div className="mt-8 h-1.5 w-16 rounded-full bg-[var(--accent-600)] transition-all group-hover:w-24" />
    </div>
  );
}
