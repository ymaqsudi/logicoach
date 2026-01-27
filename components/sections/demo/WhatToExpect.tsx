export function WhatToExpect() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 grid gap-12 md:grid-cols-2 items-start">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            What to expect
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            This is not a slide deck or marketing walkthrough. The demo focuses
            on how LogiCoach is actually used.
          </p>

          <div className="mt-8 space-y-4">
            <Point
              title="Real scenarios"
              body="You’ll see practice prompts drawn from real sales conversations."
            />
            <Point
              title="Live scoring examples"
              body="We’ll walk through how responses are evaluated and why."
            />
            <Point
              title="Program fit discussion"
              body="We’ll talk about how LogiCoach integrates into your workflow."
            />
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-[var(--soft-50)] p-6">
          <p className="text-sm font-semibold text-slate-900">
            Typical demo length
          </p>
          <p className="mt-2 text-sm text-slate-600">
            30–45 minutes, depending on questions and use case.
          </p>
        </div>
      </div>
    </section>
  );
}

function Point({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <p className="text-sm font-semibold text-slate-900">{title}</p>
      <p className="mt-1 text-sm text-slate-600">{body}</p>
      <div className="mt-3 h-1 w-12 rounded-full bg-[var(--brand-700)]" />
    </div>
  );
}
