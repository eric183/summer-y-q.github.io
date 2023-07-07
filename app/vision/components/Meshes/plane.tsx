import { PlaneProps, usePlane } from "@react-three/cannon";
import { MeshReflectorMaterial } from "@react-three/drei";
import { useRef } from "react";
import THREE, { Mesh, DoubleSide } from "three";
import VetexShader from "../Shader/try/vertexShader.glsl";
import FragmentShader from "../Shader/try/fragmentShader.glsl";

const ReflectorPlane = (props: PlaneProps) => {
  const [ref] = usePlane(() => ({ ...props }), useRef<Mesh>(null));

  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[200, 200]} />
      <rawShaderMaterial
        fragmentShader={FragmentShader}
        vertexShader={VetexShader}
        side={DoubleSide}
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
