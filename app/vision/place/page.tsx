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
  Float,
  Gltf,
  MeshTransmissionMaterial,
  OrbitControls,
  PivotControls,
  RandomizedLight,
  useGLTF,
  useMask,
} from "@react-three/drei";
import { Physics, usePlane } from "@react-three/cannon";
import { Effects } from "../components/Effects";
import {
  CanvasTexture,
  Color,
  DoubleSide,
  Euler,
  FrontSide,
  Matrix4,
  Mesh,
  Quaternion,
  RepeatWrapping,
  ShaderMaterial,
  TextureLoader,
  UVMapping,
  Vector3,
} from "three";
import FragmentShader from "./shader/fragmentShader.glsl";
import VertexShader from "./shader/vertexShader.glsl";
import { button, useControls } from "leva";
import { config } from "process";

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
        <color attach="background" args={["goldenrod"]} />
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
        <Center top>
          <Suzi rotation={[-0.63, 0, 0]} scale={2} />
        </Center>
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
        {/* <SceneRig /> */}
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

function Suzi(props: any) {
  // const { scene, materials } = useGLTF(
  //   "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/suzanne-high-poly/model.gltf"
  // );

  const config = useControls({
    meshPhysicalMaterial: false,
    transmissionSampler: false,
    backside: false,
    samples: { value: 10, min: 1, max: 32, step: 1 },
    resolution: { value: 2048, min: 256, max: 2048, step: 256 },
    transmission: { value: 1, min: 0, max: 1 },
    roughness: { value: 0.0, min: 0, max: 1, step: 0.01 },
    thickness: { value: 3.5, min: 0, max: 10, step: 0.01 },
    ior: { value: 1.5, min: 1, max: 5, step: 0.01 },
    chromaticAberration: { value: 0.06, min: 0, max: 1 },
    anisotropy: { value: 0.1, min: 0, max: 1, step: 0.01 },
    distortion: { value: 0.0, min: 0, max: 1, step: 0.01 },
    distortionScale: { value: 0.3, min: 0.01, max: 1, step: 0.01 },
    temporalDistortion: { value: 0.5, min: 0, max: 1, step: 0.01 },
    clearcoat: { value: 1, min: 0, max: 1 },
    attenuationDistance: { value: 0.5, min: 0, max: 10, step: 0.01 },
    attenuationColor: "#ffffff",
    color: "#c9ffa1",
    bg: "#839681",
    rotation: {
      value: {
        x: 0,
        y: -1.25,
        z: 0,
      },
    },
    position: {
      value: {
        x: 0,
        y: -1.25,
        z: 0,
      },
    },
  });

  return (
    <Aquarium
      {...config}
      position={[0, 0.25, 0]}
      scale={0.2}
      rotation={[config.rotation.x, config.rotation.y, config.rotation.z]}
    >
      <group dispose={null}>
        <Float>
          <Center top>
            <Building
              position={[
                config.position.x,
                config.position.y,
                config.position.z,
              ]}
              rotation={[
                config.rotation.x,
                config.rotation.y,
                config.rotation.z,
              ]}
              s
            />
          </Center>
        </Float>
      </group>
    </Aquarium>
  );
}

function Aquarium({ children, ...props }: any) {
  const ref = useRef<any>();
  const { nodes } = useGLTF("/transformed.glb") as any;
  const stencil = useMask(1, false);
  useLayoutEffect(() => {
    // Apply stencil to all contents
    ref.current.traverse(
      (child: any) =>
        child.material && Object.assign(child.material, { ...stencil })
    );
  }, []);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        scale={[0.61 * 6, 0.8 * 6, 1 * 6]}
        geometry={nodes.Cube.geometry}
      >
        <MeshTransmissionMaterial
          samples={4}
          thickness={3}
          chromaticAberration={0.025}
          anisotropy={0.1}
          distortion={0.1}
          distortionScale={0.1}
          temporalDistortion={0.2}
          {...props}
        />
      </mesh>
      <group ref={ref}>{children}</group>
    </group>
  );
}

