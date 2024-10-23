"use client";
import { useTranslation } from "react-i18next";

export default function ProjectDescription({ textKey, techsUsed }) {
  const { t } = useTranslation();

  return (
    <>
      <p className="mt-2 text-xl text-gray-700">{t(textKey)}</p>
      {techsUsed && (
        <ul className="flex flex-wrap gap-2 mt-4">
          {techsUsed.map((tech, index) => (
            <li
              key={index}
              className="px-2 py-1 text-sm font-semibold text-black transition-colors duration-200 ease-in-out bg-yellow-500 border-2 border-black rounded"
            >
              {tech}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
