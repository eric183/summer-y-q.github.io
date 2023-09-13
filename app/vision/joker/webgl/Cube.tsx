import { Box, PivotControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { CatmullRomCurve3, Vector3, Vector3Tuple } from "three";

const Cube: React.FC<{
  points: Vector3Tuple[];
}> = ({ points }) => {
  // const boxRef = useRef<any>();
  // const position = new Vector3();
  // const speed = 0.1; // 移动速度

  // const path = new CatmullRomCurve3(points.map((p) => new Vector3(...p)));

  // path.getPoints();
  // useFrame(({ clock }) => {
  //   // 获取当前方块的位置
  //   // boxRef.current.getWorldPosition(position);

  //   // 计算下一个位置
  //   const nextPoint = path.getPointAt((position.x + speed) % 1); // 控制移动速度
  //   boxRef.current.position.copy(nextPoint);

  //   // 计算方向并使方块面向前进方向
  //   // const tangent = path.getTangentAt((position.x + speed) % 1);
  //   // boxRef.current.rotation.x = Math.atan2(-tangent.z, tangent.y);
  //   // boxRef.current.rotation.y = Math.atan2(tangent.x, tangent.z);
  // });

  return (
    <Box>
      <meshPhysicalMaterial color="lightblue"></meshPhysicalMaterial>
    </Box>
  );
};

export default Cube;
