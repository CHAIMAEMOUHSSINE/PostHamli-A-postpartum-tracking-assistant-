// ─── BottomNav ────────────────────────────────────────────────────────────────

import type { PageId } from "../types";

interface NavItem {
  id: PageId;
  l: string;
}

interface BottomNavProps {
  page: PageId;
  onNavigate: (id: PageId) => void;
}

const NAV_ITEMS: NavItem[] = [
  { id: "home",      l: "Home" },
  { id: "journal",   l: "Journal" },
  { id: "tracker",   l: "Wellness" },
  { id: "movements", l: "Movement" },
  { id: "wellness",  l: "Support" },
];

export default function BottomNav({ page, onNavigate }: BottomNavProps) {
  return (
    <div className="nav">
      {NAV_ITEMS.map((item) => (
        <button
          key={item.id}
          className={`ni ${page === item.id ? "on" : ""}`}
          onClick={() => onNavigate(item.id)}
        >
          <span className="nl">{item.l}</span>
          {page === item.id && <div className="nd" />}
        </button>
      ))}
    </div>
  );
}
