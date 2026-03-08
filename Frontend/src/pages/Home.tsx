import { useState, useEffect } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Blossom from "../components/Blossom";
import { MOODS, WEEK } from "../data/constants";
import { useLang } from "../hooks/useLang";
import type { PageId } from "../types";

const QUICK: { icon:string; nav:PageId; bgk:"writeJournal"|"logMood"|"moveGently"|"findSupport"; subk:"writeJournalSub"|"logMoodSub"|"moveGentlySub"|"findSupportSub"; bg:string; a:string }[] = [
  { icon:"", nav:"journal",   bgk:"writeJournal",  subk:"writeJournalSub",  bg:"#fff0f5", a:"#e91e8c" },
  { icon:"", nav:"tracker",   bgk:"logMood",       subk:"logMoodSub",       bg:"#f3e5f5", a:"#9c27b0" },
  { icon:"", nav:"movements", bgk:"moveGently",    subk:"moveGentlySub",    bg:"#e8f5e9", a:"#388e3c" },
  { icon:"", nav:"wellness",  bgk:"findSupport",   subk:"findSupportSub",   bg:"#e3f2fd", a:"#1976d2" },
];

export default function Home({ onNav }: { onNav:(p:PageId)=>void }) {
  const { t } = useLang();
  const [aIdx, setAIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setAIdx(i => (i+1) % t.affirmList.length), 6000);
    return () => clearInterval(id);
  }, [t]);

  const hour = new Date().getHours();
  const greet = hour < 12 ? t.goodMorning : hour < 18 ? (t.goodMorning) : t.goodMorning;

  return (
    <div>
      {/* Hero */}
      <div style={{
        background:"linear-gradient(160deg,#fff0f5 0%,#fce4ec 50%,#f8bbd0 100%)",
        padding:"24px 22px 28px", position:"relative", overflow:"hidden",
      }}>
        <div style={{ position:"absolute", top:-10, right:-10, opacity:.2 }}><Blossom size={140}/></div>
        <p style={{ fontSize:14, color:"#c2185b", fontFamily:"EB Garamond,serif", marginBottom:4 }}>
          {greet} 🌸
        </p>
        <h1 className="serif fu" style={{ fontSize:28, color:"#3d1f2a", lineHeight:1.3, marginBottom:10, whiteSpace:"pre-line" }}>
          {t.howFeeling}
        </h1>
        <p className="fu1" style={{ fontSize:13, color:"#ad5070", fontFamily:"EB Garamond,serif" }}>
          {t.babyAge}
        </p>

        {/* Mood strip */}
        <div className="fu2" style={{ display:"flex", gap:8, marginTop:18, overflowX:"auto", paddingBottom:4 }}>
          {MOODS.map(m => (
            <button key={m.s} style={{
              background:"rgba(255,255,255,.7)", border:"none", borderRadius:14,
              padding:"8px 10px", cursor:"pointer", flexShrink:0, transition:"transform .2s",
            }}
              onMouseEnter={e=>(e.currentTarget.style.transform="scale(1.1)")}
              onMouseLeave={e=>(e.currentTarget.style.transform="scale(1)")}
            >
              <span style={{ fontSize:24 }}>{m.e}</span>
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding:"16px 16px 0" }}>
        {/* Affirmation card */}
        <div className="affcard fu3" style={{ marginBottom:14 }}>
          <p style={{ fontSize:11, color:"rgba(255,255,255,.7)", textTransform:"uppercase", letterSpacing:1.5, marginBottom:8, fontFamily:"EB Garamond,serif" }}>
            {t.dailyAffirm}
          </p>
          <p className="serif" style={{ fontSize:18, color:"white", lineHeight:1.6, fontStyle:"italic" }}>
            "{t.affirmList[aIdx]}"
          </p>
          <div style={{ display:"flex", gap:4, marginTop:12 }}>
            {t.affirmList.map((_,i) => (
              <div key={i} style={{
                width: i===aIdx?16:5, height:5, borderRadius:3,
                background: i===aIdx?"white":"rgba(255,255,255,.35)", transition:"width .3s",
              }}/>
            ))}
          </div>
        </div>

        {/* Quick actions 2x2 */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:14 }}>
          {QUICK.map(q => (
            <button key={q.nav} onClick={() => onNav(q.nav)} style={{
              background:q.bg, border:`1px solid ${q.a}18`, borderRadius:18,
              padding:"18px 14px", textAlign:"left", cursor:"pointer", transition:"all .2s",
            }}
              onMouseEnter={e=>(e.currentTarget.style.transform="translateY(-2px)")}
              onMouseLeave={e=>(e.currentTarget.style.transform="translateY(0)")}
            >
              <div style={{ fontSize:24, marginBottom:8 }}>{q.icon}</div>
              <p className="serif" style={{ fontSize:15, color:"#3d1f2a", marginBottom:3 }}>{t[q.bgk]}</p>
              <p style={{ fontSize:12, color:"#9c6070", fontFamily:"EB Garamond,serif" }}>{t[q.subk]}</p>
            </button>
          ))}
        </div>

        {/* Mini chart */}
        <div className="card" style={{ marginBottom:20 }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12 }}>
            <p className="serif" style={{ fontSize:16, color:"#3d1f2a" }}>{t.thisWeek}</p>
            <button onClick={() => onNav("tracker")} style={{
              background:"none", border:"none", color:"#e91e8c",
              fontFamily:"EB Garamond,serif", fontSize:13, cursor:"pointer",
            }}>{t.seeAll}</button>
          </div>
          <ResponsiveContainer width="100%" height={80}>
            <AreaChart data={WEEK}>
              <defs>
                <linearGradient id="mg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#e91e8c" stopOpacity={.25}/>
                  <stop offset="95%" stopColor="#e91e8c" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="day" tick={{ fontSize:10, fill:"#b07080", fontFamily:"EB Garamond,serif" }} axisLine={false} tickLine={false}/>
              <YAxis hide domain={[0,9]}/>
              <Tooltip contentStyle={{ borderRadius:10, border:"1px solid #fde8ee", fontFamily:"EB Garamond,serif", fontSize:12 }}/>
              <Area type="monotone" dataKey="mood" stroke="#e91e8c" strokeWidth={2} fill="url(#mg)" dot={{ fill:"#e91e8c", r:3 }}/>
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
