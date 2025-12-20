import { assertEquals } from "@std/assert";
import { render } from "preact-render-to-string";
import WhatIWriteAbout from "./WhatIWriteAbout.tsx";

Deno.test("WhatIWriteAbout component renders correctly", () => {
  const html = render(<WhatIWriteAbout />);
  assertEquals(html.includes("What I Write About"), true);
  assertEquals(html.includes("Software Architecture"), true);
  assertEquals(html.includes("Development Workflows"), true);
  assertEquals(html.includes("Engineering Leadership"), true);
  assertEquals(html.includes("Modern Web &amp; Tools"), true);
});
