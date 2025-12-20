import { assertEquals } from "@std/assert";
import { render } from "preact-render-to-string";
import NotFoundPage from "../routes/_404.tsx";

Deno.test("404 page renders correctly", () => {
  const html = render(<NotFoundPage />);
  assertEquals(html.includes("404"), true);
  assertEquals(html.includes("Page not found"), true);
  assertEquals(html.includes("https://httpgoats.com/404.jpg"), true);
});
