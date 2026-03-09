import { useLang } from "../hooks/useLang";
import type { PageId } from "../types";

interface Props { page: PageId; onNavigate: (p: PageId) => void; }

export default function BottomNav({ page, onNavigate }: Props) {
  const { t } = useLang();
  const tabs: { id: PageId; label: () => string }[] = [
    { id:"home",      label:() => t.navHome },
    { id:"journal",   label:() => t.navJournal },
    { id:"wellness",  label:() => t.navWellness },
    { id:"movements", label:() => t.navMovement },
    { id:"tracker",   label:() => t.navSupport },
  ];
  return (
    <nav style={{
      position:"fixed", bottom:0, left:0, right:0, maxWidth:430, margin:"0 auto",
      background:"rgba(255,255,255,.96)", backdropFilter:"blur(16px)",
      borderTop:"1px solid #fde8ee", display:"flex", zIndex:100,
      paddingBottom:"env(safe-area-inset-bottom,12px)",
      paddingTop: 10,
      height: 70,
    }}>
      {tabs.map(tab => (
        <button key={tab.id} onClick={() => onNavigate(tab.id)} style={{
          flex:1, padding:"12px 0 10px", border:"none", background:"none", cursor:"pointer",
          display:"flex", flexDirection:"column", alignItems:"center", gap:4,
          color: page === tab.id ? "#e91e8c" : "#b07080", transition:"color .2s",
        }}>
          <span style={{
            fontSize:14,
            fontFamily:"EB Garamond,serif",
            fontWeight: page === tab.id ? 700 : 400,
          }}>
            {tab.label()}
          </span>

          {page === tab.id ? (
            <div style={{
              width:5, height:5, borderRadius:"50%",
              background:"#e91e8c", marginTop:2,
            }}/>
          ) : (
            <div style={{ width:5, height:5 }}/>
          )}
        </button>
      ))}
    </nav>
  );
}