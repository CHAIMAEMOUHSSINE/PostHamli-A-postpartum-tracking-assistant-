// ─── App.tsx — Root Component ─────────────────────────────────────────────────

import { useState } from "react";

// Components
import GlobalStyles from "./components/GlobalStyles";
import BottomNav    from "./components/BottomNav";
import CrisisModal  from "./components/CrisisModal";

// Pages
import Home      from "./pages/Home";
import Journal   from "./pages/Journal";
import Tracker   from "./pages/Tracker";
import Movements from "./pages/Movements";
import Wellness  from "./pages/Wellness";

import type { PageId } from "./types";

export default function App() {
  const [page, setPage]   = useState<PageId>("home");
  const [crisis, setCrisis] = useState(false);

  const renderPage = () => {
    switch (page) {
      case "home":      return <Home onNav={setPage} />;
      case "journal":   return <Journal />;
      case "tracker":   return <Tracker />;
      case "movements": return <Movements />;
      case "wellness":  return <Wellness onCrisis={() => setCrisis(true)} />;
    }
  };

  return (
    <>
      <GlobalStyles />

      <div className="app">
        {/* Subtle floral background watermark */}
        <div style={{
          position: "fixed", inset: 0, maxWidth: 430, margin: "0 auto",
          pointerEvents: "none", zIndex: 0, opacity: .035,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cellipse cx='40' cy='22' rx='9' ry='17' fill='%23e91e8c'/%3E%3Cellipse cx='40' cy='22' rx='9' ry='17' fill='%23e91e8c' transform='rotate(72 40 40)'/%3E%3Cellipse cx='40' cy='22' rx='9' ry='17' fill='%23e91e8c' transform='rotate(144 40 40)'/%3E%3Cellipse cx='40' cy='22' rx='9' ry='17' fill='%23e91e8c' transform='rotate(216 40 40)'/%3E%3Cellipse cx='40' cy='22' rx='9' ry='17' fill='%23e91e8c' transform='rotate(288 40 40)'/%3E%3Ccircle cx='40' cy='40' r='7' fill='%23fce4ec'/%3E%3C/svg%3E")`,
          backgroundSize: "160px 160px",
        }} />

        {/* ── Always-visible SOS button ── */}
        <button
          onClick={() => setCrisis(true)}
          style={{
            position: "fixed", top: 16, right: 16, zIndex: 200,
            background: "rgba(198,40,40,.88)", backdropFilter: "blur(8px)",
            color: "white", border: "none", borderRadius: 20, padding: "7px 13px",
            fontFamily: "EB Garamond,serif", fontSize: 12, cursor: "pointer",
            boxShadow: "0 2px 12px rgba(198,40,40,.3)", letterSpacing: .3,
          }}
        >
          SOS Help
        </button>

        {/* ── Page content ── */}
        <div className="page">{renderPage()}</div>

        {/* ── Bottom navigation ── */}
        <BottomNav page={page} onNavigate={setPage} />

        {/* ── Crisis modal (overlay) ── */}
        {crisis && <CrisisModal onClose={() => setCrisis(false)} />}
      </div>
    </>
  );
}
