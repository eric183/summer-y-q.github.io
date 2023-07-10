"use client";

import { Tag } from "@prisma/client";
import clsx from "clsx";
import React from "react";
import { kanit } from "~ui/Fonts";
import { YMD_DOT_Format } from "~utils/timeformat";
import { AnimatePresence, motion } from "framer-motion";

type TArticle = {
  id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  tag: Tag;
  htmlString: string;
};

const Article = ({ promise }: { promise: Promise<TArticle> }) => {
  const articleData = React.use(promise);
  console.log("loaded", articleData, "....");
  const { createdAt, id, htmlString, tag, title, updatedAt } = articleData!;
  return (
    <AnimatePresence>
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={clsx({
          [kanit.className]: true,
          "text-white px-10 pt-16 pb-7 h-full flex flex-col justify-between mb-10":
            true,
        })}
      >
        <div className="flex flex-col overflow-auto h-3/4 shadow-2xl hover:shadow-md hover:shadow-black rounded-2xl py-3 px-6 transition-shadow">
          <h1
            className={clsx({
              "text-5xl font-extrabold mb-5": true,
            })}
          >
            {title}
          </h1>
          <div
            className="text-xl font-semibold mt-6 ml-2"
            dangerouslySetInnerHTML={{
              __html: htmlString ?? "",
            }}
          ></div>
        </div>

        <p>{YMD_DOT_Format(createdAt as unknown as string)}</p>
      </motion.article>
    </AnimatePresence>
  );
};

export default Article;