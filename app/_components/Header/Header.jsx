"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LangToggle from "./LangToggle";

export default function Header() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ["projects", "about", "resume", "contact"];
      const scrollPosition = window.scrollY;

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;

          if (
            scrollPosition >= offsetTop - 50 &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`bg-ivory fixed w-full top-0 left-0 z-50 transition-all duration-300 text-black ${
        isScrolled ? "py-2 border-b-[0.1px] border-black" : "py-6"
      }`}
    >
      <div className="container flex items-center justify-between px-4 mx-auto sm:px-6 lg:px-8">
        <LangToggle isScrolled={isScrolled} />

        <nav className="flex space-x-8 text-xl font-bold">
          {["projects", "about", "resume", "contact"].map((sectionId) => (
            <button
              key={sectionId}
              onClick={() => scrollToSection(sectionId)}
              className={`relative transition-colors ${
                activeSection === sectionId ? "font-bold text-yellow-600" : ""
              }`}
            >
              {t(`nav.${sectionId}`)}{" "}
              {/* Updated to match the JSON structure */}
              <span
                className={`absolute left-0 right-0 bottom-0 h-1 transition-all ${
                  activeSection === sectionId ? "bg-yellow-600" : "bg-black"
                }`}
              ></span>
              <span
                className={`absolute left-0 right-0 bottom-0 h-1 transition-all ${
                  activeSection === sectionId
                    ? "bg-yellow-500"
                    : "bg-yellow-400"
                } translate-y-0.5`}
              ></span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
