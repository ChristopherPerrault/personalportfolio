"use client";
import { useTranslation } from "react-i18next";

export default function ProjectDescription({ textKey, techsUsed }) {
  const { t } = useTranslation();

  return (
    <>
      <p className="mt-2 text-gray-600">{t(textKey)}</p>
      {techsUsed && (
        <ul className="flex flex-wrap gap-2 mt-2 text-gray-600">
          {techsUsed.map((tech, index) => (
            <li key={index} className="px-2 py-1 text-sm bg-gray-200 rounded">
              {tech}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
