import { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Tag from "@/components/Tag";
import { validDate, formateDatePreview } from "@/utils/date";
import { formatTags } from "@/utils/common";

const PostMeta: FC<PostMeta> = ({ slug, title, date, tags }) => {
  const router = useRouter();

  return (
    <li className="my-8">
      <Link href={`${router.asPath}/${slug}`}>
        <span className="flex items-center p-1 capitalize transition-colors duration-200 rounded outline-none">
          <p className="text-sm mr-8 min-w-[50px]">
            <time dateTime={validDate(date)}>{formateDatePreview(date)}</time>
          </p>
          <h3 className="font-light link-btn">{title}</h3>
        </span>
      </Link>
      {formatTags(tags).map((tag, index) => (
        <Tag key={index} tag={tag} />
      ))}
    </li>
  );
};

export default PostMeta;
