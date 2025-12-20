export default function Hero() {
  return (
    <section class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
      <div class="w-48 h-48 md:w-64 md:h-64 bg-gray-200 dark:bg-gray-800 rounded-full flex-shrink-0 flex items-center justify-center border-4 border-primary/20 overflow-hidden shadow-xl">
        <div class="text-gray-400 dark:text-gray-600 flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-16 w-16 mb-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <span class="text-xs font-medium uppercase tracking-wider">
            Photo
          </span>
        </div>
      </div>
      <div class="space-y-4 text-center md:text-left">
        <p class="text-primary font-bold uppercase tracking-widest text-sm">
          About Me
        </p>
        <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-off-white">
          Hi, I'm <span class="text-primary">Valor</span>
        </h1>
        <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium">
          Solution Architect & Tech Enthusiast
        </p>
        <p class="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          Passionate about building scalable applications, leading technical
          teams, and sharing knowledge through writing. Currently navigating the
          exciting challenges of architecture and system design.
        </p>
      </div>
    </section>
  );
}
