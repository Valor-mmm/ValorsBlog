import { assertEquals } from "@std/assert";
import { securityMiddleware } from "./security.ts";

Deno.test("securityMiddleware adds security headers", async () => {
  const ctx = {
    next: () => Promise.resolve(new Response("ok")),
  };

  // @ts-ignore: Mocking Context
  const resp = await securityMiddleware(ctx);

  assertEquals(resp.headers.get("X-Content-Type-Options"), "nosniff");
  assertEquals(resp.headers.get("X-Frame-Options"), "DENY");
  assertEquals(resp.headers.get("X-XSS-Protection"), "1; mode=block");
  assertEquals(
    resp.headers.get("Referrer-Policy"),
    "strict-origin-when-cross-origin",
  );
  assertEquals(
    resp.headers.get("Strict-Transport-Security"),
    "max-age=31536000; includeSubDomains; preload",
  );
  assertEquals(resp.headers.has("Content-Security-Policy"), true);
  const csp = resp.headers.get("Content-Security-Policy");
  assertEquals(csp?.includes("default-src 'self'"), true);
  assertEquals(csp?.includes("upgrade-insecure-requests"), true);
  assertEquals(csp?.includes("frame-ancestors 'none'"), true);
});
