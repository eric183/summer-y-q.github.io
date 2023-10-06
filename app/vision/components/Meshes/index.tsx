import { Center } from "@react-three/drei";
import { Eric, Luggage, Room } from "./glbModule";
import { buttonGroup, useControls } from "leva";
import { useEffect } from "react";
import { cameraStore } from "~components/Edit/base/Stores/cameraStore";

const Meshes = (props: any) => {
  const setScene = cameraStore((state) => state.setScene);
  const [values, set] = useControls((): any => ({
    scene: 1,
    // onChange: (v) => {
    //   console.log(v, "kkjkk");
    // },

    SizeButtonGroup: buttonGroup({
      label: "camera scene",

      opts: {
        first: () => set({ scene: 1 }),
        two: () => set({ scene: 2 }),
        three: () => set({ scene: 3 }),
        four: () => set({ scene: 4 }),
        five: () => set({ scene: 5 }),
      },
    }),
  }));

  console.log(values, "...");

  useEffect(() => {
    setScene(values.scene);
  }, [values]);
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
