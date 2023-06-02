// 🧳

import styled from "@emotion/styled";
import {
  BakeShadows,
  CatmullRomLine,
  Environment,
  Hud,
  PerspectiveCamera,
  Preload,
  ScrollControls,
  useScroll,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
// import { Matrix4 } from "three";
import Controls from "../components/canvas/Controls";

import { create } from "zustand";
import { JumpCubeLoading } from "../components/canvas/Meshes/glbModule";

import {
  Bloom,
  DepthOfField,
  EffectComposer,
} from "@react-three/postprocessing";

import { FloatText } from "../components/base/Overlays/floatText";
import { CatmullRomCurve3, Matrix4, Mesh, Vector3 } from "three";
import ScrollBinder, { useScrollStore } from "../components/base/scrollBinder";
import shallow from "zustand/shallow";
import Meshes from "../components/canvas/Meshes";
import { cameraStore } from "../components/base/Stores/cameraStore";
import Lights from "../components/canvas/Lights";
import { useControls } from "leva";
import { KernelSize } from "postprocessing";
import { fetchPosts, usePosts } from "../controllers/posts";
import { useQuery } from "@tanstack/react-query";

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

  // const getChatGPTData = async (url: string, data: any) => {
  //   return await fetch(url + process.env.CHATGPT_API_TOKEN, {
  //     data,
  //   });
  // };
  const { data, isFetched } = usePosts();
  // const query = useQuery({ queryKey: ["todos"], queryFn: fetchPosts });

  // export const useTodosQuery = () =>
  // useQuery(['todos'], fetchTodos, {
  //   // ✅ memoizes with useCallback
  //   select: React.useCallback(
  //     (data: Todos) => data.map((todo) => todo.name.toUpperCase()),
  //     []
  //   ),
  // })

  // console.log(query);
  useEffect(() => {
    // const scrollContent =
    //   containerRef.current.querySelector("canvas").nextElementSibling;
    // console.log(scrollContent);
    // scrollContent.addEventListener("scroll", scrollEventBinder, false);
    // return () =>
    //   scrollContent.removeEventListener("scroll", scrollEventBinder, false);
  }, []);
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
        // logarithmicDepthBuffer: true,
        // depth: false,
      }}
      shadows
      dpr={[1, 1.5]}
      eventPrefix="client"
      // eventSource={containerRef}
      camera={{
        position: [-0.5, 0.8, 3],
        fov: 60,
        near: 1,
        far: 1000,
      }}
    >
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

      {/* <Suspense fallback={<JumpCubeLoading />}> */}
      <Suspense
        fallback={
          <LoadingLayout loading willDestroyLoading={willDestroyLoading} />
        }
      >
        <ScrollControls pages={pageSize} damping={0}>
          {/* <Train /> */}
          {/* <Scroll> */}

          <Meshes ref={luggageRef} loading={loading} />

          <FloatText pageSize={pageSize} />

          <ScrollBinder />
        </ScrollControls>
      </Suspense>

      <Controls target={target} />
      <Preload all />
      <SceneRig />
      <EffectsWithEnv />
      <BakeShadows />

      {/* <Viewcube /> */}
    </Canvas>
  );
};

const LoadingLayout = (props: any) => {
  useEffect(() => {
    console.log("reder", props);

    return () => {
      // console.log("deploy", props);
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
  const { position, positionCurve } = cameraStore();
  const { data } = useScrollStore();
  useFrame((state) => {
    if (data && positionCurve) {
      const vector_s = positionCurve.getPointAt(data.offset);

      camera.position.copy(vector_s);
      // camera.updateMatrix();
    }

    // state.camera.position.lerp(
    //   {
    //     x: 13.782555007212,
    //     y: 2.0113850435809417,
    //     z: 18.689434161127473,
    //     // x: 3.7825550072676912 * 5,
    //     // y: 2.0113850435809417 * 5,
    //     // z: 8.689434161127473 * 5,
    //   } as THREE.Vector3,
    //   0.1
    // );
    if (position) {
      state.camera.lookAt(position[0], position[1], position[2]);
      return;
    }
    state.camera.lookAt(-1, 0.8, -1);
  });

  return <></>;
};

const EffectsWithEnv = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Run the effect only on the client
    }
  }, []);

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

  const envControl = useControls({
    preset: {
      value: "night",
      options: [
        "sunset",
        "dawn",
        "night",
        "warehouse",
        "forest",
        "apartment",
        "studio",
        "city",
        "park",
        "lobby",
      ],
      // If onChange is present the value will not be reactive, see https://github.com/pmndrs/leva/blob/main/docs/advanced/controlled-inputs.md#onchange
      // Instead we transition the preset value, which will prevents the suspense bound from triggering its fallback
      // That way we can hang onto the current environment until the new one has finished loading ...
    },
  });

  return (
    <group>
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
          {...controlState}
          kernelSize={KernelSize[controlState.kernelSize as any]}
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
      {/* <Environment background blur={1} {...envControl} /> */}
    </group>
  );
};

// function Viewcube({ renderPriority = 1, matrix = new Matrix4() }) {
//   const mesh = useRef<Mesh>(null);
//   const { camera, size } = useThree();
//   const [hover, set] = useState(null);

//   useFrame(() => {
//     // Spin mesh to the inverse of the default cameras matrix
//     matrix.copy(camera.matrix).invert();
//     mesh.current?.quaternion.setFromRotationMatrix(matrix);
//     // mesh.current?.rotateZ(90);
//     // mesh.current?.quaternion.setFromRotationMatrix(matrix);
//   });

//   return (
//     <Hud renderPriority={renderPriority}>
//       <OrthographicCamera makeDefault position={[50, 20, 100]} />
//       {/* <PerspectiveCamera makeDefault position={[0, 0, 100]} /> */}

//       <mesh
//         ref={mesh}
//         position={[size.width / 2 - 120, size.height / 2 - 120, 0]}
//         onPointerOut={(e) => set(null)}
//         onPointerMove={(e: any) => set(e.face.materialIndex)}
//       >
//         {[...Array(6)].map((_, index) => (
//           <meshLambertMaterial
//             attach={`material-${index}`}
//             key={index}
//             color={hover === index ? "lightblue" : "white"}
//           />
//         ))}
//         <boxGeometry args={[80, 80, 80]} />
//       </mesh>
//       <ambientLight intensity={1} />
//       <pointLight position={[200, 200, 100]} intensity={0.5} />
//     </Hud>
//   );
// }
// state.camera.position.lerp(
//   {
//     x: 3.7825550072676912,
//     y: 2.0113850435809417,
//     z: 8.689434161127473,
//     // x: 3.7825550072676912 * 5,
//     // y: 2.0113850435809417 * 5,
//     // z: 8.689434161127473 * 5,
//   } as THREE.Vector3,
//   0.1
// );
// state.camera.lookAt(-1, 0.8, -1);
