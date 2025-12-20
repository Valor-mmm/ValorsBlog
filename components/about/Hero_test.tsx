import { assertEquals } from "@std/assert";
import { render } from "preact-render-to-string";
import Hero from "./Hero.tsx";

Deno.test("About Hero component renders correctly", () => {
  const html = render(<Hero />);
  assertEquals(html.includes("Hi, I'm"), true);
  assertEquals(html.includes("Valor"), true);
  assertEquals(html.includes("Solution Architect"), true);
  assertEquals(html.includes("About Me"), true);
});
