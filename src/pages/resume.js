import React from 'react';
import Layout from '../components/layout'
// import "@fortawesome/fontawesome-free/js/all.min.js";
// import "@fortawesome/fontawesome-free/css/all.css";

import { graphql } from 'gatsby'





const TitleContent = (props) => (
    <div className="title-content">
        <h3>{props.title}</h3>
    </div>
)

const Resume = (props) => {

    const { resumeInfo } = props.data.site.siteMetadata; 
    // console.log(resumeInfo);
	return (
		<Layout>
			<div className="scroll-content" >
                <header>
                    <h2>{ resumeInfo.name }</h2>
                    <h3>{ resumeInfo.title }</h3>
                    <p>{ resumeInfo.years }年经验</p>
                </header>


                {/* about me */}
                <section>
                    <TitleContent title="Summary" />
                    { resumeInfo.desc }
                </section>
                

                <section>
                    { 
                        resumeInfo.social.map((d, index)=> {
                            return (
                                <p key={index}> 
                                    <i className={ d.icon ? d.icon : "" }></i>



                                    {/* <FontAwesomeIcon icon="coffee" /> */}
                                    { d.text } 
                                </p>
                            )
                        })
                    }    
                </section>

                <section>
                    <TitleContent title="Experiences" />
                    

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
                    <TitleContent title="Projects"/>
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
                                                    <p>link: <a href="avoid(undefined)">{project.link}</a></p> : null
                                            }
                                        </li>) : null
                                }
                            ) 
                        }
                        
                    </ul>
                </section>

                <section>
                    <TitleContent title="Skills" />
                        {
                            resumeInfo.skills.map((technology, index)=> {
                                
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
                skills {
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

export default Resume;