import { assertEquals } from "@std/assert";
import { render } from "preact-render-to-string";
import AboutMe from "./about-me.tsx";

Deno.test("AboutMe page renders correctly", () => {
  const html = render(<AboutMe />);
  assertEquals(html.includes("About Me"), true);
  assertEquals(html.includes("Solution Architect"), true);
});
