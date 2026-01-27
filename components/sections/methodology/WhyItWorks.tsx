export function WhyItWorks() {
  return (
    <section className="bg-[var(--soft-50)]">
      <div className="mx-auto max-w-7xl px-6 py-32">
        <div className="grid gap-20 md:grid-cols-12 md:items-start">
          {/* Left: Framing */}
          <div className="md:col-span-5">
            <div className="mb-6 h-1.5 w-14 rounded-full bg-[var(--accent-600)]" />

            <h2 className="text-4xl font-semibold tracking-tight text-slate-950">
              Why this works
            </h2>

            <p className="mt-6 max-w-xl text-xl leading-relaxed text-slate-700">
              Traditional training focuses on content delivery. LogiCoach
              focuses on performance under pressure — and then verifies
              improvement with objective signals.
            </p>
          </div>

          {/* Right: Reasons */}
          <div className="md:col-span-7 space-y-8">
            <Reason
              index="01"
              title="Behavior change, not awareness"
              body="People don’t improve because they understand more. They improve because they practice correctly, under conditions that expose real habits."
            />

            <Reason
              index="02"
              title="Signals leaders can trust"
              body="Objective scoring creates visibility without subjective judgment, anecdotal feedback, or constant manager observation."
            />

            <Reason
              index="03"
              title="Motivation through competition"
              body="Structured competitive formats increase engagement and retention without superficial gamification or point systems."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Helper ---------- */

function Reason({
  index,
  title,
  body,
}: {
  index: string;
  title: string;
  body: string;
}) {
  return (
    <div className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mb-4 flex items-center gap-4">
        <span className="text-sm font-semibold tracking-widest text-[var(--accent-600)]">
          {index}
        </span>
        <div className="h-px flex-1 bg-slate-200" />
      </div>

      <h3 className="text-2xl font-semibold text-slate-950">{title}</h3>

      <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700">
        {body}
      </p>

      <div className="mt-8 h-1.5 w-16 rounded-full bg-[var(--accent-600)]" />
    </div>
  );
}