function GelatinousCube(props: any) {
  const config = useControls({
    meshPhysicalMaterial: false,
    transmissionSampler: false,
    backside: false,
    samples: { value: 10, min: 1, max: 32, step: 1 },
    resolution: { value: 2048, min: 256, max: 2048, step: 256 },
    transmission: { value: 1, min: 0, max: 1 },
    roughness: { value: 0.0, min: 0, max: 1, step: 0.01 },
    thickness: { value: 3.5, min: 0, max: 10, step: 0.01 },
    ior: { value: 1.5, min: 1, max: 5, step: 0.01 },
    chromaticAberration: { value: 0.06, min: 0, max: 1 },
    anisotropy: { value: 0.1, min: 0, max: 1, step: 0.01 },
    distortion: { value: 0.0, min: 0, max: 1, step: 0.01 },
    distortionScale: { value: 0.3, min: 0.01, max: 1, step: 0.01 },
    temporalDistortion: { value: 0.5, min: 0, max: 1, step: 0.01 },
    clearcoat: { value: 1, min: 0, max: 1 },
    attenuationDistance: { value: 0.5, min: 0, max: 10, step: 0.01 },
    attenuationColor: "#ffffff",
    color: "#c9ffa1",
    bg: "#839681",
  });
  const { nodes, materials } = useGLTF("/transformed.glb") as any;
  return (
    <group dispose={null} scale={0.5}>
      {/* <mesh geometry={nodes.cube1.geometry} position={[0, 0.38, 0]}>
        {config.meshPhysicalMaterial ? (
          <meshPhysicalMaterial {...config} />
        ) : (
          <MeshTransmissionMaterial
            background={new Color(config.bg)}
            {...config}
          />
        )}
      </mesh>
      <mesh
        castShadow
        renderOrder={-100}
        geometry={nodes.cube2.geometry}
        material={materials.cube_mat}
        material-side={FrontSide}
        position={[-0.56, 0.38, -0.11]}
      />
      <mesh
        geometry={nodes.bubbles.geometry}
        material={materials.cube_bubbles_mat}
        position={[-0.56, 0.38, -0.11]}
      />
      <group position={[-0.56, 0.38, -0.41]}>
        <mesh
          geometry={nodes.arrows.geometry}
          material={materials.weapons_mat}
        />
        <mesh
          geometry={nodes.skeleton_1.geometry}
          material={materials.skele_mat}
        />
        <mesh
          geometry={nodes.skeleton_2.geometry}
          material={materials.weapons_mat}
          material-side={FrontSide}
        />
      </group> */}
    </group>
  );
}
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
      {/* <AccumulativeShadows
        temporal
        toneMapped
        frames={100}
        color="lightblue"
        // color="white"
        colorBlend={2}
        opacity={0.7}
        scale={60}
        // position={[0, 0, 0]}
        alphaTest={0.9}
      >
        <RandomizedLight
          amount={8}
          radius={5}
          ambient={0.5}
          position={props.lightPosition}
          bias={0.001}

          // amount={8}
          // radius={15}
          // ambient={0.5}
          // intensity={1}
          // position={[-5, 10, -5]}
          // size={20}
        />
      </AccumulativeShadows> */}

      {/* <AccumulativeShadows
        temporal
        frames={100}
        alphaTest={0.85}
        opacity={0.85}
        scale={12}
      >
        <RandomizedLight
          amount={8}
          radius={5}
          ambient={0.5}
          intensity={1}
          position={[5, 5, -5]}
          bias={0.001}
        />
      </AccumulativeShadows> */}
      <AccumulativeShadows
        temporal
        frames={100}
        alphaTest={0.8}
        opacity={0.75}
        scale={12}
      >
        <RandomizedLight
          amount={8}
          radius={4}
          ambient={0.5}
          intensity={1}
          // position={[2.5, 5, -10]}
          position={props.lightPosition}
        />
      </AccumulativeShadows>
      {/* <AccumulativeShadows
        position={[0, -1.16, 0]}
        frames={100}
        alphaTest={0.9}
        scale={10}
      >
        <RandomizedLight
          amount={8}
          radius={10}
          ambient={0.5}
          position={[1, 5, -1]}
        />
      </AccumulativeShadows> */}

      {/* <AccumulativeShadows
        temporal
        toneMapped
        frames={100}
        color="lightblue"
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
      </AccumulativeShadows> */}
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
  const { scene } = useGLTF("/controller.glb");
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
