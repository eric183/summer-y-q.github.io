import { prismaClient } from "../../../prisma/client";
import { TArticle } from "./article";
import { redis } from "../../../redis";
import { Tag } from "@prisma/client";

// 工具函数,处理通用缓存逻辑
const cache = async (
  key: string,
  fallback: {
    (): Promise<{
      createdAt: Date;
      id: string;
      htmlString: string;
      tag: Tag;
      title: string;
      updatedAt: Date;
    } | null>;
    (): any;
  }
) => {
  const cached = await redis.get<string>(`article:${key}`);

  if (cached) {
    console.log("...", "read from cache");
    return cached;
  }

  const freshData = await fallback();

  await redis.set(`article:${key}`, JSON.stringify(freshData));

  return freshData;
};

// 只获取所需字段
const getArticleFields = {
  id: true,
  title: true,
  createdAt: true,
  updatedAt: true,
  tag: true,
  htmlString: true,
};

// 优化的获取文章函数
export const getCurrentArticle = async (id: any) => {
  // 调用工具函数处理缓存逻辑
  const article = await cache(`article:${id}`, async () => {
    return prismaClient.blog.findUnique({
      where: { id },
      select: getArticleFields, // 只取需要的字段
    });
  });

  return article; // 返回值直接为 Article
};
