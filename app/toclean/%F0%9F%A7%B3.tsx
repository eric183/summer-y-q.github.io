// 🧳

import styled from "@emotion/styled";
import { Physics } from "@react-three/cannon";
import {
  BakeShadows,
  Environment,
  Loader,
  Preload,
  Stage,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Color, Vector2 } from "three";
import { instancedGeometry } from "../components/canvas/Meshes/instanceBoxes";
import Controls from "../components/canvas/Controls";
import Lights from "../components/canvas/Lights";
import ReflectorPlane from "../components/canvas/Meshes/plane";

import create from "zustand";
import { Luggage } from "../components/canvas/Meshes/glbModule";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  SSR,
  Glitch,
} from "@react-three/postprocessing";

import { GlitchMode } from "postprocessing";

const IndexLayout = styled.div`
  section {
    width: 50%;
    height: 100%;
  }
`;

const useStore = create((set: any) => ({
  target: null,
  setTarget: (target: any) => set({ target }),
}));

export default function Bread() {
  const containerRef = useRef<any>();
  return (
    <IndexLayout
      className="content-container w-[100vw] h-[100vh] flex flex-col relative"
      ref={containerRef}
    >
      <Suspense fallback={null}>
        <BoxTissue containerRef={containerRef} />
      </Suspense>
      <Loader />
    </IndexLayout>
  );
}

const BoxTissue = ({ containerRef }: any) => {
  const { target, setTarget } = useStore();
  const [geometry, setGeometry] = useState<"box" | "sphere">("box");
  const [number] = useState(300);
  const [size] = useState(0.5);
  const niceColors = ["#99b898", "#fecea8", "#ff847c", "#e84a5f", "#2a363b"];
  const colors = useMemo(() => {
    const array = new Float32Array(number * 3);
    const color = new Color();
    for (let i = 0; i < number; i++)
      color
        .set(niceColors[Math.floor(Math.random() * 5)])
        .convertSRGBToLinear()
        .toArray(array, i * 3);
    return array;
  }, [number]);

  const InstancedGeometryController = useMemo(
    () => instancedGeometry.controller,
    []
  );

  const InstancedGeometry = useMemo(() => instancedGeometry.box, []);

  const GirlRef = useRef<any>(null!);

  return (
    <Canvas
      gl={{
        antialias: true,
        stencil: true,
        // logarithmicDepthBuffer: true,
        depth: false,
      }}
      shadows
      dpr={[1, 1.5]}
      eventPrefix="client"
      eventSource={containerRef}
      camera={{
        position: [-0.5, 0.8, 3],
        fov: 45,
        near: 1,
        far: 1000,
      }}
      onCreated={({ gl, camera }) => {
        // const threeInfo: string = localStorage.getItem("threeInfo")!;
        // const cameraHistory = JSON.parse(threeInfo);
        // if (cameraHistory) {
        //   camera.position.fromArray(cameraHistory.position);
        //   camera.rotation.fromArray(cameraHistory.rotation);
        // }
      }}
    >
      {/* <Environment preset="city" /> */}

      <color attach="background" args={["black"]} />
      {/* <fog attach="fog" args={["#202020", 5, 20]} /> */}
      {/* <Lights /> */}
      {/* <Stage
        intensity={0.5}
        environment="city"
        shadows={{ type: "accumulative", bias: -0.001 }}
        adjustCamera={false}
      >
      </Stage> */}
      <Luggage position={[0, 0, 0]} ref={GirlRef} />

      <Physics>
        {/* <ReflectorPlane position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} /> */}
        {/* <InstancedGeometry {...{ colors, number, size }} /> */}
        {/* <InstancedGeometryController {...{ colors, number, size }} /> */}
      </Physics>
      {/* <spotLight
        position={[10, 10, 5]}
        angle={0.15}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={[2048, 2048]}
      /> */}

      <Controls target={target} />
      <Preload all />
      <SceneRig />
      <Effects />
      <BakeShadows />
    </Canvas>
  );
};

const SceneRig = (props: any) => {
  const { scene } = useThree();

  return useFrame((state) => {
    state.camera.position.lerp(
      {
        x: 3.7825550072676912,
        y: 2.0113850435809417,
        z: 8.689434161127473,
      } as THREE.Vector3,
      0.1
    );
    state.camera.lookAt(-1, 0.8, -1);
    // head?.position && state.camera.lookAt(head?.position);
  });

  // return <></>;
};

const Effects = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Run the effect only on the client
    }
  }, []);
  return (
    <EffectComposer disableNormalPass>
      <DepthOfField
        // target={[0, 0, 13]}
        target={[1.3198989629745483, 0.8544199466705322, 0.9169659614562988]}
        focalLength={0.3}
        bokehScale={1.2}
        height={4000}
      />
      {/* <Bloom
        luminanceThreshold={0}
        mipmapBlur
        luminanceSmoothing={0.0}
        intensity={4}
      /> */}
      <Bloom
        luminanceThreshold={0.1}
        luminanceSmoothing={0.1}
        intensity={1}
        mipmapBlur
      />

      {/* <Glitch
        delay={new Vector2().fromArray([3.5, 7.5])} // min and max glitch delay
        // duration={new Vector2().fromArray([0.6, 1.0])} // min and max glitch duration
        duration={new Vector2().fromArray([1, 2])} // min and max glitch duration
        // strength={new Vector2().fromArray([0.3, 1.0])} // min and max glitch strength
        strength={new Vector2().fromArray([0.01, 0.5])} // min and max glitch strength
        mode={GlitchMode.SPORADIC} // glitch mode
        active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
        ratio={0.85} //
      /> */}
      {/* <LUT lut={}/> */}
    </EffectComposer>
  );
};
