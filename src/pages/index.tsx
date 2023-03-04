import styled from "@emotion/styled";
import { Loader } from "@react-three/drei";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Suspense, useRef } from "react";
import ChatRoom from "~/components/chatroom";
const CoinApp = dynamic(() => import("../components/canvas"), { ssr: false });
const IndexLayout = styled.div`
  section {
    width: 50%;
    height: 100%;
  }
`;

export default function Home() {
  // useQuery("https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list");
  // const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
  const containerRef = useRef<any>();
  return (
    <IndexLayout
      className="content-container w-[100vw] h-[100vh] flex flex-col relative"
      ref={containerRef}
    >
      <Link href={"/🖥"}>🖥</Link>
      <Link href={"/🧳"}>🧳</Link>
      <Link href={"/me"}>me</Link>
    </IndexLayout>
  );
}
