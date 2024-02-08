import { CatmullRomLine } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React from "react";
import THREE, { Vector3, Vector3Tuple } from "three";
import { cameraStore } from "~components/Edit/base/Stores/cameraStore";
import { useScrollStore } from "~components/Edit/base/scrollBinder";

const CameraAnim: React.FC<{
  points: Vector3Tuple[];
}> = ({ points }) => {
  const vertexColors = [
    [0.2, 0.5, 0.1],
    [0.1, 0.2, 0.1],
    [2, 3, 2],
  ] as unknown as Vector3Tuple[];

  return (
    <>
      {/* <CameraPoints points={points} vertexColors={vertexColors} /> */}
      <SceneRig />
    </>
  );
};

const SceneRig = () => {
  const { camera } = useThree();
  const { position, positionCurve } = cameraStore();
  const { data } = useScrollStore();
  useFrame((state) => {
    if (data && positionCurve) {
      // console.log(data.offset);
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

const CameraPoints: React.FC<{
  points: Vector3Tuple[];
  vertexColors: Vector3Tuple[];
}> = ({ points, vertexColors }) => {
  return (
    <CatmullRomLine
      points={points} // Array of Points
      closed={true} // Default
      curveType="catmullrom" // One of "centripetal" (default), "chordal", or "catmullrom"
      tension={0.5} // Default (only applies to "catmullrom" curveType)
      color="black" // Default
      lineWidth={1} // In pixels (default)
      dashed={false} // Default
      vertexColors={vertexColors} // Optional array of RGB values for each point}
      // geometry={new THREE.lin()}
      // {...lineProps} // All THREE.Line2 props are valid
      // {...materialProps} // All THREE.LineMaterial props are valid
      // material={new THREE.LineBasicMaterial({ color: 0xff0000 })}
    />
  );
};
export default CameraAnim;
