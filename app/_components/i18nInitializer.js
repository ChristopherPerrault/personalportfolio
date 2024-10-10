"use client";

import { useEffect, useState } from "react";
import Loading from "../loading";

export default function I18nInitializer({ children }) {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Start fade-out when loading is complete
      setTimeout(() => {
        setLoading(false); // After fade-out, hide loading
      }, 300); // Duration of the fade-out effect
    }, 3000); // Adjust the loading time as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading fadeOut={fadeOut} />;

  return children;
}
