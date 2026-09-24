import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations, defaultLanguage } from "../config/translations";

const LanguageContext = createContext(null);

const STORAGE_KEY = "wedding-language";

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return defaultLanguage;
    try {
      return localStorage.getItem(STORAGE_KEY) || defaultLanguage;
    } catch {
      return defaultLanguage;
    }
  });

  const t = translations[lang] || translations[defaultLanguage];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Private-browsing / storage disabled — language choice just won't persist.
    }
  }, [lang, t.dir]);

  const toggleLanguage = () => setLang((prev) => (prev === "en" ? "ar" : "en"));

  const value = useMemo(
    () => ({ lang, t, toggleLanguage, setLang }),
    [lang, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
