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
    <article class="max-w-3xl mx-auto">
      <header class="mb-10">
        <h1 class="text-4xl font-extrabold text-gray-900 dark:text-off-white mb-4">
          {post.title}
        </h1>
        <div class="flex items-center space-x-4 text-gray-500 dark:text-gray-400">
          <time datetime={post.publishedAt.toISOString()}>
            {new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
              post.publishedAt,
            )}
          </time>
          <span>•</span>
          <div class="flex gap-2">
            {post.tags.map((tag) => (
              <span key={tag} class="text-secondary font-medium">#{tag}</span>
            ))}
          </div>
        </div>
      </header>

      <div
        class="markdown-body prose prose-slate dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <div class="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
        <a
          href="/"
          class="text-primary hover:underline flex items-center gap-2"
        >
          ← Back to Blog
        </a>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .markdown-body {
          background-color: transparent !important;
          color: inherit !important;
        }
        .markdown-body pre {
          background-color: #1e293b !important;
        }
      `,
        }}
      />
    </article>
  );
});
