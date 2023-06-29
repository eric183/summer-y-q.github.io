"use client";

import { $getRoot, $getSelection } from "lexical";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import TreeViewPlugin from "./plugins/TreeViewPlugin";

// import EmoticonPlugin from "./plugins/EmoticonPlugin";

import AutoFocus from "./plugins/AutoFocus";
import { PhotoIcon } from "@heroicons/react/20/solid";
import ToolBar from "./Toobar";

const exampleTheme = {
  ltr: "ltr",
  rtl: "rtl",
  placeholder: "editor-placeholder",
  paragraph: "editor-paragraph",
};

const editorConfig = {
  theme: exampleTheme,
  onError(error: any) {
    throw error;
  },
  // nodes: [EmojiNode],
};

const onChange = (editorState: { read: (arg0: () => void) => void }) => {
  editorState.read(() => {
    // Read the contents of the EditorState here.
    const root = $getRoot();
    const selection = $getSelection();

    console.log(root, selection);
  });
};

const Editor = () => {
  return (
    <div className="w-10/12 h-5/6 border border-gray-400 rounded-lg mx-auto mt-14 relative flex flex-col">
      
      <div className="w-full flex-1">
        <LexicalComposer initialConfig={editorConfig as any}>
          <ToolBar />
          <div className="h-full relative">
            <PlainTextPlugin
              contentEditable={
                <ContentEditable className="editor-input h-full py-3 px-5" />
              }
              placeholder={<Placeholder />}
              ErrorBoundary={LexicalErrorBoundary}
            />
            <OnChangePlugin onChange={onChange} />
            {/* <HistoryPlugin /> */}
            {/* <TreeViewPlugin /> */}
            {/* <EmoticonPlugin /> */}
            <AutoFocus />
          </div>
        </LexicalComposer>
      </div>
    </div>
  );
};

function Placeholder() {
  return (
    <div className="editor-placeholder absolute top-3 left-6">
      Enter some plain text...
    </div>
  );
}

export default Editor;

// cloudinary.config({
//   cloud_name: 'dlwdoffsv',
//   api_key: '464591758518319',
//   api_secret: 'zlWBrLH6s0REP-hK15oHMOcCunw'
// });
// cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" },
//   function(error, result) {console.log(result); });
