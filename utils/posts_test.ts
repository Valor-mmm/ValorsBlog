import { assertEquals, assertExists } from "@std/assert";
import { getPost, getPosts } from "./posts.ts";

Deno.env.set("POSTS_DIR", "./tests/__mocks__/posts");

Deno.test("getPosts() returns all posts and sorts them by date", async () => {
  const posts = await getPosts();
  assertExists(posts);
  assertEquals(Array.isArray(posts), true);
  assertEquals(posts.length >= 2, true);
  // Check sorting: newest first (mock-post-2 is 2025-01-02, mock-post-1 is 2025-01-01)
  assertEquals(posts[0].slug, "mock-post-2");
  assertEquals(posts[1].slug, "mock-post-1");
  assertEquals(posts[0].publishedAt > posts[1].publishedAt, true);
});

Deno.test("getPost() returns a post by slug", async () => {
  const post = await getPost("mock-post-1");
  assertExists(post);
  assertEquals(post?.slug, "mock-post-1");
  assertEquals(post?.title, "Mock Post 1");
});

Deno.test("getPost() returns null for non-existent slug", async () => {
  const post = await getPost("non-existent");
  assertEquals(post, null);
});

Deno.test("getPost() throws error for unexpected errors", async () => {
  const originalReadTextFile = Deno.readTextFile;
  // @ts-ignore: Mocking Deno.readTextFile
  Deno.readTextFile = (path: string | URL, options?: Deno.ReadFileOptions) => {
    if (path.toString().includes("error-slug")) {
      return Promise.reject(new Error("Unexpected error"));
    }
    return originalReadTextFile(path, options);
  };

  try {
    await getPost("error-slug");
  } catch (error) {
    assertEquals((error as Error).message, "Unexpected error");
  } finally {
    Deno.readTextFile = originalReadTextFile;
  }
});
