"use client";
import { BiArrowToTop } from "react-icons/bi";

export default function BackToTopButton() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="flex flex-row justify-end mr-8 select-none -mb-9">
      <div className="tooltip-container">
        <button onClick={scrollToTop}>
          <BiArrowToTop
            size={50}
            className="text-yellow-500 hover:text-yellow-600"
          />
        </button>
      </div>
    </div>
  );
}
