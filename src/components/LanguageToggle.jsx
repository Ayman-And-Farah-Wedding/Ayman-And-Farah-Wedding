import { useLanguage } from "../context/LanguageContext";
import "./LanguageToggle.css";

export function LanguageToggle() {
  const { lang, t, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      className="lang-toggle"
      onClick={toggleLanguage}
      aria-label={`Switch language to ${t.language}`}
    >
      <span className={lang === "en" ? "is-active" : ""}>EN</span>
      <span className="lang-toggle__sep">|</span>
      <span className={lang === "ar" ? "is-active" : ""}>AR</span>
    </button>
  );
}
