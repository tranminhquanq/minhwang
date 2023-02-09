import { FC } from "react";
import { useTags } from "@/contexts/TagsContext";

const ResetTagsButton: FC = () => {
  const { resetTags } = useTags();
  return (
    <div className="my-8">
      <button className={`link-tag`} onClick={resetTags}>
        reset tags
      </button>
    </div>
  );
};

export default ResetTagsButton;
