"use client";

import { useTranslation } from "react-i18next";

export default function SeeMoreButton({ onClick }) {
  const { t } = useTranslation();

  return (
    <div className="mt-8 text-center">
      <button
        onClick={onClick}
        className="px-8 py-3 text-lg text-black transition-colors duration-300 bg-yellow-500 border-2 border-black rounded-full hover:bg-yellow-600 hover:border-yellow-600"
      >
        {t("project.seeMoreBtn")}
      </button>
    </div>
  );
}
