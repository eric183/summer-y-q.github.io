import React from "react";
import { YMD_DOT_Format } from "../utils/timeformat";
import clsx from "clsx";
import { lobster } from "../ui/Fonts";
import Link from "next/link";
import Github from "~components/Layout/github";

const Page = async () => {
  return (
    <div className="ml-2 h-full overflow-hidden">
      <Github />
      <article
        className={clsx({
          [lobster.className]: true,
          "text-white pb-7 h-full flex flex-col text-center items-center justify-center":
            true,
        })}
      >
        <h1 className="font-extrabold text-7xl mb-24">
          {/* <Link href="/article">Aloha</Link> */}
          <Link href="/kini_reshape_Rig_02.usdz">Aloha</Link>
        </h1>

        <p className="font-semibold text-xl">{YMD_DOT_Format(new Date())}</p>
      </article>
    </div>
  );
};

export default Page;
