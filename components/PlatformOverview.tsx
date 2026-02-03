// components/platform/PlatformOverview.tsx
export default function PlatformOverview() {
  return (
    <section className="bg-slate-50 py-24 text-center">
      <h2 className="text-3xl font-semibold text-slate-900">
        Logicoach transforms communication
      </h2>
      <p className="mt-2 text-slate-400">Keep your digital doors open 24/7.</p>

      <div className="mt-8 flex justify-center gap-3">
        {["Receptionist", "Scheduler", "Sales AI", "Call Routing"].map(
          (item) => (
            <span
              key={item}
              className="rounded-full bg-slate-900 px-4 py-1 text-xs text-white"
            >
              {item}
            </span>
          ),
        )}
      </div>
    </section>
  );
}
