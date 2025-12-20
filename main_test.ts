import { assertEquals } from "@std/assert";
import { app, start } from "./main.ts";

Deno.test("App smoke test", () => {
  assertEquals(typeof app.handler, "function");
});

Deno.test("start() function branches", async () => {
  const { Builder } = await import("@fresh/core/dev");
  const originalBuild = Builder.prototype.build;
  const originalListen = Builder.prototype.listen;

  // Mock methods to avoid side effects
  Builder.prototype.build = () => Promise.resolve((_app: unknown) => {});
  Builder.prototype.listen = () => Promise.resolve();

  Deno.env.set("DENO_ENV", "test");
  try {
    // Test build branch
    await start(app, ["build"]);

    // Test listen branch (with mock, it won't actually listen)
    // We temporarily unset DENO_ENV test to hit the branch
    Deno.env.set("DENO_ENV", "not-test");
    await start(app, []);

    // Test default args
    Deno.env.set("DENO_ENV", "test");
    await start(app);
  } finally {
    Builder.prototype.build = originalBuild;
    Builder.prototype.listen = originalListen;
    Deno.env.set("DENO_ENV", "test");
  }
});
