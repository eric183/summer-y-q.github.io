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
  }, [pathname]);
  return children;
};

export default Template;
