// formValidation.js
export const MAX_MESSAGE_LENGTH = 1000;

export const validateName = (name, t) => {
  if (!name) return t("contact.validation.name");
  if (/[^a-zA-Z\s]/.test(name)) return t("contact.validation.invalidName");
  return "";
};

export const validateEmail = (email, t) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return t("contact.validation.invalidEmail");
  }
  return "";
};

export const validateMessage = (message, t) => {
  if (!message) return t("contact.validation.message");
  if (message.length < 10) return t("contact.validation.messageTooShort");
  if (message.length > MAX_MESSAGE_LENGTH)
    return t("contact.validation.messageTooLong");
  return "";
};
