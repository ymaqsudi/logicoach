export function PricingOverview() {
  return (
    <section className="bg-white border-t">
      <div className="mx-auto max-w-7xl px-6 py-24 grid gap-12 md:grid-cols-2 items-start">
        {/* Left: Explanation */}
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            How pricing works
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            LogiCoach pricing is program-based — not per-seat SaaS licensing.
            Cost reflects how the system is deployed, supported, and measured.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Most customers start with a pilot or limited deployment, then expand
            once value and fit are proven.
          </p>

          <div className="mt-8 space-y-4">
            <Factor
              title="Deployment type"
              body="Individual, institutional, or enterprise rollout"
            />
            <Factor
              title="Active seat count"
              body="Seats are reused across cohorts rather than assigned permanently"
            />
            <Factor
              title="Coaching involvement"
              body="AI-only, hybrid, or coach-led programs"
            />
            <Factor
              title="Program duration"
              body="Single workshop, semester-long, or ongoing enablement"
            />
          </div>
        </div>

        {/* Right: Real ranges */}
        <div className="rounded-2xl border border-slate-200 bg-[var(--soft-50)] p-6">
          <h3 className="text-sm font-semibold text-slate-900">
            Typical pricing ranges
          </h3>

          <ul className="mt-4 space-y-4 text-sm text-slate-700">
            <li>
              <span className="font-semibold">Individuals</span>
              <br />
              Subscription or limited-access programs, typically in the
              <span className="font-medium"> low hundreds per user</span>.
            </li>

            <li>
              <span className="font-semibold">Institutions</span>
              <br />
              Semester-based deployments usually fall between
              <span className="font-medium"> $5k–$25k</span>, depending on
              cohort size and coaching depth.
            </li>

            <li>
              <span className="font-semibold">Enterprise teams</span>
              <br />
              Pilot programs typically range from
              <span className="font-medium"> $15k–$50k</span>, with larger
              rollouts expanding from there.
            </li>
          </ul>

          <div className="mt-6 text-xs text-slate-500">
            Exact pricing is finalized after aligning on goals, audience, and
            success metrics during the demo.
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Helper ---------- */

function Factor({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <p className="text-sm font-semibold text-slate-900">{title}</p>
      <p className="mt-1 text-sm text-slate-600">{body}</p>
      <div className="mt-3 h-1 w-12 rounded-full bg-[var(--brand-700)]" />
    </div>
  );
}
