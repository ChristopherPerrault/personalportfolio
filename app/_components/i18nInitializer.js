"use client";

import { useEffect, useState } from "react";
import Loading from "../loading"; // Ensure your loading component is properly imported

export default function I18nInitializer({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., 4 seconds for demonstration)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);

  // Show loading until timer completes
  if (loading) return <Loading />;

  return children;
}
