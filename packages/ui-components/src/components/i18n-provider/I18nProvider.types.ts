import type { ReactNode } from "react";

export type Locale = "en" | "es" | "fr" | "de" | "pt" | "it";

export interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, params?: Record<string, string>) => string;
}

export interface I18nProviderProps {
  /** Child components */
  children: ReactNode;
  /** Default locale */
  defaultLocale?: Locale;
  /** Translation dictionary */
  translations?: Record<Locale, Record<string, string>>;
}
