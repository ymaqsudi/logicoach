// components/social-proof/StatsCard.tsx
export default function StatsCard() {
  const stats = [
    { value: "$50K+", label: "Service revenue captured" },
    { value: "11x", label: "ROI" },
    { value: "35", label: "Hours saved on calls" },
    { value: "210+", label: "Appointments booked" },
  ];

  return (
    <section className="relative z-10 -mt-16">
      <div className="mx-auto max-w-5xl rounded-2xl bg-slate-900 px-8 py-10 text-white shadow-xl">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-semibold">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
