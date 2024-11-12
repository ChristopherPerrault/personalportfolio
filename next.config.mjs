/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    PUBLIC_URL: process.env.PUBLIC_URL || "",
  },
  i18n: {
    locales: ["en", "fr"], // Supported locales
    defaultLocale: "en", // Default language
    localeDetection: false, // Enables browser language detection
  },
};

export default nextConfig;
