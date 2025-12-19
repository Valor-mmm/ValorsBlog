import { createDefine } from "@fresh/core";
import { getPosts } from "../utils/posts.ts";

const { page } = createDefine();

export default page(async (_ctx) => {
  const posts = await getPosts();

  return (
    <div class="space-y-12">
      <header class="space-y-4">
        <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-off-white sm:text-5xl">
          Insights & Experiences
        </h1>
        <p class="text-xl text-gray-500 dark:text-gray-400">
          Sharing my journey from Dev to Tech Lead to Solution Architect.
        </p>
      </header>

      <section class="grid gap-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            class="group relative flex flex-col items-start p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 hover:shadow-lg transition-all duration-300"
          >
            <h2 class="text-2xl font-bold text-gray-900 dark:text-off-white group-hover:text-primary transition-colors duration-200">
              <a href={`/posts/${post.slug}`}>
                <span class="absolute inset-0" />
                {post.title}
              </a>
            </h2>
            <time
              datetime={post.publishedAt.toISOString()}
              class="mt-2 text-sm text-gray-400"
            >
              {new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
                post.publishedAt,
              )}
            </time>
            <p class="mt-4 text-gray-600 dark:text-gray-400 line-clamp-3">
              {post.description}
            </p>
            <div class="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
});
