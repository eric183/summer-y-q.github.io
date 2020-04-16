import './src/styles/global.css'
// import Scrollbar from 'smooth-scrollbar';

import { globalHistory } from '@reach/router'

export default () => {
    // Scrollbar.init(document.body);
    console.log(globalHistory.location.pathname);
//     css={css`
//     display: inline-block; 
//     font-family: ${fontFamily}; 
//     margin: 0; 
//     color: ${ globalHistory.location.pathname == "/projects" ? '#fff' : '#000'};
// `}
}