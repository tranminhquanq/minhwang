import Link from "next/link";
import Image from "next/image";

export const components = {
  a: ({ href = "", ...props }) => {
    if (href.match(/http|https/)) {
      return (
        <Link href={href} className="link-btn" target="_blank" {...props} />
      );
    }
    return (
      <Link href={href} passHref>
        <span className="link-btn" {...props} />
      </Link>
    );
  },
  img: ({ children, ...props }: { children: React.ReactNode }) => (
    <div className="my-10">
      <Image
        {...(props as any)}
        alt="picture of the author"
        width={100}
        height={100}
      />
    </div>
  ),
  p: ({ children, ...props }: { children: React.ReactNode }) => (
    <div {...props}>{children}</div>
  ),
};
