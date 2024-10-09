"use client";
import { useTranslation } from "react-i18next";

export default function LangToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "fr" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="flex items-center">
      <button
        onClick={toggleLanguage}
        className="px-4 py-2 text-xl font-bold lowercase transition-colors duration-300 hover:text-yellow-500"
      >
        {i18n.language === "en" ? "Français" : "English"}
      </button>
    </div>
  );
}
