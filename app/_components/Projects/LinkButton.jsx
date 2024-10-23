"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function LinkButton({ url, labelKey }) {
  const { t } = useTranslation();

  const buttonStyles =
    "inline-block w-full px-5 py-2 text-lg font-semibold text-black transition-transform duration-200 transform shadow-md rounded-full bg-ivory hover:bg-yellow-500";

  return (
    <div className="flex rounded-full p-0.5 bg-black">
      <Link
        href={url}
        passHref
        className={buttonStyles}
        target="_blank"
        rel="noopener noreferrer"
      >
        {t(labelKey)}
      </Link>
    </div>
  );
}
