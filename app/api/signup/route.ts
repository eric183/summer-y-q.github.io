import { hash } from "bcryptjs";
import { prismaClient } from "../../../prisma/client";
import { NextResponse } from "next/server";

const saltOrRounds = 10;

export const POST = async (request: Request) => {
  const { email, password } = await request.json();

  // compare()

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

// const SignUp = async ({ password, email }) => {
//   console.log(email, "....email");

//   // compare()

//   const user = await prismaClient.user.create({
//     data: {
//       email,
//       password: await hash(password, saltOrRounds),
//       name: "Eric Kuang",
//     },
//   });

//   console.log(user, "...user");
// };

// export default SignUp;
