"use client";

import { useEffect, useState } from "react";
import i18n from "../i18n";
import Loading from "../loading";

export default function I18nInitializer({ children }) {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const handleInitialization = () => {
      i18n.changeLanguage("en");
      setInitialized(true);
    };

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

  if (!initialized) return <Loading />;

  return children;
}
