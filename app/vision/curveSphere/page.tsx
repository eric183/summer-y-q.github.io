"use client";

import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import Lights from "../components/Lights";
import { BakeShadows, Box, OrbitControls } from "@react-three/drei";
import { Physics, usePlane } from "@react-three/cannon";
import { Effects } from "../components/Effects";
import {
  Color,
  DoubleSide,
  Mesh,
  ShaderMaterial,
  TextureLoader,
  Vector3,
} from "three";
import FragmentShader from "./shader/fragmentShader.glsl";
import VertexShader from "./shader/vertexShader.glsl";

const page = () => {
  return (
    <div className="w-full h-full relative z-10">
      <Canvas
        onCreated={({ gl, camera }) => {
          camera.position.set(0, 0, 15);
        }}
      >
        <ambientLight intensity={0.5} />

        <spotLight
          position={[10, 20, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />

        <Physics>
          <ReflectorPlane position={[0, -0.5, 0]} />
        </Physics>
        <SceneRig />

        <OrbitControls />
        <BakeShadows />
      </Canvas>
    </div>
  );
};

const ReflectorPlane = (props: any) => {
  const [ref] = usePlane(() => ({ ...props }), useRef<Mesh>(null));
  const testMesh = useRef<Mesh>(null!);
  const testMat = useRef<ShaderMaterial>(null!);
  const { clock } = useThree();
  const colorMap = useLoader(TextureLoader, "/empty.jpg");

  const uniforms = useMemo(
    () => ({
      uFrequency: { value: new Vector3(10, 5, 5) },
      uTime: { value: 0.0 },
      uColor: { value: new Color("hotpink") },
      uTexture: { value: colorMap },
    }),
    []
  );

  useFrame(({ clock }) => {
    testMat.current.uniforms.uTime.value = clock.getElapsedTime();
  });
  if (testMesh.current) {
    console.log(testMesh.current);
  }
  return (
    <mesh receiveShadow ref={testMesh} {...props}>
      <icosahedronBufferGeometry args={[6, 100]} />

      <shaderMaterial
        ref={testMat}
        fragmentShader={FragmentShader}
        vertexShader={VertexShader}
        side={DoubleSide}
        uniforms={uniforms}
      />
    </mesh>
  );
};

const SceneRig = () => {
  return useFrame(({ camera }) => {
    camera.position.lerp(
      {
        x: 0,
        y: 0,
        z: 35,
      } as THREE.Vector3,
      0.1
    );
    camera.lookAt(0, 0, 0);
  });
};

export default page;
