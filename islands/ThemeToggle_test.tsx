import { assertEquals } from "@std/assert";
import { render } from "preact-render-to-string";
import { Window } from "happy-dom";
import { render as renderIntoDom } from "preact";
import { act } from "preact/test-utils";
import ThemeToggle from "./ThemeToggle.tsx";

// Setup DOM environment
const window = new Window();
// @ts-ignore: Mocking global window
globalThis.window = window;
// @ts-ignore: Mocking global document
globalThis.document = window.document;
// @ts-ignore: Mocking global localStorage
globalThis.localStorage = window.localStorage;
// @ts-ignore: Mocking global matchMedia
globalThis.matchMedia = window.matchMedia = (query: string) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: () => {},
  removeListener: () => {},
  addEventListener: () => {},
  removeEventListener: () => {},
  dispatchEvent: () => false,
});

Deno.test("ThemeToggle component renders correctly (SSR)", () => {
  const html = render(<ThemeToggle />);
  assertEquals(html.includes("<button"), true);
  assertEquals(html.includes('aria-label="Toggle Theme"'), true);
});

Deno.test("ThemeToggle component interaction", async () => {
  localStorage.clear();
  document.documentElement.classList.remove("dark");
  const container = document.createElement("div");
  document.body.appendChild(container);

  await act(() => {
    renderIntoDom(<ThemeToggle />, container);
  });

  const button = container.querySelector("button");
  assertEquals(button !== null, true);

  // Initial state (light)
  assertEquals(document.documentElement.classList.contains("dark"), false);

  // Toggle to dark
  await act(() => {
    button?.dispatchEvent(
      new window.MouseEvent("click", { bubbles: true }) as unknown as Event,
    );
  });

  assertEquals(document.documentElement.classList.contains("dark"), true);
  assertEquals(localStorage.getItem("theme"), "dark");

  // Toggle back to light
  await act(() => {
    button?.dispatchEvent(
      new window.MouseEvent("click", { bubbles: true }) as unknown as Event,
    );
  });

  assertEquals(document.documentElement.classList.contains("dark"), false);
  assertEquals(localStorage.getItem("theme"), "light");

  document.body.removeChild(container);
});

Deno.test("ThemeToggle initial theme from localStorage", async () => {
  localStorage.clear();
  document.documentElement.classList.remove("dark");
  localStorage.setItem("theme", "dark");
  const container = document.createElement("div");
  document.body.appendChild(container);

  await act(() => {
    renderIntoDom(<ThemeToggle />, container);
  });

  assertEquals(document.documentElement.classList.contains("dark"), true);

  localStorage.clear();
  document.body.removeChild(container);
});
