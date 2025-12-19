import { assertEquals } from "@std/assert";
import { render } from "preact-render-to-string";
import Navigation from "./Navigation.tsx";

Deno.test("Navigation component renders correctly", () => {
  const html = render(<Navigation />);
  assertEquals(html.includes("Blog"), true);
  assertEquals(html.includes('href="/"'), true);
  assertEquals(html.includes('href="/about-me"'), true);
});
