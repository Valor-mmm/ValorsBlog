import { App, staticFiles } from "@fresh/core";
import { tailwind } from "@fresh/plugin-tailwind";
export const app = new App();

app.use(staticFiles());
app.fsRoutes();

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
