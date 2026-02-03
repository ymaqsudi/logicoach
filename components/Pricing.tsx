import SectionHeader from "@/components/SectionHeader";

export default function Pricing() {
  return (
    <section className="bg-[#F5F7FA] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Pricing"
          title="Serious coaching, tailored by level."
          subtitle="LogiCoach.ai is priced for commitment to skill-building — from individual mastery to organization-wide training."
        />

        {/* =======================
           INDIVIDUAL COACHING
        ======================= */}
        <div className="mt-16">
          <h3 className="mb-6 text-xl font-semibold text-slate-900">
            Individual Coaching
          </h3>

          <div className="grid gap-10 lg:grid-cols-3">
            <TierCard
              title="Student"
              bestFor="Students & early career"
              coreValue="Confidence & foundations"
              monthly="$179 / month"
              quarterly="$449 / 3 months"
            />

            <TierCard
              title="Professional"
              bestFor="Working professionals"
              coreValue="Performance & results"
              monthly="$279 / month"
              quarterly="$549 / 3 months"
              featured
            />

            <TierCard
              title="Executive"
              bestFor="Leaders & founders"
              coreValue="Influence & outcome protection"
              monthly="$349 / month"
              quarterly="$799 / 3 months"
            />
          </div>

          <p className="mt-10 text-center text-sm text-slate-500">
            All individual plans include{" "}
            <strong>2 hours of live coaching per month</strong>, plus
            coach-calibrated AI feedback between sessions.
          </p>
        </div>

        {/* =======================
           KEY DIFFERENCES
        ======================= */}
        <div className="mt-20 overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200">
          <div className="px-8 py-6 border-b border-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">
              Key differences by tier
            </h3>
          </div>

          <div className="grid grid-cols-4 text-sm">
            <TableHeader />
            <TableRow
              label="Coaching focus"
              student="Fundamentals"
              professional="Work performance"
              executive="Strategic influence"
            />
            <TableRow
              label="AI feedback style"
              student="Guided"
              professional="Applied"
              executive="Strategized"
            />
            <TableRow
              label="Session style"
              student="Instructional"
              professional="Goal-driven"
              executive="Advisory"
            />
            <TableRow
              label="Async feedback"
              student="—"
              professional="—"
              executive="✓ Included"
            />
            <TableRow
              label="Pre-session prep"
              student="—"
              professional="—"
              executive="✓ Included"
            />
            <TableRow
              label="Priority scheduling"
              student="—"
              professional="—"
              executive="✓ Included"
            />
          </div>
        </div>

        {/* =======================
           INSTITUTIONS & TEAMS
        ======================= */}
        <div className="mt-28">
          <h3 className="mb-6 text-xl font-semibold text-slate-900">
            Institutions & Organizations
          </h3>

          <div className="grid gap-10 md:grid-cols-2">
            <OrgCard
              title="Universities & Education"
              description="Curriculum-aligned communication training for courses, debate teams, and academic programs."
              features={[
                "Curriculum-aligned roleplays",
                "Student & cohort dashboards",
                "Faculty & coach access",
                "Live showcases & evaluations",
              ]}
            />

            <OrgCard
              title="Corporate Teams"
              description="Standardized communication training for sales, leadership, compliance, and technical teams."
              features={[
                "Roleplays tailored to your domain",
                "Consistent evaluation across teams",
                "Advanced analytics & reporting",
                "Live Tech Duels showcases",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ======================
   COMPONENTS
====================== */

function TierCard({
  title,
  bestFor,
  coreValue,
  monthly,
  quarterly,
  featured = false,
}: {
  title: string;
  bestFor: string;
  coreValue: string;
  monthly: string;
  quarterly: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`relative rounded-2xl bg-white p-8 ring-1 transition ${
        featured
          ? "ring-indigo-400 shadow-lg"
          : "ring-slate-200 hover:ring-indigo-300"
      }`}
    >
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-4 py-1 text-xs font-medium text-white">
          Most popular
        </div>
      )}

      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-sm text-slate-500">{bestFor}</p>

      <p className="mt-4 text-sm font-medium text-slate-700">Core value</p>
      <p className="text-slate-600">{coreValue}</p>

      <div className="mt-6 space-y-1">
        <p className="text-2xl font-semibold text-slate-900">{monthly}</p>
        <p className="text-sm text-slate-500">{quarterly}</p>
      </div>

      <button className="mt-8 w-full rounded-full bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-indigo-500">
        Get started
      </button>
    </div>
  );
}

function OrgCard({
  title,
  description,
  features,
}: {
  title: string;
  description: string;
  features: string[];
}) {
  return (
    <div className="rounded-2xl bg-white p-8 ring-1 ring-slate-200">
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600">{description}</p>

      <ul className="mt-6 space-y-3 text-sm text-slate-600">
        {features.map((f) => (
          <li key={f} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href="/contact"
        className="mt-8 block w-full rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-medium text-slate-900 transition hover:border-indigo-400 hover:text-indigo-600"
      >
        Contact sales
      </a>
    </div>
  );
}

function TableHeader() {
  return (
    <>
      <Cell header />
      <Cell header>Student</Cell>
      <Cell header>Professional</Cell>
      <Cell header>Executive</Cell>
    </>
  );
}

function TableRow({
  label,
  student,
  professional,
  executive,
}: {
  label: string;
  student: string;
  professional: string;
  executive: string;
}) {
  return (
    <>
      <Cell>{label}</Cell>
      <Cell muted>{student}</Cell>
      <Cell muted>{professional}</Cell>
      <Cell muted>{executive}</Cell>
    </>
  );
}

function Cell({
  children,
  header = false,
  muted = false,
}: {
  children?: React.ReactNode;
  header?: boolean;
  muted?: boolean;
}) {
  return (
    <div
      className={`px-8 py-4 border-b border-slate-100 ${
        header
          ? "font-semibold text-slate-900 bg-slate-50"
          : muted
            ? "text-slate-600"
            : "text-slate-900"
      }`}
    >
      {children}
    </div>
  );
}
