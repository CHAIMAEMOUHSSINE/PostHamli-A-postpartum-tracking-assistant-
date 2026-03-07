// ─── GlobalStyles ─────────────────────────────────────────────────────────────

export default function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap');

      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

      body, html {
        font-family: 'EB Garamond', 'Times New Roman', Georgia, serif;
        background: #fff5f7;
        color: #3d1f2a;
        -webkit-font-smoothing: antialiased;
      }

      ::-webkit-scrollbar { width: 3px; }
      ::-webkit-scrollbar-thumb { background: #f4a7bc; border-radius: 4px; }

      .app {
        max-width: 430px;
        margin: 0 auto;
        min-height: 100vh;
        background: #fffbfc;
        position: relative;
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }

      .serif { font-family: 'Playfair Display', 'Times New Roman', Georgia, serif; }

      .page {
        flex: 1;
        overflow-y: auto;
        padding-bottom: 76px;
        position: relative;
        z-index: 1;
      }

      /* ── Cards ── */
      .card {
        background: #fff;
        border-radius: 20px;
        padding: 18px;
        border: 1px solid #fde8ee;
        box-shadow: 0 2px 14px rgba(233,30,140,0.05);
      }

      /* ── Buttons ── */
      .btn {
        background: linear-gradient(135deg, #e91e8c, #c2185b);
        color: white;
        border: none;
        border-radius: 14px;
        padding: 14px 20px;
        font-family: 'EB Garamond', serif;
        font-size: 16px;
        cursor: pointer;
        width: 100%;
        box-shadow: 0 4px 14px rgba(233,30,140,0.28);
        transition: all .2s;
        letter-spacing: .3px;
      }
      .btn:hover { transform: translateY(-1px); }
      .btn:disabled { opacity: 0.5; cursor: default; transform: none; }

      .btn-o {
        background: transparent;
        color: #e91e8c;
        border: 1.5px solid #f4a7bc;
        border-radius: 14px;
        padding: 12px 20px;
        font-family: 'EB Garamond', serif;
        font-size: 15px;
        cursor: pointer;
        width: 100%;
        transition: all .2s;
      }
      .btn-o:hover { background: #fff0f5; }

      .btn-g {
        background: none;
        border: none;
        cursor: pointer;
        font-family: 'EB Garamond', serif;
        color: #c2185b;
        font-size: 15px;
        padding: 8px 0;
        display: flex;
        align-items: center;
        gap: 6px;
      }

      /* ── Inputs ── */
      .input {
        width: 100%;
        padding: 14px 16px;
        border: 1.5px solid #fde8ee;
        border-radius: 14px;
        font-family: 'EB Garamond', serif;
        font-size: 16px;
        color: #3d1f2a;
        background: #fffbfc;
        outline: none;
        transition: border-color .2s;
        resize: none;
      }
      .input:focus { border-color: #f4a7bc; background: #fff; }
      .input::placeholder { color: #d4a0ae; }

      /* ── Tags ── */
      .tag {
        display: inline-block;
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 12px;
        font-family: 'EB Garamond', serif;
        background: #fff0f5;
        color: #c2185b;
        border: 1px solid #fde8ee;
      }

      /* ── Bottom nav ── */
      .nav {
        position: fixed;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        max-width: 430px;
        background: rgba(255,255,255,.96);
        backdrop-filter: blur(20px);
        border-top: 1px solid #fde8ee;
        display: flex;
        justify-content: space-around;
        padding: 10px 8px 18px;
        z-index: 100;
      }
      .ni {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3px;
        background: none;
        border: none;
        cursor: pointer;
        padding: 6px 14px;
        border-radius: 14px;
        transition: all .2s;
        min-width: 60px;
      }
      .ni.on { background: #fff0f5; }
      .nl {
        font-family: 'EB Garamond', serif;
        font-size: 11px;
        color: #c9a4b0;
        letter-spacing: .3px;
      }
      .ni.on .nl { color: #c2185b; font-weight: 600; }
      .nd { width: 5px; height: 5px; border-radius: 50%; background: #e91e8c; margin-top: 2px; }

      /* ── Stats ── */
      .stat { background: white; border-radius: 16px; padding: 14px; border: 1px solid #fde8ee; text-align: center; flex: 1; }
      .sv { font-family: 'Playfair Display', serif; font-size: 26px; font-weight: 700; color: #e91e8c; line-height: 1; }
      .sl { font-size: 11px; color: #b07080; margin-top: 4px; font-style: italic; }

      /* ── Horizontal scroll ── */
      .hscroll { display: flex; gap: 10px; overflow-x: auto; padding: 4px 20px 8px; scrollbar-width: none; }
      .hscroll::-webkit-scrollbar { display: none; }

      /* ── Exercise cards ── */
      .ecard {
        border-radius: 20px;
        padding: 18px;
        margin-bottom: 10px;
        cursor: pointer;
        transition: all .2s;
        display: flex;
        align-items: center;
        gap: 14px;
      }
      .ecard:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,.07); }

      /* ── Journal cards ── */
      .jcard {
        background: white;
        border-radius: 18px;
        padding: 16px 18px;
        margin-bottom: 10px;
        border: 1px solid #fde8ee;
        cursor: pointer;
        transition: all .2s;
      }
      .jcard:hover { box-shadow: 0 4px 16px rgba(233,30,140,.1); transform: translateY(-1px); }

      /* ── Mood emoji buttons ── */
      .meb {
        width: 46px;
        height: 46px;
        border-radius: 14px;
        border: 2px solid #fde8ee;
        background: white;
        font-size: 22px;
        cursor: pointer;
        transition: all .2s;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .meb.on { border-color: #e91e8c; background: #fff0f5; transform: scale(1.1); }

      /* ── Affirmation card ── */
      .affcard {
        background: linear-gradient(135deg, #e91e8c, #ad1457);
        border-radius: 20px;
        padding: 22px 20px;
        position: relative;
        overflow: hidden;
      }
      .affcard::before { content: '🌸'; position: absolute; right: -6px; top: -8px; font-size: 64px; opacity: .22; }
      .affcard::after  { content: '🌺'; position: absolute; left: -4px; bottom: -10px; font-size: 54px; opacity: .18; }

      /* ── Animations ── */
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(14px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes breathe {
        0%, 100% { transform: scale(.85); opacity: .7; }
        50%       { transform: scale(1.15); opacity: 1; }
      }
      @keyframes slideUp {
        from { transform: translateY(100%); }
        to   { transform: translateY(0); }
      }

      .fu  { animation: fadeUp .45s ease both; }
      .fu1 { animation: fadeUp .45s ease .08s both; }
      .fu2 { animation: fadeUp .45s ease .16s both; }
      .fu3 { animation: fadeUp .45s ease .24s both; }

      /* ── Modal ── */
      .overlay {
        position: fixed; inset: 0;
        background: rgba(61,31,42,.5);
        backdrop-filter: blur(4px);
        z-index: 1000;
        display: flex; align-items: flex-end; justify-content: center;
      }
      .sheet {
        background: white;
        border-radius: 28px 28px 0 0;
        padding: 32px 24px 48px;
        width: 100%;
        max-width: 430px;
        animation: slideUp .3s ease;
      }

      /* ── Misc ── */
      .water { font-size: 24px; cursor: pointer; transition: transform .1s; }
      .water:active { transform: scale(.9); }
      .sleepbar { height: 7px; border-radius: 4px; transition: background .3s; }
      input[type=range] { accent-color: #e91e8c; cursor: pointer; }
    `}</style>
  );
}
