import { assertEquals } from "@std/assert";
import { render } from "preact-render-to-string";
import IndexPage from "../routes/index.tsx";

Deno.test("IndexPage renders empty state message when no posts exist", async () => {
  const tempDir = await Deno.makeTempDir();
  const originalDir = Deno.env.get("POSTS_DIR");
  Deno.env.set("POSTS_DIR", tempDir);
  try {
    // @ts-ignore: IndexPage is an async component function
    const html = render(await IndexPage({ params: {}, data: {} }));
    assertEquals(html.includes("No posts found"), true);
  } finally {
    if (originalDir) {
      Deno.env.set("POSTS_DIR", originalDir);
    } else {
      Deno.env.delete("POSTS_DIR");
    }
    await Deno.remove(tempDir, { recursive: true });
  }
});
