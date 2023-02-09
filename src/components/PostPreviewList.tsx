import { FC } from "react";
import { useTags } from "@/contexts/TagsContext";
import TagList from "@/components/TagList";
import ResetTagsButton from "@/components/ResetTagsButton";
import PostPreview from "@/components/PostPreview";
import { formatTags } from "@/utils/common";

interface Props {
  posts: PostMeta[];
}

const PostPreviewList: FC<Props> = ({ posts }) => {
  const { tags: selectedTags } = useTags();
  const isShowAllPosts = selectedTags.size === 0;
  const postTagCountMap = posts.reduce((tagCountMap, post) => {
    formatTags(post.tags).forEach((tag) =>
      tagCountMap.set(tag, (tagCountMap.get(tag) ?? 0) + 1)
    );
    return tagCountMap;
  }, new Map());
  const fileredPosts = isShowAllPosts
    ? posts
    : posts.filter((post) => {
        const postTagSet = new Set(formatTags(post.tags));
        return Array.from(selectedTags).every((selectedTag) =>
          postTagSet.has(selectedTag)
        );
      });

  if (!isShowAllPosts && fileredPosts.length === 0)
    return (
      <>
        <TagList postTagCountMap={postTagCountMap} />
        <ResetTagsButton />
      </>
    );

  const postsByYear: Record<string, PostMeta[]> = {};
  fileredPosts.forEach((post) => {
    const year = new Date(post.date).getFullYear();
    const knownPosts = postsByYear[year] || [];
    postsByYear[year] = [...knownPosts, post];
  });

  return (
    <>
      <TagList postTagCountMap={postTagCountMap} />
      {Object.entries(postsByYear)
        .reverse()
        .map(([year, posts]) => {
          return (
            <div key={year} className="w-full">
              <h2 className="pl-1 text-lg font-semibold">{year}</h2>
              <ul>
                {posts.map((post) => (
                  <PostPreview key={post.slug} {...post} />
                ))}
              </ul>
            </div>
          );
        })}
    </>
  );
};

export default PostPreviewList;
