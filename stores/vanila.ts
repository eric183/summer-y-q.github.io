import { useStore } from "zustand";
import { createStore } from "zustand/vanilla";

// version_1
interface BearState {
  bears: number;
  increase: (by: number) => void;
}

const bearStore = createStore<BearState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
}));

function useBearStore(): BearState;
function useBearStore<T>(
  selector: (state: BearState) => T,
  equals?: (a: T, b: T) => boolean
): T;
function useBearStore<T>(
  selector?: (state: BearState) => T,
  equals?: (a: T, b: T) => boolean
) {
  return useStore(bearStore, selector!, equals);
}

// version_2
// import { useStore, StoreApi } from "zustand";
// import { createStore } from "zustand/vanilla";

// interface BearState {
//   bears: number;
//   increase: (by: number) => void;
// }

// const bearStore = createStore<BearState>()((set) => ({
//   bears: 0,
//   increase: (by) => set((state) => ({ bears: state.bears + by })),
// }));

// const createBoundedUseStore = ((store) => (selector, equals) =>
//   useStore(store, selector as any, equals)) as <S extends StoreApi<unknown>>(
//   store: S
// ) => {
//   (): ExtractState<S>;
//   <T>(
//     selector?: (state: ExtractState<S>) => T,
//     equals?: (a: T, b: T) => boolean
//   ): T;
// };

// type ExtractState<S> = S extends { get: () => infer X } ? X : never;

// const useBearStore = createBoundedUseStore(bearStore);
