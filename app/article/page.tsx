import { Fragment, useEffect } from "react";
import ThemeSwitcher from "../../components/themeSwitcher";
import Link from "next/link";
import { kanit, lobster } from "../../ui/Fonts";
import clsx from "clsx";
import { YMD_Format } from "~utils/timeformat";
import { prismaClient } from "../../prisma/client";
import Empty from "~components/Layout/Empty";

export const revalidate = 60; // revalidate this segment every 60 seconds

const getArticleList = async () => {
  return prismaClient.blog.findMany({
    take: 20,
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      title: true,
      createdAt: true,
      // htmlString: true,
      tag: true,
    },
  });
};

const Page = async () => {
  const data = await getArticleList();

  return (
    <article
      className={clsx({
        "bg-gray-900 w-full h-full flex items-center justify-center": true,
        "bg-gradient-to-b from-transparent from-10% to-gray-800": true,
        [kanit.className]: true,
      })}
    >
      {data.length === 0 ? (
        <Empty></Empty>
      ) : (
        <ul className="h-2/3 w-full lg:max-w-[70%] md:max-w-2xl divide-y overflow-auto transition-all shadow-lg">
          {data.map((item: any) => (
            <li key={item.id} className="mx-auto my-12 pt-10">
              <h1 className="text-white font-extrabold mb-5 lg:text-5xl md:text-2xl transition-all">
                <Link href={`/article/${item.id}`}>{item.title}</Link>
              </h1>
              <p className="text-white">{YMD_Format(item.createdAt)}</p>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default Page;
