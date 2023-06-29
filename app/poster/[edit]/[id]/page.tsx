import React from "react";
import PosterContainer from "~components/posterContainer";
import RichEditor from "../../editor";
import "../../index.css";

const page = ({ params }: any) => {
  console.log(params, ".dsa.f.as");
  return (
    <PosterContainer>
      <RichEditor></RichEditor>
    </PosterContainer>
  );
};

export default page;
