"use client";

import {
  BakeShadows,
  Box,
  OrbitControls,
  PivotControls,
  Preload,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import create from "zustand";
import { useMemo, useState } from "react";
import { Color, MeshPhysicalMaterial, Vector3Tuple } from "three";
import Controls from "~app/vision/components/Controls";
import CameraAnim from "./CameraAnim";
import Cube from "./Cube";

export const useStore = create((set: any) => ({
  target: null,
  setTarget: (target: any) => set({ target }),
}));

const JokerGl = ({ containerRef }: any) => {
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

  const points = [
    [0, 0, 0],
    [1, 2, 1],
    [5, 3, 1],
    [0.2, 0.3, 21],
    [1.2, 3.3, 5.2],
    [0.5, 0.31, 0.21],
  ] as unknown as Vector3Tuple[];
  return (
    <Canvas
      gl={{
        antialias: true,
        stencil: true,
        depth: false,
      }}
      shadows
      dpr={[1, 1.5]}
      eventPrefix="client"
      eventSource={containerRef}
      camera={{ position: [-1.5, 1, 5.5], fov: 45, near: 1, far: 1000 }}
      onCreated={({ gl, camera }) => {
        const cameraHistory = {
          position: [-37.2050893151137, 4.398785004874994, 28.413967317544703],
          rotation: [
            -0.1535913960038849, -0.912856335057397, -0.12188727308899551,
          ],
        };

        if (cameraHistory) {
          camera.position.fromArray(cameraHistory.position);
          // camera.rotation.fromArray(cameraHistory.rotation);
        }
      }}
    >
      <color attach="background" args={["pink"]}></color>

      <directionalLight intensity={1} position={[-10, 10, 5]} castShadow />

      <Cube points={points}></Cube>
      <CameraAnim points={points}></CameraAnim>
      {/* <OrbitControls></OrbitControls> */}
      <BakeShadows />
      <Preload all />
    </Canvas>
  );
};

export default JokerGl;
