"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiSend } from "react-icons/fi";

export default function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrorMessage(""); // Clear error message on change
  };

  const handleFocus = (e) => {
    // Animate label on focus
    e.target.classList.add("active");
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    if (!formData[name]) {
      // Remove animation if the field is empty on blur
      e.target.classList.remove("active");
    }
  };

  const validateForm = () => {
    if (formData.name.length < 2) {
      setErrorMessage(t("error.nameTooShort"));
      return false;
    }
    if (!formData.email.includes("@")) {
      setErrorMessage(t("error.invalidEmail"));
      return false;
    }
    if (formData.message.length < 10) {
      setErrorMessage(t("error.messageTooShort"));
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFeedbackMessage(t("contact.success"));
        setFormData({ name: "", email: "", message: "" });
        setErrorMessage(""); // Clear error message on success
      } else {
        throw new Error("Error submitting form");
      }
    } catch (error) {
      setFeedbackMessage(t("error.submissionError"));
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-ivory">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg space-y-8 bg-transparent"
      >
        {["name", "email", "message"].map((field) => (
          <div key={field} className="relative pb-1">
            <input
              type={field === "message" ? "textarea" : field}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
              placeholder=" "
              className={`w-full p-2 text-lg bg-transparent border-b-2 border-black focus:outline-none focus:ring-0 placeholder-transparent 
                transition-all duration-200 ${formData[field] ? "active" : ""}`}
            />
            <label
              htmlFor={field}
              className={`absolute left-2 text-lg font-bold text-black lowercase transition-transform duration-200
                transform ${
                  formData[field] ? "translate-y-[-1.5rem] scale-90" : ""
                }`}
            >
              {t(`contact.${field}`)}
            </label>
            <div className="absolute bottom-0 w-full transition-all">
              <span className="block w-full h-[1.5px] bg-black"></span>
              <span
                className={`block w-full h-[3px] bg-yellow-500 -mt-[1px] transition-opacity 
                ${formData[field] ? "opacity-100" : "opacity-0"}`}
              ></span>
            </div>
          </div>
        ))}
        <button
          type="submit"
          className="flex items-center justify-center px-8 py-3 mx-auto mt-4 text-lg font-semibold text-black transition-all border-2 border-black rounded-full hover:bg-yellow-500 hover:text-black"
        >
          <FiSend className="mr-2" />
          {t("contact.submit")}
        </button>

        {/* Message Area for Success/Error */}
        <div className="flex items-center justify-center mt-4 text-center">
          {feedbackMessage && (
            <div className={errorMessage ? "text-red-600" : "text-green-600"}>
              <span className="mr-2">{errorMessage ? "❌" : "✅"}</span>
              {errorMessage || feedbackMessage}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
