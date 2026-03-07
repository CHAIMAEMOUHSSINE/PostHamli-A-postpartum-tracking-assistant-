// ─── Movements Page ───────────────────────────────────────────────────────────

import { useState } from "react";
import { MOVES } from "../data/constants";
import type { Movement } from "../types";

export default function Movements() {
  const [selected, setSelected] = useState<Movement | null>(null);
  const [done, setDone]         = useState<Set<number>>(new Set());

  // ── Exercise detail view ──
  if (selected) return (
    <div>
      <div style={{ padding: "20px 20px 0" }}>
        <button onClick={() => setSelected(null)} className="btn-g">← Back</button>
      </div>
      <div style={{ padding: "16px 20px 24px" }}>
        {/* Hero card */}
        <div style={{
          background: selected.color, borderRadius: 24, padding: "28px 22px",
          marginBottom: 18, border: `1px solid ${selected.accent}20`,
        }}>
          <div style={{ fontSize: 52, marginBottom: 10 }}>{selected.emoji}</div>
          <h2 className="serif" style={{ fontSize: 26, color: "#3d1f2a", marginBottom: 4 }}>{selected.name}</h2>
          <p style={{ color: "#888", fontFamily: "EB Garamond,serif", fontSize: 14 }}>⏱ {selected.dur}</p>
        </div>

        {/* Steps */}
        <div className="card" style={{ marginBottom: 14 }}>
          <h4 className="serif" style={{ fontSize: 17, color: "#3d1f2a", marginBottom: 14 }}>How to do it</h4>
          {selected.steps.map((step, i) => (
            <div key={i} style={{ display: "flex", gap: 12, marginBottom: 12 }}>
              <div style={{
                width: 28, height: 28, borderRadius: "50%",
                background: selected.accent, color: "white",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: "bold", fontSize: 13, flexShrink: 0,
                fontFamily: "EB Garamond,serif",
              }}>{i + 1}</div>
              <p style={{ fontSize: 15, color: "#555", lineHeight: 1.6, fontFamily: "EB Garamond,serif" }}>{step}</p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div style={{
          background: selected.color, borderRadius: 16, padding: "16px 18px",
          marginBottom: 20, border: `1px solid ${selected.accent}25`,
        }}>
          <h4 style={{ color: selected.accent, fontSize: 13, marginBottom: 6, fontWeight: 600, textTransform: "uppercase", letterSpacing: .8 }}>
            ✨ Benefits
          </h4>
          <p style={{ color: "#555", fontSize: 15, fontFamily: "EB Garamond,serif" }}>{selected.benefit}</p>
        </div>

        {/* Done button */}
        <button
          onClick={() => setDone((d) => { const n = new Set(d); n.add(selected.id); return n; })}
          className="btn"
          style={done.has(selected.id) ? { background: "linear-gradient(135deg,#4caf50,#388e3c)" } : {}}
        >
          {done.has(selected.id) ? "✓ Well done! Come back tomorrow 🌸" : `Start — ${selected.name}`}
        </button>
      </div>
    </div>
  );

  // ── Exercise list ──
  return (
    <div>
      <div style={{ padding: "24px 20px 0" }}>
        <h2 className="serif fu" style={{ fontSize: 26, color: "#3d1f2a", marginBottom: 4 }}>Gentle Movements</h2>
        <p className="fu1" style={{ color: "#b07080", fontSize: 15, fontStyle: "italic", marginBottom: 20, fontFamily: "EB Garamond,serif" }}>
          Nurture your body — one breath at a time.
        </p>
      </div>
      <div style={{ padding: "0 16px 24px" }}>
        {MOVES.map((m) => (
          <div key={m.id} className="ecard" style={{ background: m.color, border: `1px solid ${m.accent}18` }}
            onClick={() => setSelected(m)}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,.08)")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
          >
            <div style={{ fontSize: 44, lineHeight: 1 }}>{m.emoji}</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3 }}>
                <p className="serif" style={{ fontSize: 17, color: "#3d1f2a" }}>{m.name}</p>
                {done.has(m.id) && <span style={{ fontSize: 12, color: m.accent, fontWeight: 600 }}>✓ Done</span>}
              </div>
              <p style={{ fontSize: 13, color: "#888", fontFamily: "EB Garamond,serif" }}>⏱ {m.dur} · {m.benefit}</p>
            </div>
            <span style={{ color: m.accent, fontSize: 20 }}>›</span>
          </div>
        ))}
      </div>
    </div>
  );
}
