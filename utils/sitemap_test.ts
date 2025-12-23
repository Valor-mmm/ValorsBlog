import { assertEquals } from "@std/assert";
import { generateSitemap } from "./sitemap.ts";

Deno.test("generateSitemap() generates valid XML", async () => {
  const originalPostsDir = Deno.env.get("POSTS_DIR");
  Deno.env.set("POSTS_DIR", "./tests/__mocks__/posts");

  try {
    const baseUrl = "https://blog.valor.example";
    const sitemap = await generateSitemap(baseUrl);

    assertEquals(sitemap.startsWith("<?xml"), true);
    assertEquals(sitemap.includes("<urlset"), true);
    assertEquals(sitemap.includes(`${baseUrl}/</loc>`), true);
    assertEquals(sitemap.includes(`${baseUrl}/about-me</loc>`), true);

    // Check if posts from mocks are present
    assertEquals(sitemap.includes(`${baseUrl}/posts/mock-post-1`), true);
    assertEquals(sitemap.includes(`${baseUrl}/posts/mock-post-2`), true);
    assertEquals(sitemap.includes(`${baseUrl}/posts/mock-post-3`), true);

    // Check for lastmod
    assertEquals(sitemap.includes("<lastmod>"), true);

    // Check sorting indirectly by checking content if needed, but generateSitemap just calls getPosts
    // which is already tested for sorting.
  } finally {
    if (originalPostsDir) {
      Deno.env.set("POSTS_DIR", originalPostsDir);
    } else {
      Deno.env.delete("POSTS_DIR");
    }
  }
});
