import { useState } from "react";
import { MOODS, DEMO_ENTRIES } from "../data/constants";
import { useLang } from "../hooks/useLang";
import type { JournalEntry } from "../types";

export default function Journal() {
  const { t } = useLang();
  const [tab, setTab]         = useState<"write"|"history">("write");
  const [selectedMood, setSelectedMood] = useState<number|null>(null);
  const [text, setText]       = useState("");
  const [tags, setTags]       = useState("");
  const [saving, setSaving]   = useState(false);
  const [saved, setSaved]     = useState(false);
  const [entries, setEntries] = useState<JournalEntry[]>(DEMO_ENTRIES);
  const [detail, setDetail]   = useState<JournalEntry|null>(null);

  const save = async () => {
    if (!text.trim()) return;
    setSaving(true);
    await new Promise(r => setTimeout(r, 800));
    const now = new Date();
    const entry: JournalEntry = {
      id: Date.now(), mood: selectedMood ?? 5,
      date: now.toLocaleDateString("fr-FR",{day:"numeric",month:"long",year:"numeric"}),
      time: now.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}),
      text: text.trim(),
      tags: tags.split(",").map(s=>s.trim()).filter(Boolean),
    };
    setEntries(p => [entry, ...p]);
    setSaving(false); setSaved(true);
    setTimeout(() => { setSaved(false); setText(""); setTags(""); setSelectedMood(null); }, 1800);
  };

  if (detail) return (
    <div style={{ padding:"20px 20px 100px" }}>
      <button onClick={() => setDetail(null)} className="btn-g">{t.back ?? "← Back"}</button>
      <p style={{ fontSize:13, color:"#b07080", fontFamily:"EB Garamond,serif", marginBottom:8 }}>{detail.date} · {detail.time}</p>
      <div style={{ fontSize:32, marginBottom:12 }}>{MOODS.find(m=>m.s===detail.mood)?.e}</div>
      <p style={{ fontSize:17, color:"#3d1f2a", lineHeight:1.8, fontFamily:"EB Garamond,serif", whiteSpace:"pre-wrap" }}>{detail.text}</p>
      {detail.tags.length>0 && (
        <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginTop:16 }}>
          {detail.tags.map(tag => (
            <span key={tag} style={{ background:"#fff0f5", color:"#c2185b", borderRadius:12, padding:"4px 12px", fontSize:13, fontFamily:"EB Garamond,serif" }}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div>
      <div style={{ padding:"24px 20px 0" }}>
        <h2 className="serif fu" style={{ fontSize:26, color:"#3d1f2a", marginBottom:4 }}>{t.myJournal}</h2>
        <p className="fu1" style={{ color:"#b07080", fontSize:15, fontStyle:"italic", marginBottom:16, fontFamily:"EB Garamond,serif" }}>{t.journalSub}</p>
        <div style={{ display:"flex", gap:8, marginBottom:20 }}>
          {([["write",t.writeTab],["history",t.historyTab]] as const).map(([k,label]) => (
            <button key={k} onClick={() => setTab(k)} style={{
              flex:1, padding:"10px", borderRadius:14, border:"none", cursor:"pointer",
              background: tab===k ? "#e91e8c" : "#fff0f5",
              color: tab===k ? "white" : "#c2185b",
              fontFamily:"EB Garamond,serif", fontSize:15, fontWeight:tab===k?700:400,
              transition:"all .2s",
            }}>{label}</button>
          ))}
        </div>
      </div>

      {tab === "write" ? (
        <div style={{ padding:"0 16px 100px" }}>
          <p style={{ fontSize:15, color:"#7a4060", fontFamily:"EB Garamond,serif", marginBottom:12 }}>{t.howFeelingNow}</p>
          <div style={{ display:"flex", gap:8, overflowX:"auto", paddingBottom:8, marginBottom:16 }}>
            {MOODS.map(m => (
              <button key={m.s} onClick={() => setSelectedMood(m.s)} style={{
                flexShrink:0, fontSize:24, padding:"8px 10px", borderRadius:14, border:"none", cursor:"pointer",
                background: selectedMood===m.s ? "#fde8ee" : "transparent",
                transform: selectedMood===m.s ? "scale(1.15)" : "scale(1)",
                transition:"all .2s",
              }}>{m.e}</button>
            ))}
          </div>
          <textarea
            className="input" value={text}
            onChange={e => setText(e.target.value)}
            placeholder={t.writePlaceholder}
            rows={6} style={{ width:"100%", fontSize:16, lineHeight:1.7, marginBottom:12 }}
          />
          <input
            className="input" value={tags}
            onChange={e => setTags(e.target.value)}
            placeholder={t.tagsPlaceholder}
            style={{ width:"100%", fontSize:14, marginBottom:16 }}
          />
          <button onClick={save} disabled={saving||saved} className="btn" style={{ width:"100%", position:"relative" }}>
            {saved ? t.saved : saving ? t.saving : t.saveEntry}
          </button>
          <p style={{ textAlign:"center", fontSize:12, color:"#c9a4b0", marginTop:10, fontFamily:"EB Garamond,serif" }}>
            🔒 {t.privateNote}
          </p>
        </div>
      ) : (
        <div style={{ padding:"0 16px 100px" }}>
          {entries.length === 0 ? (
            <div style={{ textAlign:"center", padding:"60px 20px", color:"#c9a4b0" }}>
              <p style={{ fontSize:40, marginBottom:16 }}>🌸</p>
              <p style={{ fontFamily:"EB Garamond,serif", fontSize:17 }}>{t.storyBegins}</p>
            </div>
          ) : entries.map(e => (
            <button key={e.id} onClick={() => setDetail(e)} style={{
              width:"100%", background:"white", border:"1px solid #fde8ee",
              borderRadius:18, padding:"16px", marginBottom:10, textAlign:"left",
              cursor:"pointer", transition:"all .2s",
              boxShadow:"0 2px 10px rgba(233,30,140,.06)",
            }}
              onMouseEnter={el=>(el.currentTarget.style.transform="translateY(-2px)")}
              onMouseLeave={el=>(el.currentTarget.style.transform="translateY(0)")}
            >
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:8 }}>
                <p style={{ fontSize:13, color:"#b07080", fontFamily:"EB Garamond,serif" }}>{e.date} · {e.time}</p>
                <span style={{ fontSize:22 }}>{MOODS.find(m=>m.s===e.mood)?.e}</span>
              </div>
              <p style={{ fontSize:15, color:"#3d1f2a", lineHeight:1.6, fontFamily:"EB Garamond,serif",
                display:"-webkit-box", WebkitLineClamp:3, WebkitBoxOrient:"vertical", overflow:"hidden" }}>
                {e.text}
              </p>
              {e.tags.length>0 && (
                <div style={{ display:"flex", gap:6, marginTop:8, flexWrap:"wrap" }}>
                  {e.tags.map(tag => (
                    <span key={tag} style={{ background:"#fff0f5", color:"#c2185b", borderRadius:10, padding:"2px 10px", fontSize:12, fontFamily:"EB Garamond,serif" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
