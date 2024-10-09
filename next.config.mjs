/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "fr"], // Supported locales
    defaultLocale: "en", // Default language
    // localeDetection: false, // Enables browser language detection
  },
};

export default nextConfig;
