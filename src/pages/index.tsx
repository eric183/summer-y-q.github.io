import { FC } from "react";
import Gamer from "~components/gamer";

type IndexResponseData = {
  data?: GatsbyTypes.SanityLinksConnection;
};

const Index: FC<IndexResponseData> = () => {
  return (
    <main className="w-screen h-screen text-center flex justify-center items-center">
      UNDER CONSTRUCTION ...
      <Gamer />
    </main>
  );
};

export default Index;
