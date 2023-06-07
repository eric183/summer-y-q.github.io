import DarKThemeProvider from "./darkTheme";
import { NextAuthProvider } from "./nextAuth";
import ReactQuery from "./reactQuery";

const InjectProviders = ({ children }: { children: React.ReactNode }) => (
  <DarKThemeProvider>
    <ReactQuery>{children}</ReactQuery>
  </DarKThemeProvider>
);

export default InjectProviders;
