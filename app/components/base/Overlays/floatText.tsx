import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { shallow } from "zustand/shallow";
import { useScrollStore } from "../scrollBinder";

interface PropsType {
  pageSize: number;
}

const FloatText = ({ pageSize }: PropsType) => {
  const data = useScrollStore((state) => state.data);
  useFrame(() => {
    // console.log(data, "!!!");
    // console.log(data.offset);
    // console.log(data.range(0, 1 / 3));
    // console.log(data.visible(0, 1 / pageSize));
    // if (data.range(0, 1 / pageSize) === 1 && data.visible(0, 1 / pageSize)) {
    //   console.log("已到1份", data.offset, data.range(0, 1 / pageSize));
    // }
    // console.log("已到2份", data.range(1 / pageSize, 1 / pageSize));
    // if (data.range(1 / pageSize, 1 / pageSize) === 1) {
    //   console.log("已到2份", data.range(1 / pageSize, 1 / pageSize));
    // }
    // if (data.range(2 / pageSize, 3 / pageSize) === 1) {
    //   console.log("已到3份", data.range(0, 1 / pageSize));
    // }
    // if (data.range(3 / pageSize, 4 / pageSize) === 1) {
    //   console.log("已到4份", data.range(0, 1 / pageSize));
    // }
    // if (data.range(4 / pageSize, 5 / pageSize) === 1) {
    //   console.log("已到5份", data.range(0, 1 / pageSize));
    // }
    // console.log(data.range(1 / 3, 1 / 3), "!!!");
  });

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
  // console.log(data.range(data.offset, 1));
  // console.log(data);
  const classTemplate = `text-white ml-8 font-bold text-lg absolute`;
  return (
    <Scroll html>
      <motion.div
        initial={{
          marginLeft: 40,
        }}
        className={`${classTemplate} 100vh`}
      >
        <p>hello {data?.offset}</p>
      </motion.div>
      <motion.div
        initial={{
          marginLeft: 40,
        }}
        className={`${classTemplate} 200vh top-[200vh]`}
      >
        <p>你不好 {data?.offset}</p>
      </motion.div>
      <motion.div
        initial={{
          marginLeft: 40,
        }}
        className={`${classTemplate} 300vh top-[300vh]`}
      >
        <p>你非常好 {data?.offset}</p>
      </motion.div>
      <motion.div
        initial={{
          marginLeft: 40,
        }}
        className={`${classTemplate} 400vh top-[400vh]`}
      >
        <p className="text-zinc-900">你非常不好 {data?.offset}</p>
      </motion.div>
    </Scroll>
  );
};

export { FloatText };
