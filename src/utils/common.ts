export const formatTags = (tags: string) => {
  let formattedTagsArr: string[] = [];
  for (const tagStr of tags.split(",")) {
    formattedTagsArr.push(`#${tagStr}`);
  }
  return formattedTagsArr;
};
