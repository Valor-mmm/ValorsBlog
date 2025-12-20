import { assertEquals, assertExists } from "@std/assert";
import { calculateReadingTime, getPost, getPosts } from "./posts.ts";

Deno.env.set("POSTS_DIR", "./tests/__mocks__/posts");

Deno.test("getPosts() returns all posts and sorts them by date", async () => {
  const posts = await getPosts();
  assertExists(posts);
  assertEquals(Array.isArray(posts), true);
  assertEquals(posts.length >= 3, true);
  // Check sorting: newest first (mock-post-3 is 2025-01-03, mock-post-2 is 2025-01-02, mock-post-1 is 2025-01-01)
  assertEquals(posts[0].slug, "mock-post-3");
  assertEquals(posts[1].slug, "mock-post-2");
  assertEquals(posts[2].slug, "mock-post-1");
  assertEquals(posts[0].publishedAt > posts[1].publishedAt, true);

  // Check that not-a-post.txt was skipped
  const slugs = posts.map((p) => p.slug);
  assertEquals(slugs.includes("not-a-post"), false);
});

Deno.test("getPost() returns a post with updatedAt", async () => {
  const post = await getPost("mock-post-3");
  assertExists(post);
  assertEquals(post?.slug, "mock-post-3");
  assertEquals(post?.updatedAt instanceof Date, true);
  assertEquals(post?.updatedAt?.toISOString().startsWith("2025-01-04"), true);
});

Deno.test("getPosts and getPost handle POSTS_DIR fallback", async () => {
  const originalPostsDir = Deno.env.get("POSTS_DIR");
  Deno.env.delete("POSTS_DIR");
  try {
    // This will try to read from ./content/posts, which should exist in the project
    const posts = await getPosts();
    assertExists(posts);
    
    // We can also test getPost with a known post in content/posts
    const post = await getPost("intro");
    assertExists(post);
  } finally {
    if (originalPostsDir) {
      Deno.env.set("POSTS_DIR", originalPostsDir);
    }
  }
});

Deno.test("getPosts() skips files that fail to load", async () => {
  const originalReadTextFile = Deno.readTextFile;
  // @ts-ignore: Mocking Deno.readTextFile
  Deno.readTextFile = (path: string | URL, options?: Deno.ReadFileOptions) => {
    if (path.toString().includes("mock-post-1.md")) {
      return Promise.reject(new Deno.errors.NotFound());
    }
    return originalReadTextFile(path, options);
  };

  try {
    const posts = await getPosts();
    const slugs = posts.map((p) => p.slug);
    assertEquals(slugs.includes("mock-post-1"), false);
    assertEquals(slugs.includes("mock-post-2"), true);
  } finally {
    Deno.readTextFile = originalReadTextFile;
  }
});

Deno.test("getPost() returns a post by slug", async () => {
  const post = await getPost("mock-post-1");
  assertExists(post);
  assertEquals(post?.slug, "mock-post-1");
  assertEquals(post?.title, "Mock Post 1");
  assertEquals(post?.readingTime, 1);
  assertEquals(post?.updatedAt, undefined);
});

Deno.test("calculateReadingTime() calculates correct time", () => {
  // Test with a few words
  const text1 = "one two three four five";
  assertEquals(calculateReadingTime(text1), 1);
  
  // Test with more words (200 words = 1 min)
  const text2 = "word ".repeat(200);
  assertEquals(calculateReadingTime(text2), 1);
  
  // Test with 201 words (201 words = 2 min)
  const text3 = "word ".repeat(201);
  assertEquals(calculateReadingTime(text3), 2);
  
  // Test with 400 words (400 words = 2 min)
  const text4 = "word ".repeat(400);
  assertEquals(calculateReadingTime(text4), 2);
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
