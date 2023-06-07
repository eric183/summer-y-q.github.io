import React, { useState } from "react";
import { Document, Page } from "react-pdf";

const PdfViewer = ({ file }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <button onClick={() => setPageNumber(pageNumber - 1)}>Prev</button>
      <button onClick={() => setPageNumber(pageNumber + 1)}>Next</button>
    </div>
  );
};

export default PdfViewer;
