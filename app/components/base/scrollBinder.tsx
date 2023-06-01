import { ScrollControlsState, useScroll } from "@react-three/drei";
import { useEffect } from "react";
import { create } from "zustand";

interface StoreInterface {
  data?: Omit<ScrollControlsState, "el">;
  setData: (data: Omit<ScrollControlsState, "el">) => void;
}

export const useScrollStore = create<StoreInterface>()((set) => ({
  data: null!,
  setData: (john) =>
    set((state) => ({
      data: {
        ...state.data,
        ...john,
      },
    })),
}));

const ScrollBinder = () => {
  const data = useScroll();
  const setData = useScrollStore((state) => state.setData);

  const scrollBinder = () => {
    setData(data);
  };
  useEffect(() => {
    data.el.className = "ios-scroll";
    data.el.addEventListener("scroll", scrollBinder, false);

    return () => data.el.removeEventListener("scroll", scrollBinder, false);
  }, [data]);
  return <></>;
};

export default ScrollBinder;
