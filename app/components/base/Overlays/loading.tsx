import { motion, useAnimationControls } from "framer-motion";
import { FC, useEffect, useLayoutEffect, useState } from "react";
import { useStore } from "../../../pages/me";

const LoadingText = () => {
  const loading = useStore((state) => state.loading);

  const [index, setIndex] = useState<number>(0);
  const colors = ["#55FFEB", "#FDFF09"];

  const controls = useAnimationControls();

  useEffect(() => {
    if (!loading) {
      controls.start({
        opacity: 0,

        visibility: "hidden",
      });
    }
  }, [loading]);
  return (
    <div className="absolute left-0 top-0 w-full h-full items-center flex">
      {loading && (
        <motion.p
          initial={{
            opacity: 0,
            // left: "0",
            color: colors[0],
          }}
          animate={{
            opacity: 1,
            color: colors[1],
            // ...controls,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse",

            // repeatDelay: 1,
          }}
          style={{
            left: "52%",
          }}
          className="absolute text-base"
        >
          Loading...
          {/* {transitions((style, i) => (
          <animated.span key={i} style={style}>
            Loading...
          </animated.span>
        ))} */}
        </motion.p>
      )}
    </div>
  );
};

export default LoadingText;
