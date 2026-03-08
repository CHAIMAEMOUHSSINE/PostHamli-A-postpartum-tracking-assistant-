// ─── Language Context ─────────────────────────────────────────────────────────

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import translations, { Lang, T, isRTL } from "../data/i18n";

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: T;
  rtl: boolean;
}

const LangContext = createContext<LangCtx>({} as LangCtx);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr"); // default French

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("posthamli_lang", l);
  };

  useEffect(() => {
    const saved = localStorage.getItem("posthamli_lang") as Lang | null;
    if (saved && translations[saved]) setLangState(saved);
  }, []);

  // Apply RTL to document
  useEffect(() => {
    document.documentElement.dir = isRTL(lang) ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang], rtl: isRTL(lang) }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
