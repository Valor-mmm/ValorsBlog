import { assertEquals } from "@std/assert";
import { render } from "preact-render-to-string";
import AboutMe from "./about-me.tsx";

Deno.test("AboutMe page renders correctly", async () => {
  // @ts-ignore: AboutMe is a Fresh page component
  const html = render(await AboutMe({ params: {}, data: {} }));
  assertEquals(html.includes("About Me"), true);
  assertEquals(html.includes("Solution Architect"), true);
});
