import en from "./locales/en/common.json";
import es from "./locales/es/common.json";
import fr from "./locales/fr/common.json";

export type Locale = "en" | "es" | "fr";

export const translations = {
  en,
  es,
  fr,
} as const;

export const defaultLocale: Locale = "en";

export const locales: Locale[] = ["en", "es", "fr"];

export type TranslationKeys = typeof en;

export default translations;
