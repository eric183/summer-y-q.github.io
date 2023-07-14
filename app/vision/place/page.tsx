"use client";

import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import React, { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import Lights from "../components/Lights";
import {
  AccumulativeShadows,
  BakeShadows,
  Box,
  Center,
  ContactShadows,
  Gltf,
  OrbitControls,
  PivotControls,
  RandomizedLight,
  useGLTF,
} from "@react-three/drei";
import { Physics, usePlane } from "@react-three/cannon";
import { Effects } from "../components/Effects";
import {
  Color,
  DoubleSide,
  Euler,
  Matrix4,
  Mesh,
  Quaternion,
  ShaderMaterial,
  TextureLoader,
  Vector3,
} from "three";
import FragmentShader from "./shader/fragmentShader.glsl";
import VertexShader from "./shader/vertexShader.glsl";
import { button, useControls } from "leva";

const Page = () => {
  // const props = useControls({
  //   lightPosition: {
  //     value: [5, 5, 5],
  //     step: 0.1,
  //   },
  // });
  const lightPosition = [5, 5, 5];
  return (
    <div className="w-full h-full relative z-10">
      <Canvas
        shadows
        onCreated={({ gl, camera }) => {
          camera.position.set(0, 0, 15);
        }}
      >
        <color attach="background" args={["#fff"]} />
        {/* <color attach="background" args={["#000"]} /> */}
        {/* <fog attach="fog" args={["#17171b", 30, 40]} /> */}
        {/* <fog attach="fog" args={["#000", 8, 35]} /> */}

        <ambientLight intensity={0.2} />

        <spotLight
          position={lightPosition as unknown as Vector3}
          angle={0.52}
          penumbra={1}
          intensity={3}
          castShadow
          shadow-mapSize={1024 * 2}
        />
        <Light lightPosition={lightPosition} />
        <Center top position={[2, 0, 2]}>
          <mesh castShadow>
            <sphereGeometry args={[0.25, 64, 64]} />
            <meshStandardMaterial color="gray" />
          </mesh>
        </Center>
        {/* <Box args={[30, 30, 30]}></Box> */}
        {/* <Building /> */}
        {/* <Physics>
          <ReflectorPlane position={[0, -0.5, 0]} />
        </Physics> */}
        <Gltf
          src="/controller.glb"
          receiveShadow
          castShadow
          position={[-2, 0.22, -2.8]}
        />
        <SceneRig />
        {/* <ContactShadows
          smooth={true}
          scale={100}
          position={[0, -0.001, 0]}
          blur={0.3}
          opacity={1}
        /> */}

        <OrbitControls />
        {/* <BakeShadows /> */}
      </Canvas>
    </div>
  );
};

const Light = (props: any) => {
  const ref = useRef<any>();
  const threeInstance = useThree();

  useFrame((state, delta) => {
    // easing.dampE(
    //   ref.current.rotation,
    //   [(state.pointer.y * Math.PI) / 50, (state.pointer.x * Math.PI) / 20, 0],
    //   0.2,
    //   delta
    // );
  });

  // useControls({
  //   showCameraPosition: button(() => {
  //     console.log(threeInstance.camera.position);
  //     console.log(threeInstance.camera.quaternion.toArray());
  //   }),
  // });

  return (
    <group ref={ref}>
      <AccumulativeShadows
        temporal
        toneMapped
        frames={100}
        color="purple"
        colorBlend={2}
        opacity={2}
        scale={10}
        alphaTest={0.9}
      >
        <RandomizedLight
          amount={8}
          radius={5}
          ambient={0.5}
          position={props.lightPosition}
          bias={0.001}
        />
      </AccumulativeShadows>
      {/* <PivotControls annotations>
        <directionalLight
          position={[5, 5, -8]}
          castShadow
          intensity={5}
          shadow-mapSize={2048}
          shadow-bias={-0.001}
        >
          <orthographicCamera
            attach="shadow-camera"
            args={[-8.5, 8.5, 8.5, -8.5, 0.1, 20]}
          />
        </directionalLight>
      </PivotControls> */}
    </group>
  );
};

const Building = (props: any) => {
  const { scene, materials } = useGLTF("/controller.glb");
  useLayoutEffect(() => {
    console.log(scene, "!!");
    // Object.values(materials).forEach(
    //   (material: any) => (material.roughness = 0)
    // );
    // Object.assign(materials.light, {
    //   color: new Color("#ff2060"),
    //   emissive: new Color(1, 0, 0),
    //   emissiveIntensity: 2,
    //   toneMapped: false,
    // });
  }, []);
  return <primitive object={scene} {...props}></primitive>;

  // const { scene, materials } = useGLTF("/probe-transformed.glb");
  // return <primitive object={scene} {...props} />;
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
  const euler = new Euler(0, 0, 0, "YXZ").setFromRotationMatrix(
    new Matrix4().fromArray([
      -0.08611426283742997, 0.11827116208244744, 0.010296169889439717,
      0.9891866632952759,
    ])
  );
  return useFrame(({ camera }) => {
    // camera.position.lerp(
    //   {
    //     x: 0,
    //     y: 0,
    //     z: 35,
    //   } as Vector3,
    //   0.1
    // );

    camera.quaternion.slerp(new Quaternion().setFromEuler(euler), 0.1);
    // setRotationFromEuler(euler);

    camera.position.lerp(
      new Vector3().fromArray([
        1.1269284656211176, 1.8386154065375717, 4.645255240137279,
      ]),
      0.1
    );
    camera.lookAt(0, 0, 0);
  });
};

export default Page;
