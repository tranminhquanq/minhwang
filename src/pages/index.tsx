import { useMemo } from "react";
import { InferGetStaticPropsType } from "next";
import Image from "next/image";
import path from "path";
import fs from "fs";
import { getMDXComponent } from "mdx-bundler/client";
import { components } from "@/components/MDXComponents";
import Experience from "@/components/Experience";
import Spacer from "@/components/Spacer";
import MyPic from "@/components/MyPic";
import { loadMDX, getAllPostsMeta } from "@/utils/loadMDX";

type Props = InferGetStaticPropsType<typeof getStaticProps>;
const mdxComponent = { ...components, Image, Experience, Spacer, MyPic };

export default function Home({ code, posts }: Props) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <article className="max-w-[75ch] mx-auto pt-12 pb-28 px-5">
      <Component components={mdxComponent} />
    </article>
  );
}

export async function getStaticProps() {
  const file = path.resolve(process.cwd(), "src", "contents", "home.mdx");
  const source = fs.readFileSync(file, "utf-8");

  const [{ code }, posts] = await Promise.all([
    loadMDX(source),
    getAllPostsMeta(),
  ]);

  return { props: { code, posts } };
}
