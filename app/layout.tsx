import * as React from "react";
import type { Metadata } from "next";

import "../styles/globals.css";
import { create } from "zustand";
import clsx from "clsx";
import InjectProviders from "./providers";
import MainConainer from "~components/mainContainer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <InjectProviders>
          <MainConainer>{children}</MainConainer>
        </InjectProviders>
      </body>
    </html>
  );
};

export default Layout;
