/** @jsx jsx */
// import { css, jsx } from '@emotion/react'
// import { css, jsx } from '@emotion/styled';
import Styled from "@emotion/styled";

export const GlobalStyle = Styled.main`
    @font-face {
        font-family: 'happylandle';  /* Project id 2655512 */
        src: url('//at.alicdn.com/t/font_2655512_tl9zru25kj.woff2?t=1625560964019') format('woff2'),
            url('//at.alicdn.com/t/font_2655512_tl9zru25kj.woff?t=1625560964019') format('woff'),
            url('//at.alicdn.com/t/font_2655512_tl9zru25kj.ttf?t=1625560964019') format('truetype');
    }

    .happy-icon {
        margin-right: 5px;
        font-family: "happylandle" !important;
        font-size:16px;font-style:normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }
`;
