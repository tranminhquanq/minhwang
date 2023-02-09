import { createContext, useContext, Dispatch, useReducer } from "react";

type Tags = Set<string>;
type Reducer = (prevTags: Tags, tag: string) => Tags;
type ContextValue = {
  tags: Tags;
  toggleTags: Dispatch<string>;
  resetTags: Set<string>["clear"];
};

const TagsContext = createContext<undefined | ContextValue>(undefined);

export const TagsProvider = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  tagName?: string[];
}) => {
  const [tags, toggleTags] = useReducer<Reducer>(
    (prevTags: Tags, tag: string) => {
      if (prevTags.has(tag)) {
        prevTags.delete(tag);
        return new Set(prevTags);
      }
      return new Set(prevTags).add(tag);
    },
    new Set<string>()
  );

  const resetTags = () => tags.forEach((tag) => toggleTags(tag));

  return (
    <TagsContext.Provider value={{ tags, toggleTags, resetTags }} {...props}>
      {children}
    </TagsContext.Provider>
  );
};

export const useTags = () => {
  const context = useContext(TagsContext);
  if (!context) {
    throw new Error("useTags must be used within a TagsProvider");
  }
  return context;
};
