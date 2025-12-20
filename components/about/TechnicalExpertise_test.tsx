import { assertEquals } from "@std/assert";
import { render } from "preact-render-to-string";
import TechnicalExpertise from "./TechnicalExpertise.tsx";

Deno.test("TechnicalExpertise component renders correctly", () => {
  const skills = ["TypeScript", "Deno", "React"];
  const html = render(<TechnicalExpertise skills={skills} />);

  assertEquals(html.includes("Technical Expertise"), true);
  assertEquals(html.includes("Architecture &amp; Strategy"), true);
  assertEquals(html.includes("Core Technologies"), true);

  for (const skill of skills) {
    assertEquals(html.includes(skill), true);
  }
});
