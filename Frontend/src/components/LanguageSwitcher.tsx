// ─── LanguageSwitcher ─────────────────────────────────────────────────────────

import { useState } from "react";
import { LANG_META, Lang } from "../data/i18n";
import { useLang } from "../hooks/useLang";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const langs = Object.keys(LANG_META) as Lang[];

  return (
    <div style={{ position: "relative", zIndex: 300 }}>
      {/* Current lang button */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          background: "rgba(255,255,255,0.9)", backdropFilter: "blur(8px)",
          border: "1.5px solid #fde8ee", borderRadius: 20,
          padding: "6px 12px", cursor: "pointer",
          fontFamily: "EB Garamond, serif", fontSize: 13,
          color: "#c2185b", display: "flex", alignItems: "center", gap: 6,
          boxShadow: "0 2px 10px rgba(233,30,140,.12)",
          transition: "all .2s",
        }}
        aria-label="Select language"
      >
        <span>{LANG_META[lang].flag}</span>
        <span>{LANG_META[lang].label}</span>
        <span style={{ fontSize: 10, opacity: .6 }}>{open ? "▲" : "▼"}</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div style={{
          position: "absolute", top: "calc(100% + 6px)",
          right: 0, background: "white",
          border: "1px solid #fde8ee", borderRadius: 16,
          boxShadow: "0 8px 24px rgba(233,30,140,.15)",
          overflow: "hidden", minWidth: 140,
          animation: "fadeUp .2s ease both",
        }}>
          {langs.map(l => (
            <button
              key={l}
              onClick={() => { setLang(l); setOpen(false); }}
              style={{
                display: "flex", alignItems: "center", gap: 10,
                width: "100%", padding: "11px 16px",
                background: l === lang ? "#fff0f5" : "white",
                border: "none", cursor: "pointer",
                fontFamily: "EB Garamond, serif", fontSize: 14,
                color: l === lang ? "#c2185b" : "#3d1f2a",
                fontWeight: l === lang ? 600 : 400,
                transition: "background .15s",
                textAlign: "left",
                borderBottom: "1px solid #fde8ee",
              }}
              onMouseEnter={e => { if (l !== lang) e.currentTarget.style.background = "#fff8fa"; }}
              onMouseLeave={e => { if (l !== lang) e.currentTarget.style.background = "white"; }}
            >
              <span style={{ fontSize: 18 }}>{LANG_META[l].flag}</span>
              <span>{LANG_META[l].label}</span>
              {l === lang && <span style={{ marginLeft: "auto", color: "#e91e8c" }}>✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
