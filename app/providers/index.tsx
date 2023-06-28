import { SessionProvider } from "next-auth/react";
import DarKThemeProvider from "./darkTheme";
import ReactQuery from "./reactQuery";
import NextAuth from "./next-auth";

const InjectProviders = ({ children }: { children: React.ReactNode }) => (
  <DarKThemeProvider>
    <NextAuth>
      <ReactQuery>{children}</ReactQuery>
    </NextAuth>
  </DarKThemeProvider>
);

export default InjectProviders;
