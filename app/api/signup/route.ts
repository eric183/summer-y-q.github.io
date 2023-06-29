import { hash } from "bcryptjs";
import { prismaClient } from "../../../prisma/client";
import { NextResponse } from "next/server";

const saltOrRounds = 10;

export const POST = async (request: Request) => {
  const { email, password } = await request.json();

  const user = await prismaClient.user.create({
    data: {
      email,
      password: await hash(password, saltOrRounds),
      name: "Eric Kuang",
    },
  });

  console.log(user, "...user");

  return NextResponse.json({
    email,
    name: user.name,
  });
};

export const GET = async (request: Request) => {
  return NextResponse.json({
    text: "is",
  });
};
