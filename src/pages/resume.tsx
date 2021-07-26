import React, { FC, useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { css } from '@emotion/react';
import { ResumeStyle } from '~/styles';
import Scrollbar from '~components/scrollbar';
import LoadingLayout from '~components/loading';
import Kuangzhichen from '../../static/kuangzhichen.pdf';
// import  GatsbyTypes from '@LocalType';

interface SiteType {
    data: GatsbyTypes.ResumeDataQuery
}

enum translateIndex {
    ch = 0,
    en = 1,
}

const Sample: FC<SiteType> = ({ data }) => {
    const [loading, setLoading] = useState(true);
    const [showShit, setShowShit] = useState(false);
    // const [isTA, setTA] = useState<boolean>(false);
    const [isTA, setTA] = useState<boolean>(false);
    const [translateLang, setTran] = useState<'ch' | 'en'>(() => 'en');
    // props.data.site.siteMetadata.title


    if (!data?.site?.siteMetadata?.resumeInfo) throw new Error('no this type');

    const { experience, social, skill, name, title, years, desc, sideProjects } = data.site.siteMetadata.resumeInfo;
    useEffect(() => {
        setLoading(false);
        // const callback = (evt: { altKey: boolean; key: string; }) => evt.altKey && evt.key === 't' && setTA(x => !x);
        const callback = (evt: { altKey: boolean; key: string; }) => {
            // if(evt.altKey && evt.key === 't') {
            if(evt.key === 't') {
                // debugger;
                if(translateLang === 'ch') {
                    setTran((pre) => 'en');
                } else {
                    setTran((pre) => 'ch');
                }
            }
        };
        window.addEventListener('keyup', callback);
        // return window.removeEventListener('keyup', callback);
        // setTranslateLang('en');
        // setTranslateLang('ch');
    }, []);

    // const test = 'Work Experience';
    // const test = 'Test NoBusyDoingThings';
    const lang = translateIndex[translateLang];
    console.log(lang, translateLang);
    return (
        <Scrollbar>
            <ResumeStyle>
                <Helmet>
                    <link href="https://fonts.font.im/css?family=Noto+Sans" rel="stylesheet" />
                </Helmet>
                <LoadingLayout loading={loading} />
                <article className='print-layout'>
                    <header>
                        <h1 onClick={() => {
                            window.open(Kuangzhichen);
                        }}>{name[lang]}</h1>
                        <p>{isTA && title ? [title[lang][1], title[lang][0]]?.join('/') : title[lang][0]}</p>
                        {/* <a href='/前端工程师-匡志宸.pdf'></a> */}
                        {/* <p>xxx</p> */}
                        {/* clear-anchor-style */}
                        {/* <ul className='flex-row flex-justify-around'> */}
                        <ul className='flex-row flex-justify-between'>
                            {
                                social?.map((item: { icon: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; link: string | undefined; text: {} | null | undefined; }, index: React.Key | null | undefined) => (
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
                            <p>{desc[lang]}</p>
                            {/* <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p> */}
                        </div>

                    </section>
                    <section className='block-section'>
                        <h2><span>{'Skill'.slice(0, 3)}</span>{'Skill'.slice(3)}</h2>
                        <div className='skill-fragment'>
                            <ul>
                                {
                                    skill?.map((item: { name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; hasEn: any; enChildren: (boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined)[]; children: any[]; }, index: React.Key | null | undefined) => (
                                        <li className='flex-row flex-align-center' key={index}>
                                            <h4>{item?.name}</h4>
                                            <ul className='flex-row skill-item'>
                                                {
                                                    translateLang === 'en' && item.hasEn ? 
                                                    item?.enChildren?.map((x: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined, xIndex: React.Key | null | undefined) => (
                                                        <li key={xIndex}>
                                                            <span>{x}</span>
                                                        </li>
                                                    )) : 
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
                            (showShit ? experience : experience?.filter((item: { isShit: any; }) => !item?.isShit))?.map((item: { company: { [x: string]: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }; title: { [x: string]: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }; from: string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined; to: string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined; children: any[]; }, index: React.Key | null | undefined) => (
                                <div className='work-fragment' key={index}>
                                    <div className='fragment-title flex-row flex-justify-between'>
                                        <h3>{item.company[lang]}</h3>
                                        <h3>{item.title[lang]}</h3>
                                        <h3>{item.from} - {item.to}</h3>
                                    </div>
                                    <ul>
                                        {
                                            item?.children?.map((child, childIndex) => (
                                                <li key={childIndex}>
                                                    <span>{child.name[lang]}</span>
                                                    <p>{child.desc[lang]}</p>
                                                    <ul className="flex-row work-skill">
                                                        {
                                                            child?.withSkills?.map((skill: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined, skillIndex: React.Key | null | undefined) => (
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
                            sideProjects?.map((item: { name: { [x: string]: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }; desc: { [x: string]: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }; withSkills: any[]; }, index: React.Key | null | undefined) => (
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
                                                <span>{item?.name[lang]}</span>
                                                <p>{item?.desc[lang]}</p>
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
          enChildren
          hasEn
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
