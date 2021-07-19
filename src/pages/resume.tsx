import React, { FC, useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { ResumeStyle } from '~/styles';
import { css } from '@emotion/react';
import Scrollbar from '~components/scrollbar';
import LoadingLayout from '~components/loading';
import { graphql } from 'gatsby';
import Kuangzhichen from '../../static/kuangzhichen.pdf';
// import  GatsbyTypes from '@LocalType';

interface SiteType {
    data: GatsbyTypes.ResumeDataQuery
}

const Sample: FC<SiteType> = ({ data }) => {
    const [loading, setLoading] = useState(true);
    const [showShit, setShowShit] = useState(false);
    // props.data.site.siteMetadata.title


    if(!data?.site?.siteMetadata?.resumeInfo) throw new Error('no this type');

    const { experience, social, skill, name, title = '', years, desc, sideProjects } = data.site.siteMetadata.resumeInfo; 
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
                        <h1 onClick={()=> {
                            window.open(Kuangzhichen);
                        }}>{name}</h1>
                        <p>{title.replace('、', ' / ')}</p>
                        {/* <a href='/前端工程师-匡志宸.pdf'></a> */}
                        {/* <p>xxx</p> */}
                        {/* clear-anchor-style */}
                        {/* <ul className='flex-row flex-justify-around'> */}
                        <ul className='flex-row flex-justify-between'>
                            {
                                social?.map((item, index) => (
                                    <li key={index} className='flex-row flex-lt-center'>
                                        <i className='happy-icon icon-mobile-phone'>{item?.icon}</i>
                                        {/* <i className='happy-icon'>{item.icon}</i> */}
                                        { 
                                            item?.link ? 
                                            <a href={item?.link} target='_blank' rel="noreferrer">{item?.text}</a>
                                             : item?.text
                                        }
                                      
                                    </li>
                                ))
                            }
                        </ul>
                    </header>
                    <section className='block-section'>
                        <h2><span>{'Summary'.slice(0, 3)}</span>{'Summary'.slice(3)}</h2>
                        <div className='summary-fragment'>
                            <p>{desc}</p>
                            {/* <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p> */}
                        </div>

                    </section>

                    <section className='block-section'>
                        <h2><span>{'Skill'.slice(0, 3)}</span>{'Skill'.slice(3)}</h2>
                        <div className='skill-fragment'>
                            <ul>
                                {
                                    skill?.map((item, index) => (
                                        <li className='flex-row flex-align-center' key={index}>
                                            <h4>{item?.name}</h4>
                                            <ul className='flex-row skill-item'>
                                               {
                                                   item?.children?.map((x, xIndex) => (
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
                            (showShit ? experience : experience?.filter((item)=> !item?.isShit))?.map((item, index) => (
                                <div className='work-fragment' key={index}>
                                    <div className='fragment-title flex-row flex-justify-between'>
                                        <h3>{item?.company}</h3>
                                        <h3>{item?.title}</h3>
                                        <h3>{item?.from} - {item?.to}</h3>
                                    </div>
                                    <ul>
                                        {
                                            item?.children?.map((child, childIndex) => (
                                                <li key={childIndex}>
                                                    <span>{child?.name}</span>
                                                    <p>{child?.desc}</p>
                                                    <ul className="flex-row work-skill">
                                                        {
                                                            child?.withSkills?.map((skill, skillIndex) => (
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
                    <section className='block-section side-projects'>
                        <h2><span>{'Side Projects'.slice(0, 3)}</span>{'Side Projects'.slice(3)}</h2>
                        {/* <h2><span>{'Work Experience'.slice(0, 3)}</span>{'Work Experience'.slice(3)}</h2> */}
                            
                        {
                            sideProjects?.map((item, index) => (
                                <div className='work-fragment' key={index}>
                                    {/* <div className='fragment-title flex-row flex-justify-between'>
                                        <h3>{item?.company}</h3>
                                        <h3>{item?.title}</h3>
                                        <h3>{item?.from} - {item?.to}</h3>
                                    </div> */}
                                    <ul>
                                        {
                                            // item?.children?.map((child, childIndex) => (
                                                <li key={index}>
                                                    <span>{item?.name}</span>
                                                    <p>{item?.desc}</p>
                                                    <ul className="flex-row work-skill">
                                                        {
                                                            item?.withSkills?.map((skill, skillIndex) => (
                                                                <li key={skillIndex}>{skill}</li>
                                                            ))
                                                        }
                                                    </ul>
                                                </li>
                                            // ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </section>
                </article>


                <footer>THANK YOU VERY MUCH FOR TAKING THE TIME TO READ MY RESUME</footer>
            </ResumeStyle>
        </Scrollbar>
    )
}


export const query = graphql`
    query ResumeData {
  site {
    siteMetadata {
      about
      author
      desc
      description
      fontFamily
      resumeInfo {
        desc
        name
        title
        years
        social {
          icon
          text
          link
        }
        experience {
          addr
          children {
            desc
            isPrivate
            name
            role
            withSkills
          }
          company
          from
          title
          to
          isShit
        }
        sideProjects {
            desc
            isPrivate
            name
            role
            withSkills
        }
        skill {
          children
          label
          name
        }
      }
      title
    }
  }
}
`
export default Sample;
