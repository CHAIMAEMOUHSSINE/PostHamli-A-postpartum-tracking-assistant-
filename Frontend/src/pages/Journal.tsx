// ─── Journal Page ─────────────────────────────────────────────────────────────

import { useState } from "react";
import Blossom from "../components/Blossom";
import { MOODS, DEMO_ENTRIES } from "../data/constants";
import type { JournalEntry } from "../types";

export default function Journal() {
  const [view, setView] = useState<"write" | "history">("write");
  const [text, setText] = useState("");
  const [mood, setMood] = useState<number | null>(null);
  const [tagStr, setTagStr] = useState("");
  const [saving, setSaving] = useState(false);
  const [savedMsg, setSavedMsg] = useState(false);
  const [selected, setSelected] = useState<JournalEntry | null>(null);
  const [entries, setEntries] = useState<JournalEntry[]>(DEMO_ENTRIES);

  const save = () => {
    if (!text.trim()) return;
    setSaving(true);
    setTimeout(() => {
      const now = new Date();
      setEntries((prev) => [{
        id: Date.now(),
        text: text.trim(),
        mood: mood ?? 5,
        date: now.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
        time: now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
        tags: tagStr ? tagStr.split(",").map((t) => t.trim()).filter(Boolean) : [],
      }, ...prev]);
      setText("");
      setMood(null);
      setTagStr("");
      setSaving(false);
      setSavedMsg(true);
      setTimeout(() => setSavedMsg(false), 2500);
      setView("history");
    }, 500);
  };

  // ── Entry detail view ──
  if (selected) return (
    <div>
      <div style={{ padding: "20px 20px 0" }}>
        <button onClick={() => setSelected(null)} className="btn-g">← Back</button>
      </div>
      <div style={{ padding: "16px 20px 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
          <div>
            <p className="serif" style={{ fontSize: 20, color: "#3d1f2a" }}>{selected.date}</p>
            <p style={{ fontSize: 13, color: "#b07080", fontFamily: "EB Garamond,serif", marginTop: 2 }}>{selected.time}</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 38 }}>{MOODS[selected.mood - 1]?.e}</div>
            <p style={{ fontSize: 11, color: "#b07080", fontFamily: "EB Garamond,serif" }}>{MOODS[selected.mood - 1]?.l}</p>
          </div>
        </div>
        <div className="card" style={{ marginBottom: 14 }}>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "#3d1f2a", fontFamily: "EB Garamond,serif" }}>
            {selected.text}
          </p>
        </div>
        {selected.tags.length > 0 && (
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {selected.tags.map((t, i) => <span key={i} className="tag">#{t}</span>)}
          </div>
        )}
      </div>
    </div>
  );

  // ── Main journal view ──
  return (
    <div>
      <div style={{ padding: "24px 20px 0", position: "relative" }}>
        <div style={{ position: "absolute", top: 12, right: 14, opacity: .12 }}>
          <Blossom size={60} opacity={1} />
        </div>
        <h2 className="serif fu" style={{ fontSize: 26, color: "#3d1f2a", marginBottom: 4 }}>My Journal</h2>
        <p className="fu1" style={{ color: "#b07080", fontSize: 15, fontStyle: "italic", marginBottom: 18, fontFamily: "EB Garamond,serif" }}>
          Your thoughts, kept safe here.
        </p>

        {/* Tab switcher */}
        <div style={{ display: "flex", gap: 8, marginBottom: 18, background: "#fff0f5", borderRadius: 14, padding: 4 }}>
          {(["write", "history"] as const).map((v) => (
            <button key={v} onClick={() => setView(v)} style={{
              flex: 1, padding: "10px", borderRadius: 10, border: "none",
              background: view === v ? "white" : "transparent",
              color: view === v ? "#c2185b" : "#b07080",
              fontFamily: "EB Garamond,serif", fontSize: 15,
              fontWeight: view === v ? 600 : 400, cursor: "pointer",
              boxShadow: view === v ? "0 2px 8px rgba(233,30,140,.1)" : "none",
              transition: "all .2s",
            }}>
              {v === "write" ? "Write" : `History (${entries.length})`}
            </button>
          ))}
        </div>
      </div>

      {/* ── Write view ── */}
      {view === "write" ? (
        <div style={{ padding: "0 20px 24px" }}>
          <p style={{ color: "#9c4060", fontSize: 14, marginBottom: 8, fontFamily: "EB Garamond,serif" }}>
            How are you feeling right now?
          </p>
          <div style={{ display: "flex", gap: 6, marginBottom: 14, flexWrap: "wrap" }}>
            {MOODS.map((m) => (
              <button key={m.s} className={`meb ${mood === m.s ? "on" : ""}`} onClick={() => setMood(m.s)} title={m.l}>
                {m.e}
              </button>
            ))}
          </div>
          <textarea
            className="input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write freely… this is only yours."
            rows={9}
            style={{ lineHeight: 1.8, fontSize: 17, marginBottom: 10 }}
          />
          <input
            className="input"
            value={tagStr}
            onChange={(e) => setTagStr(e.target.value)}
            placeholder="Tags (e.g. tired, grateful, peaceful)"
            style={{ fontSize: 14, marginBottom: 14 }}
          />
          <button onClick={save} className="btn" disabled={!text.trim()}>
            {saving ? "Saving…" : savedMsg ? "Saved ✓" : "Save This Entry"}
          </button>
          <p style={{ textAlign: "center", fontSize: 12, color: "#c9a4b0", marginTop: 10, fontFamily: "EB Garamond,serif", fontStyle: "italic" }}>
            Your journal is private and never shared.
          </p>
        </div>
      ) : (
        /* ── History view ── */
        <div style={{ padding: "0 20px 24px" }}>
          {entries.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <Blossom size={56} opacity={.28} />
              <p className="serif" style={{ color: "#c9a4b0", marginTop: 14, fontSize: 17 }}>
                Your story begins when you write.
              </p>
            </div>
          ) : entries.map((e) => (
            <div key={e.id} className="jcard" onClick={() => setSelected(e)}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 7 }}>
                <div>
                  <p className="serif" style={{ fontSize: 15, color: "#3d1f2a" }}>{e.date}</p>
                  <p style={{ fontSize: 12, color: "#c9a4b0", fontFamily: "EB Garamond,serif" }}>{e.time}</p>
                </div>
                <span style={{ fontSize: 28 }}>{MOODS[e.mood - 1]?.e}</span>
              </div>
              <p style={{
                fontSize: 15, color: "#6d4050", lineHeight: 1.6, fontFamily: "EB Garamond,serif",
                overflow: "hidden", display: "-webkit-box",
                WebkitLineClamp: 2, WebkitBoxOrient: "vertical",
              } as React.CSSProperties}>
                {e.text}
              </p>
              {e.tags.length > 0 && (
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 8 }}>
                  {e.tags.map((t, i) => <span key={i} className="tag" style={{ fontSize: 11 }}>#{t}</span>)}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
