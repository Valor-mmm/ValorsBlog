import { assertEquals } from "@std/assert";
import { render } from "preact-render-to-string";
import Hero from "./Hero.tsx";

Deno.test("Hero component renders correctly", () => {
  const html = render(<Hero />);
  assertEquals(html.includes("Architecting"), true);
  assertEquals(html.includes("Scalable"), true);
  assertEquals(html.includes("Robust"), true);
  assertEquals(html.includes("8+ Years in Tech"), true);
  assertEquals(html.includes("Tech Lead"), true);
  assertEquals(html.includes("Solution Architect"), true);
});
