type StatsPillProps = {
  title: string;
  description: string;
  accent?: "indigo" | "violet" | "sky" | "teal";
};

export default function StatsPill({
  title,
  description,
  accent = "indigo",
}: StatsPillProps) {
  const accents = {
    indigo: {
      bar: "bg-indigo-500",
      ring: "ring-indigo-200",
    },
    violet: {
      bar: "bg-violet-500",
      ring: "ring-violet-200",
    },
    sky: {
      bar: "bg-sky-500",
      ring: "ring-sky-200",
    },
    teal: {
      bar: "bg-teal-500",
      ring: "ring-teal-200",
    },
  };

  const a = accents[accent];

  return (
    <div
      className={`group relative rounded-2xl bg-white p-6 shadow-sm ring-1 ${a.ring} transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
    >
      {/* Accent bar */}
      <div
        className={`absolute left-0 top-0 h-full w-1 rounded-l-2xl ${a.bar}`}
      />

      <h3 className="text-sm font-semibold text-slate-900">{title}</h3>

      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        {description}
      </p>
    </div>
  );
}
