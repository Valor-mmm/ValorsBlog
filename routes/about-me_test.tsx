import { assertEquals } from "@std/assert";
import { render } from "preact-render-to-string";
import { VNode } from "preact";
import AboutMe from "./about-me.tsx";

Deno.test("AboutMe page renders correctly", async () => {
  const html = render(
    await (AboutMe as unknown as (props: unknown) => Promise<VNode>)({
      params: {},
      data: {},
      url: new URL("https://example.com/about-me"),
    }),
  );
  assertEquals(html.includes("About Me"), true);
  assertEquals(html.includes("Solution Architect"), true);
});
