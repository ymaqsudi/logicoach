export function BrandShapes({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="520"
      height="520"
      viewBox="0 0 520 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="520" y2="520">
          <stop stopColor="#1D4ED8" stopOpacity="0.22" />
          <stop offset="1" stopColor="#0EA5A3" stopOpacity="0.18" />
        </linearGradient>
      </defs>

      <circle cx="350" cy="140" r="120" fill="url(#g1)" />
      <circle cx="420" cy="300" r="90" fill="url(#g1)" />
      <rect x="120" y="320" width="220" height="220" rx="56" fill="url(#g1)" />
      <path
        d="M70 210 C140 120, 230 80, 330 110"
        stroke="#1D4ED8"
        strokeOpacity="0.25"
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  );
}
