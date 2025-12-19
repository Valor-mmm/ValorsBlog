export default function Hero() {
  return (
    <section class="relative overflow-hidden py-16 mb-16 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm group">
      {/* Visual Interest: Subtle Animated Gradients */}
      <div class="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float group-hover:bg-primary/20 transition-colors duration-700">
      </div>
      <div
        class="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float group-hover:bg-secondary/20 transition-colors duration-700"
        style="animation-delay: -5s;"
      >
      </div>

      {/* Optional: Code snippet background feel */}
      <div
        class="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none font-mono text-[10px] leading-none select-none overflow-hidden"
        aria-hidden="true"
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} class="whitespace-nowrap">
            {`function solve(problem) { return solution; } `.repeat(10)}
          </div>
        ))}
      </div>

      <div class="relative px-8 sm:px-16 flex flex-col items-start">
        <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-off-white mb-6">
          Architecting <span class="text-primary">Scalable</span> <br />
          & <span class="text-secondary">Robust</span> Systems
        </h1>

        <div class="flex flex-wrap gap-3 mb-10">
          <span class="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
            5+ Years in Tech
          </span>
          <span class="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
            Tech Lead
          </span>
          <span class="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-300 border border-primary/20">
            Solution Architect
          </span>
        </div>

        <p class="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed mb-8">
          Deep dives into modern system design, cloud architecture, and
          engineering leadership. Sharing the lessons learned from building
          systems that scale and leading teams that thrive.
        </p>

        <div class="h-1.5 w-24 bg-gradient-to-r from-primary to-secondary rounded-full">
        </div>
      </div>
    </section>
  );
}
