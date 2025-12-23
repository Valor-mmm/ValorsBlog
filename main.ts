import { App, staticFiles } from "@fresh/core";
import { tailwind } from "@fresh/plugin-tailwind";
import { dirname, fromFileUrl, join } from "@std/path";
import { securityMiddleware } from "./utils/security.ts";
import { generateSitemap } from "./utils/sitemap.ts";

const __dirname = dirname(fromFileUrl(import.meta.url));
export const app = new App();

app.use(securityMiddleware);
app.use(staticFiles());

app.get("/healthz", () =>
  new Response("ok", {
    headers: { "Content-Type": "text/plain" },
  }));

app.get("/sitemap.xml", async (ctx) => {
  const baseUrl = new URL(ctx.url).origin;
  const sitemap = await generateSitemap(baseUrl);
  return new Response(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
});

app.fsRoutes(join(__dirname, "routes"));

export async function start<T>(app: App<T>, args: string[] = Deno.args) {
  const { Builder } = await import("@fresh/core/dev");
  const builder = new Builder();
  tailwind(builder, {});

  if (args.includes("build")) {
    const buildResult = await builder.build();
    buildResult(app);
    return;
  }

  if (Deno.env.get("DENO_ENV") !== "test") {
    await builder.listen(() => Promise.resolve(app));
  }
}

if (import.meta.main) {
  await start(app);
}
