import { getPosts } from "./posts.ts";

export async function generateSitemap(baseUrl: string) {
  const posts = await getPosts();

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/about-me</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  ${
    posts.map((post) => `
  <url>
    <loc>${baseUrl}/posts/${post.slug}</loc>
    <lastmod>${
      (post.updatedAt || post.publishedAt).toISOString().split("T")[0]
    }</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join("")
  }
</urlset>`;
}
