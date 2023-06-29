import { PhotoIcon } from "@heroicons/react/20/solid";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import React, { useEffect } from "react";

const ToolBar = () => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    console.log(editor);
  }, [editor]);
  return (
    <div className="w-full border-b-2 border-gray-400 py-4 px-2">
      <ul>
        <li>
          <input type="file" id="imageUploader" className="hidden" />
          <label htmlFor="imageUploader">
            <PhotoIcon width={20} className="text-gray-500" />
          </label>
        </li>
      </ul>
    </div>
  );
};

export default ToolBar;
