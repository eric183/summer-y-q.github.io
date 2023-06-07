import { create } from "zustand";
import { persist } from "zustand/middleware";

interface MainState {
  accessToken: string;
  setAccessToken: (by: string) => void;
}

const mainStore = create<MainState>()(
  persist(
    (set) => ({
      accessToken: "",
      setAccessToken: (by) => set((state) => ({ accessToken: by })),
    }),
    { name: "main-storage" }
  )
);

export default mainStore;
