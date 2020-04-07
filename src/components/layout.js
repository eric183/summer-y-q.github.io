import React, { useEffect } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { css } from '@emotion/core'
import LayoutCss from './layout.module.css'
import { globalHistory } from '@reach/router'
import { Scrollbars } from 'react-custom-scrollbars'
import WebglCavas from './webgl-cavas';
import SplitText from 'react-pose-text';
import posed from "react-pose"
import { TransitionState } from "gatsby-plugin-transition-link";




const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem`, marginBottom: 0 }}>
        <AniLink fade duration={.2} to={props.to}>

            {props.children}
        </AniLink>




    </li>
)

export default ({ children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title,
                    author,
                    fontFamily
                }
            }
        }
    `)

    useEffect(() => {
        
    }, [])
    // console.log(globalHistory.location.pathname);
    const { fontFamily } = data.site.siteMetadata;
    return (
        <Scrollbars style={{ width: '100%', height: '100vh' }}>

            <DivContent
                pose={
                    globalHistory.location.pathname == "/projects" ? 'transin' : 'transout'
                }
                className="layout-content"
                css={css`
                min-height: 100vh;
                width: 100%;
                overflow: hidden;
            `}>



                {/* // your content */}
                {/* {
                globalHistory.location.pathname != "/projects" && */}
                <header
                    css={css`
                        margin: 1.5rem; 
                        font-family: ${fontFamily};
                        align-items: center;
                        justify-content: space-between;
                    `}>



                    <AniLink
                        swipe
                        duration={0.5}
                        direction={globalHistory.location.pathname == "/" ? "down" : "up"}
                        to={globalHistory.location.pathname == "/" ? "/about" : "/"}>



                        <h3
                            css={css`
                                display: inline-block; 
                                font-family: ${fontFamily}; 
                                margin: 0; 
                                color: #000;
                            `}>
                            <SplitText initialPose="exit" pose="enter" charPoses={globalHistory.location.pathname == "/projects" ? charPoses : false}>
                                {data.site.siteMetadata.author}
                            </SplitText>
                        </h3>
                    </AniLink>

                    {/* <Link to={globalHistory.location.pathname == "/" ? "/about" : "/"} style={{ textShadow: `none`, backgroundImage: `none` }}>
                    <h3 style={{ display: `inline`, fontFamily: fontFamily  }}>{data.site.siteMetadata.author}</h3>

                </Link> */}


                    <ul
                        css={css`
                            marginBottom: 0;
                            listStyle: none;
                            float: right;
                            fontFamily: 'Caveat', cursive;
                            fontSize: 15px;
                        `}>
                        <ListLink to="/">Home</ListLink>
                        <ListLink to="/projects">Projects</ListLink>
                        {/* <ListLink to="/contact/">Contact</ListLink> */}
                        {/* <ListLink to="/file-system/">System</ListLink> */}
                    </ul>


                </header>

                {children}
            </DivContent>

            {/* <WebglCavas /> */}
        </Scrollbars>
    )
}


const charPoses = {
    exit: { opacity: 0, y: 20 },
    enter: {
        opacity: 1,
        y: 0,
        delay: ({ charIndex }) => charIndex * 30,
        
    }
};

const DivContent = posed.div({
    // background: ${ globalHistory.location.pathname == "/projects" ? 'red' : '#fff' };

    transin: { 
        backgroundColor: 'red', 
        delay: 300,
        // beforeChildren: true,
        // staggerChildren: 5000,

    },
    transout: { backgroundColor: '#fff' }
})

// export const query = useStaticQuery(graphql`
//     query {
//         site {
//             siteMetadata {
//                 title
//             }
//         }
//     }
// `)