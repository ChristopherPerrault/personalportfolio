"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Error submitting form");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-ivory">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-8 space-y-4 bg-white rounded-lg shadow-md"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            {t("contact.name")}
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-yellow-600"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            {t("contact.email")}
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-yellow-600"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            {t("contact.message")}
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-yellow-600"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2 font-semibold text-white transition-all bg-yellow-600 rounded-lg hover:bg-yellow-700"
        >
          {t("contact.submit")}
        </button>

        {status === "success" && (
          <p className="mt-4 text-center text-green-600">
            {t("contact.success")}
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-center text-red-600">{t("contact.error")}</p>
        )}
      </form>
    </div>
  );
}
