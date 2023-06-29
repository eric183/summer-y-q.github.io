"use client";

import { useSession } from "next-auth/react";
import PageContainer from "./pageContainer";
import AuthContainer from "./authContainer";

const IS_DEV = process.env.NODE_ENV === "development";

const PosterContainer = ({ children }: { children: React.ReactNode }) => {
  const { status } = useSession();

  if (!IS_DEV && status === "loading") return <div>Loading...</div>;

  if (!IS_DEV && status === "unauthenticated") return <AuthContainer />;

  return <PageContainer>{children}</PageContainer>;
};

export default PosterContainer;
