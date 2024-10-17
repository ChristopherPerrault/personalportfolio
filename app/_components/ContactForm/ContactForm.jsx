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
        className="w-full max-w-lg space-y-4 bg-transparent"
      >
        {["name", "email", "message"].map((field) => (
          <div key={field}>
            <label htmlFor={field} className="sr-only">
              {t(`contact.${field}`)}
            </label>
            <input
              type={field === "message" ? "textarea" : field}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required
              placeholder={t(`contact.${field}`)}
              className={`w-full p-2 text-lg border-b border-black bg-transparent outline-none focus:ring-0 focus:border-b-0 placeholder-black
              ${field === "message" ? "resize-none" : ""}`}
              style={{
                borderBottomWidth: 2,
                borderColor: "black",
              }}
            />
            <div className="relative border-black focus:border-yellow-600">
              <span
                className={`absolute left-0 right-0 bottom-0 h-0.5 bg-black transition-all`}
              ></span>
              <span
                className={`absolute left-0 right-0 bottom-0 h-0.5 bg-yellow-600 transition-all translate-y-0.5`}
              ></span>
            </div>
          </div>
        ))}
        <button
          type="submit"
          className="w-full py-2 font-semibold text-white bg-yellow-600 hover:bg-yellow-700"
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
