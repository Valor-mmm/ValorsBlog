import { Context } from "@fresh/core";

export async function securityMiddleware(ctx: Context<unknown>) {
  const resp = await ctx.next();

  // Security Headers
  resp.headers.set("X-Content-Type-Options", "nosniff");
  resp.headers.set("X-Frame-Options", "DENY");
  resp.headers.set("X-XSS-Protection", "1; mode=block");
  resp.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  resp.headers.set(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
  );

  // Content Security Policy
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline'",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https://httpgoats.com",
    "font-src 'self' data:",
    "connect-src 'self'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests",
    "media-src 'self' data:",
  ].join("; ");

  resp.headers.set("Content-Security-Policy", csp);

  return resp;
}
