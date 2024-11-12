"use client";
import { LuArrowUpSquare } from "react-icons/lu";

export default function BackToTopButton() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="flex flex-row justify-center mr-8 select-none -mb-9">
      <button onClick={scrollToTop}>
        <LuArrowUpSquare
          size={50}
          className="text-black hover:text-yellow-500"
        />
      </button>
    </div>
  );
}
