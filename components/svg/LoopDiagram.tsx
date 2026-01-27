export function LoopDiagram() {
  return (
    <svg
      viewBox="0 0 900 520"
      className="h-auto w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1D4ED8" stopOpacity="0.18" />
          <stop offset="1" stopColor="#0EA5A3" stopOpacity="0.18" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect x="0" y="0" width="900" height="520" rx="28" fill="url(#bg)" />

      {/* Nodes */}
      <Node
        x={90}
        y={140}
        title="Live Coaching"
        subtitle="In the moment\nBetween rounds\nAfter scenarios"
        tone="blue"
      />
      <Node
        x={580}
        y={90}
        title="AI Feedback"
        subtitle="Clarity\nConfidence\nFiller words\nPersuasion signals"
        tone="teal"
      />
      <Node
        x={580}
        y={310}
        title="Capstone Showcase"
        subtitle="Visibility\nMotivation\nInternal champions\nReadiness proof"
        tone="dark"
      />

      {/* Center */}
      <rect
        x="330"
        y="200"
        width="240"
        height="120"
        rx="18"
        fill="#fff"
        opacity="0.96"
      />
      <text
        x="450"
        y="245"
        textAnchor="middle"
        fontSize="18"
        fontWeight="700"
        fill="#0f172a"
      >
        LogiCoach System
      </text>
      <text x="450" y="275" textAnchor="middle" fontSize="13" fill="#334155">
        Coaching creates behavior. AI proves it stuck.
      </text>

      {/* Arrows */}
      <Arrow x1={260} y1={200} x2={330} y2={240} />
      <Arrow x1={520} y1={190} x2={580} y2={155} />
      <Arrow x1={520} y1={330} x2={580} y2={365} />
      <Arrow x1={330} y1={280} x2={260} y2={260} />
    </svg>
  );
}

function Node({
  x,
  y,
  title,
  subtitle,
  tone,
}: {
  x: number;
  y: number;
  title: string;
  subtitle: string;
  tone: "blue" | "teal" | "dark";
}) {
  const stroke =
    tone === "blue" ? "#1D4ED8" : tone === "teal" ? "#0EA5A3" : "#0B1B3A";

  return (
    <>
      <rect
        x={x}
        y={y}
        width="260"
        height="170"
        rx="18"
        fill="#fff"
        opacity="0.96"
        stroke={stroke}
        strokeWidth="3"
      />
      <text x={x + 20} y={y + 40} fontSize="18" fontWeight="700" fill="#0f172a">
        {title}
      </text>
      {subtitle.split("\n").map((line, idx) => (
        <text
          key={line}
          x={x + 20}
          y={y + 74 + idx * 22}
          fontSize="14"
          fill="#334155"
        >
          • {line}
        </text>
      ))}
    </>
  );
}

function Arrow({
  x1,
  y1,
  x2,
  y2,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}) {
  return (
    <>
      <path
        d={`M ${x1} ${y1} C ${(x1 + x2) / 2} ${y1}, ${
          (x1 + x2) / 2
        } ${y2}, ${x2} ${y2}`}
        stroke="#0f172a"
        strokeOpacity="0.35"
        strokeWidth="4"
        fill="none"
      />
      <circle cx={x2} cy={y2} r="6" fill="#0f172a" opacity="0.55" />
    </>
  );
}
