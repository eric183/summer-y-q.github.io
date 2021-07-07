import Styled from '@emotion/styled';

export const ResumeStyle = Styled.div`

    @media print {
        * { 
            font-size: 12pt;
            /* transform: scale(1); */
        }
    }
    * {
        font-family: 'Noto Sans', sans-serif;
    }
/*   
    overflow: auto;
    height: 100vh; */
    header {
        width: 100%;
        text-align: center;
        ul {
            width: 100%;
            margin: 0;
            padding: 0;
        }
        li {
            list-style: none;   
            a {
                color: #000;
                text-decoration: none;
                outline: none;
                transition: color 0.3s;
                cursor: pointer;
            }
        }
    }
    h2 {
        position: relative;
        &::after {
            position: absolute;
            content: '';
            height: 2px;
            width: 60%;
            background: #e9e9e9;
            top: 50%;
            transform: translate(15px);
        }
        span {
            color: red;
        }
    }

    .block-section {
        padding: 0 40px;
    }
`