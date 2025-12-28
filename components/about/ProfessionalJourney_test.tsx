import { assertEquals } from "@std/assert";
import { render } from "preact-render-to-string";
import ProfessionalJourney from "./ProfessionalJourney.tsx";

Deno.test("ProfessionalJourney component renders correctly", () => {
  const html = render(<ProfessionalJourney />);
  assertEquals(html.includes("Professional Journey"), true);
  assertEquals(html.includes("Solution Architect"), true);
  assertEquals(html.includes("Tech Lead"), true);
  assertEquals(html.includes("Frontend Developer"), true);
  assertEquals(html.includes("Architecture"), true); // Tag
  assertEquals(html.includes("TypeScript"), true); // Tag
  assertEquals(html.includes("2020"), true);
});
