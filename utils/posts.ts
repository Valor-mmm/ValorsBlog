import { extract } from "@std/front-matter/any";
import { join } from "@std/path";

export interface Post {
  slug: string;
  title: string;
  publishedAt: Date;
  description: string;
  tags: string[];
  content: string;
}

export async function getPosts(): Promise<Post[]> {
  const postsDir = Deno.env.get("POSTS_DIR") || "./content/posts";
  const files = Deno.readDir(postsDir);
  const posts: Post[] = [];
  for await (const file of files) {
    if (file.name.endsWith(".md")) {
      const slug = file.name.replace(".md", "");
      const post = await getPost(slug);
      if (post) {
        posts.push(post);
      }
    }
  }
  return posts.sort((a, b) =>
    b.publishedAt.getTime() - a.publishedAt.getTime()
  );
}

interface PostMetadata {
  title: string;
  published_at: string;
  description: string;
  tags: string[];
}

export async function getPost(slug: string): Promise<Post | null> {
  const postsDir = Deno.env.get("POSTS_DIR") || "./content/posts";
  try {
    const text = await Deno.readTextFile(join(postsDir, `${slug}.md`));
    const { attrs, body } = extract(text);
    const metadata = attrs as unknown as PostMetadata;
    return {
      slug,
      title: metadata.title,
      publishedAt: new Date(metadata.published_at),
      description: metadata.description,
      tags: metadata.tags,
      content: body,
    };
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      return null;
    }
    throw error;
  }
}
