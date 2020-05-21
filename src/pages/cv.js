import React, { useEffect } from 'react';
import Layout from '../components/layout'
import AniBlock from '../components/ani-block'
import "@fortawesome/fontawesome-free/js/all.min.js";
import "@fortawesome/fontawesome-free/css/all.css";

import { graphql } from 'gatsby'
import TransitionLink from "gatsby-plugin-transition-link"
import { css } from "@emotion/core"

export default (props) => {

    const { resumeInfo } = props.data.site.siteMetadata; 
    console.log(resumeInfo);
	return (
		<Layout>
			<div className="scroll-content" css={css`height: 100%; width: 100%;background-color: #f1f1f1; padding: 20px`}>

                <header css={css`overflow: hidden`}>
                    <h2>{resumeInfo.name}</h2>
                    <h3>{resumeInfo.title}</h3>
                    <p>{resumeInfo.years}年经验</p>
                </header>


                {/* about me */}
                <section>
                    {resumeInfo.desc}
                </section>
                

                <section css={css`display: flex; flex-direction: column`}>
                    { 
                        resumeInfo.social.map((d, index)=> {
                            return (
                                <p key={index}> 
                                <i class={ d.icon ? d.icon : "" }></i>



                                    {/* <FontAwesomeIcon icon="coffee" /> */}
                                    { d.text } 
                                </p>
                            )
                        })
                    }    
                </section>

                <section>
                    <TitleContent title="工作经历：" />
                    

                    <ul>
                        { 
                            resumeInfo.works.map((work, index)=> (
                                <li key={index}>
                                    <p>{ work.title }</p>
                                    <p>{ work.company }</p>
                                    <p>{ work.date.begin } - { work.date.end }</p>
                                    <p>{ work.desc }</p>
                                </li>
                            )) 
                        }
                        
                    </ul>

                </section>

                <section>
                    <TitleContent title="项目："/>
                    <ul>
                        { 
                            resumeInfo.projects.map((project, index) => 
                                {   
                                    return !project.isPrivate ?  
                                        (<li key={index}>
                                            <p>{ project.name }</p>
                                            {/* <p>{ project.company }</p> */}
                                            <p>{ project.desc }</p>
                                            { 
                                                project.link ? 
                                                    <p>link: <a>{project.link}</a></p> : null
                                            }
                                        </li>) : null
                                }
                            ) 
                        }
                        
                    </ul>
                </section>

                <section>
                    <TitleContent title="技术栈" />
                        {
                            resumeInfo.technologies.map((technology, index)=> {
                                
                                return (
                                    <ul>
                                        <li>{ technology.label }</li>
                                        <li>
                                            <ul>
                                                { 
                                                    technology.children.map((child, index)=> <li>{child}</li>)      
                                                }
                                            </ul>
                                        </li>
                                    </ul>
                                )
                            })
                        }

                 
                </section>
                
                <section></section>

                <section></section>
                
				{/* <AniBlock className="lax" data-lax-translate-x="0 0, vh 1200">
					<h3>了不起哦</h3>
					<p>我是正文</p>
				</AniBlock>
				<AniBlock className="lax" data-lax-translate-x="0 0, vh 1200">
					<h3>了不起哦</h3>
					<p>我是正文</p>
				</AniBlock>
				<AniBlock className="lax" data-lax-translate-x="0 0, vh 1200">
					<h3>了不起哦</h3>
					<p>我是正文</p>
				</AniBlock> */}
				
				{/* <p className="lax" data-lax-preset="spin fadeInOut">{props.data.site.siteMetadata.about}</p>
				<h1>About me</h1>
				<p>{props.data.site.siteMetadata.about}</p> */}
			</div>

		</Layout>

	)
}




// export const query = graphql`
//   {
//     allFile {
//       edges {
//         node {
//           id
//           base
//           accessTime
//           name
//           size
//         }
//       }
//     }
//   }
// `
export const query = graphql`
  {
    site {
        siteMetadata {
          
            about
            title
            resumeInfo {
                name
                title
                desc
                years
                social {
                    text
                    link
                    icon
                }
                works {
                    company
                    desc
                    title
                    date { begin end }
                }
                projects {
                    name
                    withSkills
                    desc
                    link
                    isPrivate
                }
                technologies {
                   name
                   label
                   children
                }
            }
        }
        buildTime
    }
  }
`




const TitleContent = (props) => (
    <div className="title-content">
        <h3>{props.title}</h3>
    </div>
)
// export const query = graphql`
//   query About {
//     site {
//       siteMetadata {
//         title,
//         about
//       }
//     }
//   }
// `