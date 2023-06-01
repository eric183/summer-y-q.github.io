import * as React from "react";
import type { Metadata } from "next";

import "./globals.css";

const AppDocument = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default AppDocument;
