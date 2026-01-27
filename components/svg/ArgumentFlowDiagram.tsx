export function ArgumentFlowDiagram() {
  return (
    <svg viewBox="0 0 600 360" className="w-full h-auto">
      <defs>
        <linearGradient id="arg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1D4ED8" stopOpacity="0.25" />
          <stop offset="1" stopColor="#0EA5A3" stopOpacity="0.25" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="600" height="360" rx="24" fill="url(#arg)" />

      {[
        ["Claim", 60],
        ["Reason", 160],
        ["Impact", 260],
      ].map(([label, y]) => (
        <g key={label}>
          <rect
            x="120"
            y={y as number}
            width="360"
            height="60"
            rx="14"
            fill="#fff"
          />
          <text
            x="300"
            y={(y as number) + 38}
            textAnchor="middle"
            fontSize="16"
            fontWeight="600"
            fill="#0f172a"
          >
            {label}
          </text>
        </g>
      ))}
    </svg>
  );
}
