import React, { Suspense } from "react";
import { prismaClient } from "../../../prisma/client";
import { Tag } from "@prisma/client";
import LoadingCube from "../../loading";
import Article from "./article";

type TArticle = {
  id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  tag: Tag;
  htmlString: string;
};

const getCurrentArticle = (id: string): Promise<TArticle> => {
  const reponseData = prismaClient.blog.findUnique({
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

  return new Promise((resolve) =>
    setTimeout(() => resolve(reponseData as Promise<TArticle>), 1500)
  ); // simulate network delay
};

const page = async ({ params }: any) => {
  const articleData = getCurrentArticle(params.slug);
  return (
    <Suspense fallback={<LoadingCube />}>
      <Article promise={articleData} />
    </Suspense>
  );
};

export default page;
