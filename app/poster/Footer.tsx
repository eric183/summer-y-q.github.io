"use client";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $generateHtmlFromNodes } from "@lexical/html";
import Example from "./Menu";
import { useEffect, useState } from "react";
import ThemeSwitcher from "~components/themeSwitcher";
import { prismaClient } from "../../prisma/client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const ArticleSubmiter = () => {
  const { data } = useSession();
  const [editor] = useLexicalComposerContext();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<any>({
    title: "",
    htmlString: "",
    htmlJSON: "",
  });
  const router = useRouter();
  useEffect(() => {
    return;
    editor.update(() => {
      const savedJSON = localStorage.getItem("saveEditorJSON");
      const editorState = editor.parseEditorState(
        JSON.parse(savedJSON!).htmlJSON
      );
      editor.setEditorState(editorState);

      setForm(JSON.parse(savedJSON!));
    });
  }, [editor]);

  const submitHandler = async () => {
    setSubmitting(true);
    if (!form.title) {
      alert("Please enter a title");
      return;
    }
    const editorState = editor.getEditorState();

    editor.update(async () => {
      const htmlString = $generateHtmlFromNodes(editor, null);

      const formJSON = {
        ...form,
        htmlString,
        htmlJSON: editorState.toJSON(),
      };

      localStorage.setItem("saveEditorJSON", JSON.stringify(formJSON));

      setForm(formJSON);

      ("use client");
      await fetch("/api/article", {
        method: "POST",
        body: JSON.stringify({
          ...formJSON,
          ...data!.user,
        }),
      });
      setSubmitting(false);
      router.replace("/blog");
    });
  };

  return (
    <>
      <ThemeSwitcher className="mt-5 w-8 self-end" />
      <div className="flex items-center mt-5 justify-between">
        <div className="w-96">
          <label
            htmlFor="default-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Title
          </label>
          <input
            type="text"
            id="default-input"
            value={form.title}
            onChange={(e) => {
              setForm({
                ...form,
                title: e.target.value,
              });
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <Example />
      </div>

      <button
        type="button"
        onClick={submitHandler}
        className="self-end w-60 mt-10 text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-2xl text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      >
        {submitting && (
          <svg
            aria-hidden="true"
            role="status"
            className="inline w-4 h-4 mr-3 text-white animate-spin"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>
        )}
        Submit
      </button>
    </>
  );
};

export default ArticleSubmiter;
