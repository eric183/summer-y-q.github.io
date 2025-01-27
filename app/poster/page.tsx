import React from "react";
import PosterContainer from "~components/posterContainer";
import RichEditor from "./editor";
import "./index.css";

const page = async ({ params }: any) => {
  return (
    <PosterContainer>
      <RichEditor></RichEditor>
    </PosterContainer>
  );
};

export default page;
