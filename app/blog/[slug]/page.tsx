import React from "react";
import ThemeSwitcher from "~components/themeSwitcher";
import { prismaClient } from "../../../prisma/client";
import clsx from "clsx";
import { lobster } from "../../../ui/Fonts";
import { YMD_DOT_Format } from "~utils/timeformat";

const getCurrentArticle = (id: string) => {
  return prismaClient.blog.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      title: true,
      createdAt: true,
      updatedAt: true,
      tag: true,
      htmlString: true,
    },
  });
};

const page = async ({ params }: any) => {
  const articleData = await getCurrentArticle(params.slug);
  console.log(articleData, "blogResponse");

  const { createdAt, id, htmlString, tag, title, updatedAt } = articleData!;
  return (
    <article
      className={clsx({
        [lobster.className]: true,
        "text-white px-10 pt-16 pb-7 h-full flex flex-col justify-between":
          true,
      })}
    >
      <div className="flex flex-col">
        <h1
          className={clsx({
            "text-5xl font-extrabold mb-5": true,
          })}
        >
          {title}
        </h1>
        <p
          className="text-xl font-semibold mt-6 ml-2"
          dangerouslySetInnerHTML={{
            __html: htmlString ?? "",
          }}
        ></p>
      </div>

      <p>{YMD_DOT_Format(createdAt as unknown as string)}</p>
    </article>
  );
};

export default page;
