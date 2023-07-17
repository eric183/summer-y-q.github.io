import clsx from "clsx";
import React from "react";
import { kanit } from "~ui/Fonts";

const nodes = [
  {
    emoji: "iconfont icon-github-fille",
    title: "Github",
    src: "https://github.com/eric183",
  },
  {
    emoji: "iconfont icon-artstation",
    title: "Artstation",
    src: "https://www.artstation.com/kk297466058",
  },
  {
    emoji: "iconfont icon-behance",
    title: "Behance",
    src: "https://www.behance.net/kuangeric",
  },
  {
    emoji: "iconfont icon-resume",
    title: "About me",
    src: "https://ultra-cork-15e.notion.site/2b5f3bbcc1fc47268606c0613cc202ca?pvs=4",
  },
];

const Page = () => {
  return (
    <div className="w-full h-full flex items-center justify-center ">
      <ul>
        {nodes.map((node, index) => (
          <li
            key={index}
            className={clsx({
              "text-white mb-2 text-lg hover:font-extrabold hover:text-xl":
                true,
              "transition-all": true,
              [kanit.className]: true,
            })}
          >
            <a href={node.src} target="__blank">
              <i className={node.emoji + " m-6"}></i>

              {node.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
