import { useLang } from "../hooks/useLang";
import type { PageId } from "../types";

interface Props { page: PageId; onNavigate: (p: PageId) => void; }

export default function BottomNav({ page, onNavigate }: Props) {
  const { t } = useLang();
  const tabs: { id: PageId; icon: string; label: () => string }[] = [
    { id:"home",      icon:"🏠", label:() => t.navHome },
    { id:"journal",   icon:"📓", label:() => t.navJournal },
    { id:"wellness",  icon:"🌿", label:() => t.navWellness },
    { id:"movements", icon:"🤸", label:() => t.navMovement },
    { id:"tracker",   icon:"📊", label:() => t.navSupport },
  ];
  return (
    <nav style={{
      position:"fixed", bottom:0, left:0, right:0, maxWidth:430, margin:"0 auto",
      background:"rgba(255,255,255,.96)", backdropFilter:"blur(16px)",
      borderTop:"1px solid #fde8ee", display:"flex", zIndex:100,
      paddingBottom:"env(safe-area-inset-bottom,8px)",
    }}>
      {tabs.map(tab => (
        <button key={tab.id} onClick={() => onNavigate(tab.id)} style={{
          flex:1, padding:"10px 0 8px", border:"none", background:"none", cursor:"pointer",
          display:"flex", flexDirection:"column", alignItems:"center", gap:2,
          color: page === tab.id ? "#e91e8c" : "#b07080", transition:"color .2s",
        }}>
          <span style={{ fontSize:20, lineHeight:1 }}>{tab.icon}</span>
          <span style={{ fontSize:10, fontFamily:"EB Garamond,serif", fontWeight: page===tab.id?700:400 }}>
            {tab.label()}
          </span>
        </button>
      ))}
    </nav>
  );
}
