import translations from "../locales/en.json" with { type: "json" };

/**
 * Simple translation function that retrieves strings from the locales/en.json file
 * using dot notation.
 */
export function t(key: string): string {
  const keys = key.split(".");
  let current: unknown = translations;

  for (const k of keys) {
    if (current && typeof current === "object" && k in current) {
      current = current[k];
    } else {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
  }

  if (typeof current !== "string") {
    console.warn(`Translation key does not point to a string: ${key}`);
    return key;
  }

  return current;
}
