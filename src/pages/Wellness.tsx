// ─── Wellness & Support Page ─────────────────────────────────────────────────

import { useState, useEffect, useRef } from "react";
import Baby from "../components/Baby";
import { AFFIRMATIONS, CLAUDE_MODEL, ANTHROPIC_API_URL } from "../data/constants";

type Section = "chat" | "breathing" | "affirmations" | "grounding" | null;

interface WellnessProps {
  onCrisis: () => void;
}

interface ChatMessage {
  role: "user" | "assistant";
  text: string;
}

export default function Wellness({ onCrisis }: WellnessProps) {
  const [sec, setSec] = useState<Section>(null);

  // ─── AI Chat state ───
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", text: "Hello 🌸 I'm here for you. How are you feeling today? You can share anything — this is a safe, judgment-free space." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, sec]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userText = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userText }]);
    setLoading(true);

    try {
      const res = await fetch(ANTHROPIC_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: CLAUDE_MODEL,
          max_tokens: 1000,
          system: `You are PostHamli, a compassionate AI companion for mothers experiencing postpartum emotions.
Be warm, empathetic, non-judgmental, and supportive.
Keep responses to 2–4 sentences.
If you detect any crisis signals (suicidal ideation, thoughts of harming self or baby), append [ESCALATE] at the very end.
Suggest gentle coping techniques (breathing, grounding, rest) when appropriate.
Never provide diagnoses. Always affirm the mother's strength and courage.`,
          messages: messages
            .filter((_, i) => i > 0)
            .map((m) => ({ role: m.role, content: m.text }))
            .concat([{ role: "user", content: userText }]),
        }),
      });
      const data = await res.json();
      const aiText: string = data.content?.[0]?.text ?? "I'm here with you. 🌸";

      if (aiText.includes("[ESCALATE]")) {
        onCrisis();
        setMessages((prev) => [...prev, { role: "assistant", text: aiText.replace("[ESCALATE]", "").trim() }]);
      } else {
        setMessages((prev) => [...prev, { role: "assistant", text: aiText }]);
      }
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", text: "I'm here for you. Take a gentle breath. 🌸" }]);
    }
    setLoading(false);
  };

  // ─── Breathing exercise ───
  const [breathPhase, setBreathPhase] = useState<string | null>(null);
  const [breathCount, setBreathCount] = useState(4);
  const breathRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startBreath = () => {
    const steps = [
      { label: "Inhale…",  count: 4 },
      { label: "Hold…",    count: 4 },
      { label: "Exhale…",  count: 6 },
    ];
    let si = 0, cnt = steps[0].count;
    setBreathPhase(steps[0].label);
    setBreathCount(cnt);
    breathRef.current = setInterval(() => {
      cnt--;
      setBreathCount(cnt);
      if (cnt <= 0) {
        si = (si + 1) % steps.length;
        cnt = steps[si].count;
        setBreathPhase(steps[si].label);
        setBreathCount(cnt);
      }
    }, 1000);
  };

  const stopBreath = () => {
    if (breathRef.current) clearInterval(breathRef.current);
    setBreathPhase(null);
  };

  // ─── Affirmation carousel ───
  const [aIdx, setAIdx] = useState(0);

  // ── Section: AI Chat ──────────────────────────────────────────────────────
  if (sec === "chat") return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div style={{ padding: "20px 20px 0", flexShrink: 0 }}>
        <button onClick={() => setSec(null)} className="btn-g">← Back</button>
        <h2 className="serif" style={{ fontSize: 22, color: "#3d1f2a", marginBottom: 4 }}>AI Companion</h2>
        <p style={{ color: "#b07080", fontSize: 14, fontStyle: "italic", marginBottom: 12, fontFamily: "EB Garamond,serif" }}>
          A safe space — share freely.
        </p>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: "auto", padding: "0 16px", background: "#fffbfc" }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start", marginBottom: 12 }}>
            {msg.role === "assistant" && (
              <div style={{
                width: 32, height: 32, borderRadius: "50%",
                background: "linear-gradient(135deg,#e91e8c,#f48fb1)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16, flexShrink: 0, marginRight: 8, alignSelf: "flex-end",
              }}>🌸</div>
            )}
            <div style={{
              maxWidth: "74%", padding: "11px 15px",
              borderRadius: msg.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
              background: msg.role === "user"
                ? "linear-gradient(135deg,#e91e8c,#c2185b)"
                : "white",
              color: msg.role === "user" ? "white" : "#3d1f2a",
              boxShadow: msg.role === "user"
                ? "0 3px 10px rgba(233,30,140,.25)"
                : "0 2px 8px rgba(0,0,0,.07)",
              fontSize: 15, lineHeight: 1.6, fontFamily: "EB Garamond,serif",
            }}>
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
            <div style={{
              width: 32, height: 32, borderRadius: "50%",
              background: "linear-gradient(135deg,#e91e8c,#f48fb1)",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16,
            }}>🌸</div>
            <div style={{ background: "white", padding: "11px 15px", borderRadius: "18px 18px 18px 4px", boxShadow: "0 2px 8px rgba(0,0,0,.07)" }}>
              <div style={{ display: "flex", gap: 5 }}>
                {[0, 0.2, 0.4].map((d, i) => (
                  <div key={i} style={{
                    width: 7, height: 7, borderRadius: "50%", background: "#f4a7bc",
                    animation: "bounce 1s infinite", animationDelay: `${d}s`,
                  }} />
                ))}
              </div>
              <style>{`@keyframes bounce{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-5px)}}`}</style>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input bar */}
      <div style={{ padding: "12px 16px 24px", background: "white", borderTop: "1px solid #fde8ee", flexShrink: 0, display: "flex", gap: 10 }}>
        <textarea
          className="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
          placeholder="Share how you're feeling…"
          rows={1}
          style={{ flex: 1, fontSize: 15, lineHeight: 1.5, resize: "none" }}
        />
        <button onClick={sendMessage} disabled={!input.trim() || loading} style={{
          width: 44, height: 44, borderRadius: "50%",
          background: input.trim() ? "linear-gradient(135deg,#e91e8c,#c2185b)" : "#f0f0f0",
          border: "none", cursor: input.trim() ? "pointer" : "default",
          fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: input.trim() ? "0 3px 10px rgba(233,30,140,.3)" : "none",
          flexShrink: 0,
        }}>
          {loading ? "⏳" : "💌"}
        </button>
      </div>
    </div>
  );

  // ── Section: Breathing ────────────────────────────────────────────────────
  if (sec === "breathing") return (
    <div>
      <div style={{ padding: "20px 20px 0" }}>
        <button onClick={() => { stopBreath(); setSec(null); }} className="btn-g">← Back</button>
      </div>
      <div style={{ padding: "16px 20px", textAlign: "center" }}>
        <h2 className="serif" style={{ fontSize: 26, color: "#3d1f2a", marginBottom: 4 }}>Breathing Exercise</h2>
        <p style={{ color: "#b07080", fontStyle: "italic", marginBottom: 32, fontFamily: "EB Garamond,serif" }}>
          4 · 4 · 6 calm breath
        </p>

        {/* Animated circle */}
        <div style={{
          width: 180, height: 180, borderRadius: "50%", margin: "0 auto 32px",
          background: breathPhase
            ? breathPhase.startsWith("Inhale") ? "radial-gradient(circle,#f8bbd0,#f4a7bc)"
            : breathPhase.startsWith("Hold")   ? "radial-gradient(circle,#c8e6c9,#81c784)"
            : "radial-gradient(circle,#bbdefb,#64b5f6)"
            : "radial-gradient(circle,#fff0f5,#fde8ee)",
          display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column",
          animation: breathPhase ? "breathe 1s ease-in-out" : "none",
          boxShadow: breathPhase ? "0 0 40px rgba(244,167,188,.4)" : "0 4px 20px rgba(233,30,140,.1)",
          transition: "background 1s",
        }}>
          {breathPhase ? (
            <>
              <p style={{ fontSize: 16, color: "#7a3050", fontFamily: "EB Garamond,serif", marginBottom: 4 }}>{breathPhase}</p>
              <p className="serif" style={{ fontSize: 48, color: "#c2185b", fontWeight: 700, lineHeight: 1 }}>{breathCount}</p>
            </>
          ) : (
            <p style={{ color: "#c9a4b0", fontFamily: "EB Garamond,serif", fontSize: 15 }}>Ready…</p>
          )}
        </div>

        <button onClick={breathPhase ? stopBreath : startBreath} className={breathPhase ? "btn-o" : "btn"} style={{ maxWidth: 260 }}>
          {breathPhase ? "Stop" : "Begin Breathing"}
        </button>
      </div>
    </div>
  );

  // ── Section: Affirmations ─────────────────────────────────────────────────
  if (sec === "affirmations") return (
    <div>
      <div style={{ padding: "20px 20px 0" }}>
        <button onClick={() => setSec(null)} className="btn-g">← Back</button>
      </div>
      <div style={{ padding: "16px 20px", textAlign: "center" }}>
        <div className="affcard" style={{ marginBottom: 24 }}>
          <p className="serif" style={{ color: "white", fontSize: 22, lineHeight: 1.6, fontStyle: "italic", marginBottom: 12 }}>
            "{AFFIRMATIONS[aIdx]}"
          </p>
          <div style={{ display: "flex", gap: 4, justifyContent: "center" }}>
            {AFFIRMATIONS.map((_, i) => (
              <div key={i} style={{
                width: i === aIdx ? 16 : 5, height: 5, borderRadius: 3,
                background: i === aIdx ? "white" : "rgba(255,255,255,.35)", transition: "width .3s",
              }} />
            ))}
          </div>
        </div>
        <button onClick={() => setAIdx((i) => (i + 1) % AFFIRMATIONS.length)} className="btn-o">
          Next Affirmation 🌸
        </button>
      </div>
    </div>
  );

  // ── Section: 5-4-3-2-1 Grounding ─────────────────────────────────────────
  if (sec === "grounding") return (
    <div>
      <div style={{ padding: "20px 20px 0" }}>
        <button onClick={() => setSec(null)} className="btn-g">← Back</button>
      </div>
      <div style={{ padding: "16px 20px" }}>
        <h2 className="serif" style={{ fontSize: 26, color: "#3d1f2a", marginBottom: 4 }}>5-4-3-2-1 Grounding</h2>
        <p style={{ color: "#b07080", fontStyle: "italic", marginBottom: 22, fontFamily: "EB Garamond,serif" }}>
          Bring yourself gently back to now.
        </p>
        {[
          { n: 5, p: "things you can see",  c: "#fce4ec", a: "#e91e8c" },
          { n: 4, p: "things you can touch", c: "#f3e5f5", a: "#9c27b0" },
          { n: 3, p: "things you can hear",  c: "#e8f5e9", a: "#388e3c" },
          { n: 2, p: "things you can smell", c: "#fff8e1", a: "#f57c00" },
          { n: 1, p: "thing you can taste",  c: "#e3f2fd", a: "#1976d2" },
        ].map((g) => (
          <div key={g.n} style={{
            background: g.c, borderRadius: 18, padding: "16px 18px",
            marginBottom: 10, border: `1px solid ${g.a}18`,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div className="serif" style={{ fontSize: 38, color: g.a, fontWeight: 700, lineHeight: 1 }}>{g.n}</div>
              <p style={{ fontSize: 17, color: "#3d1f2a", fontFamily: "EB Garamond,serif" }}>{g.p}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // ── Main wellness menu ────────────────────────────────────────────────────
  return (
    <div>
      <div style={{ padding: "24px 20px 0" }}>
        <h2 className="serif fu" style={{ fontSize: 26, color: "#3d1f2a", marginBottom: 4 }}>Wellness</h2>
        <p className="fu1" style={{ color: "#b07080", fontSize: 15, fontStyle: "italic", marginBottom: 20, fontFamily: "EB Garamond,serif" }}>
          Tools to tend to your inner garden.
        </p>
      </div>

      <div style={{ padding: "0 16px" }}>
        {/* Tool buttons */}
        {[
          { t: "AI Companion",       s: "Talk to your PostHamli AI",         c: "#fff0f5", a: "#e91e8c", k: "chat"         as Section },
          { t: "Breathing Exercise", s: "4 · 4 · 6 calm breath",             c: "#e3f2fd", a: "#1976d2", k: "breathing"    as Section },
          { t: "Affirmations",       s: "Gentle words of truth",             c: "#fce4ec", a: "#e91e8c", k: "affirmations" as Section },
          { t: "5-4-3-2-1 Grounding",s: "Mindfulness for anxious moments",  c: "#f3e5f5", a: "#9c27b0", k: "grounding"    as Section },
        ].map((tool) => (
          <button key={tool.k} onClick={() => setSec(tool.k)} style={{
            width: "100%", background: tool.c, borderRadius: 20, padding: "20px 18px",
            marginBottom: 10, textAlign: "left", border: `1px solid ${tool.a}18`,
            cursor: "pointer", transition: "all .2s",
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <div>
              <p className="serif" style={{ fontSize: 18, color: "#3d1f2a", marginBottom: 4 }}>{tool.t}</p>
              <p style={{ fontSize: 13, color: "#9c6070", fontFamily: "EB Garamond,serif" }}>{tool.s}</p>
            </div>
            <span style={{ color: tool.a, fontSize: 20 }}>›</span>
          </button>
        ))}

        {/* Baby milestone */}
        <div className="card" style={{ marginBottom: 10 }}>
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <Baby />
            <div>
              <p className="serif" style={{ fontSize: 16, color: "#3d1f2a", marginBottom: 3 }}>Your baby at 8 weeks</p>
              <p style={{ fontSize: 13, color: "#b07080", fontFamily: "EB Garamond,serif", lineHeight: 1.5 }}>
                Social smiles are beginning to blossom. You are their whole world.
              </p>
            </div>
          </div>
        </div>

        {/* Crisis section */}
        <div style={{
          background: "linear-gradient(135deg,#ffebee,#fff0f5)",
          borderRadius: 20, padding: "20px 18px", marginBottom: 20,
          border: "1px solid #ffcdd2",
        }}>
          <p className="serif" style={{ fontSize: 18, color: "#c62828", marginBottom: 7 }}>
            If you need immediate help
          </p>
          <p style={{ fontSize: 14, color: "#7a3030", marginBottom: 14, lineHeight: 1.6, fontFamily: "EB Garamond,serif" }}>
            You are not alone. Support is always within reach.
          </p>
          <button onClick={onCrisis} style={{
            background: "linear-gradient(135deg,#c62828,#b71c1c)", color: "white",
            border: "none", borderRadius: 12, padding: "12px 20px", cursor: "pointer",
            fontFamily: "EB Garamond,serif", fontSize: 15, width: "100%",
          }}>
            View Crisis Resources
          </button>
        </div>
      </div>
    </div>
  );
}
