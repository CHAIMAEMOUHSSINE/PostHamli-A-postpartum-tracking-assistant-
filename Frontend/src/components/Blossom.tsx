// ─── Blossom SVG Decoration ───────────────────────────────────────────────────

interface BlossomProps {
  size?: number;
  opacity?: number;
}

export default function Blossom({ size = 48, opacity = 0.35 }: BlossomProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ opacity, display: "block" }}>
      {[0, 72, 144, 216, 288].map((a, i) => (
        <ellipse
          key={i}
          cx="50" cy="28" rx="11" ry="20"
          fill="#f48fb1"
          transform={`rotate(${a} 50 50)`}
          opacity=".82"
        />
      ))}
      <circle cx="50" cy="50" r="11" fill="#fce4ec" />
      <circle cx="50" cy="50" r="5"  fill="#e91e8c" />
    </svg>
  );
}
