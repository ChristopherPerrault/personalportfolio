"use client";

import { useEffect, useState } from "react";
import i18n from "../i18n";
import Loading from "../loading"; // Ensure your loading component is properly imported

export default function I18nInitializer({ children }) {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const handleInitialization = () => {
      i18n.changeLanguage("en");
      setInitialized(true);
    };

    if (!i18n.isInitialized) {
      i18n.on("initialized", handleInitialization);
    } else {
      handleInitialization();
    }

    // Cleanup listener on unmount
    return () => {
      i18n.off("initialized", handleInitialization);
    };
  }, []);

  // Show loading until initialized
  if (!initialized) return <Loading />;

  return children;
}
