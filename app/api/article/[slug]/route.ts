import { hash } from "bcryptjs";
import { NextResponse } from "next/server";
import { prismaClient } from "../../../../prisma/client";

export async function GET(request: Request) {
  const urlSpliter = request.url.split("/");
  const slug = urlSpliter[urlSpliter.length - 1];

  const reponseData = await prismaClient.blog.findUnique({
    where: {
      id: slug,
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

  return NextResponse.json(reponseData);
}
