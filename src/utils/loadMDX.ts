import { bundleMDX } from "mdx-bundler";
import remarkGfm from "remark-gfm";
import remarkPrism from "remark-prism";
import rehypeSlug from "rehype-slug";
import rehypeAutolink from "rehype-autolink-headings";
import glob from "tiny-glob";
import matter from "gray-matter";
import path from "path";
import fs from "fs";
import { autoLinkHeadingsOptions } from "./rehypeAutolinkPlugin";

const ROOT_PATH = process.cwd();
const POST_PATH = path.join(ROOT_PATH, "src/contents/posts");
// const NOTE_PATH = path.join(ROOT_PATH, "src/contents/notes");

export async function loadMDX(source: string) {
  const bundle = await bundleMDX({
    source,
    mdxOptions(options) {
      options.remarkPlugins = [
        ...(options?.remarkPlugins ?? []),
        remarkGfm,
        remarkPrism,
      ];
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        rehypeSlug,
        [rehypeAutolink, autoLinkHeadingsOptions],
      ];
      return options;
    },
  });

  return bundle;
}

export const getAllPostsMeta = async () => {
  const allPostsPath = await glob(`${POST_PATH}/**/*.mdx`);

  return allPostsPath
    .map((postPath): PostMeta => {
      const post = fs.readFileSync(path.join(ROOT_PATH, postPath), "utf-8");
      const slug = path.basename(postPath).replace(/\.mdx$/, "");
      const meta = matter(post).data;

      return { ...meta, slug } as PostMeta;
    })
    .filter((meta) => meta.published)
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
};
