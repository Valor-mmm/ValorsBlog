import { assertEquals } from "@std/assert";
import { render } from "preact-render-to-string";
import App from "./_app.tsx";

Deno.test("_app renders correctly with light theme", () => {
  const req = new Request("https://example.com");
  const html = render(<App Component={() => <div>Content</div>} req={req} />);
  // Check for the script tag
  assertEquals(html.includes('<script src="/theme-init.js"></script>'), true);
  // In light mode (no cookie), class should not contain "dark"
  assertEquals(html.includes('class="dark"'), false);
});

Deno.test("_app renders correctly with dark theme from cookie", () => {
  const req = new Request("https://example.com", {
    headers: { "cookie": "theme=dark" },
  });
  const html = render(<App Component={() => <div>Content</div>} req={req} />);
  // In dark mode, class should contain "dark"
  assertEquals(html.includes('class="dark"'), true);
});
