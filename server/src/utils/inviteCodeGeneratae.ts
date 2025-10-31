import { randomBytes } from "crypto";

/**
 * Generate a cryptographically-strong invite code.
 * Default size 24 bytes -> ~32 url-safe base64 chars.
 */
export const generateInviteCode = (size = 24): string => {
  const buf = randomBytes(size);
  // make URL-safe base64 (no padding)
  return buf
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
};
