import { PlaneProps, usePlane } from "@react-three/cannon";
import { MeshReflectorMaterial, useTexture } from "@react-three/drei";
import { useMemo, useRef } from "react";
import THREE, {
  Mesh,
  DoubleSide,
  Color,
  Vector3,
  Vector2,
  ShaderMaterial,
  Material,
  TextureLoader,
} from "three";
import VetexShader from "../Shader/try/vertexShader.glsl";
import FragmentShader from "../Shader/try/fragmentShader.glsl";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import React from "react";

const ReflectorPlane = (props: any) => {
  const [ref] = usePlane(() => ({ ...props }), useRef<Mesh>(null));
  const testMesh = useRef<Mesh>(null!);
  const testMat = useRef<ShaderMaterial>(null!);
  // console.log(testMat?.current, "...dasfasdf");
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
    // console.log(
    //   Math.sin(testMesh.current.position.x + clock.getElapsedTime() * 0.5),
    //   1111
    // );
    // sin(modelPosition.x * uFrequency.x + uTime * 3.0) * 0.1;
  });
  if (testMesh.current) {
    console.log(testMesh.current);
  }
  return (
    <mesh receiveShadow ref={testMesh} {...props}>
      {/* <planeGeometry args={[1, 1, 16, 16]} /> */}
      <sphereGeometry args={[3]} />
      {/* <sphereGeometry args={[10, 10, 64]} /> */}
      {/* <planeGeometry args={[10, 10, 64, 64]} /> */}
      {/* <planeGeometry args={[1, 1]} /> */}
      {/* <planeGeometry args={[2, 2, 5, 5]} /> */}
      {/* <rawShaderMaterial */}
      <shaderMaterial
        ref={testMat}
        fragmentShader={FragmentShader}
        vertexShader={VetexShader}
        side={DoubleSide}
        uniforms={uniforms}
        // wireframe
      />

      {/* <MeshReflectorMaterial
        blur={[300, 30]}
        resolution={2048}
        mixBlur={1}
        mixStrength={80}
        roughness={1}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#202020"
        metalness={0.8}
        mirror={1}
      /> */}
    </mesh>
  );
};

export default ReflectorPlane;
