"use client";

import styled from "@emotion/styled";
import { BakeShadows, Preload, ScrollControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";

import { create } from "zustand";

import {
  Bloom,
  DepthOfField,
  EffectComposer,
} from "@react-three/postprocessing";
import Meshes from "~app/vision/components/Meshes";
import Controls from "~app/vision/components/Controls";

import { useControls } from "leva";
import { KernelSize } from "postprocessing";
import { FloatText } from "~components/Edit/base/Overlays/floatText";
import { JumpCubeLoading } from "~app/vision/components/Meshes/glbModule";
import { cameraStore } from "~components/Edit/base/Stores/cameraStore";
import ScrollBinder, {
  useScrollStore,
} from "~components/Edit/base/scrollBinder";

const IndexLayout = styled.div`
  section {
    width: 50%;
    height: 100%;
  }
`;

export const useStore = create((set: any) => ({
  loading: true,
  setLoading: (loading: boolean) => set({ loading }),

  target: null,
  setTarget: (target: any) => set({ target }),
}));

export default function Bread() {
  const containerRef = useRef<any>();

  return (
    <IndexLayout
      className="content-container w-[100vw] h-[100vh] flex flex-col absolute z-10"
      ref={containerRef}
    >
      <Suspense fallback={null}>
        <Me />
      </Suspense>
      {/* <LoadingText /> */}
      {/* <Loader /> */}
    </IndexLayout>
  );
}

const Me = () => {
  const { target, setLoading, loading } = useStore();

  const luggageRef = useRef<any>(null!);
  const willDestroyLoading = () => {
    setLoading(false);
  };

  const pageSize = 5;
  return (
    <Canvas
      gl={{
        antialias: true,
        stencil: true,
      }}
      shadows
      dpr={[1, 1.5]}
      eventPrefix="client"
      camera={{
        position: [-0.5, 0.8, 3],
        fov: 60,
        near: 1,
        far: 1000,
      }}
    >
      <color attach="background" args={["black"]} />

      <Suspense
        fallback={
          <LoadingLayout loading willDestroyLoading={willDestroyLoading} />
        }
      >
        <ScrollControls pages={pageSize} damping={0}>
          <Meshes ref={luggageRef} loading={loading} />
          <FloatText pageSize={pageSize} />
          <ScrollBinder />
        </ScrollControls>
      </Suspense>

      {/* <Controls target={target} /> */}
      {/* <Preload all /> */}
      <SceneRig />
      {/* <EffectsWithEnv /> */}
      {/* <BakeShadows /> */}
    </Canvas>
  );
};

const LoadingLayout = (props: any) => {
  useEffect(() => {
    console.log("reder", props);

    return () => {
      console.log("deploy", props.willDestroyLoading());
    };
  }, []);

  return (
    <group>
      <JumpCubeLoading loading={props.loading} />
    </group>
  );
};

const SceneRig = () => {
  const { camera } = useThree();
  const { position, positionCurve, scene } = cameraStore();
  const { data } = useScrollStore();
  useFrame((state) => {
    if (data && positionCurve) {
      // console.log(data.offset, "data.offset");
      // scene / 5
      // 1
      // const vector_s = positionCurve.getPointAt(data.offset);
      const vector_s = positionCurve.getPointAt(scene / 5);

      camera.position.lerp(vector_s, 0.4);
    }

    if (position) {
      state.camera.lookAt(position[0], position[1], position[2]);
      return;
    }
    // state.camera.lookAt(-1, 0.8, -1);
  });

  return <></>;
};

const EffectsWithEnv = () => {
  const controlState = useControls({
    luminanceThreshold: {
      value: 0,
      min: 0,
      max: 1,
    },
    luminanceSmoothing: {
      value: 0.125,
      min: 0,
      max: 1,
    },
    intensity: {
      value: 1,
      min: 0,
      max: 1,
    },
    kernelSize: {
      value: "LARGE",
      options: ["VERY_SMALL", "SMALL", "MEDIUM", "LARGE", "VERY_LARGE", "HUGE"],
    },
    openCamerationRotation: false,
  });

  return (
    <group>
      <EffectComposer disableNormalPass>
        <DepthOfField
          target={[1.3198989629745483, 0.8544199466705322, 0.9169659614562988]}
          focalLength={0.3}
          bokehScale={1.2}
          height={4000}
        />

        <Bloom
          {...controlState}
          kernelSize={KernelSize[controlState.kernelSize as any]}
          mipmapBlur
        />
      </EffectComposer>
    </group>
  );
};
