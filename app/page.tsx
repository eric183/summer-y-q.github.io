import { Metadata } from "next";
import React from "react";

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
    <div className="ml-2">
      <article>
        <h1>hello {responseData.utc_datetime}</h1>
      </article>
    </div>
  );
};

export default Page;
