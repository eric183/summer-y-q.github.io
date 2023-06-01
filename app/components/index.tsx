import styled from "@emotion/styled";
import { Point } from "@react-three/drei";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRef } from "react";
import { usePosts } from "../controllers/posts";
const CoinApp = dynamic(() => import("../components/canvas"), { ssr: false });
const IndexLayout = styled.div`
  section {
    width: 50%;
    height: 100%;
  }
`;

let nextId = 0;
let todos = [{ id: nextId++, text: "Todo #1" }];
let listeners: any[] = [];
const todosStore = {
  addTodo() {
    todos = [...todos, { id: nextId++, text: "Todo #" + nextId }];
    emitChange();
  },
  subscribe(listener: any) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return todos;
  },
};

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

export default function Home() {
  // useQuery("https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list");
  // const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
  const containerRef = useRef<any>();
  // const todos = useSyncExternalStore(
  //   todosStore.subscribe,
  //   todosStore.getSnapshot,
  //   todosStore.getSnapshot
  // );
  const { data, isFetched } = usePosts();
  // const query = useQuery({ queryKey: ["todos"], queryFn: fetchPosts });

  // console.log(query);

  return (
    <IndexLayout
      className="content-container w-[100vw] h-[100vh] flex flex-col relative"
      ref={containerRef}
    >
      <div>
        <button onClick={() => todosStore.addTodo()}>Add todo</button>
        <hr />
        <ul>
          {todos?.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </div>
      <Link href={"/🖥"}>🖥</Link>
      <Link href={"/🧳"}>🧳</Link>
      <Link href={"/me"}>me</Link>
    </IndexLayout>
  );
}

// 用于创建字符串列表映射至 `K: V` 的函数
function strEnum<T extends string>(o: Array<T>): { [K in T]: K } {
  return o.reduce((res, key) => {
    res[key] = key;
    return res;
  }, Object.create(null));
}

// 创建一个泛型类
class Queue<T> {
  private data: T[] = [];
  push = (item: T) => this.data.push(item);
  pop = (): T | undefined => this.data.shift();
}

// 简单的使用
const queue = new Queue<number | string>();
queue.push(0);
queue.push("1"); // Erro

// function longest<Type extends { length: number }>(a: Type, b: Type) {
//   if (a.length >= b.length) {
//     return a;
//   } else {
//     return b;
//   }
// }
// // longerArray is of type 'number[]'
// const longerArray = longest([1, 2], [1, 2, 3]);
// // longerString is of type 'alice' | 'bob'
// const longerString = longest("alice", "bob");
// // Error! Numbers don't have a 'length' property
// const notOK = longest(10, 100);
// // 创建 K: V
// const Direction = strEnum(["North", "South", "East", "West"]);

// // 创建一个类型
// type Direction = keyof typeof Direction;

// // 简单的使用
// let sample: Direction;

// sample = Direction.North; // Okay
// sample = "North"; // Okay
// sample = "AnythingElse"; // ERROR!
interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
}

type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;

interface Email {
  message: string;
}

interface Dog {
  bark(): void;
}

type EmailMessageContents = MessageOf<Email>;

type EmailMessageContents = string;

type DogMessageContents = MessageOf<Dog>;

type Exclude<T, U> = T extends U ? never : T;

type T = Exclude<"a" | "b" | "c", "a">;
// T 的类型为 "b" | "c"
// 其实应该是 never | "b" | "c"，但 never 无意义，被丢掉了
type Point = { x: number; y: number };
type P = keyof Point;

const m: P = "x";

const ButtonStyle = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
} as const;
