import { BakeShadows, MeshReflectorMaterial, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import create from "zustand";
// import { Physics, RigidBody, CuboidCollider, Debug } from "@react-three/rapier";
import Lights from "./Lights";
import Controls from "./Controls";
import Meshes from "./Meshes";
import { Effects } from "./Effects";
import ReflectorPlane from "./Meshes/plane";
import { Physics } from "@react-three/cannon";
import { instancedGeometry } from "./Meshes/instanceBoxes";
import { useMemo, useState } from "react";
import { Color } from "three";
import { SceneRig } from "./SceneRig";

export const useStore = create((set: any) => ({
  target: null,
  setTarget: (target: any) => set({ target }),
}));

const CoinApp = ({ containerRef }: any) => {
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
  return (
    <Canvas
      gl={{
        antialias: true,
        stencil: true,
        // logarithmicDepthBuffer: true,
        depth: false,
      }}
      // camera={{ position: [-1.5, 1, 5.5], fov: 45, near: 1, far: 20 }}
      shadows
      dpr={[1, 1.5]}
      eventPrefix="client"
      // eventPrefix="page"
      eventSource={containerRef}
      // camera={{ fov: 75, position: [0, 20, 100], near: 0.1, far: 1000 }}
      camera={{ position: [-1.5, 1, 5.5], fov: 45, near: 1, far: 1000 }}
      // camera={{ position: [0, 2, 0], fov: 45, near: 1, far: 1000 }}
      onCreated={({ gl, camera }) => {
        // const threeInfo: string = localStorage.getItem("threeInfo")!;
        // const cameraHistory = JSON.parse(threeInfo);
        const cameraHistory = {
          position: [-37.2050893151137, 4.398785004874994, 28.413967317544703],
          rotation: [
            -0.1535913960038849, -0.912856335057397, -0.12188727308899551,
          ],
        };

        if (cameraHistory) {
          camera.position.fromArray(cameraHistory.position);
          camera.rotation.fromArray(cameraHistory.rotation);
        }
      }}
    >
      {/* <color attach="background" args={["black"]} /> */}
      {/* <fog attach="fog" args={["#000", 5, 100]} /> */}

      <Lights />

      <Meshes portal={containerRef} />
      <Physics>
        <ReflectorPlane position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} />
        <InstancedGeometry {...{ colors, number, size }} />
        <InstancedGeometryController {...{ colors, number, size }} />
      </Physics>

      <Controls target={target} />

      <Preload all />

      {/* <SceneRig /> */}
      <Effects />

      <BakeShadows />
    </Canvas>
  );
};

export default CoinApp;
