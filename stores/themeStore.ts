import { create } from "zustand";
import { persist } from "zustand/middleware";

type TDarkmode = "dark" | "light";

const idDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

const themeStore = create<{
  darkMode: TDarkmode;
  toggleDarkMode: (arg: TDarkmode) => void;
}>()(
  persist(
    (set) => {
      return {
        darkMode: idDark ? "dark" : "light",
        toggleDarkMode: (darkMode) =>
          set(() => ({
            darkMode: darkMode,
          })),
      };
    },
    {
      name: "theme-storage",
    }
  )
);

export default themeStore;
