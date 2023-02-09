import { FC, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ThemeSwitch from "@/components/ThemeSwitch";

const routes = [{ route: "/posts", title: "posts" }];

const Nav: FC = () => {
  const router = useRouter();

  const isActive = (pathname: string) => {
    return router.asPath.includes(pathname);
  };

  return (
    <header className="relative w-full h-16">
      <div className="fixed h-20 z-40 w-full flex justify-between backdrop-blur-[20px] backdrop-saturate-150 bg-white/50 dark:bg-[#0D0D1050]">
        <nav className="w-full sm:max-w-[75ch] m-auto sm:grid md:flex px-5 justify-between items-center">
          <Link href="/">
            <span>
              <LocalTime />
            </span>
          </Link>
          <div className="flex items-center gap-5">
            {routes.map(({ route, title }) => (
              <Link key={route} href={route}>
                <span
                  className={`capitalize ${
                    isActive(route) ? "" : "opacity-50"
                  }`}
                  onClick={() => {}}
                >
                  {title}
                </span>
              </Link>
            ))}
            <ThemeSwitch />
          </div>
        </nav>
      </div>
    </header>
  );
};

function LocalTime() {
  const timeFomatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Ho_Chi_Minh",
    hour: "numeric",
    minute: "numeric",
    weekday: "short",
    hour12: false,
  }).format();

  return <span>{timeFomatter}, Ho Chi Minh City</span>;
}

export default Nav;
