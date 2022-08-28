import { FC } from "react";

type IndexResponseData = {
  data?: GatsbyTypes.SanityLinksConnection;
};

const Index: FC<IndexResponseData> = () => {
  return (
    <main className="w-screen h-screen text-center flex justify-center items-center">
      UNDER CONSTRUCTION ...
    </main>
  );
};

export default Index;
