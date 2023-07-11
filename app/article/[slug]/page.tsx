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

const page = async ({ params }: any) => {
  return <Article slug={params.slug} />;
};

export default page;
