import React, {
  useState,
  useEffect,
  ChangeEvent,
  FormEvent,
  useRef,
} from "react";
import io from "socket.io-client";
import { openDB, deleteDB, wrap, unwrap, DBSchema, IDBPDatabase } from "idb";
import { Socket } from "socket.io";

// io(SOCKET_INSTANCE, {
//   transports: ['websocket'],
//   auth,
// });

interface ChatDB extends DBSchema {
  chats: {
    value: {
      message: string;
      user: {
        name: string;
      };
      date: string;
    };
    key: string;
    indexes: { "by-date": string };
  };
}

interface ChatInfo {
  message: string;
  user: {
    name: string;
  };
}

const ChatRoom: React.FC = () => {
  const [chatHistory, setChatHistory] = useState<ChatInfo[]>([]);

  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState("");
  const [user, setUser] = useState("");
  const [vector, setVector] = useState<number[]>([]);

  const [socket, setSocket] = useState<any>(null!);

  const inputRef = useRef<HTMLInputElement>(null!);
  const changeName = () => {
    const name = prompt("请输入用户名");

    if (name?.trim()) {
      setName(() => name);
      socket.emit("changeName", name);
      localStorage.setItem("name", name);
    }
  };

  useEffect(() => {
    const currentName = localStorage.getItem("name") || "";

    setName(currentName);

    const socket = io("http://localhost:3002/events", {
      transports: ["websocket"],
    });

    setSocket(socket);

    const openIDB = async () => {
      const db = await openDB<ChatDB>("history", 1, {
        upgrade(db) {
          const store = db.createObjectStore("chats", {
            keyPath: "id",
            autoIncrement: true,
          });

          store.createIndex("by-date", "date");
        },
      });
      // createDB(db);
      const history = await db.getAll("chats");
      setChatHistory(history);
    };

    openIDB();

    return () => {
      socket.disconnect();

      setSocket(null);
    };
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.on("recievejoinRoom", (info: any) => {
      console.log(info);
      if (info.newOne) {
        document.cookie = "";

        document.cookie = "access_token=" + info.access_token;

        changeName();
      }
    });

    socket.on(
      "broadcastMessage",
      ({ user, message }: { user: any; message: string }) => {
        addMessage(message, user);
        setChatHistory((prevMessages: any) => [
          ...prevMessages,
          {
            user,
            message,
          },
        ]);
      }
    );

    socket.on("newUser", (newUser: string) => {
      setUser(newUser);
    });

    socket.on("updateVector", (newVector: number[]) => {
      setVector(newVector);
    });

    socket.emit("joinRoom", document.cookie);
  }, [socket]);

  const addMessage = async (message: string, user?: { name: string }) => {
    console.log(message);

    const messageInfo = {
      date: `${Date.now()}`,
      message,
      user: {
        name: user ? user.name : name,
      },
    };

    const db = await openDB<ChatDB>("history", 1);

    const store = db.transaction("chats", "readwrite").objectStore("chats");

    await store.put(messageInfo);

    setChatHistory([...chatHistory, messageInfo]);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = inputRef.current.value;
    socket.emit("message", message);

    addMessage(message);

    inputRef.current.value = "";
  };

  return (
    <div className="w-full flex flex-col justify-between h-full shadow-lg rounded-lg modal-bg text-white">
      <div className="overflow-y-auto max-h-screen-75 px-4 py-6 ios-scroll">
        <h2 className="text-lg font-semibold mb-4">Chat Room: {name}</h2>
        <ul className="divide-y divide-gray-300">
          {chatHistory.map((his, index) => (
            <li key={index} className="text-sm py-2">
              {his.message} - {his?.user?.name}
            </li>
          ))}
        </ul>
      </div>
      <form className="flex flex-row items-center" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your message here..."
          className="w-full rounded-full py-3 px-4 bg-gray-200 text-gray-800 placeholder-gray-500 text-sm"
          ref={inputRef}
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              handleSubmit(event as unknown as FormEvent<HTMLFormElement>);
            }
          }}
        />
      </form>
    </div>
  );
};

export default ChatRoom;
