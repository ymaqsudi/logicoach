export default function AlertsPanel() {
  return (
    <div className="rounded-[28px] bg-[#E9EEF4] p-10">
      <h3 className="text-2xl font-semibold text-slate-900">Coaching Notes</h3>

      <p className="mt-2 text-slate-600">
        Patterns worth paying attention to based on your recent sessions.
      </p>

      <div className="mt-6 space-y-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        {/* Argument Effectiveness */}
        <div className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
          <p className="text-sm font-medium text-slate-900">
            Argument Effectiveness
          </p>

          <p className="mt-1 text-lg font-semibold text-indigo-600">4.1 / 5</p>

          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Your core claim is persuasive and supported with relevant warrants.
            The argument lands well with an informed audience, but impact
            framing could be strengthened to make the stakes clearer and more
            compelling to a broader audience.
          </p>
        </div>

        {/* Other coaching notes */}
        <Note
          title="Pacing consistency"
          description="Your speaking rate remains steady, but pauses shorten under pressure. Intentional pauses before key claims would improve emphasis."
        />
        <Note
          title="Eye contact"
          description="Strong engagement early in sessions — tends to drop during closing statements, which slightly weakens final impact."
        />
        <Note
          title="Structure"
          description="Claims are clear. Warrants are sometimes implied rather than explicitly stated, which can reduce clarity for unfamiliar audiences."
        />
      </div>
    </div>
  );
}

function Note({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <p className="text-sm font-medium text-slate-900">{title}</p>
      <p className="mt-1 text-sm leading-relaxed text-slate-600">
        {description}
      </p>
    </div>
  );
}
