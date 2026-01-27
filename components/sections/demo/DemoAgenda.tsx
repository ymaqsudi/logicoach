export function DemoAgenda() {
  return (
    <section className="bg-[var(--soft-50)]">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="mb-12 text-3xl font-semibold tracking-tight text-slate-950">
          Sample agenda
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <Step
            n="01"
            title="Context"
            body="Your goals, audience, and environment"
          />
          <Step
            n="02"
            title="Practice flow"
            body="Recording, prompts, and pressure design"
          />
          <Step
            n="03"
            title="Scoring & feedback"
            body="AI signals and coaching reinforcement"
          />
        </div>
      </div>
    </section>
  );
}

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 h-8 w-8 rounded-full bg-[var(--brand-700)] text-white flex items-center justify-center text-sm font-semibold">
        {n}
      </div>
      <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{body}</p>
    </div>
  );
}
