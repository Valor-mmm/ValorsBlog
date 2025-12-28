import { assertEquals } from "@std/assert";
import { render } from "preact-render-to-string";
import Education from "./Education.tsx";

Deno.test("Education component renders correctly", () => {
  const html = render(<Education />);
  assertEquals(html.includes("Education"), true);
  assertEquals(html.includes("B.Sc. Information Technology"), true);
  assertEquals(html.includes("M.Sc. IT Focus Software Engineering"), true);
  assertEquals(html.includes("1.9"), true);
  assertEquals(html.includes("2014"), true);
  assertEquals(html.includes("2018"), true);
});
