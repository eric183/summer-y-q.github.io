/** @jsx jsx */
// import { css, jsx } from '@emotion/react'
// import { css, jsx } from '@emotion/styled';
import Styled from '@emotion/styled';

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

    .tl-edges {
        overflow: hidden;
    }
     
    .article-title {
        transition: all .2s;
    }

    .article-title:hover {
        /* width: 100%; */
        transform: scale(1.1);
        /* transform: rotate(15deg); */
    }

    .hide {
        display: none;
    }

    .relative {
        position: relative !important;
    }

    .absolute {
        position: absolute !important;
    }

    .flex-row {
        display: flex;
        flex-direction: row;
    }

    .flex-col {
        display: flex;
        flex-direction: column;
    }

    .flex-shrink-0 {
        flex-shrink: 0;
    }

    .flex-justify-around {
        justify-content: space-around;
    }

    .flex-justify-between {
        justify-content: space-between;
    }

    .flex-lt-center {
        justify-content: center;
        align-items: center;
    }

    .flex-align-baseline {
        align-items: baseline;
    }

    .flex-align-start {
        align-items: flex-start;
    }

    .flex-align-end {
        align-items: flex-end;
    }

    .flex-justify-center {
        justify-content: center;
    }

    .flex-align-center {
        align-items: center;
    }

    .flex-justify-end {
        justify-content: flex-end;
    }

    .flex-size-1 {
        flex: 1;
    }

    .flex-wrap {
        flex-wrap: wrap;
    }

    .flex-wrap-reverse {
        flex-wrap: wrap-reverse;
    }

    .flex-nowrap {
        flex-wrap: nowrap;
    }

    .text-center {
        text-align: center !important;
    }

    .text-left {
        text-align: left !important;
    }

    .text-right {
        text-align: right !important;
    }

    .text-flow {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .anchor-style {
        color: #1890ff;
        text-decoration: none;
        background-color: transparent;
        outline: none;
        cursor: pointer;
        transition: color 0.3s;
    }

    .clear-anchor-style {
        color: #000;
        text-decoration: none;
        outline: none;
        transition: color 0.3s;
    }
`

