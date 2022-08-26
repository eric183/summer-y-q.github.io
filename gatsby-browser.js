import React from "react";
import { GlobalStyle } from '~styles';
// import './src/styles/global.module.css';
import './src/styles/index.module.css';
export const wrapPageElement = ({ element, props }) => <GlobalStyle {...props}>{element}</GlobalStyle>;