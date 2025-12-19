import { assertEquals, assertRejects } from "@std/assert";
import { render } from "preact-render-to-string";
import { VNode } from "preact";
import { HttpError } from "@fresh/core";
import PostPage from "./[slug].tsx";

Deno.env.set("POSTS_DIR", "./tests/__mocks__/posts");

Deno.test("PostPage renders correctly", async () => {
  const html = render(
    await (PostPage as unknown as (props: unknown) => Promise<VNode>)({
      params: { slug: "mock-post-1" },
      data: {},
    }),
  );
  assertEquals(html.includes("Mock Post 1"), true);
  assertEquals(html.includes("content of mock post 1"), true);
});

Deno.test("PostPage throws 404 for non-existent post", async () => {
  const req = new Request("https://example.com/posts/non-existent");
  const pageHandler = PostPage as unknown as (props: unknown) => Promise<VNode>;

  const error = await assertRejects(
    () =>
      pageHandler({
        req,
        params: { slug: "non-existent" },
        state: {},
        data: {},
      }),
    HttpError,
  );
  assertEquals(error.status, 404);
});
