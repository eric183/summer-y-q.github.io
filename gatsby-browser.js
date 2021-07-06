import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import { GlobalStyle } from '~styles';

// const renderMethod = !!module.hot ? ReactDOM.render : ReactDOM.hydrate;

// import './src/styles/global.css'
// import Scrollbar from 'smooth-scrollbar';

// import { globalHistory } from '@reach/router'


// const hideScroll = (_boolean) => {
//     document.documentElement.style.overflow = _boolean ? "visible" : "visible";
//     // document.body.style.overflow = _boolean ? "hidden" : "scroll";

// }

// window.onbeforeprint = (evt) => {
//     hideScroll(false)
// } 

// window.onafterprint = (evt) => {
//     hideScroll(false)
// } 
// // export default () => {
//     // Scrollbar.init(document.body);
//     console.log(globalHistory.location.pathname);
//     debugger;
// //     css={css`
// //     display: inline-block; 
// //     font-family: ${fontFamily}; 
// //     margin: 0; 
// //     color: ${ globalHistory.location.pathname == "/projects" ? '#fff' : '#000'};
// // `}
// }

// console.log(renderMethod);
export const wrapPageElement = ({ element, props }) => <GlobalStyle {...props}>{element}</GlobalStyle>;