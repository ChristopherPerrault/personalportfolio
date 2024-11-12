"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons

import LangToggle from "./LangToggle";

export default function Header() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false); // For burger menu toggle

  useEffect(() => {
    let timeout;
    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsScrolled(window.scrollY > 50);
        const sections = ["projects", "about", "resume", "contact"];
        const scrollPosition = window.scrollY;

        sections.forEach((sectionId) => {
          const section = document.getElementById(sectionId);
          if (section) {
            const offsetTop = section.offsetTop;
            const offsetHeight = section.offsetHeight;

            if (
              scrollPosition >= offsetTop - 220 &&
              scrollPosition < offsetTop + offsetHeight + 220
            ) {
              setActiveSection(sectionId);
            }
          }
        });
      }, 10);
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

        {/* Burger menu for small screens */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-black hover:text-yellow-500 focus:outline-none"
            aria-label="Toggle navigation"
          >
            {isOpen ? <FaTimes /> : <FaBars />} {/* Burger/close icon */}
          </button>
        </div>

        {/* Desktop navigation links */}
        <nav className="hidden space-x-8 text-xl font-bold lg:flex">
          {["projects", "about", "resume", "contact"].map((sectionId) => (
            <button
              key={sectionId}
              onClick={() => scrollToSection(sectionId)}
              className={`relative transition-colors ${
                activeSection === sectionId ? "font-bold text-yellow-600" : ""
              }`}
            >
              {t(`nav.${sectionId}`)}{" "}
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

      {/* Mobile navigation menu (hidden on large screens) */}
      <div
        className={`lg:hidden ${isOpen ? "block" : "hidden"} bg-ivory w-full`}
      >
        <div className="flex flex-col items-center py-4 space-y-6">
          {["projects", "about", "resume", "contact"].map((sectionId) => (
            <button
              key={sectionId}
              onClick={() => {
                scrollToSection(sectionId);
                setIsOpen(false); // Close menu on item click
              }}
              className={`relative transition-colors ${
                activeSection === sectionId ? "font-bold text-yellow-600" : ""
              } text-xl`}
            >
              {t(`nav.${sectionId}`)}{" "}
              <span
                className={`absolute left-0 right-0 bottom-0 h-1 transition-all ${
                  activeSection === sectionId ? "bg-yellow-600" : "bg-black"
                }`}
              ></span>
            </button>
          ))}
        </div>
        {/* Close button below nav links for small screens */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl text-black hover:text-yellow-500"
            aria-label="Close navigation"
          >
            <FaTimes />
          </button>
        </div>
      </div>
    </header>
  );
}
