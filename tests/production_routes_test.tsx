import { assertEquals } from "@std/assert";
import { app } from "../main.ts";

Deno.test("Healthz route returns 200 ok", async () => {
  const handler = app.handler();
  const req = new Request("http://localhost/healthz");
  const resp = await handler(req);
  assertEquals(resp.status, 200);
  const text = await resp.text();
  assertEquals(text, "ok");
});

Deno.test("Sitemap.xml returns 200 and XML content", async () => {
  const handler = app.handler();
  const req = new Request("http://localhost/sitemap.xml");
  const resp = await handler(req);
  assertEquals(resp.status, 200);
  assertEquals(resp.headers.get("Content-Type"), "application/xml");
  const text = await resp.text();
  assertEquals(text.startsWith("<?xml"), true);
  assertEquals(text.includes("<urlset"), true);
  assertEquals(text.includes("<loc>http://localhost/</loc>"), true);
});

Deno.test("Security headers are present on healthz", async () => {
  const handler = app.handler();
  const req = new Request("http://localhost/healthz");
  const resp = await handler(req);
  assertEquals(resp.headers.get("X-Content-Type-Options"), "nosniff");
  assertEquals(resp.headers.get("X-Frame-Options"), "DENY");
  assertEquals(resp.headers.has("Content-Security-Policy"), true);
});
