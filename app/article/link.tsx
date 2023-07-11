"use client";

import { useRouter } from "next/navigation";

const ArticleLinkButton = ({ id, title }: { id: string; title: string }) => {
  const router = useRouter();
  return (
    <span
      className="cursor-pointer transition-all hover:text-gray-300"
      onClick={() => {
        console.log("go");
        router.push(`/article/${id}`);
      }}
    >
      {title}
    </span>
  );
};

export default ArticleLinkButton;
