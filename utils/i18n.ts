import i18next from "i18next";
import translations from "../locales/en.json" with { type: "json" };

i18next.init({
  lng: "en",
  fallbackLng: "en",
  resources: {
    en: {
      translation: translations,
    },
  },
  interpolation: {
    escapeValue: false, // not needed for preact
  },
  returnObjects: true,
});

/**
 * Simple translation function that retrieves strings from the locales/en.json file
 * using dot notation.
 */
export function t(key: string): string {
  if (!i18next.exists(key)) {
    console.warn(`Translation key not found: ${key}`);
    return key;
  }
  const result = i18next.t(key);
  if (typeof result !== "string") {
    console.warn(`Translation key does not point to a string: ${key}`);
    return key;
  }
  return result;
}

/**
 * Retrieves a structured object (array or object) from the locales/en.json file
 * using dot notation.
 */
export function tObj<T>(key: string): T {
  if (!i18next.exists(key)) {
    console.warn(`Translation key not found: ${key}`);
    return key as unknown as T;
  }
  return i18next.t(key, { returnObjects: true }) as T;
}
