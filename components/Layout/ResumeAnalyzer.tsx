import React, { useState } from "react";
import { useQuery } from "react-query";

import PdfViewer from "./PdfViewer";
import Markdown from "./Markdown";

const ResumeAnalyzer = ({ file }) => {
  const [pdfContent, setPdfContent] = useState("");

  // 使用 react-query 调用 GPT API
  const { data: analysisResult, isLoading } = useQuery(
    "resumeAnalysis",
    async () => {
      const response = await fetch("GPT_API_URL", {
        text: pdfContent,
        model: "models/xxxxxx", // 指定 GPT 模型
      });
      return response.data;
    }
  );

  const onDocumentLoadSuccess = async ({ numPages }) => {
    let content = "";
    for (let i = 1; i <= numPages; i++) {
      const page = await file.getPage(i);
      const textContent = await page.getTextContent();
      content += textContent.items.map((item) => item.str + "\n").join("");
    }
    setPdfContent(content);
  };

  return (
    <div>
      <PdfViewer file={file} onLoadSuccess={onDocumentLoadSuccess} />
      <button disabled={isLoading} onClick={() => refetch()}>
        Analyze
      </button>
      {analysisResult && <Markdown content={analysisResult} />}
    </div>
  );
};

export default ResumeAnalyzer;
