"use client";

import { useSession } from "next-auth/react";
import PageContainer from "./pageContainer";
import AuthContainer from "./authContainer";

const MainConainer = ({ children }: { children: React.ReactNode }) => {
  const { status } = useSession();

  if (status === "loading") return <div>Loading...</div>;

  if (status === "unauthenticated") return <AuthContainer />;

  return <PageContainer>{children}</PageContainer>;
};

export default MainConainer;
