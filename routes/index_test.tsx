import { assertEquals } from "@std/assert";
import { render } from "preact-render-to-string";
import IndexPage from "./index.tsx";

Deno.env.set("POSTS_DIR", "./tests/__mocks__/posts");

Deno.test("IndexPage renders correctly", async () => {
  // @ts-ignore: IndexPage is an async component function
  const html = render(await IndexPage({ params: {}, data: {} }));
  assertEquals(html.includes("Architecting"), true);
  assertEquals(html.includes("Scalable"), true);
  assertEquals(html.includes("Robust"), true);
  assertEquals(html.includes("Mock Post 1"), true);
  assertEquals(html.includes("Mock Post 2"), true);
});
