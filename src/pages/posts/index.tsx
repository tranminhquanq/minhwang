import { FC } from "react";
import { InferGetStaticPropsType } from "next";
import PostPreviewList from "@/components/PostPreviewList";
import { getAllPostsMeta } from "@/utils/loadMDX";

export async function getStaticProps() {
  const posts = await getAllPostsMeta();
  return {
    props: { posts },
  };
}

type Props = InferGetStaticPropsType<typeof getStaticProps>;
const Posts: FC<Props> = ({ posts }) => {
  return (
    <div className="w-full sm:max-w-[75ch] m-auto px-5 py-16 flex flex-col justify-center items-center">
      <PostPreviewList posts={posts} />
    </div>
  );
};

export default Posts;
