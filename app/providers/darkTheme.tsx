"use client";

import { useEffect } from "react";
import themeStore from "~stores/themeStore";

const DarKThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const darkMode = themeStore((state) => state.darkMode);

  useEffect(() => {
    const classList = document.documentElement.classList;

    if (darkMode === "light") {
      classList.remove("dark");
      classList.add("light");
    }

    if (darkMode === "dark") {
      classList.remove("light");
      classList.add("dark");
    }
  }, [darkMode]);
  return <>{children}</>;
};

export default DarKThemeProvider;
