import { assertEquals } from "@std/assert";
import { t, tObj } from "./i18n.ts";

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

Deno.test("i18n - tObj() returns object for valid key", () => {
  const journey = tObj<{ title: string; items: unknown[] }>("about.journey");
  assertEquals(typeof journey, "object");
  assertEquals(journey.title, "Professional Journey");
  assertEquals(Array.isArray(journey.items), true);
});

Deno.test("i18n - tObj() returns key when key is missing", () => {
  assertEquals(tObj("non.existent.key"), "non.existent.key");
});
