import { assertEquals } from "@std/assert";
import { render } from "preact-render-to-string";
import SocialLinks from "./SocialLinks.tsx";

Deno.test("SocialLinks component renders correctly", () => {
  const html = render(<SocialLinks />);
  assertEquals(html.includes("Let's Connect"), true);
  assertEquals(html.includes("GitHub"), true);
  assertEquals(html.includes("LinkedIn"), true);
  assertEquals(html.includes("X (Twitter)"), true);
});
