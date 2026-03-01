/**
 * Global configuration for the application.
 * Consolidates environment variables with safe fallbacks and formatting.
 */

const envPhone = import.meta.env.VITE_PATIENT_PHONE;

/**
 * The primary phone number for patient scheduling and ordering.
 * Fallback: "555-555-5555" (Placeholder if .env is missing or blank)
 */
export const PATIENT_PHONE = envPhone && envPhone.trim() !== '' 
  ? envPhone 
  : "555-555-5555";

/**
 * The URI-safe version of the phone number for 'tel:' links.
 * For numbers with extensions (like 'x5009'), it uses a comma (',') 
 * to signal most smartphones to pause for 2 seconds before dialing the extension.
 */
export const PATIENT_PHONE_URI = `tel:${PATIENT_PHONE.replace(/[^0-9xX]/g, '').replace(/[xX]/, ',')}`;
