export default function AboutMe() {
  return (
    <div class="max-w-3xl mx-auto space-y-8">
      <header class="space-y-4">
        <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-off-white sm:text-5xl">
          About Me
        </h1>
        <p class="text-xl text-gray-500 dark:text-gray-400">
          A bit more about my background and journey.
        </p>
      </header>

      <section class="prose dark:prose-invert max-w-none">
        <p>
          Hello! I'm Valor. I'm currently working as a Solution Architect, a
          role that I've found to be quite different from what I initially
          expected.
        </p>
        <p>
          Before this, I spent five years developing my skills and eventually
          leading technical teams. I'm passionate about building scalable
          applications and sharing knowledge through writing.
        </p>
        <p>
          [This section is a work in progress. I'll be adding more details about
          my experience, projects, and interests soon!]
        </p>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-off-white">
          Connect with me
        </h2>
        <p class="text-gray-600 dark:text-gray-400">
          Feel free to reach out if you have any questions or just want to chat
          about tech!
        </p>
        <div class="flex space-x-4">
          <span class="text-primary hover:secondary transition-colors duration-200 cursor-pointer">
            Twitter
          </span>
          <span class="text-primary hover:secondary transition-colors duration-200 cursor-pointer">
            GitHub
          </span>
          <span class="text-primary hover:secondary transition-colors duration-200 cursor-pointer">
            LinkedIn
          </span>
        </div>
      </section>
    </div>
  );
}
