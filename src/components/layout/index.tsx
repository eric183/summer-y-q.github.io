import React, { FC, useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import { css } from '@emotion/react'
import { globalHistory } from '@reach/router'
// import { Scrollbars } from 'react-custom-scrollbars'
// import WebglCavas from './webgl-canvas';
import SplitText from 'react-pose-text';

// import lax from 'lax.js'
import Scrollbar from 'smooth-scrollbar'

import { gsap } from 'gsap';


// console.log(linkColor);
const ListLink: FC = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem`, marginBottom: 0 }}>
        {/* <AniLink fade duration={.2} to={props.to} css={css`color: ${props.linkColor}`}> */}
            {props.children}
        {/* </AniLink> */}
    </li>
)

const Layout: FC = ({ children }) => {

        
   
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
    const [hasLoad, setLoad] = useState(false);
    const [linkColor, setColor] = useState('#07e')
    const bindScroll = (willLeave: boolean | undefined) => {
        // console.log(lax);
        // debugger;
        // lax.setup()
        let scrollbar = Scrollbar.init(document.body);
        
        /* lax.addDriver('scrollY', function () {
            return  scrollbar.scrollY
        }); */
        // document.addEventListener('scroll', function (x) {
        //     // console.log(document.body.firstChild.scrollTop);
        //     lax.update(document.body.scrollTop)
        // }, false)

        // lax.update(document.body.scrollTop);


        // let scrollbar = Scrollbar.init(document.body);
        // // console.log(scrollbar.scrollTop); // 456

        // scrollbar.addListener((s)=> {
        //     // console.log(console.log(s.offset.y))
        //     if(s.offset.y === 'undefined') return;
        //     lax.update(s.offset.y);
        //     // console.log(s.offset.y);

        // })

        // lax.update(scrollbar.scrollTop);

        if(willLeave) {
            scrollbar.destroy();
            /* lax.removeElements(); */
        } 
    }

    useEffect(() => {
        if(globalHistory.location.pathname === "/projects" || globalHistory.location.pathname === "/projects/") {
            
            gsap.to(document.body, {
                backgroundColor: '#000'
            })
            // document.body.style.backgroundColor = '#000';
        } else {
            gsap.to(document.body, {
                backgroundColor: '#fff'
            })
            // document.body.style.backgroundColor = '#fff';
        }
    
        globalHistory.location.pathname === "/projects/" ? setColor('#fff'): setColor('#07e');
        setLoad(true);
        
        bindScroll(undefined);
        return ()=> { bindScroll(true) };

    }, [])



    // console.log(globalHistory.location.pathname);
    const { fontFamily } = data.site.siteMetadata;
    return (
        // <Scrollbars style={{ width: '100%', height: '100vh' }}>

        <div
            // pose={
            //     (globalHistory.location.pathname === "/projects") && hasLoad ? 'transin' : 'transout'
            // }
            className="layout-content"
            css={css`
                width: 100%;
                // overflow: hidden;
            `}>



            {/* // your content */}
            {/* {
                globalHistory.location.pathname != "/projects" && */}
            <header
                css={css`
                        display: ${globalHistory.location.pathname === "/cv" ? 'none': 'flex' };
                        margin: 1.5rem; 
                        font-family: ${fontFamily};
                        align-items: center;
                        justify-content: space-between;
                    `}>


{/* 
                <AniLink
                    swipe
                    duration={0.5}
                    direction={globalHistory.location.pathname === "/article" ? "down" : "up"}
                    to={globalHistory.location.pathname === "/article" ? "/about" : "/article"}> */}



                    <h3
                        css={css`
                                display: inline-block; 
                                font-family: ${fontFamily}; 
                                margin: 0; 
                                color: ${ linkColor };
                            `}>
                        {/* <SplitText initialPose="exit" pose="enter" charPoses={globalHistory.location.pathname === "/projects/" ? charPoses : false}>
                            {data.site.siteMetadata.author}
                        </SplitText> */}
                    </h3>
                {/* </AniLink> */}

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
                    {/* <ListLink to="/">Home</ListLink> */}
                    {/* <ListLink to="/projects/" linkColor={linkColor}>Projects</ListLink> */}
                    {/* <ListLink to="/contact/">Contact</ListLink> */}
                    {/* <ListLink to="/file-system/">System</ListLink> */}
                </ul>


            </header>

            {children}
            {/* <WebglCavas /> */}
        </div>



    )
}


// const charPoses = {
//     exit: { opacity: 0, y: 20 },
//     enter: {
//         opacity: 1,
//         y: 0,
//         delay: ({ charIndex }) => charIndex * 30,

//     }
// };

export default Layout;

// const DivContent = posed.div({
//     // background: ${ globalHistory.location.pathname == "/projects" ? 'red' : '#fff' };

//     transin: {
//         y: 0,
//         opacity: 1,
//         delay: 300,
//         transition: {
//             y: { type: 'spring', stiffness: 1000, damping: 15 },
//             default: { duration: 300 }
//         }
//         // beforeChildren: true,
//         // staggerChildren: 5000,

//     },
//     transout: {
//         y: 50,
//         opacity: 0,
//         transition: { duration: 150 }
//     }
// })

// export const query = useStaticQuery(graphql`
//     query {
//         site {
//             siteMetadata {
//                 title
//             }
//         }
//     }
// `)