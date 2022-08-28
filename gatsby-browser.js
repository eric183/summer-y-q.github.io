import "./src/styles/global.css";

import React from "react";
import { GlobalStyle } from "~styles";
export const wrapPageElement = ({ element, props }) => (
  <GlobalStyle {...props}>{element}</GlobalStyle>
);
