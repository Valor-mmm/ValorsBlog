import SEO from "../components/SEO.tsx";

export default function NotFound() {
  return (
    <div class="flex flex-col items-center justify-center py-20 text-center">
      <SEO
        title="404 - Page Not Found"
        description="Oops! The page you are looking for does not exist."
      />
      <div class="relative mb-8 group">
        <div class="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200">
        </div>
        <img
          src="https://httpgoats.com/404.jpg"
          alt="404 Goat"
          class="relative rounded-2xl shadow-2xl max-w-md w-full"
        />
      </div>
      <h1 class="text-6xl font-extrabold text-gray-900 dark:text-off-white mb-4">
        404
      </h1>
      <p class="text-2xl font-medium text-gray-600 dark:text-gray-400 mb-8">
        Oops! Page not found
      </p>
      <a
        href="/"
        class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200"
      >
        Go back home
      </a>
    </div>
  );
}
