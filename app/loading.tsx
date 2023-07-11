"use client";

import { Physics } from "@react-three/cannon";
import { Preload, BakeShadows, Box, Loader } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useMemo, useRef, useState } from "react";
import { Color, Mesh } from "three";
import { useStore } from "zustand";
import Controls from "~app/vision/components/Controls";
import Lights from "~app/vision/components/Lights";
import Meshes from "~app/vision/components/Meshes";
import { instancedGeometry } from "~app/vision/components/Meshes/instanceBoxes";
import ReflectorPlane from "~app/vision/components/Meshes/plane";
import { SceneRig } from "~app/vision/components/SceneRig";
import vertexShader from "../../vision/components/Shader/try/vertexShader.glsl";
import fragmentShader from "../../vision/components/Shader/try/fragmentShader.glsl";
import { useControls } from "leva";

const Loading = () => {
  return (
    <Canvas
      // gl={{
      //   antialias: true,
      //   stencil: true,
      //   depth: false,
      // }}
      shadows
      dpr={[1, 1.5]}
      eventPrefix="client"
      camera={{ position: [1.5, 5, -18.5], fov: 45, near: 1, far: 1000 }}
      onCreated={({ gl, camera }) => {
        const cameraHistory = {
          position: [-37.2050893151137, 4.398785004874994, 28.413967317544703],
          rotation: [
            -0.1535913960038849, -0.912856335057397, -0.12188727308899551,
          ],
        };
      }}
    >
      {/* <Lights /> */}
      {/* <ambientLight intensity={10} />
      <pointLight position={[0, 1, 0]} intensity={20} /> */}
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <LoadingBox />

      <Preload all />

      <SceneRig />
      {/* <Effects /> */}

      <BakeShadows />
      <Loader />
    </Canvas>
  );
};

const LoadingBox = () => {
  const boxRef = useRef<Mesh>(null!);
  // const [{ myInterval }, set] = useControls(() => ({
  //   myInterval: {
  //     value: 0,
  //     step: 0.1,
  //   },
  // }));

  useFrame(({ clock }, delta) => {
    // set({
    //   myInterval: Math.sin(t),
    // });

    if (boxRef.current) {
      boxRef.current.rotation.y += delta;
    }
  });

  return (
    <mesh ref={boxRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
};

export default Loading;
