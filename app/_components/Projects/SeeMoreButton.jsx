"use client";

import { useTranslation } from "react-i18next";

export default function SeeMoreButton({ onClick }) {
  const { t } = useTranslation();

  const buttonStyles =
    "w-full px-5 py-2 text-lg font-semibold transition-transform duration-200 transform shadow-md rounded-md bg-white hover:bg-yellow-500";

  return (
    <div className="flex justify-center my-4">
      <div className="flex rounded-md p-0.5 bg-black">
        <button onClick={onClick} className={buttonStyles}>
          {t("project.seeMoreBtn")}
        </button>
      </div>
    </div>
  );
}
