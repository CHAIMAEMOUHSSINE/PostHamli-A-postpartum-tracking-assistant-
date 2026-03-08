import { useState } from "react";
import { MOVES } from "../data/constants";
import { useLang } from "../hooks/useLang";

export default function Movements() {
  const { t } = useLang();
  const [sel, setSel]  = useState<number|null>(null);
  const [done, setDone] = useState<Set<number>>(new Set());
  const move = MOVES.find(m => m.id === sel);

  if (move) return (
    <div style={{ padding:"20px 20px 100px" }}>
      <button onClick={() => setSel(null)} className="btn-g">{t.back}</button>
      <div style={{ textAlign:"center", margin:"20px 0" }}>
        <div style={{
          width:80, height:80, borderRadius:"50%", background:move.color,
          display:"flex", alignItems:"center", justifyContent:"center",
          fontSize:40, margin:"0 auto 12px",
          boxShadow:`0 8px 24px ${move.accent}30`,
        }}>{move.emoji}</div>
        <h2 className="serif" style={{ fontSize:24, color:"#3d1f2a", marginBottom:4 }}>{move.name}</h2>
        <p style={{ fontSize:13, color:"#b07080", fontFamily:"EB Garamond,serif" }}>{move.dur}</p>
      </div>

      <div style={{ background:"white", borderRadius:20, padding:"20px", marginBottom:14, border:"1px solid #fde8ee" }}>
        <p className="serif" style={{ fontSize:17, color:"#3d1f2a", marginBottom:14 }}>
          {t.howToDo}
        </p>
        {move.steps.map((s,i) => (
          <div key={i} style={{ display:"flex", gap:12, marginBottom:12, alignItems:"flex-start" }}>
            <div style={{
              width:26, height:26, borderRadius:"50%", background:move.color,
              display:"flex", alignItems:"center", justifyContent:"center",
              fontSize:13, fontWeight:700, color:move.accent, flexShrink:0,
            }}>{i+1}</div>
            <p style={{ fontSize:15, color:"#5a3040", fontFamily:"EB Garamond,serif", lineHeight:1.6 }}>{s}</p>
          </div>
        ))}
      </div>

      <div style={{ background:move.color, borderRadius:20, padding:"16px 20px", marginBottom:20, border:`1px solid ${move.accent}20` }}>
        <p className="serif" style={{ fontSize:15, color:move.accent, marginBottom:6 }}>{t.benefits}</p>
        <p style={{ fontSize:15, color:"#3d1f2a", fontFamily:"EB Garamond,serif", lineHeight:1.6 }}>{move.benefit}</p>
      </div>

      <button onClick={() => {
        setDone(p => new Set([...p, move.id]));
        setTimeout(() => setSel(null), 1400);
      }} className={done.has(move.id) ? "btn-o" : "btn"} style={{ width:"100%" }}>
        {done.has(move.id) ? t.doneMove : t.startMove}
      </button>
    </div>
  );

  return (
    <div>
      <div style={{ padding:"24px 20px 0" }}>
        <h2 className="serif fu" style={{ fontSize:26, color:"#3d1f2a", marginBottom:4 }}>{t.gentleMovements}</h2>
        <p className="fu1" style={{ color:"#b07080", fontSize:15, fontStyle:"italic", marginBottom:20, fontFamily:"EB Garamond,serif" }}>
          {t.gentleMovementsSub}
        </p>
      </div>
      <div style={{ padding:"0 16px 100px" }}>
        {MOVES.map(m => (
          <button key={m.id} onClick={() => setSel(m.id)} style={{
            width:"100%", background:m.color, borderRadius:22, padding:"20px",
            marginBottom:12, border:`1px solid ${m.accent}18`,
            textAlign:"left", cursor:"pointer", transition:"all .2s",
            display:"flex", alignItems:"center", gap:16,
          }}
            onMouseEnter={e=>(e.currentTarget.style.transform="translateY(-2px)")}
            onMouseLeave={e=>(e.currentTarget.style.transform="translateY(0)")}
          >
            <div style={{
              width:52, height:52, borderRadius:"50%", background:"rgba(255,255,255,.7)",
              display:"flex", alignItems:"center", justifyContent:"center",
              fontSize:28, flexShrink:0, boxShadow:`0 4px 12px ${m.accent}20`,
            }}>{m.emoji}</div>
            <div style={{ flex:1 }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
                <p className="serif" style={{ fontSize:17, color:"#3d1f2a", marginBottom:4 }}>{m.name}</p>
                {done.has(m.id) && <span style={{ fontSize:18 }}>✅</span>}
              </div>
              <p style={{ fontSize:12, color:"#9c6070", fontFamily:"EB Garamond,serif", marginBottom:6 }}>{m.dur}</p>
              <p style={{ fontSize:13, color:"#7a5060", fontFamily:"EB Garamond,serif", lineHeight:1.5 }}>{m.benefit}</p>
            </div>
            <span style={{ color:m.accent, fontSize:18, opacity:.7 }}>›</span>
          </button>
        ))}
      </div>
    </div>
  );
}
