"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { useBackStore } from "~components/Layout/VisionHeader";

const Template = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  const setHasBack = useBackStore((state) => state.setHasBack);
  const checkPathnameHasBack = () => {
    if (/\/article\/.+/.test(pathname)) {
      setHasBack(true);
    } else {
      setHasBack(false);
    }
  };

  React.useLayoutEffect(() => {
    checkPathnameHasBack();
    console.log(pathname);
  }, [pathname]);

  return (
    <>
      {children}
      {pathname === "/" && (
        <footer className="fixed bottom-5 z-10 w-full text-center">
          <span className="text-white italic text-sm mr-2">
            Driven by Prisma with
          </span>
          <span>❤️</span>
        </footer>
      )}
    </>
  );
};

export default Template;
