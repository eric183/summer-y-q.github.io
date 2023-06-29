import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { prismaClient } from "../../../../prisma/client";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  secret: process.env.NEXT_PUBLIC_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        const { email, password } = credentials;

        const user = await prismaClient.user.findUnique({
          where: {
            email,
          },
        });
        if (!user) return null;
        const isPwdCorrect = await compare(password, user.password!);

        if (!isPwdCorrect) return null;

        const { password: _, ...rest } = user;

        return rest;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.user = token.user as any;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
