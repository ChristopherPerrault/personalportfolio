"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function AboutIntro() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 bg-ivory">
      <div className="text-center ">
        <h2 className="mb-8 text-4xl font-bold">About Me</h2>
        <div className="flex flex-col items-center justify-center md:flex-row md:space-x-8">
          <div className="relative w-56 h-56 mb-4 overflow-hidden border-4 border-yellow-500 rounded-lg shadow-lg md:w-64 md:h-64 md:mb-0">
            <Image
              src="/images/profile_pic.jpg"
              alt={t("about.photoAlt")}
              layout="fill"
              objectFit="cover"
              className="scale-150"
            />
          </div>

          <div className="max-w-lg text-left">
            <p className="text-xl leading-relaxed text-gray-700">
              {t("about.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
