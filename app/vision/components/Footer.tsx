"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";

const Footer = () => {
  const [hidden, setHidden] = React.useState(false);

  return (
    <AnimatePresence>
      <motion.footer
        className={clsx({
          "fixed bottom-5 z-50 text-white italic font-bold transition-all":
            true,
        })}
      >
        <motion.span
          className="transition-all"
          onHoverStart={() => {
            if (hidden) {
              setHidden(false);
            }
          }}
          initial={"visible"}
          animate={hidden ? "hidden" : "visible"}
          variants={{
            hidden: { opacity: 0, x: "-100%" },
            visible: { opacity: 1, x: 250 },
          }}
          onAnimationStart={() => {
            if (hidden) return;
            const timer = setTimeout(() => {
              setHidden(true);
            }, 5000);
          }}
        >
          Here displaying the shaders which I am just working with.
        </motion.span>
      </motion.footer>
    </AnimatePresence>
  );
};

export default Footer;
