import translations from "../locales/en.json" with { type: "json" };

type TranslationLeaf = Record<string, string>;
type TranslationCollection = Record<string, TranslationLeaf | string>;
type TranslationCollectionLvl2 = Record<string, TranslationCollection | string>;
type TranslationCollectionLvl3 = Record<
  string,
  TranslationCollectionLvl2 | TranslationCollection | string
>;
type TranslationCollectionLvl4 = Record<
  string,
  | TranslationCollectionLvl3
  | TranslationCollectionLvl2
  | TranslationCollection
  | string
>;

type Translations =
  | Record<string, TranslationCollectionLvl4>
  | TranslationCollectionLvl3
  | TranslationCollectionLvl2
  | TranslationCollection
  | TranslationLeaf;

export function isTranslationLeaf(input: unknown): input is TranslationLeaf {
  return typeof input === "object" && input !== null &&
    Object.values(input).every((v) => typeof v === "string");
}

export function isTranslationCollection(
  input: unknown,
): input is TranslationCollection {
  return typeof input === "object" && input !== null &&
    Object.values(input).every((v) =>
      isTranslationLeaf(v) || typeof v === "string"
    );
}

export function isTranslationCollectionLv2(
  input: unknown,
): input is TranslationCollectionLvl2 {
  return typeof input === "object" && input !== null &&
    Object.values(input).every((v) =>
      isTranslationCollection(v) || isTranslationLeaf(v) ||
      typeof v === "string"
    );
}

export function isTranslationCollectionLv3(
  input: unknown,
): input is TranslationCollectionLvl3 {
  return typeof input === "object" && input !== null &&
    Object.values(input).every((v) =>
      isTranslationCollectionLv2(v) || isTranslationCollection(v) ||
      isTranslationLeaf(v) || typeof v === "string"
    );
}

export function isTranslationCollectionLv4(
  input: unknown,
): input is TranslationCollectionLvl4 {
  return typeof input === "object" && input !== null &&
    Object.values(input).every((v) =>
      isTranslationCollectionLv3(v) || isTranslationCollectionLv2(v) ||
      isTranslationCollection(v) || isTranslationLeaf(v) ||
      typeof v === "string"
    );
}

export function isTranslations(input: unknown): input is Translations {
  return typeof input === "object" && input !== null &&
    Object.values(input).every((v) =>
      isTranslationCollectionLv4(v) || isTranslationCollectionLv3(v) ||
      isTranslationCollectionLv2(v) || isTranslationCollection(v) ||
      isTranslationLeaf(v) || typeof v === "string"
    );
}

/**
 * Simple translation function that retrieves strings from the locales/en.json file
 * using dot notation.
 */
export function t(key: string): string {
  const keys = key.split(".");

  if (!isTranslations(translations)) {
    throw new Error("Translations are not in the valid format");
  }

  let current: Translations | TranslationCollectionLvl4 | string = translations;

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
