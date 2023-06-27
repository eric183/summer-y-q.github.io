import DarKThemeProvider from "./darkTheme";
import ReactQuery from "./reactQuery";

const InjectProviders = ({ children }: { children: React.ReactNode }) => (
  <DarKThemeProvider>
    <ReactQuery>{children}</ReactQuery>
  </DarKThemeProvider>
);

export default InjectProviders;
