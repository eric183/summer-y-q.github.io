// import CoinApp from "./coinApp";
import dynamic from "next/dynamic";
import ChatRoom from "../chatroom";
import { LeftContent, MiddleContent, RightContent } from "../base/content";
const CoinApp = dynamic(() => import("../canvas"), { ssr: false });
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
