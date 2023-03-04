import { Eric, Luggage, Room } from "./glbModule";

const Meshes = (props: any) => {
  return (
    <group>
      {/* <Room position-y={-2} portal={props.portal} /> */}
      {/* <Girl scale={10} /> */}
      <Luggage
        ref={props.luggageRef}
        loading={props.loading}
        position={[0, 0, 0]}
        // willDestroyLoading={willDestroyLoading}
      />
      {/* </Scroll> */}
      <Eric />
    </group>
  );
};

export default Meshes;
