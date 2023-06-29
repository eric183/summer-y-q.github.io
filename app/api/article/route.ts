import { hash } from "bcryptjs";
import { prismaClient } from "../../../prisma/client";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const response = await prismaClient.blog.findMany({
    // orderBy: {
    //   createdAt: "desc",
    // },

    take: 20,
    select: {
      id: true,
      title: true,
      createdAt: true,
      // htmlString: true,
      tag: true,
    },
  });

  return NextResponse.json(response);
}

export const POST = async (request: Request) => {
  const data = await request.json();

  const response = await prismaClient.blog.create({
    data: {
      authorId: data.id,
      title: data.title,
      richTextJSON: JSON.stringify(data.htmlJSON),
      htmlString: data.htmlString,
      tag: data.tag ? data.tag : "MOOD",
    },
  });

  console.log(response, "response");
  NextResponse.json({});
};
