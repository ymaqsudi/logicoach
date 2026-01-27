export function ProofSection() {
  return (
    <section className="bg-[#F7F1DE]">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <h2 className="text-4xl font-semibold text-slate-900">
          Built from real evaluation environments
        </h2>

        <p className="mt-6 max-w-3xl text-xl text-slate-700">
          LogiCoach is informed by years of live, competitive communication —
          where performance is public, measured, and consequential.
        </p>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          <ProofMetric label="Programs run" value="25+" />
          <ProofMetric label="Participants evaluated" value="1,000+" />
          <ProofMetric label="Years of iteration" value="5+" />
        </div>
      </div>
    </section>
  );
}

function ProofMetric({ label, value }: any) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm">
      <p className="text-5xl font-semibold text-slate-900">{value}</p>
      <p className="mt-3 text-lg text-slate-600">{label}</p>
    </div>
  );
}
