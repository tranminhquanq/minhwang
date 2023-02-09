import { getPost, getAllPostsMeta } from "@/utils/loadMDX";
import { getMDXComponent } from "mdx-bundler/client";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { FC, useMemo } from "react";
import PostWrap from "@/components/PostWrap";
import { components } from "@/components/MDXComponents";

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const slug = context.params?.slug as string;
  const post = await getPost(slug);
  const tweets = {};

  return {
    props: {
      ...post,
      tweets,
    },
  };
};

export const getStaticPaths = async () => {
  const posts = await getAllPostsMeta();
  const paths = posts.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: false, // 404
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Post: FC<Props> = ({ meta, code, tweets }) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <PostWrap meta={meta}>
      <Component components={{ ...components }} />
    </PostWrap>
  );
};

export default Post;
