// ─── Tracker Page — Daily Wellness ────────────────────────────────────────────

import { useState } from "react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar,
} from "recharts";
import { MOODS, WEEK } from "../data/constants";

export default function Tracker() {
  const [moodVal, setMoodVal]   = useState<number | null>(null);
  const [sleep, setSleep]       = useState(6);
  const [water, setWater]       = useState(4);
  const [energy, setEnergy]     = useState<number | null>(null);
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [saved, setSaved]       = useState(false);

  const toggleS = (s: string) =>
    setSymptoms((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

  const radar = [
    { subject: "Mood",    value: moodVal ?? 5 },
    { subject: "Sleep",   value: Math.min(9, Math.round(sleep * 1.5)) },
    { subject: "Water",   value: Math.min(9, Math.round(water * 1.1)) },
    { subject: "Energy",  value: energy ?? 5 },
    { subject: "Balance", value: symptoms.includes("At peace") ? 8 : symptoms.includes("Overwhelmed") ? 2 : 5 },
  ];

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div>
      {/* Header */}
      <div style={{ padding: "24px 20px 0" }}>
        <h2 className="serif fu" style={{ fontSize: 26, color: "#3d1f2a", marginBottom: 3 }}>Daily Wellness</h2>
        <p className="fu1" style={{ color: "#b07080", fontSize: 15, fontStyle: "italic", marginBottom: 18, fontFamily: "EB Garamond,serif" }}>
          {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
        </p>
      </div>

      {/* Week strip */}
      <div className="hscroll">
        {WEEK.map((d, i) => (
          <div key={i} style={{
            minWidth: 52, textAlign: "center", padding: "10px 6px",
            background: i === 6 ? "#fff0f5" : "white",
            borderRadius: 14,
            border: i === 6 ? "1.5px solid #f4a7bc" : "1px solid #fde8ee",
            flexShrink: 0,
          }}>
            <p style={{ fontSize: 10, color: "#c9a4b0", fontFamily: "EB Garamond,serif", marginBottom: 3 }}>{d.day}</p>
            <div style={{ fontSize: 22 }}>{MOODS[d.mood - 1]?.e}</div>
            <p style={{ fontSize: 9, color: i === 6 ? "#c2185b" : "#d4a0ae", marginTop: 2, fontFamily: "EB Garamond,serif" }}>
              {i === 6 ? "Today" : `${d.mood}/9`}
            </p>
          </div>
        ))}
      </div>

      <div style={{ padding: "10px 16px 24px" }}>

        {/* ── Mood selector ── */}
        <div className="card" style={{ marginBottom: 12 }}>
          <h3 className="serif" style={{ fontSize: 17, color: "#3d1f2a", marginBottom: 12 }}>How is your mood?</h3>
          <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
            {MOODS.map((m) => (
              <button key={m.s} className={`meb ${moodVal === m.s ? "on" : ""}`}
                onClick={() => setMoodVal(m.s)} title={m.l}>{m.e}</button>
            ))}
          </div>
          {moodVal && (
            <p style={{ marginTop: 8, fontSize: 14, color: "#c2185b", fontFamily: "EB Garamond,serif" }}>
              Feeling: <strong>{MOODS[moodVal - 1]?.l}</strong>
            </p>
          )}
        </div>

        {/* ── Sleep slider ── */}
        <div className="card" style={{ marginBottom: 12 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <h3 className="serif" style={{ fontSize: 17, color: "#3d1f2a" }}>Sleep</h3>
            <span className="serif" style={{ fontSize: 28, color: "#9c27b0", fontWeight: 700 }}>
              {sleep}<span style={{ fontSize: 14, color: "#b07080", fontWeight: 400 }}>h</span>
            </span>
          </div>
          <input type="range" min={0} max={12} step={0.5} value={sleep}
            onChange={(e) => setSleep(+e.target.value)}
            style={{ width: "100%", height: 4, accentColor: "#9c27b0" }} />
          <div style={{ display: "flex", gap: 3, marginTop: 10 }}>
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="sleepbar" style={{ flex: 1, background: i < sleep ? "#ce93d8" : "#f3e5f5" }} />
            ))}
          </div>
          <p style={{ fontSize: 12, color: "#b07080", marginTop: 8, fontFamily: "EB Garamond,serif", fontStyle: "italic" }}>
            {sleep < 4
              ? "Rest is sacred — even small naps matter."
              : sleep < 6
              ? "You're doing what you can. Be gentle with yourself."
              : "Beautiful. Your body heals through rest."}
          </p>
        </div>

        {/* ── Water tracker ── */}
        <div className="card" style={{ marginBottom: 12 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <h3 className="serif" style={{ fontSize: 17, color: "#3d1f2a" }}>Hydration</h3>
            <p style={{ fontSize: 14, color: "#1976d2", fontFamily: "EB Garamond,serif" }}>{water} / 8 glasses</p>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="water" onClick={() => setWater(i + 1)}
                style={{ filter: i < water ? "none" : "grayscale(1) opacity(.35)" }}>
                💧
              </span>
            ))}
          </div>
          <div style={{ height: 5, background: "#e3f2fd", borderRadius: 3, marginTop: 12, overflow: "hidden" }}>
            <div style={{
              height: "100%", background: "linear-gradient(90deg,#64b5f6,#1976d2)",
              borderRadius: 3, width: `${(water / 8) * 100}%`, transition: "width .3s",
            }} />
          </div>
        </div>

        {/* ── Energy selector ── */}
        <div className="card" style={{ marginBottom: 12 }}>
          <h3 className="serif" style={{ fontSize: 17, color: "#3d1f2a", marginBottom: 12 }}>Energy Level</h3>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {[
              { v: 1, e: "🪫", l: "Depleted" },
              { v: 3, e: "😴", l: "Tired"    },
              { v: 5, e: "🌿", l: "Okay"     },
              { v: 7, e: "🌸", l: "Bright"   },
              { v: 9, e: "✨", l: "Vibrant"  },
            ].map((en) => (
              <button key={en.v} onClick={() => setEnergy(en.v)} style={{
                display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
                padding: "10px 6px", borderRadius: 14, border: "1.5px solid",
                borderColor: energy === en.v ? "#e91e8c" : "#fde8ee",
                background: energy === en.v ? "#fff0f5" : "white",
                cursor: "pointer", transition: "all .2s", minWidth: 54,
              }}>
                <span style={{ fontSize: 24 }}>{en.e}</span>
                <span style={{ fontSize: 10, color: energy === en.v ? "#c2185b" : "#b07080", fontFamily: "EB Garamond,serif" }}>
                  {en.l}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Symptoms / Feelings ── */}
        <div className="card" style={{ marginBottom: 12 }}>
          <h3 className="serif" style={{ fontSize: 17, color: "#3d1f2a", marginBottom: 12 }}>How do you feel today?</h3>
          <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
            {["Anxious", "Tearful", "Hopeful", "Overwhelmed", "Tender", "Grateful",
              "Isolated", "Connected", "Sore body", "Low energy", "Brain fog", "At peace"].map((s) => (
              <button key={s} onClick={() => toggleS(s)} style={{
                padding: "6px 13px", borderRadius: 20, border: "1px solid",
                borderColor: symptoms.includes(s) ? "#e91e8c" : "#fde8ee",
                background: symptoms.includes(s) ? "#fff0f5" : "white",
                color: symptoms.includes(s) ? "#c2185b" : "#9c6070",
                fontFamily: "EB Garamond,serif", fontSize: 14, cursor: "pointer", transition: "all .2s",
              }}>{s}</button>
            ))}
          </div>
        </div>

        {/* ── Radar chart ── */}
        {(moodVal || energy) && (
          <div className="card" style={{ marginBottom: 12 }}>
            <h3 className="serif" style={{ fontSize: 17, color: "#3d1f2a", marginBottom: 2 }}>Today's Overview</h3>
            <p style={{ fontSize: 13, color: "#b07080", fontStyle: "italic", marginBottom: 8, fontFamily: "EB Garamond,serif" }}>
              A gentle picture of your day
            </p>
            <ResponsiveContainer width="100%" height={190}>
              <RadarChart data={radar}>
                <PolarGrid stroke="#fde8ee" />
                <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12, fill: "#b07080", fontFamily: "EB Garamond,serif" }} />
                <Radar dataKey="value" stroke="#e91e8c" fill="#e91e8c" fillOpacity={.18} strokeWidth={2} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* ── Week chart ── */}
        <div className="card" style={{ marginBottom: 12 }}>
          <h3 className="serif" style={{ fontSize: 17, color: "#3d1f2a", marginBottom: 12 }}>Mood This Week</h3>
          <ResponsiveContainer width="100%" height={115}>
            <AreaChart data={WEEK}>
              <defs>
                <linearGradient id="tg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor="#e91e8c" stopOpacity={.18} />
                  <stop offset="95%" stopColor="#e91e8c" stopOpacity={0}   />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#fde8ee" />
              <XAxis dataKey="day" tick={{ fontSize: 11, fill: "#c9a4b0", fontFamily: "EB Garamond,serif" }} axisLine={false} tickLine={false} />
              <YAxis domain={[0, 9]} tick={{ fontSize: 11, fill: "#c9a4b0" }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ fontFamily: "EB Garamond,serif", borderRadius: 12, border: "1px solid #fde8ee", fontSize: 13 }} />
              <Area type="monotone" dataKey="mood" stroke="#e91e8c" strokeWidth={2.5} fill="url(#tg)"
                dot={{ fill: "#e91e8c", strokeWidth: 0, r: 4 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* ── Save button ── */}
        <button onClick={handleSave} className="btn">
          {saved ? "✓ Saved for today" : "Save Today's Entry"}
        </button>
      </div>
    </div>
  );
}
