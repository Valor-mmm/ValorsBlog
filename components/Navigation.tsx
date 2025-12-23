import ThemeToggle from "../islands/ThemeToggle.tsx";
import { t } from "../utils/i18n.ts";

export default function Navigation() {
  return (
    <nav class="flex justify-between items-center py-6">
      <div class="flex items-center space-x-4">
        <a
          href="/"
          class="text-2xl font-bold text-gray-900 dark:text-off-white hover:text-primary transition-colors duration-200"
        >
          {t("nav.title")}
        </a>
      </div>
      <div class="flex items-center space-x-6">
        <a
          href="/"
          class="nav-link text-gray-600 dark:text-gray-300 hover:text-secondary transition-colors duration-200"
        >
          {t("nav.links.blog")}
        </a>
        <a
          href="/about-me"
          class="nav-link text-gray-600 dark:text-gray-300 hover:text-secondary transition-colors duration-200"
        >
          {t("nav.links.about")}
        </a>
        <ThemeToggle />
      </div>
    </nav>
  );
}
