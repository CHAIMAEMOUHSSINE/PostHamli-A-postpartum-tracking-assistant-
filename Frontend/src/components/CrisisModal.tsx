import { useLang } from "../hooks/useLang";

export default function CrisisModal({ onClose }: { onClose: () => void }) {
  const { t } = useLang();
  return (
    <div style={{
      position:"fixed", inset:0, background:"rgba(60,10,20,.7)",
      backdropFilter:"blur(6px)", zIndex:1000,
      display:"flex", alignItems:"flex-end", justifyContent:"center",
    }} onClick={onClose}>
      <div style={{
        background:"white", borderRadius:"28px 28px 0 0", padding:"32px 24px 48px",
        width:"100%", maxWidth:430, animation:"slideUp .35s ease",
      }} onClick={e => e.stopPropagation()}>
        <div style={{ width:40, height:4, borderRadius:2, background:"#f4a7bc", margin:"0 auto 24px" }} />
        <h2 className="serif" style={{ fontSize:24, color:"#c62828", marginBottom:8, textAlign:"center" }}>
          {t.crisisTitle}
        </h2>
        <p style={{ color:"#7a3030", fontSize:15, lineHeight:1.7, fontFamily:"EB Garamond,serif", textAlign:"center", marginBottom:24 }}>
          {t.crisisSub}
        </p>
        {[
          { label: t.crisisCall,  bg:"#c62828" },
          { label: t.crisisPSI,   bg:"#880e4f" },
          { label: t.crisisText,  bg:"#ad1457" },
        ].map((r,i) => (
          <button key={i} style={{
            width:"100%", background:r.bg, color:"white", border:"none",
            borderRadius:14, padding:"14px 18px", marginBottom:10, cursor:"pointer",
            fontFamily:"EB Garamond,serif", fontSize:15, textAlign:"center",
          }}>{r.label}</button>
        ))}
        <button onClick={onClose} style={{
          width:"100%", background:"#f3e5f5", color:"#6a1b9a",
          border:"none", borderRadius:14, padding:"14px 18px", marginTop:4, cursor:"pointer",
          fontFamily:"EB Garamond,serif", fontSize:15,
        }}>{t.crisisSafe}</button>
      </div>
      <style>{`@keyframes slideUp{from{transform:translateY(100%)}to{transform:translateY(0)}}`}</style>
    </div>
  );
}
