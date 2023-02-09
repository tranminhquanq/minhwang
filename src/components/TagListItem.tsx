import { FC } from "react";
import Tag from "@/components/Tag";

interface Props {
  tag: string;
  count?: number;
}

const TagListItem: FC<Props> = ({ tag, count }) => {
  return <Tag tag={tag} count={count} />;
};

export default TagListItem;
