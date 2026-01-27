export function ScoringRadar() {
  return (
    <svg viewBox="0 0 300 300" className="w-full h-auto">
      <circle cx="150" cy="150" r="120" fill="#f1f5f9" />
      <polygon
        points="150,50 220,120 200,210 100,210 80,120"
        fill="#1d4ed8"
        fillOpacity="0.25"
      />
      <circle cx="150" cy="150" r="3" fill="#0f172a" />
    </svg>
  );
}
