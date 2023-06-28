"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";
import Avatar from "./Layout/Avatar";
// import SideNav from "~components/Layout/SideNav";
const PageContainer = ({ children }: { children: React.ReactNode }) => {
  // console.log("reRender");

  // useEffect(() => {
  //   if (status === "unauthenticated") {
  //     redirect("/auth");
  //   }
  // }, [status]);
  return (
    <main className="App w-screen h-screen flex flex-col dark:bg-slate-500">
      {children}
    </main>
  );
};

export default PageContainer;
