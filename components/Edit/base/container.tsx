// import CoinApp from "./coinApp";
import dynamic from "next/dynamic";
import ChatRoom from "../chatroom";
import { LeftContent, MiddleContent, RightContent } from "./content";
const CoinApp = dynamic(() => import("../../../app/vision/components"), {
  ssr: false,
});
const MainContainer = () => {
  // console.log("reRender");
  return (
    <>
      <ChatRoom />
      {/* <CoinApp />; */}
    </>
  );
};

export default MainContainer;
