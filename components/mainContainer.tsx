"use client";

import AuthContainer from "./authContainer";
import PageContainer from "./pageContainer";

const MainConainer = ({ children }: { children: React.ReactNode }) => {
  return <PageContainer>{children}</PageContainer>;
};

export default MainConainer;
