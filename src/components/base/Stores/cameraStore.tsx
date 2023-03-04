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
      const pointArray = [
        [1, 1, 1],
        [1, 2, 3],
        [2, 4, 6],
        [6, 2, 4],
      ] as any;

      const curve = new CatmullRomCurve3(
        [...pointArray, ...poses].map((x) => new Vector3().fromArray(x))
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
