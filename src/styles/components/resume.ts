import Styled from '@emotion/styled';
const TITLE_FONT_COLOR = '#5d5d5d';
const ALERT_FONT_COLOR = '#df4533';
const BOLDER_FONT_COLOR = '#333333';
const SLIME_FONT_COLOR = '#686868';
const RED_FONT_COLOR = 'red';

export const ResumeStyle = Styled.div`
    /* width: 210mm;
    height: 297mm;    
    overflow: hidden; */
   
    .print-layout {
        padding: 40px 20px;
        box-sizing: border-box;
        /* html, body { */
            /* width: 210mm;
            height: 297mm;         */
        /* } */
    }

    /* @page { 
    
        @bottom-left { 
            content: "Department of Strategy"; 
        } 
        @bottom-right { 
            content: counter(page) " of " counter(pages); 
        }
    }

    */

    /* @page {
        size: A4;
    } */

    @media print {
        * { 
            font-size: 10px;
        }
        overflow: hidden;
       
        .summary-fragment p {
            font-size: 16px;
        }

        .block-section {
            margin: 40px 0 20px;
        }

        .block-section:nth-child(5) {
            margin-top: 220px;
        }
      

        h1 {
            font-size: 32px;
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

        .fragment-title h3 {
            font-size: 15px;
        }
          
        .fragment-title + ul {
            margin-left: 18px !important;
        } 

        header {
            font-size: 12px;
            color: ${TITLE_FONT_COLOR};

            p {
                font-size: 22px;
            }

            li {
                font-size: 12px;
            }
        }
    }

    * {
        font-family: 'Noto Sans', sans-serif;
    }

    .happy-icon {
        font-size: 18px;
        color: ${TITLE_FONT_COLOR};
    }

    p {
        white-space: pre-line;
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
            font-size: 17px;
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
        margin: 0 0 26px;
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
            color: ${RED_FONT_COLOR};
        }
    }

    .block-section {
        text-align: justify;
        margin-bottom: 50px;
    
        p {
            text-align: justify;
        }
      
    }
    
    .summary-fragment {
        font-size: 16px;
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
            /* margin-right: 100px; */
            color: ${BOLDER_FONT_COLOR};
            font-weight: 900;
            flex-shrink: 0;
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

        li {
            position: relative;
            span {
                font-weight: 600;
            }
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
            color: ${RED_FONT_COLOR};
            font-size: 15px;
        }
        
        li:after {
            position: absolute;
            content: '';
            background: ${RED_FONT_COLOR};
            width: 100%;
            height: 1px;
            left: 0;
            bottom: 0;
        }

        li:not(:first-child) {
            margin-left: 18px;
        }
    }
    h2 {
        /* font-weight: border; */
        font-weight: 900;
        font-size: 34px;
        color: ${BOLDER_FONT_COLOR};
        span {
            font-weight: bolder;
            font-size: 34px;
        }
    }
    h3 {
        font-weight: 900;
        font-size: 21px;
        color: ${BOLDER_FONT_COLOR};
        margin: 15px 0;
    }
    footer {
        text-align: center;
        font-size: 13px;
        font-weight: 900;
        color: #999;

        /* position: fixed; 
        bottom: 0; */
    }
    .side-projects {
        .work-fragment {
            margin: 0;
        }
    }

    .fragment-title + ul {
        margin-left: 20px;
    } 

     /* p { page-break-after: always; }
     .footer { position: fixed; bottom: 0px; }
    .pagenum:before { content: counter(page); } */
`