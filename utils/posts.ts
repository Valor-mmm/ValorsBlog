import { extract } from "@std/front-matter/any";
import { join } from "@std/path";

export interface Post {
  slug: string;
  title: string;
  publishedAt: Date;
  updatedAt?: Date;
  description: string;
  tags: string[];
  content: string;
  readingTime: number;
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
  updated_at?: string;
  description: string;
  tags: string[];
}

export function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
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
      updatedAt: metadata.updated_at
        ? new Date(metadata.updated_at)
        : undefined,
      description: metadata.description,
      tags: metadata.tags,
      content: body,
      readingTime: calculateReadingTime(body),
    };
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      return null;
    }
    throw error;
  }
}
