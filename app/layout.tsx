import * as React from "react";
import type { Metadata } from "next";

import "../styles/globals.css";
import { create } from "zustand";
import clsx from "clsx";
import InjectProviders from "./providers";
import MainConainer from "~components/mainContainer";
import VisionHeader from "~components/Layout/VisionHeader";
import { useRouter } from "next/router";

export const metadata: Metadata = {
  title: "🦊 Aloha 🦊",
  description: "Aloha",
};

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <InjectProviders>
          <VisionHeader></VisionHeader>
          <MainConainer>{props.children}</MainConainer>
        </InjectProviders>
      </body>
    </html>
  );
};

export default Layout;
