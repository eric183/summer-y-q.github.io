import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import CredentialsProvider from "next-auth/providers/credentials";
import { sendVerificationRequest } from "../../../../utils/helpers/mailRequest";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  secret: process.env.NEXT_PUBLIC_SECRET,
  providers: [
    // EmailProvider({
    //   server: process.env.EMAIL_SERVER,
    //   from: process.env.EMAIL_SENDER,
    //   sendVerificationRequest,
    // }),
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID!,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET!,
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID!,
    //   clientSecret: process.env.GOOGLE_SECRET!,
    // }),
    CredentialsProvider({
      name: "Credentials",
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
        // const user = await sanityClient.fetch(authGROQ, {
        //   email,
        //   password,
        // });

        // console.log(user, "......");

        // if (user.length > 0) {
        //   return user[0];
        // }

        return null;
      },
    }),

    // ...add more providers here
  ],

  callbacks: {
    async jwt({ token, user }) {
      debugger
      // console.log(token, "...response token");
      // console.log("...response user begin", user, "...response user end");
      if (user) {
        token.user = user;
      }
      return token;
    },
    session: ({ session, token }) => {
      debugger
      if (token) {
        session.user = token.user as any;
        // session.id = token.id;
        // session.name = token.name;
        // session.username = token.surname;
        // session.email = token.email;
      }
      return session;
    },
    // async signIn({ user, account, profile, email, credentials }) {
    //   console.log(user, "...sa.df.a.sdf.");
    //   if (user) {
    //     return true;
    //   } else {
    //     // Return false to display a default error message
    //     return false;
    //     // Or you can return a URL to redirect to:
    //     // return '/unauthorized'
    //   }
    // },
  },
};

// identifier: process.env.EMAIL_SENDER,
// url: "test",
// auth: {
//   user: process.env.EMAIL_SERVER,
//   pass: process.env.EMAIL_PWD,
// },
// provider: {
//   server: process.env.EMAIL_SERVER,
//   from: process.env.EMAIL_SENDER,
// },

// sendVerificationRequest({
//   identifier: email,
//   url,
//   token,
//   baseUrl,
//   provider,
// }) {
//   console.log("80", email, url, token, baseUrl, provider);
// },
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

// transport: {
//   host: 'smtp.gmail.com',
//   secure: true,
//   auth: {
//     user: 'kk297466058@gmail.com',
//     pass: 'ixxuzqwxxxvlfogo',
//   },
// }, // デフォルトでの送信元メールアドレスの設定
// defaults: {
//   from: 'kk297466058@gmail.com',
// },
// // テンプレートの設定
// template: {
//   dir: join(__dirname, '/templates'),
//   adapter: new HandlebarsAdapter(),
//   options: {
//     strict: true,
//   },
// },
