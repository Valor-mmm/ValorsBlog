import { createDefine } from "@fresh/core";
import { getPosts } from "../utils/posts.ts";
import Hero from "../components/Hero.tsx";

const { page } = createDefine();

export default page(async (_ctx) => {
  const posts = await getPosts();

  return (
    <div class="space-y-12">
      <Hero />

      <section class="grid gap-8">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-off-white mb-4">
          Latest Articles
        </h2>
        {posts.length > 0
          ? (
            posts.map((post) => (
              <article
                key={post.slug}
                class="group relative flex flex-col items-start p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 hover:shadow-lg transition-all duration-300 hover-lift"
              >
                <h2 class="text-2xl font-bold text-gray-900 dark:text-off-white group-hover:text-primary transition-colors duration-200">
                  <a href={`/posts/${post.slug}`}>
                    <span class="absolute inset-0" />
                    {post.title}
                  </a>
                </h2>
                <div class="mt-2 flex items-center gap-3 text-sm text-gray-400">
                  <time datetime={post.publishedAt.toISOString()}>
                    {new Intl.DateTimeFormat("en-US", { dateStyle: "long" })
                      .format(
                        post.publishedAt,
                      )}
                  </time>
                  <span>•</span>
                  <span>{post.readingTime} min read</span>
                </div>
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
            ))
          )
          : (
            <div class="text-center py-20 bg-gray-50 dark:bg-gray-900/30 rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-800">
              <div class="text-6xl mb-4">📝</div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-off-white">
                No posts found
              </h3>
              <p class="mt-2 text-gray-600 dark:text-gray-400">
                Check back later for new content!
              </p>
            </div>
          )}
      </section>
    </div>
  );
});
