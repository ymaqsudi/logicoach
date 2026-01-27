export function ScorecardMock() {
  return (
    <div className="space-y-5">
      <Row label="Clarity" value="82" tone="blue" />
      <Row label="Confidence" value="76" tone="teal" />
      <Row label="Message Discipline" value="71" tone="blue" />
      <Row label="Objection Handling" value="68" tone="teal" />

      <div className="rounded-xl border border-slate-200 bg-[var(--soft-50)] p-4">
        <p className="text-sm font-semibold text-slate-900">
          Coaching prompt (example)
        </p>
        <p className="mt-1 text-sm text-slate-600">
          Tighten the claim → add a concrete warrant → finish with buyer impact.
          Keep the close to one sentence.
        </p>
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "blue" | "teal";
}) {
  const bar =
    tone === "blue" ? "bg-[var(--brand-700)]" : "bg-[var(--accent-600)]";

  const width = Math.min(100, Math.max(10, Number(value))); // simple mock

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-slate-900">{label}</p>
        <p className="text-sm font-semibold text-slate-900">{value}</p>
      </div>
      <div className="mt-2 h-2 w-full rounded-full bg-slate-100">
        <div
          className={`h-2 rounded-full ${bar}`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}
