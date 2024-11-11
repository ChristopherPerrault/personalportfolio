"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  FaDumbbell,
  FaPepperHot,
  FaGamepad,
  FaHeart,
  FaMusic,
} from "react-icons/fa";
import { GiChefToque, GiMicrophone, GiLockpicks } from "react-icons/gi";

export default function HobbiesAndInterests() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [pauseTimeout, setPauseTimeout] = useState(null);

  const interests = [
    { name: "workingOut", icon: <FaDumbbell /> },
    { name: "growingPeppers", icon: <FaPepperHot /> },
    { name: "cooking", icon: <GiChefToque /> },
    { name: "videoGames", icon: <FaGamepad /> },
    {
      name: "vocalsInBand",
      icon: <GiMicrophone />,
      link: "https://callmestevepunk.bandcamp.com/album/take-one",
    },
    { name: "donatingBlood", icon: <FaHeart /> },
    { name: "locksport", icon: <GiLockpicks /> },
    { name: "liveMusicComedy", icon: <FaMusic /> },
  ];

  // Cycle through interests every 2 seconds, unless paused
  useEffect(() => {
    if (!isPaused) {
      const cycleInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % interests.length);
      }, 2000);
      return () => clearInterval(cycleInterval);
    }
  }, [isPaused]);

  const handleMouseEnter = (index) => {
    clearTimeout(pauseTimeout);
    setIsPaused(true);
    setCurrentIndex(index);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsPaused(false);
    }, 3000);
    setPauseTimeout(timeout);
  };

  const currentInterest = interests[currentIndex];

  return (
    <section className="container mx-auto my-12 text-center text-black">
      <div className="mb-4 text-3xl font-medium">
        <span>{t("hobbies.intro")}</span>
      </div>

      {/* Dynamic Interest Display */}
      <p className="text-3xl font-bold transition-opacity duration-500 ease-in-out">
        {currentInterest.link ? (
          <a
            href={currentInterest.link}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-rose-500 underline-offset-2 hover:text-lime-700 hover:text-shadow-lg"
          >
            {t(`hobbies.${currentInterest.name}`)}
          </a>
        ) : (
          <span className="text-yellow-500">
            {t(`hobbies.${currentInterest.name}`)}
          </span>
        )}
      </p>

      {/* Icons */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {interests.map((interest, index) => (
          <div
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className={`flex items-center justify-center w-20 h-20 rounded-full border-2 border-black transition-colors duration-300 text-5xl ${
              index === currentIndex
                ? "bg-yellow-500 text-black"
                : "bg-white text-black"
            }`}
          >
            {interest.icon}
          </div>
        ))}
      </div>
    </section>
  );
}
