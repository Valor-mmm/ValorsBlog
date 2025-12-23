import { ComponentChild } from "preact";
import Navigation from "../components/Navigation.tsx";
import { t } from "../utils/i18n.ts";

export default function App(
  { Component, req }: { Component: () => ComponentChild; req: Request },
) {
  const cookies = req.headers.get("cookie") || "";
  const isDark = cookies.includes("theme=dark");

  return (
    <html lang="en" class={isDark ? "dark" : ""}>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles.css" />
        <script src="/theme-init.js" />
      </head>
      <body class="bg-off-white dark:bg-deep-navy text-gray-900 dark:text-off-white min-h-screen transition-colors duration-200">
        <div
          class="fixed inset-0 pointer-events-none z-[-1] opacity-5 dark:opacity-10"
          style="background-image: radial-gradient(#3b82f6 1px, transparent 1px); background-size: 20px 20px;"
        >
        </div>
        <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-x border-dashed border-gray-200 dark:border-gray-800 min-h-screen">
          <Navigation />
          <main class="py-10">
            <Component />
          </main>
          <footer class="py-10 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} {t("footer.copyright")}
          </footer>
        </div>
      </body>
    </html>
  );
}
