import ThemeToggle from "../islands/ThemeToggle.tsx";

export default function Navigation() {
  return (
    <nav class="flex justify-between items-center py-6 px-4 max-w-4xl mx-auto">
      <div class="flex items-center space-x-4">
        <a
          href="/"
          class="text-2xl font-bold text-gray-900 dark:text-off-white hover:text-primary transition-colors duration-200"
        >
          Valor's Blog
        </a>
      </div>
      <div class="flex items-center space-x-6">
        <a
          href="/"
          class="text-gray-600 dark:text-gray-300 hover:text-secondary transition-colors duration-200"
        >
          Blog
        </a>
        <a
          href="/about-me"
          class="text-gray-600 dark:text-gray-300 hover:text-secondary transition-colors duration-200"
        >
          About Me
        </a>
        <ThemeToggle />
      </div>
    </nav>
  );
}
