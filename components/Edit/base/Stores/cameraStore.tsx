import { CatmullRomCurve3, Vector3 } from "three";
import { create } from "zustand";

interface CameraInterface {
  position?: number[];
  positionCurve?: CatmullRomCurve3;
  points: Vector3[];
  setPoints: (value: CatmullRomCurve3) => void;
  setPositionCurve: (value: [number, number, number][]) => void;
  setPosition: (value: number[]) => void;
}

const cameraStore = create<CameraInterface>()((set) => ({
  position: [0, 0, 0],
  positionCurve: undefined,
  points: [],
  setPoints: (positionCurve) =>
    set(() => {
      const points = positionCurve.getPoints(50);

      console.log(points, "000000");

      return { points };
    }),
  setPositionCurve: (poses) =>
    set((state) => {
      const first = [-0.4671012312738144, 5.965293367938277, 9.155353854694976];
      const second = [2.168653092698698, 5.055879646594498, 8.564008176709065];
      const third = [-11.983141473589574, 5.717719015825802, 9.986156990946114];

      const forth = [-0.4671012312738144, 5.965293367938277, 9.155353854694976];
      const fifth = [17.211206016252515, 9.927127814183928, 16.7631504158383];

      const pointArray = [first, second, third, forth, fifth] as any;

      // const curve = new CatmullRomCurve3(
      //   [...pointArray, ...poses].map((x) => new Vector3().fromArray(x))
      // );
      const curve = new CatmullRomCurve3(
        pointArray.map((x: number[]) => new Vector3().fromArray(x))
      );

      state.setPoints(curve);
      return {
        positionCurve: curve,
      };
    }),
  setPosition: (pos) =>
    set(() => ({
      position: pos,
    })),
}));

export { cameraStore };
