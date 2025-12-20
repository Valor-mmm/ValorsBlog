export default function WhatIWriteAbout() {
  return (
    <section class="space-y-8">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-off-white border-b border-gray-200 dark:border-gray-800 pb-2">
        What I Write About
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div class="space-y-3">
          <h4 class="text-lg font-bold text-gray-900 dark:text-off-white">
            Software Architecture
          </h4>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            Exploring patterns, trade-offs, and best practices for building
            robust and maintainable systems in a fast-paced environment.
          </p>
        </div>
        <div class="space-y-3">
          <h4 class="text-lg font-bold text-gray-900 dark:text-off-white">
            Development Workflows
          </h4>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            Deep dives into tools and techniques that improve developer
            productivity, from CI/CD to local environment setups.
          </p>
        </div>
        <div class="space-y-3">
          <h4 class="text-lg font-bold text-gray-900 dark:text-off-white">
            Engineering Leadership
          </h4>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            Insights on leading teams, managing technical debt, and fostering a
            healthy engineering culture that delivers value.
          </p>
        </div>
        <div class="space-y-3">
          <h4 class="text-lg font-bold text-gray-900 dark:text-off-white">
            Modern Web & Tools
          </h4>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            My experiments and thoughts on new technologies like Deno, Fresh,
            Tailwind CSS, and the evolving web ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
}
