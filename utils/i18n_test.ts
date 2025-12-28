import { assertEquals } from "@std/assert";
import {
  isTranslationCollection,
  isTranslationLeaf,
  isTranslations,
  t,
} from "./i18n.ts";

Deno.test("i18n - t() returns correct translation for simple key", () => {
  assertEquals(t("nav.title"), "Valor's Blog");
});

Deno.test("i18n - t() returns correct translation for nested key", () => {
  assertEquals(t("nav.links.blog"), "Blog");
  assertEquals(t("nav.links.about"), "About Me");
});

Deno.test("i18n - t() returns correct translation for deeply nested key", () => {
  assertEquals(t("about.hero.greeting"), "Hi, I'm");
});

Deno.test("i18n - t() returns key when key is missing", () => {
  // We expect a console.warn, but we check the return value
  assertEquals(t("non.existent.key"), "non.existent.key");
});

Deno.test("i18n - t() returns key when value is an object (not a string)", () => {
  // "nav" is an object in en.json
  assertEquals(t("nav"), "nav");
});

Deno.test("i18n - t() returns key when value is null or undefined (missing path)", () => {
  assertEquals(t("hero.missing"), "hero.missing");
});

Deno.test("i18n - isTranslationLeaf validates correctly", () => {
  assertEquals(isTranslationLeaf({ a: "b" }), true);
  assertEquals(isTranslationLeaf({ a: 1 }), false);
  assertEquals(isTranslationLeaf(null), false);
  assertEquals(isTranslationLeaf("string"), false);
  assertEquals(isTranslationLeaf({ a: { b: "c" } }), false);
});

Deno.test("i18n - isTranslationCollection validates correctly", () => {
  assertEquals(isTranslationCollection({ a: "b" }), true);
  assertEquals(isTranslationCollection({ a: { b: "c" } }), true);
  assertEquals(isTranslationCollection({ a: 1 }), false);
  assertEquals(isTranslationCollection({ a: { b: 1 } }), false);
});

Deno.test("i18n - isTranslations validates correctly", () => {
  assertEquals(isTranslations({ a: "b" }), true);
  assertEquals(isTranslations({ a: { b: "c" } }), true);
  assertEquals(isTranslations({ a: { b: { c: "d" } } }), true);
  assertEquals(isTranslations({ a: { b: { c: { d: "e" } } } }), true);
  assertEquals(isTranslations({ a: { b: { c: { d: { e: "f" } } } } }), true);
  assertEquals(
    isTranslations({ a: { b: { c: { d: { e: { f: "g" } } } } } }),
    true,
  );
  assertEquals(
    isTranslations({ a: { b: { c: { d: { e: { f: { g: "h" } } } } } } }),
    false,
  );
});
