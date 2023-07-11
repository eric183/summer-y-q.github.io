import { usePlane } from "@react-three/cannon";
import { useMemo, useRef } from "react";
import {
  Mesh,
  DoubleSide,
  Color,
  Vector3,
  ShaderMaterial,
  TextureLoader,
} from "three";
import VetexShader from "../Shader/sdfSquare/vertexShader.glsl";
import FragmentShader from "../Shader/sdfSquare/fragmentShader.glsl";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import React from "react";

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
      <planeGeometry args={[10, 10, 10, 10]} />

      <shaderMaterial
        ref={testMat}
        fragmentShader={FragmentShader}
        vertexShader={VetexShader}
        side={DoubleSide}
        uniforms={uniforms}
      />
    </mesh>
  );
};

export default ReflectorPlane;
