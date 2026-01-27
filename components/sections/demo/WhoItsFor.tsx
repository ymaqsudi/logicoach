export function WhoItsFor() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 grid gap-12 md:grid-cols-2 items-start">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Who should attend
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            LogiCoach works best when decision-makers and program owners see it
            together.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-[var(--soft-50)] p-6">
          <ul className="space-y-3 text-sm text-slate-700">
            <li>• Sales enablement leaders</li>
            <li>• Revenue or GTM leadership</li>
            <li>• Training and L&D teams</li>
            <li>• Academic program directors</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
