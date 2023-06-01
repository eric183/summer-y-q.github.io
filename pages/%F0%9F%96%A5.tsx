// 🖥
import styled from "@emotion/styled";
import { Loader } from "@react-three/drei";
import dynamic from "next/dynamic";
import { Suspense, useRef } from "react";
import ChatRoom from "../components/chatroom";
const CoinApp = dynamic(() => import("../components/canvas"), { ssr: false });
const IndexLayout = styled.div`
  section {
    width: 50%;
    height: 100%;
  }
`;

export default function Home() {
  const containerRef = useRef<any>();
  return (
    <IndexLayout
      className="content-container w-[100vw] h-[100vh] flex flex-col relative"
      ref={containerRef}
    >
      <Suspense fallback={null}>
        <CoinApp containerRef={containerRef} />
      </Suspense>
      <Loader />
    </IndexLayout>
  );
}
