type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`mb-14 max-w-3xl ${alignment}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-medium text-indigo-600">{eyebrow}</p>
      )}

      <h2 className="text-4xl font-semibold tracking-tight text-slate-900">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}
