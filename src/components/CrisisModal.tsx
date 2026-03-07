// ─── CrisisModal ─────────────────────────────────────────────────────────────
// Shown when AI detects [ESCALATE] or when user taps SOS button

interface CrisisModalProps {
  onClose: () => void;
}

export default function CrisisModal({ onClose }: CrisisModalProps) {
  return (
    <div className="overlay" onClick={onClose}>
      <div className="sheet" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 18 }}>
          <div style={{ fontSize: 36, marginBottom: 8 }}>🌸</div>
          <h2 className="serif" style={{ fontSize: 22, color: "#c2185b", marginBottom: 8 }}>
            You deserve real support
          </h2>
          <p style={{ color: "#7a5060", fontSize: 15, lineHeight: 1.65, fontFamily: "EB Garamond, serif" }}>
            If you are having thoughts of harming yourself or your baby, please reach out
            immediately. You are seen, you are loved, you are not alone.
          </p>
        </div>

        {/* Primary CTA — Crisis Lifeline */}
        <button
          onClick={() => window.open("tel:988")}
          className="btn"
          style={{ marginBottom: 10, background: "linear-gradient(135deg,#c62828,#b71c1c)" }}
        >
          📞 Call 988 — Crisis Lifeline
        </button>

        {/* PSI */}
        <button
          onClick={() => window.open("tel:18009444773")}
          className="btn-o"
          style={{ marginBottom: 10 }}
        >
          Postpartum Support Int'l — 1-800-944-4773
        </button>

        {/* Text line */}
        <button
          onClick={() => window.open("sms:741741")}
          className="btn-o"
          style={{ marginBottom: 16 }}
        >
          Crisis Text Line — Text HOME to 741741
        </button>

        {/* Dismiss */}
        <button
          onClick={onClose}
          style={{
            background: "none", border: "none", cursor: "pointer",
            fontFamily: "EB Garamond, serif", color: "#aaa",
            fontSize: 14, width: "100%", padding: "8px",
          }}
        >
          I am safe right now
        </button>
      </div>
    </div>
  );
}
