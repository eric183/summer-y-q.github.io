import React from 'react';
import Layout from '../components/layout'
// import "@fortawesome/fontawesome-free/js/all.min.js";
// import "@fortawesome/fontawesome-free/css/all.css";

import { graphql } from 'gatsby'

const ResumeLayout = (props) => {

    // const { resumeInfo } = props.data.site.siteMetadata; 
    const { experience, social, skill, name, title, years, desc } = props.data.site.siteMetadata.resumeInfo; 
	return (
		<Layout>
            <div className="scroll-content" >
                <header>
                    <h2>{ name }</h2>
                    <h3>{ title }</h3>
                    <p>{ years }年经验</p>
                </header>


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

		</Layout>

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