import './src/styles/index.module.css';

import React from "react";
import { GlobalStyle } from '~styles';
export const wrapPageElement = ({ element, props }) => <GlobalStyle {...props}>{element}</GlobalStyle>;