"use client";

import { useEffect, useState } from "react";
import i18n from "../i18n";
import Loading from "../loading";

export default function I18nInitializer({ children }) {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleInitialization = () => {
      // Check and set the initial language
      if (!i18n.isInitialized) {
        i18n.changeLanguage("fr"); // Set the default language to French
      }
      setTimeout(() => {
        setFadeOut(true); // Start fade-out when loading is complete
        setTimeout(() => {
          setLoading(false); // After fade-out, hide loading
        }, 200); // Duration of the fade-out effect
      }, 2500); // loading time
    };

    // Check if i18n is already initialized
    if (i18n.isInitialized) {
      handleInitialization();
    } else {
      i18n.on("initialized", handleInitialization);
    }

    // Cleanup listener on unmount
    return () => {
      i18n.off("initialized", handleInitialization);
    };
  }, []);

  // Show loading until timer completes
  if (loading) return <Loading fadeOut={fadeOut} />;

  return children;
}
