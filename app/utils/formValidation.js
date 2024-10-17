// formValidation.js
export const MAX_MESSAGE_LENGTH = 500;

export const validateName = (name) => {
  if (!name) return "Name is required.";
  if (/[^a-zA-Z\s]/.test(name)) return "Name contains invalid characters.";
  return "";
};

export function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return "Invalid email address format";
  }
  return null;
}

export const validateMessage = (message) => {
  if (!message) return "Message is required.";
  if (message.length < 10) return "Message is too short.";
  if (message.length > MAX_MESSAGE_LENGTH)
    return `Message exceeds ${MAX_MESSAGE_LENGTH} characters.`;
  return "";
};
