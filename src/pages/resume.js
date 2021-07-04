import React, { useEffect } from 'react';
import Layout from '../components/layout'
// import "@fortawesome/fontawesome-free/js/all.min.js";
// import "@fortawesome/fontawesome-free/css/all.css";
import { jsx, css } from '@emotion/react'

import { graphql } from 'gatsby'
// import html2pdf from 'html2pdf.js'

const InjectCss = css`
    &,.scroll-content {
        h1, h2, h3, h4, h5, h6 {
            margin: 0;
        }
    }
    @media print {
        // 隱藏不要被列印的元素
        .NotPrint {
           display:none;
        }
        // 要被列印的元素
        .PrintUnit {
           // 元素前要被分頁
           page-break-before:always;
           // 元素本身不能被分頁
           page-break-inside:avoid;
           }
    }
    
    @page{
        size: A4 portrait;  //a4尺寸 直式
        margin: 1cm;  //邊距1公分
        orphans:4;   //頁面最後一段段落行數，預設值為2
        widows:2;  //頁面第一段段落行數，預設值為2
    }   
`


const ResumeLayout = (props) => {

    // const { resumeInfo } = props.data.site.siteMetadata; 
    const { experience, social, skill, name, title, years, desc } = props.data.site.siteMetadata.resumeInfo; 
    useEffect(() => {
        // html2pdf(document.querySelector('.scroll-content'));
    }, []);
	return (
		// <Layout>
            <div className="scroll-content" css={InjectCss}>
                {/* <header>
                    <h2>{ name }</h2>
                    <h3>{ title }</h3>
                    <p>{ years }年经</p>
                </header> */}


                {/* about me */}
                {/* <section>
                    <TitleContent title="Summary" />
                    { desc }
                </section> */}
                

                {/* <section>
                    { 
                        resumeInfo.social.map((d, index)=> {
                            return (
                                <p key={index}> 
                                    <i className={ d.icon ? d.icon : "" }></i>
                                    { d.text } 
                                </p>
                            )
                        })
                    }    
                </section> */}

                <section>
                    <TitleContent title="Work Experience" />
                    

                    <ul className=''>
                        { 
                            experience.map((work, index)=> (
                                <li key={index}>
                                    <p>{ work.title }</p>
                                    <p>{ work.company }</p>
                                    <p>{ work.from } - { work.to }</p>
                                    <p>{ work.desc }</p>
                                </li>
                            )) 
                        }
                        
                    </ul>

                </section>

                <section>
                    <TitleContent title="Skill" />
                        {
                            skill.map((technology, index)=> {
                                
                                return (
                                    <ul key={index}>
                                        <li>{ technology.label }</li>
                                        <li>
                                            <ul>
                                                { 
                                                    technology.children.map((child, index)=> <li key={index}>{child}</li>)      
                                                }
                                            </ul>
                                        </li>
                                    </ul>
                                )
                            })
                        }
                </section>
			</div>

		// </Layout>

	)
}

const TitleContent = (props) => (
    <div className="title-content">
        <h3>{props.title}</h3>
    </div>  
)


export const query = graphql`
  {
    site {
      siteMetadata {
        resumeInfo {
          desc
          name
          title
          years
          experience {
            addr
            children {
              desc
              isPrivate
              role
              name
              withSkills
            }
            company
            from
            title
            to
          }
          skill {
            children
            label
            name
          }
          social {
            icon
            link
            text
          }
        }
        about
        author
        desc
        description
        fontFamily
        title
      }
    }
  }
`

export default ResumeLayout;