export function AfterTheDemo() {
  return (
    <section className="bg-[var(--soft-50)]">
      <div className="mx-auto max-w-7xl px-6 py-24 grid gap-12 md:grid-cols-2 items-start">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            What happens next
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            After the demo, we’ll outline a deployment approach aligned to your
            goals — not a generic rollout.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <ul className="space-y-3 text-sm text-slate-700">
            <li>• Program recommendations</li>
            <li>• Licensing options</li>
            <li>• Coaching involvement (if applicable)</li>
            <li>• Pilot or phased rollout</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
