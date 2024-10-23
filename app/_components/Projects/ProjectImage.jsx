"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaCircle } from "react-icons/fa";

export default function ProjectImage({ images }) {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    const carousel = carouselRef.current;
    setCanScrollLeft(carousel.scrollLeft > 0);
    setCanScrollRight(
      carousel.scrollLeft < carousel.scrollWidth - carousel.clientWidth
    );
  };

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    checkScrollPosition();
    carousel.addEventListener("scroll", checkScrollPosition);
    return () => {
      carousel.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  return (
    <div className="relative">
      {/* Left Arrow Button */}
      <button
        onClick={scrollLeft}
        className={`absolute top-1/2 left-4 transform -translate-y-1/2 z-10 px-3 py-2 transition-all duration-300 bg-transparent border rounded-full ${
          canScrollLeft
            ? "text-upperLightBlue border-blue-200 hover:bg-upperLightBlue hover:text-black"
            : "text-gray-500 border-gray-500 cursor-not-allowed"
        }`}
        disabled={!canScrollLeft}
      >
        {canScrollLeft ? <FaChevronLeft size={24} /> : <FaCircle size={24} />}
      </button>

      {/* Image Carousel */}
      <div
        ref={carouselRef}
        className="flex p-4 space-x-4 overflow-x-scroll scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-gray-200"
        style={{ scrollBehavior: "smooth" }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[300px] h-[300px] relative"
          >
            <Image
              src={src}
              alt={`Project Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              priority={index === 0} //first image loads with priority
            />
          </div>
        ))}
      </div>

      {/* Right Arrow Button */}
      <button
        onClick={scrollRight}
        className={`absolute top-1/2 right-4 transform -translate-y-1/2 z-10 px-3 py-2 transition-all duration-300 bg-transparent border rounded-full ${
          canScrollRight
            ? "text-upperLightBlue border-upperLightBlue hover:bg-upperLightBlue hover:text-black"
            : "text-gray-500 border-gray-500 cursor-not-allowed"
        }`}
        disabled={!canScrollRight}
      >
        {canScrollRight ? <FaChevronRight size={24} /> : <FaCircle size={24} />}
      </button>
    </div>
  );
}
