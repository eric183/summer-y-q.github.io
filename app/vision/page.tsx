import React from "react";
import * as path from "path";
import * as fs from "fs";
import { kanit } from "~ui/Fonts";
import clsx from "clsx";
const dir = path.join(__dirname);
const filenames = fs.readdirSync(dir);

const page = () => {
  const sites = filenames
    .filter((filename) => !filename.includes("."))
    .filter((filename) => !filename.startsWith("_"));

  return (
    <div className="vision-list h-full flex items-center justify-center text-white">
      <ul>
        {sites.map((filename) => (
          <li key={filename} className="mb-2">
            <a
              className={clsx({
                [kanit.className]: true,
                "text-2xl hover:underline": true,
              })}
              href={`/vision/${filename}`}
            >
              {filename}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
