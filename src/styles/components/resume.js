import Styled from '@emotion/styled';
const TITLE_FONT_COLOR = '#5d5d5d';
const ALERT_FONT_COLOR = '#df4533';
const BOLDER_FONT_COLOR = '#333333';
const SLIME_FONT_COLOR = '#686868';

export const ResumeStyle = Styled.div`
    .print-layout {
        padding: 40px 20px;
    }

    @media print {
        * { 
            /* font-size: 12pt; */
        }
        
        h2 {
            /* font-weight: border; */
            font-weight: bolder;
            font-size: 28px;
            span {
                font-weight: bolder;
                font-size: 28px;
            }           
        }

        header {
            font-size: 12px;
            color: ${TITLE_FONT_COLOR};
            
            li {
                font-size: 12px;
            }
        }
    }

    * {
        font-family: 'Noto Sans', sans-serif;
    }

    .happy-icon {
        font-size: 22px;
        color: ${TITLE_FONT_COLOR};
    }

/*   
    overflow: auto;
    height: 100vh; */   
    header {
        width: 100%;
        text-align: center;
        h1 {
            margin: 0;
            color: ${TITLE_FONT_COLOR};
        }
        & > p {
            margin: 10px;
            color: ${ALERT_FONT_COLOR};        
        }
        ul {
            width: 100%;
            margin: 0;
            padding: 0;
        }
        li {
            list-style: none;   
            /* width: 25%; */
            font-size: 12px;
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
        margin: 0 0 20px;
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
        text-align:justify;
        margin-bottom: 50px;
        /* p { */
        /* } */
    }
    
    .summary-fragment {
        font-size: 15px;
    }

    .skill-fragment {
        * {
            margin: 0;
            padding: 0;
        }
        ul {
            /* margin: 0;
            padding: 0; */
            list-style: none;
            ul {
                li {
                    transform: scale(0.9);
                }
            }
        }
        li {
            color: ${SLIME_FONT_COLOR};
            font-weight: 100;
        }
        h4 {
            width: 20%;
            margin-right: 100px;
            color: ${BOLDER_FONT_COLOR};
            font-weight: 900;
            /* margin: 0;
            padding: 0; */
        }
    }

    .work-fragment {
        margin-bottom: 60px;
        p {
            margin: 5px 0;
            font-size: 15px;
            color: ${SLIME_FONT_COLOR};
        }
    }

    .skill-item {
        li {
            margin-left: 10px;
        }
    }

    .work-skill {
        margin: 0;
        padding: 0;
        list-style: none;
        li {
            margin: 0;
            color: red;
        }
        li:not(:first-child) {
            margin-left: 18px;
        }
    }
    h2 {
        /* font-weight: border; */
        font-weight: 900;
        font-size: 30px;
        color: ${BOLDER_FONT_COLOR};
        span {
            font-weight: bolder;
            font-size: 30px;
        }
    }
    h3 {
        font-weight: 500;
        font-size: 25px;
        color: ${BOLDER_FONT_COLOR};
        margin: 15px 0;
    }
`