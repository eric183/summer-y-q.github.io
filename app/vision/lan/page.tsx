"use client";

import { Canvas } from "@react-three/fiber";
import React from "react";
import Lights from "../components/Lights";
import { Box, OrbitControls } from "@react-three/drei";
import ReflectorPlane from "../components/Meshes/plane";
import { Physics } from "@react-three/cannon";

const page = () => {
  return (
    <div className="w-full h-full relative z-10">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[1, 1, 1]} />
        <Box>
          <meshStandardMaterial color="hotpink" />
        </Box>
        <Physics>
          <ReflectorPlane
            position={[0, -2, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          {/* <InstancedGeometry {...{ colors, number, size }} />
          <InstancedGeometryController {...{ colors, number, size }} /> */}
        </Physics>
        {/* <ReflectorPlane position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} /> */}
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default page;
