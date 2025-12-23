import { assertEquals } from "@std/assert";
import { render } from "preact-render-to-string";
import Connect from "./Connect.tsx";

Deno.test("Connect component renders correctly", () => {
  const html = render(<Connect />);
  assertEquals(html.includes("Let's Connect"), true);
  assertEquals(html.includes("LinkedIn"), true);
  assertEquals(html.includes("GitHub"), false);
  assertEquals(html.includes("X (Twitter)"), false);
});
