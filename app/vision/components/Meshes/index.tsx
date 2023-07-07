import { Center } from "@react-three/drei";
import { Eric, Luggage, Room } from "./glbModule";

const Meshes = (props: any) => {
  return (
    <group>
      {/* <Room position-y={-2} portal={props.portal} /> */}
      {/* <Girl scale={10} /> */}
      {/* <Luggage
        ref={props.luggageRef}
        loading={props.loading}
        position={[0, 0, 0]}
        // willDestroyLoading={willDestroyLoading}
      /> */}
      {/* </Scroll> */}
      <Eric />

      {/* <Center top>
        <mesh castShadow>
          <sphereGeometry args={[0.75, 64, 64]} />
          <meshStandardMaterial metalness={1} roughness={1} />
        </mesh>
      </Center> */}
    </group>
  );
};

export default Meshes;
