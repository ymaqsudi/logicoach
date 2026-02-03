// components/platform/FeatureCard.tsx
interface FeatureCardProps {
  title: string;
  description: string;
  reverse?: boolean;
}

export default function FeatureCard({
  title,
  description,
  reverse,
}: FeatureCardProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div
        className={`grid items-center gap-12 md:grid-cols-2 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        <div>
          <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
          <p className="mt-4 text-slate-500">{description}</p>

          <button className="mt-6 flex items-center gap-2 text-sm font-medium text-teal-600">
            ▶ Listen to Logicoach
          </button>
        </div>

        <div className="h-72 rounded-xl bg-white shadow-md" />
      </div>
    </section>
  );
}
