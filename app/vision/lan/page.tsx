"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React from "react";
import Lights from "../components/Lights";
import { BakeShadows, Box, OrbitControls } from "@react-three/drei";
import ReflectorPlane from "../components/Meshes/plane";
import { Physics } from "@react-three/cannon";
import { Effects } from "../components/Effects";
import { Vector3 } from "three";

const page = () => {
  return (
    <div className="w-full h-full relative z-10">
      <Canvas
        onCreated={({ gl, camera }) => {
          // gl.shadowMap.enabled = true;
          // gl.shadowMap.type = THREE.PCFSoftShadowMap;
          // camera.position.lerp(new Vector3(0, 0, 1), 0.1);
          camera.position.set(0, 0, 10);
        }}
      >
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
            // rotation={[-Math.PI / 2, 0, 0]}
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

const SceneRig = () => {
  return useFrame(({ camera }) => {
    camera.position.lerp(
      {
        x: 0,
        y: 0,
        z: -8.689434161127473,
      } as THREE.Vector3,
      0.1
    );
    camera.lookAt(0, 0, 0);
  });
};

export default page;
