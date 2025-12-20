import { assertEquals } from "@std/assert";
import { render } from "preact-render-to-string";
import { VNode } from "preact";
import IndexPage from "./index.tsx";

Deno.env.set("POSTS_DIR", "./tests/__mocks__/posts");

Deno.test("IndexPage renders correctly", async () => {
  const html = render(
    await (IndexPage as unknown as (props: unknown) => Promise<VNode>)({
      params: {},
      data: {},
      url: new URL("https://example.com/"),
    }),
  );
  assertEquals(html.includes("Architecting"), true);
  assertEquals(html.includes("Scalable"), true);
  assertEquals(html.includes("Robust"), true);
  assertEquals(html.includes("Mock Post 1"), true);
  assertEquals(html.includes("Mock Post 2"), true);
});
