"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React from "react";
import Lights from "../components/Lights";
import { BakeShadows, Box, OrbitControls } from "@react-three/drei";
import ReflectorPlane from "../components/Meshes/plane";
import { Physics } from "@react-three/cannon";
import { Effects } from "../components/Effects";

const page = () => {
  return (
    <div className="w-full h-full relative z-10">
      <Canvas>
        <ambientLight intensity={0.5} />
        {/* <pointLight position={[1, 1, 1]} /> */}
        {/* <directionalLight position={[1, 0, 1]} intensity={20} /> */}
        <spotLight
          position={[10, 20, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />

        <Box position={[0, 0, 0]}>
          <meshStandardMaterial color="hotpink" />
        </Box>
        <Physics>
          <ReflectorPlane
            position={[0, -0.5, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          {/* <InstancedGeometry {...{ colors, number, size }} />
          <InstancedGeometryController {...{ colors, number, size }} /> */}
        </Physics>
        {/* <SceneRig /> */}
        {/* <Effects /> */}
        {/* <ReflectorPlane position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} /> */}
        <OrbitControls />
        <BakeShadows />
      </Canvas>
    </div>
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
      0.01
    );
    state.camera.lookAt(-1, 0.8, -1);
    // head?.position && state.camera.lookAt(head?.position);
  });

  // return <></>;
};

export default page;
