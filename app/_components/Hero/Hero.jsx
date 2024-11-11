"use client";

import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("projects");
    portfolioSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-black bg-ivory">
      <h1 className="text-5xl font-extrabold tracking-tight text-center md:text-7xl lg:text-8xl">
        {t("hero.greeting")} <br />
        <span className="text-yellow-500">Christopher Perrault</span>
      </h1>
      <p className="mt-4 text-xl font-medium text-center md:text-2xl lg:text-3xl">
        {t("hero.description")}
      </p>

      <div className="flex justify-center mt-8">
        <div className="flex rounded-md p-0.5 bg-black shadow-md">
          <button
            onClick={scrollToPortfolio}
            className="w-full px-8 py-3 text-lg font-semibold text-black transition-transform duration-200 transform bg-white rounded-md hover:bg-yellow-500 hover:text-black"
          >
            {t("hero.ctaBtn")}
          </button>
        </div>
      </div>
    </section>
  );
}
