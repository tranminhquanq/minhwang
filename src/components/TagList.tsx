import { FC } from "react";
import TagListItem from "@/components/TagListItem";

interface Props {
  postTagCountMap: Map<string, number>;
}
const TagList: FC<Props> = ({ postTagCountMap }) => {
  const tags = [];
  //@ts-ignore
  for (const [tag, count] of postTagCountMap) {
    tags.push(<TagListItem tag={tag} count={count} />);
  }

  return (
    <div className="mb-10 self-start">
      <h2 className="pl-1 text-lg font-semibold">tags:</h2>
      <ul>{tags}</ul>
    </div>
  );
};

export default TagList;
