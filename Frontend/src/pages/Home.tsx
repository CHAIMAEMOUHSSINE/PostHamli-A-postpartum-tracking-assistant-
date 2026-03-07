// ─── Home Page ────────────────────────────────────────────────────────────────

import { useState, useEffect } from "react";
import { AreaChart, Area, XAxis, ResponsiveContainer } from "recharts";
import Blossom from "../components/Blossom";
import { MOODS, AFFIRMATIONS, WEEK } from "../data/constants";
import type { PageId } from "../types";

interface HomeProps {
  onNav: (page: PageId) => void;
}

export default function Home({ onNav }: HomeProps) {
  const [aIdx, setAIdx] = useState(0);

  // Rotate affirmation every 6 seconds
  useEffect(() => {
    const t = setInterval(() => setAIdx((i) => (i + 1) % AFFIRMATIONS.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      {/* ── Hero ── */}
      <div style={{
        background: "linear-gradient(160deg,#fce4ec 0%,#f8bbd0 55%,#fce4ec 100%)",
        padding: "52px 20px 32px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Decorative blossoms */}
        <div style={{ position: "absolute", top: -16, right: -14, opacity: .18 }}>
          <Blossom size={130} opacity={1} />
        </div>
        <div style={{ position: "absolute", bottom: -10, left: -10, opacity: .1 }}>
          <Blossom size={80} opacity={1} />
        </div>

        <p className="fu" style={{ color: "#9c4060", fontSize: 13, letterSpacing: 1.4, textTransform: "uppercase", marginBottom: 6, fontFamily: "EB Garamond,serif" }}>
          Good morning
        </p>
        <h1 className="serif fu1" style={{ fontSize: 32, color: "#3d1f2a", lineHeight: 1.2, marginBottom: 8 }}>
          How are you<br /><em>feeling today?</em>
        </h1>
        <p className="fu2" style={{ color: "#9c4060", fontSize: 15, fontFamily: "EB Garamond,serif" }}>
          Your baby is 8 weeks old 🌸
        </p>

        {/* Quick mood row */}
        <div className="fu3" style={{ display: "flex", gap: 8, marginTop: 18, flexWrap: "wrap" }}>
          {MOODS.slice(2, 7).map((m) => (
            <button key={m.s} onClick={() => onNav("tracker")} style={{
              background: "rgba(255,255,255,.72)",
              border: "1px solid rgba(244,167,188,.6)",
              borderRadius: 12, padding: "7px 11px", cursor: "pointer",
              fontFamily: "EB Garamond,serif", fontSize: 13, color: "#7a3050",
              backdropFilter: "blur(8px)", transition: "all .2s",
            }}>
              {m.e} {m.l}
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: "0 16px" }}>
        {/* ── Affirmation card ── */}
        <div className="affcard fu" style={{ margin: "18px 0 12px" }}>
          <p style={{ fontSize: 10, color: "rgba(255,255,255,.7)", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 7, fontFamily: "EB Garamond,serif" }}>
            Daily Affirmation
          </p>
          <p className="serif" style={{ color: "white", fontSize: 18, lineHeight: 1.55, fontStyle: "italic" }}>
            "{AFFIRMATIONS[aIdx]}"
          </p>
          {/* Dot indicator */}
          <div style={{ display: "flex", gap: 4, marginTop: 12 }}>
            {AFFIRMATIONS.map((_, i) => (
              <div key={i} style={{
                width: i === aIdx ? 16 : 5,
                height: 5, borderRadius: 3,
                background: i === aIdx ? "white" : "rgba(255,255,255,.35)",
                transition: "width .3s",
              }} />
            ))}
          </div>
        </div>

        {/* ── Quick actions grid ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
          {[
            { t: "Write in Journal", s: "Express freely",    bg: "#fff8fa", bd: "#fde8ee", to: "journal"   as PageId },
            { t: "Log My Mood",      s: "Track how you feel", bg: "#f9f4ff", bd: "#e8d5f5", to: "tracker"   as PageId },
            { t: "Move Gently",      s: "Nurture your body",  bg: "#f0faf2", bd: "#c8e6c9", to: "movements" as PageId },
            { t: "Find Support",     s: "Resources & help",   bg: "#fff5e6", bd: "#ffe0b2", to: "wellness"  as PageId },
          ].map((a, i) => (
            <button key={i} onClick={() => onNav(a.to)} style={{
              background: a.bg, border: `1px solid ${a.bd}`, borderRadius: 18,
              padding: "16px 14px", cursor: "pointer", textAlign: "left", transition: "all .2s",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <p className="serif" style={{ fontSize: 15, color: "#3d1f2a", marginBottom: 3 }}>{a.t}</p>
              <p style={{ fontSize: 12, color: "#b07080", fontFamily: "EB Garamond,serif" }}>{a.s}</p>
            </button>
          ))}
        </div>

        {/* ── Mini chart ── */}
        <div className="card fu" style={{ marginBottom: 20 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <h3 className="serif" style={{ fontSize: 17, color: "#3d1f2a" }}>This Week</h3>
            <button onClick={() => onNav("tracker")} className="btn-g" style={{ fontSize: 13 }}>See all →</button>
          </div>
          <ResponsiveContainer width="100%" height={76}>
            <AreaChart data={WEEK}>
              <defs>
                <linearGradient id="hg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor="#e91e8c" stopOpacity={.22} />
                  <stop offset="95%" stopColor="#e91e8c" stopOpacity={0}   />
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="mood" stroke="#e91e8c" strokeWidth={2.5} fill="url(#hg)" dot={false} />
              <XAxis dataKey="day" tick={{ fontSize: 10, fill: "#c9a4b0", fontFamily: "EB Garamond,serif" }} axisLine={false} tickLine={false} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
