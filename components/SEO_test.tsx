import { assertEquals } from "@std/assert";
import { render } from "preact-render-to-string";
import SEO from "./SEO.tsx";

Deno.test("SEO component - website defaults", () => {
  const html = render(
    <SEO url="https://example.com" />,
  );
  assertEquals(html.includes("<title>Valor's Blog</title>"), true);
  assertEquals(
    html.includes(
      '<meta name="description" content="Welcome to Valor\'s Blog - exploring technology, development, and more."/>',
    ),
    true,
  );
  assertEquals(
    html.includes('<meta property="og:type" content="website"/>'),
    true,
  );
  assertEquals(html.includes('"@type":"WebSite"'), true);
});

Deno.test("SEO component - article with full props", () => {
  const publishedAt = new Date("2025-01-01T10:00:00Z");
  const updatedAt = new Date("2025-01-02T10:00:00Z");
  const html = render(
    <SEO
      title="Test Post"
      description="Test Description"
      url="https://example.com/posts/test"
      ogType="article"
      keywords={["test", "deno"]}
      publishedAt={publishedAt}
      updatedAt={updatedAt}
      author="Custom Author"
      image="/images/test.png"
    />,
  );

  assertEquals(html.includes("<title>Test Post | Valor's Blog</title>"), true);
  assertEquals(
    html.includes('<meta name="description" content="Test Description"/>'),
    true,
  );
  assertEquals(
    html.includes('<meta name="keywords" content="test, deno"/>'),
    true,
  );
  assertEquals(
    html.includes('<meta name="author" content="Custom Author"/>'),
    true,
  );
  assertEquals(
    html.includes('<meta property="og:type" content="article"/>'),
    true,
  );
  assertEquals(
    html.includes(
      '<meta property="og:url" content="https://example.com/posts/test"/>',
    ),
    true,
  );
  assertEquals(
    html.includes(
      '<link rel="canonical" href="https://example.com/posts/test"/>',
    ),
    true,
  );
  assertEquals(
    html.includes(
      '<meta property="og:image" content="https://example.com/images/test.png"/>',
    ),
    true,
  );

  assertEquals(
    html.includes(
      '<meta name="article:published_time" content="2025-01-01T10:00:00.000Z"/>',
    ),
    true,
  );
  assertEquals(
    html.includes(
      '<meta name="article:modified_time" content="2025-01-02T10:00:00.000Z"/>',
    ),
    true,
  );

  // JSON-LD checks
  assertEquals(html.includes('"@type":"BlogPosting"'), true);
  assertEquals(html.includes('"headline":"Test Post"'), true);
  assertEquals(html.includes('"name":"Custom Author"'), true);
  assertEquals(
    html.includes('"datePublished":"2025-01-01T10:00:00.000Z"'),
    true,
  );
  assertEquals(
    html.includes('"dateModified":"2025-01-02T10:00:00.000Z"'),
    true,
  );
});

Deno.test("SEO component - image URL handling", () => {
  const htmlWithAbsoluteImage = render(
    <SEO
      url="https://example.com"
      image="https://other.com/img.png"
    />,
  );
  assertEquals(
    htmlWithAbsoluteImage.includes('content="https://other.com/img.png"'),
    true,
  );

  const htmlWithRelativeImage = render(
    <SEO
      url="https://example.com/path"
      image="/img.png"
    />,
  );
  assertEquals(
    htmlWithRelativeImage.includes('content="https://example.com/img.png"'),
    true,
  );
});

Deno.test("SEO component - robots meta tag", () => {
  const html = render(<SEO />);
  assertEquals(
    html.includes(
      '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/>',
    ),
    true,
  );
});
