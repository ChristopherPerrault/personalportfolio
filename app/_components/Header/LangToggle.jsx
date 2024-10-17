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
        aria-label={`Switch to ${
          i18n.language === "en" ? "French" : "English"
        }`}
        className="px-4 py-2 text-xl font-bold transition-colors duration-300 hover:text-yellow-500"
      >
        {i18n.language === "en" ? "français" : "english"}
      </button>
    </div>
  );
}
