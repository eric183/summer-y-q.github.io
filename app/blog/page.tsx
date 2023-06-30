import { useEffect } from "react";
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
    <div
      className={clsx({
        "bg-gray-900 w-full h-full flex items-center justify-center": true,
        [kanit.className]: true,
      })}
    >
      {data.length === 0 ? (
        <Empty></Empty>
      ) : (
        <ul className="h-2/3 w-full max-w-6xl divide-y">
          {data.map((item: any) => (
            <li key={item.id} className="mx-auto my-12 pt-10">
              <h1 className="text-white font-extrabold text-5xl mb-5">
                <Link href={`/blog/${item.id}`}>{item.title}</Link>
              </h1>

              <p className="text-white">{YMD_Format(item.createdAt)}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Page;
