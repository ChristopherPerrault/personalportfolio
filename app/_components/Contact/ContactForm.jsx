"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FiSend } from "react-icons/fi";
import { FaCheck, FaTimes } from "react-icons/fa";
import {
  validateName,
  validateEmail,
  validateMessage,
  MAX_MESSAGE_LENGTH,
} from "../../utils/formValidation";
import { rateLimit } from "../../utils/rateLimit";

export default function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [touchedFields, setTouchedFields] = useState({});
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const fieldErrors = {
    name: formData.name
      ? validateName(formData.name, t)
      : t("contact.validation.name"),
    email: formData.email
      ? validateEmail(formData.email, t)
      : t("contact.validation.email"),
    message: formData.message
      ? validateMessage(formData.message, t)
      : t("contact.validation.message"),
  };

  const isFieldValid = (field) => !fieldErrors[field];

  useEffect(() => {
    const isValid = !Object.values(fieldErrors).some((error) => error);
    setIsButtonDisabled(!isValid);
  }, [formData, fieldErrors]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    setTouchedFields((prev) => ({ ...prev, [name]: true }));
    e.target.classList.add("active");
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    if (!formData[name]) e.target.classList.remove("active");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (await rateLimit()) {
      setFeedbackMessage(t("error.rateLimit"));
      return;
    }
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log(response); // Log the full response for debugging
      if (response.ok) {
        setFeedbackMessage(t("contact.success"));
        setFormData({ name: "", email: "", message: "" });
        setTouchedFields({});
      } else {
        throw new Error("Error submitting form");
      }
    } catch (error) {
      setFeedbackMessage(t("error.submissionError"));
    }
  };

  return (
    <section id="contact" className="flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-8 ">
        <h2 className="flex justify-center text-4xl font-bold">
          {t("contact.title")}
        </h2>
        {Object.keys(fieldErrors).some(
          (field) => touchedFields[field] && fieldErrors[field]
        ) && (
          <div className="mb-4 text-center text-red-400 ">
            {Object.entries(fieldErrors)
              .filter(([field, error]) => touchedFields[field] && error)
              .map(([field, error], index) => (
                <div key={index}>{error}</div>
              ))}
          </div>
        )}
        {["name", "email", "message"].map((field) => (
          <div key={field} className="relative flex items-center pb-1">
            <input
              type={field === "message" ? "textarea" : field}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
              maxLength={field === "message" ? MAX_MESSAGE_LENGTH : undefined}
              placeholder=" "
              className={`w-full p-2 text-lg bg-transparent border-b-2 border-black focus:outline-none focus:ring-0 placeholder-transparent 
        transition-all duration-200 ${formData[field] ? "active" : ""}`}
            />
            <label
              htmlFor={field}
              className={`absolute left-2 text-lg font-bold text-black lowercase transition-transform duration-200
        transform ${formData[field] ? "translate-y-[-1.5rem] scale-90" : ""}`}
            >
              {t(`contact.${field}`)}{" "}
            </label>
            <div className="absolute right-0">
              {touchedFields[field] &&
                (isFieldValid(field) ? (
                  <FaCheck className="text-green-500" />
                ) : (
                  <FaTimes className="text-red-500" />
                ))}
            </div>
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
          disabled={isButtonDisabled}
          className={`flex items-center justify-center p-0.5 rounded-full bg-black mx-auto mt-4`}
        >
          <div
            className={`flex items-center justify-center w-full px-8 py-3 text-lg font-semibold text-black transition-all rounded-full bg-ivory
    ${
      isButtonDisabled
        ? "bg-gray-500 cursor-not-allowed opacity-60"
        : "hover:bg-yellow-500 hover:text-black"
    }`}
          >
            <FiSend className="mr-2" />
            {t("contact.submit")}
          </div>
        </button>
        <div className="flex items-center justify-center mt-4 text-center">
          {feedbackMessage && (
            <div
              className={
                feedbackMessage.includes("Error")
                  ? "text-red-600"
                  : "text-green-600"
              }
            >
              <span className="mr-2">
                {feedbackMessage.includes("Error") ? "❌" : "✅"}
              </span>
              {feedbackMessage}
            </div>
          )}
        </div>
      </form>
    </section>
  );
}
