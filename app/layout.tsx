import * as React from "react";
import type { Metadata } from "next";

import "../styles/globals.css";
import { create } from "zustand";
import clsx from "clsx";
import InjectProviders from "./providers";
import MainConainer from "~components/mainContainer";
import VisionHeader from "~components/Layout/VisionHeader";

export const metadata: Metadata = {
  title: "🦊 Aloha 🦊",
  description: "Aloha",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <VisionHeader></VisionHeader>
        <InjectProviders>
          <MainConainer>{children}</MainConainer>
        </InjectProviders>

        <footer className="fixed bottom-5 z-10 w-full text-center">
          <span className="text-white italic font-semibold text-shadow-md shadow-white">
            Driven by Prisma
          </span>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
