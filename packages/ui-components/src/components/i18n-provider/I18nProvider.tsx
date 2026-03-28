import React, { createContext, useContext, useState, useCallback } from "react";
import type {
  I18nProviderProps,
  I18nContextValue,
  Locale,
} from "./I18nProvider.types";

const defaultTranslations: Record<Locale, Record<string, string>> = {
  en: {},
  es: {},
  fr: {},
  de: {},
  pt: {},
  it: {},
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export const I18nProvider = ({
  children,
  defaultLocale = "en",
  translations = defaultTranslations,
}: I18nProviderProps) => {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  const t = useCallback(
    (key: string, params?: Record<string, string>) => {
      let text = translations[locale]?.[key] || key;
      if (params) {
        Object.entries(params).forEach(([k, v]) => {
          text = text.replace(`{${k}}`, v);
        });
      }
      return text;
    },
    [locale, translations],
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
};

export default I18nProvider;
