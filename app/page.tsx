import { Metadata } from "next";
import React from "react";
import { YMD_Format } from "../utils/timeformat";
import clsx from "clsx";
import { lobster } from "../ui/Fonts";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Page Title",
};

const Page = async () => {
  // fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await fetch(
    "https://worldtimeapi.org/api/timezone/Asia/Kolkata",
    {
      cache: "no-store",
    }
  );

  const responseData = await data.json();

  return (
    <div className="ml-2 h-full overflow-hidden">
      <article
        className={clsx({
          [lobster.className]: true,
          "text-white pt-16 pb-7 h-full flex flex-col text-center mt-72": true,
        })}
      >
        <h1 className="font-extrabold text-7xl mb-24">
          <Link href="/blog">Aloha</Link>
        </h1>

        <p className="font-semibold text-xl">
          {YMD_Format(responseData.utc_datetime)}
        </p>
      </article>
    </div>
  );
};

export default Page;
