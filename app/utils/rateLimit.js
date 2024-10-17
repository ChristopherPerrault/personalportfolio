let lastSubmitTime = 0;
const RATE_LIMIT_SECONDS = 10;
export const rateLimit = async () => {
  const currentTime = Date.now();
  if (currentTime - lastSubmitTime < RATE_LIMIT_SECONDS * 1000) {
    return true; // Rate limit hit
  }
  lastSubmitTime = currentTime; // Update last submit time
  return false; // No rate limit
};
