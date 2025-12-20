import { assertEquals } from "@std/assert";
import { render } from "preact-render-to-string";
import ProfessionalJourney from "./ProfessionalJourney.tsx";

Deno.test("ProfessionalJourney component renders correctly", () => {
  const html = render(<ProfessionalJourney />);
  assertEquals(html.includes("Professional Journey"), true);
  assertEquals(html.includes("Solution Architect"), true);
  assertEquals(html.includes("Technical Lead"), true);
  assertEquals(html.includes("2018"), true);
});
