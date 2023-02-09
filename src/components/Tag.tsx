import { FC } from "react";
import { useRouter } from "next/router";
import { useTags } from "@/contexts/TagsContext";

interface Props {
  tag: string;
  count?: number;
}
const Tag: FC<Props> = ({ tag, count }) => {
  const { tags, toggleTags, resetTags } = useTags();
  const isSelected = tags.has(tag);
  const router = useRouter();
  const isInPosts = router.asPath.includes("posts/");
  const isInNotes = router.asPath.includes("notes/");
  const isIsPreviewList = !isInPosts && !isInNotes;

  return (
    <small
      className={
        !isSelected || !isIsPreviewList ? `link-tag` : "link-tag-selected"
      }
      style={{
        margin: "12px 12px 0 0",
        display: "inline-block",
        cursor: "pointer",
      }}
      onClick={() => {
        if (isInPosts) {
          router.push("/posts");
          resetTags();
        } else if (isInNotes) {
          router.push("/notes");
          resetTags();
        }
        toggleTags(tag);
      }}
    >
      {tag}
      {count && ` (${count})`}
    </small>
  );
};

export default Tag;
