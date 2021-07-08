import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { ResumeStyle } from '~styles';
import { css } from '@emotion/react';
import Scrollbar from '~components/scrollbar';
import LoadingLayout from '~components/loading';
import html2pdf from 'html2pdf.js'
import { graphql } from 'gatsby'

const Sample = (props) => {
    const [loading, setLoading] = useState(true);

    const { experience, social, skill, name, title, years, desc } = props.data.site.siteMetadata.resumeInfo; 

    useEffect(() => {
        setLoading(false);

    }, []);
    // const test = 'Work Experience';
    const test = 'Test NoBusyDoingThings';
    return (
        <Scrollbar>
            <ResumeStyle>
                <Helmet>
                    <link href="https://fonts.font.im/css?family=Noto+Sans" rel="stylesheet" />
                </Helmet>
                <LoadingLayout loading={loading} />
                <article className='print-layout'>
                    <header>
                        <h1>{name}</h1>
                        <p>{title}</p>
                        {/* <p>xxx</p> */}
                        {/* clear-anchor-style */}
                        {/* <ul className='flex-row flex-justify-around'> */}
                        <ul className='flex-row flex-justify-between'>
                            {
                                social.map((item, index) => (
                                    <li key={index} className='flex-row flex-lt-center'>
                                        <i className='happy-icon icon-mobile-phone'>{item.icon}</i>
                                        {/* <i className='happy-icon'>{item.icon}</i> */}
                                        { 
                                            item.link ? 
                                            <a href={item.link} target='_blank'>{item.text}</a>
                                             : item.text
                                        }
                                      
                                    </li>
                                ))
                            }
                        </ul>
                    </header>
                    <section className='block-section'>
                        <h2><span>{'Summary'.slice(0, 3)}</span>{'Summary'.slice(3)}</h2>
                        <div className='summary-fragment'>
                            {/* <p>{desc}</p> */}
                            <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                        </div>

                    </section>

                    <section className='block-section'>
                        <h2><span>{'Skill'.slice(0, 3)}</span>{'Skill'.slice(3)}</h2>
                        <div className='skill-fragment'>
                            <ul>
                                {
                                    skill.map((item, index) => (
                                        <li className='flex-row flex-align-center' key={index}>
                                            <h4>{item.name}</h4>
                                            <ul className='flex-row skill-item'>
                                               {
                                                   item.children.map((x, xIndex) => (
                                                       <li key={xIndex}>
                                                           <span>{x}</span>
                                                        </li>
                                                   ))
                                               }
                                            </ul>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                    </section>
                    <section className='block-section'>
                        <h2><span>{'Work Experience'.slice(0, 3)}</span>{'Work Experience'.slice(3)}</h2>
                        {/* <h2><span>{'Work Experience'.slice(0, 3)}</span>{'Work Experience'.slice(3)}</h2> */}
                            
                        {
                            experience.map((item, index) => (
                                <div className='work-fragment' key={index}>
                                    <div className='fragment-title flex-row flex-justify-between'>
                                        <h3>{item.company}</h3>
                                        <h3>{item.title}</h3>
                                        <h3>{item.from} - {item.to}</h3>
                                    </div>
                                    <ul>
                                        {
                                            item.children.map((child, childIndex)=> (
                                                <li key={childIndex}>
                                                    [{child.name}]
                                                    <p>{child.desc}</p>
                                                    <ul className="flex-row work-skill">
                                                        {
                                                            child.withSkills.map((skill, skillIndex) => (
                                                                <li key={skillIndex}>{skill}</li>
                                                            ))
                                                        }
                                                    </ul>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </section>
                </article>
            </ResumeStyle>
        </Scrollbar>
    )
}


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
export default Sample;
