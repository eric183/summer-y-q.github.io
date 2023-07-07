"use client";

import { ArrowLeftCircleIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { create } from "zustand";
import { kanit } from "~ui/Fonts";

export const useBackStore = create<{
  hasBack: boolean;
  setHasBack: (back: boolean) => void;
}>()((set) => ({
  hasBack: false,
  setHasBack: (_back) => set(() => ({ hasBack: _back })),
}));

const VisionHeader = () => {
  const router = useRouter();
  const hasBack = useBackStore((state) => state.hasBack);

  const { data } = useSession();

  const list = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { x: -10, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <div className="vision-header absolute left-0 top-0">
      {hasBack && (
        <AnimatePresence>
          <motion.div
            layout
            initial="hidden"
            className="w-20 h-20 absolute z-30 cursor-pointer"
            onClick={(event) => {
              event.preventDefault();
              router.back();
            }}
            animate={hasBack ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, x: -10, transition: { duration: 0.2 } },
              visible: {
                opacity: 1,
                transition: { duration: 0.2, staggerChildren: 0.1 },
              },
            }}
          >
            {hasBack && (
              <AnimatePresence>
                <ArrowLeftCircleIcon className="absolute z-20 w-8 h-8 text-gray-400 hover:text-white transition left-8 top-5"></ArrowLeftCircleIcon>
              </AnimatePresence>
            )}
          </motion.div>
        </AnimatePresence>
      )}

      <motion.ul
        initial="hidden"
        animate={!hasBack ? "visible" : "hidden"}
        variants={list}
        className={clsx({
          "flex text-gray-400 text-sm pl-8 mt-5": true,
          [kanit.className]: true,
        })}
      >
        <motion.li
          variants={item}
          className="mr-5 hover:text-white transition-colors"
        >
          <Link
            className="focus-visible:outline-none hover:underline underline-offset-8"
            href="/"
          >
            Home
          </Link>
        </motion.li>
        <motion.li
          variants={item}
          className="mr-5 hover:text-white transition-colors"
        >
          <Link
            className="focus-visible:outline-none hover:underline underline-offset-8"
            href="/article"
          >
            Article
          </Link>
        </motion.li>
        <motion.li
          variants={item}
          className="mr-5 transition focus-visible:outline-none line-through cursor-not-allowed"
        >
          {/* <Link
            className="focus-visible:outline-none line-through cursor-not-allowed"
            href="/vision"
          > */}
          Vision
          {/* </Link> */}
        </motion.li>

        <motion.li
          variants={item}
          className="mr-5 hover:text-white transition-colors"
        >
          <Link
            className="focus-visible:outline-none hover:underline underline-offset-8"
            href="/poster"
          >
            Poster
          </Link>
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default VisionHeader;
