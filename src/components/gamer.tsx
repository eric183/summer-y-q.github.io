import { createRoot } from "react-dom/client";
import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ContactShadows, OrbitControls, useHelper } from "@react-three/drei";

function Box(_props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<any>();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (ref.current.rotation.x += 0.01));

  // const gltf = useLoader(GLTFLoader, "/diamond.glb");
  const gltf = useLoader(GLTFLoader, "/controller.glb");

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <Suspense fallback={null}>
      {/* <primitive object={gltf.scene} position={[0, -2, 0]} scale={0.5} /> */}
      <primitive
        object={gltf.scene}
        position={[0, 0, 0]}
        rotation={[0, 0.5, 0]}
        scale={1.5}
      />
    </Suspense>

    // <mesh
    //   {...props}
    //   ref={ref}
    //   scale={clicked ? 1.5 : 1}
    //   onClick={(event) => click(!clicked)}
    //   onPointerOver={(event) => hover(true)}
    //   onPointerOut={(event) => hover(false)}
    // >
    //   <primitive object={gltf.scene} />

    //   <boxGeometry args={[1, 1, 1]} />
    //   <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    // </mesh>
  );
}

const Gamer = () => {
  return (
    <Canvas>
      {/* <hemisphereLight color="white" groundColor="blue" intensity={2.75} /> */}

      <ambientLight />
      {/* <pointLightHelper> */}
      <pointLight position={[20, 20, 20]} />
      {/* </pointLightHelper> */}
      <Box position={[1.2, 0, 0]} />
      {/* <group position={[0, -10, 0]}>
        <ContactShadows
          scale={20}
          blur={10}
          far={20}
          attachArray={undefined}
          attachObject={undefined}
        />
      </group> */}
      <directionalLight
        position={[-10, 10, 5]}
        shadow-mapSize={[256, 256]}
        shadow-bias={-0.0001}
        castShadow
      >
        <orthographicCamera attach="shadow-camera" args={[-10, 10, -10, 1]} />
      </directionalLight>
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.1}
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        attachArray={undefined}
        attachObject={undefined}
      />
    </Canvas>
  );
};

export default Gamer;
