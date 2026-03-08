import { useState } from "react";
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";
import { MOODS, WEEK } from "../data/constants";
import { useLang } from "../hooks/useLang";

export default function Tracker() {
  const { t } = useLang();
  const [selDay, setSelDay]   = useState(6);
  const [mood, setMood]       = useState<number|null>(null);
  const [sleep, setSleep]     = useState(7);
  const [water, setWater]     = useState(4);
  const [energy, setEnergy]   = useState<number|null>(null);
  const [saved, setSaved]     = useState(false);

  const SYMPTOMS = [
    t.anxious,t.tearful,t.hopeful,t.overwhelmed,
    t.tender,t.grateful,t.isolated,t.connected,
    t.sorebody,t.lowenergy,t.brainfog,t.atpeace,
  ];
  const [syms, setSyms] = useState<string[]>([]);
  const toggleSym = (s:string) => setSyms(p => p.includes(s)?p.filter(x=>x!==s):[...p,s]);

  const ENERGIES = ["😴","😐","🙂","✨","⚡"];

  const radarData = [
    { sub:"Mood",    v: mood  ?? 5 },
    { sub:"Sleep",   v: Math.round(sleep/1.2) },
    { sub:"Water",   v: Math.round(water/8*9) },
    { sub:"Energy",  v: ((energy??2)+1)*2 },
    { sub:"Balance", v: 6 },
  ];

  const saveDay = async () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div style={{ paddingBottom:100 }}>
      <div style={{ padding:"24px 20px 0" }}>
        <h2 className="serif fu" style={{ fontSize:26, color:"#3d1f2a", marginBottom:4 }}>{t.dailyWellness}</h2>
      </div>

      {/* Week strip */}
      <div style={{ display:"flex", gap:6, padding:"12px 16px", overflowX:"auto" }}>
        {WEEK.map((d,i) => (
          <button key={i} onClick={() => setSelDay(i)} style={{
            flexShrink:0, textAlign:"center", padding:"10px 14px", borderRadius:16,
            border:"none", cursor:"pointer", transition:"all .2s",
            background: selDay===i ? "#e91e8c" : "#fff0f5",
            color: selDay===i ? "white" : "#c2185b",
          }}>
            <p style={{ fontSize:11, marginBottom:4, fontFamily:"EB Garamond,serif", opacity:.8 }}>{d.day}</p>
            <p style={{ fontSize:20 }}>{MOODS.find(m=>m.s===d.mood)?.e}</p>
          </button>
        ))}
      </div>

      <div style={{ padding:"0 16px" }}>
        {/* Mood */}
        <div className="card" style={{ marginBottom:12 }}>
          <p className="serif" style={{ fontSize:16, color:"#3d1f2a", marginBottom:12 }}>{t.howMood}</p>
          <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
            {MOODS.map(m => (
              <button key={m.s} onClick={() => setMood(m.s)} style={{
                fontSize:24, padding:"8px 10px", borderRadius:14, border:"none", cursor:"pointer",
                background: mood===m.s ? "#fde8ee" : "transparent",
                transform: mood===m.s ? "scale(1.15)" : "scale(1)", transition:"all .2s",
              }}>{m.e}</button>
            ))}
          </div>
          {mood && <p style={{ fontSize:13, color:"#c2185b", marginTop:8, fontFamily:"EB Garamond,serif" }}>
            {t.feelingLabel} {MOODS.find(m=>m.s===mood)?.l}
          </p>}
        </div>

        {/* Sleep */}
        <div className="card" style={{ marginBottom:12 }}>
          <p className="serif" style={{ fontSize:16, color:"#3d1f2a", marginBottom:6 }}>
            {t.sleep}: {sleep}h
          </p>
          <div style={{ display:"flex", gap:4, marginBottom:10 }}>
            {Array.from({length:12},(_,i)=>(
              <div key={i} style={{
                flex:1, height:20, borderRadius:4,
                background: i<sleep ? "linear-gradient(to top,#e91e8c,#f48fb1)" : "#fde8ee",
                transition:"background .2s",
              }}/>
            ))}
          </div>
          <input type="range" min={0} max={12} value={sleep}
            onChange={e=>setSleep(Number(e.target.value))}
            style={{ width:"100%", accentColor:"#e91e8c" }}
          />
          <p style={{ fontSize:12, color:"#b07080", marginTop:6, fontFamily:"EB Garamond,serif", fontStyle:"italic" }}>
            {sleep<5 ? t.sleepLow : sleep<8 ? t.sleepMid : t.sleepHigh}
          </p>
        </div>

        {/* Water */}
        <div className="card" style={{ marginBottom:12 }}>
          <p className="serif" style={{ fontSize:16, color:"#3d1f2a", marginBottom:10 }}>
            {t.hydration}: {water}{t.glasses}
          </p>
          <div style={{ display:"flex", gap:8 }}>
            {Array.from({length:8},(_,i) => (
              <button key={i} onClick={() => setWater(i<water?i:i+1)} style={{
                fontSize:22, background:"none", border:"none", cursor:"pointer",
                opacity: i<water?1:.3, transition:"opacity .2s",
                transform: i<water?"scale(1.1)":"scale(1)",
              }}>💧</button>
            ))}
          </div>
        </div>

        {/* Energy */}
        <div className="card" style={{ marginBottom:12 }}>
          <p className="serif" style={{ fontSize:16, color:"#3d1f2a", marginBottom:10 }}>{t.energyLevel}</p>
          <div style={{ display:"flex", gap:10 }}>
            {ENERGIES.map((e,i) => (
              <button key={i} onClick={() => setEnergy(i)} style={{
                fontSize:28, background:"none", border:"none", cursor:"pointer",
                transform: energy===i ? "scale(1.2)" : "scale(1)",
                filter: energy===i ? "none" : "grayscale(60%)",
                transition:"all .2s",
              }}>{e}</button>
            ))}
          </div>
        </div>

        {/* Symptoms */}
        <div className="card" style={{ marginBottom:12 }}>
          <p className="serif" style={{ fontSize:16, color:"#3d1f2a", marginBottom:12 }}>{t.howToday}</p>
          <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
            {SYMPTOMS.map(s => (
              <button key={s} onClick={() => toggleSym(s)} style={{
                padding:"6px 14px", borderRadius:20, border:"none", cursor:"pointer",
                background: syms.includes(s) ? "#e91e8c" : "#fff0f5",
                color: syms.includes(s) ? "white" : "#c2185b",
                fontFamily:"EB Garamond,serif", fontSize:13, transition:"all .2s",
              }}>{s}</button>
            ))}
          </div>
        </div>

        {/* Radar */}
        <div className="card" style={{ marginBottom:12 }}>
          <ResponsiveContainer width="100%" height={200}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="#fde8ee"/>
              <PolarAngleAxis dataKey="sub" tick={{ fontSize:12, fill:"#b07080", fontFamily:"EB Garamond,serif" }}/>
              <Radar dataKey="v" stroke="#e91e8c" fill="#e91e8c" fillOpacity={.2} strokeWidth={2}/>
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Area chart */}
        <div className="card" style={{ marginBottom:12 }}>
          <p className="serif" style={{ fontSize:15, color:"#3d1f2a", marginBottom:12 }}>{t.thisWeek ?? "This Week"}</p>
          <ResponsiveContainer width="100%" height={100}>
            <AreaChart data={WEEK}>
              <defs>
                <linearGradient id="tg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#e91e8c" stopOpacity={.25}/>
                  <stop offset="95%" stopColor="#e91e8c" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="day" tick={{ fontSize:10, fill:"#b07080", fontFamily:"EB Garamond,serif" }} axisLine={false} tickLine={false}/>
              <YAxis hide domain={[0,9]}/>
              <Tooltip contentStyle={{ borderRadius:10, border:"1px solid #fde8ee", fontFamily:"EB Garamond,serif", fontSize:12 }}/>
              <Area type="monotone" dataKey="mood" stroke="#e91e8c" strokeWidth={2} fill="url(#tg)" dot={{ fill:"#e91e8c", r:3 }}/>
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <button onClick={saveDay} className="btn" style={{ width:"100%" }}>
          {saved ? t.savedDay : t.saveDay}
        </button>
      </div>
    </div>
  );
}
