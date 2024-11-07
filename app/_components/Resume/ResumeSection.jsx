"use client";

import { useTranslation } from "react-i18next";
import { FaEye, FaDownload } from "react-icons/fa";

export default function ResumeSection() {
  const { t } = useTranslation();

  const resumeUrl =
    typeof window !== "undefined" && localStorage.getItem("i18nextLng") === "fr"
      ? "/assets/FR-CV.pdf"
      : "/assets/EN-CV.pdf";

  const buttonStyles =
    "inline-block w-full px-5 py-2 text-lg font-semibold text-black transition-transform duration-200 transform bg-white rounded-md shadow-md hover:bg-yellow-500 flex items-center justify-center";

  return (
    <>
      <h2 className="mb-8 text-4xl font-bold text-center">
        {t("resume.title")}
      </h2>
      <div className="flex justify-center space-x-4">
        {/* View Resume Button */}
        <div className="flex rounded-md p-0.5 bg-black">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonStyles}
          >
            <FaEye className="mr-2" />
            {t("resume.viewBtn")}
          </a>
        </div>

        {/* Download Resume Button */}
        <div className="flex rounded-md p-0.5 bg-black">
          <a href={resumeUrl} download className={buttonStyles}>
            {t("resume.downloadBtn")}
            <FaDownload className="ml-2" />
          </a>
        </div>
      </div>
    </>
  );
}
