import { createDefine, HttpError } from "@fresh/core";
import { render } from "@deno/gfm";
import { getPost } from "../../utils/posts.ts";

const { page } = createDefine();

export default page(async (ctx) => {
  const post = await getPost(ctx.params.slug);
  if (!post) {
    throw new HttpError(404, "Post not found");
  }

  const html = render(post.content);

  return (
    <article class="max-w-3xl mx-auto px-4 sm:px-0">
      <header class="mb-12">
        <h1 class="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-off-white mb-6 leading-tight">
          {post.title}
        </h1>
        <div class="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <time
            datetime={post.publishedAt.toISOString()}
            class="flex items-center gap-1"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
              post.publishedAt,
            )}
          </time>
          <span>•</span>
          <span class="flex items-center gap-1">
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {post.readingTime} min read
          </span>
          {post.updatedAt && (
            <>
              <span class="hidden sm:inline">•</span>
              <span class="italic">
                Updated on{" "}
                {new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
                  post.updatedAt,
                )}
              </span>
            </>
          )}
          <span class="hidden sm:inline">•</span>
          <div class="flex gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                class="text-secondary font-medium hover:underline cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      <div
        class="markdown-body max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <div class="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
        <a
          href="/"
          class="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-200 font-medium group"
        >
          <span class="group-hover:-translate-x-1 transition-transform duration-200">
            ←
          </span>{" "}
          Back to Blog
        </a>
      </div>
    </article>
  );
});
