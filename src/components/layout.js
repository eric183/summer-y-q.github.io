import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { css } from '@emotion/core'
import LayoutCss from './layout.module.css'
import { globalHistory } from '@reach/router'
import { Scrollbars } from 'react-custom-scrollbars';





const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <AniLink fade duration={.2} to={props.to}>

            {props.children}
        </AniLink>




    </li>
)

export default ({children}) => {
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
    // console.log(globalHistory.location.pathname);
    const { fontFamily } = data.site.siteMetadata;
    return (
        <Scrollbars style={{ width: '100%', height: '100vh' }}>
            <div  
                style={{ 
                    minHeight: `100vh`, 
                    margin: `3rem auto`, 
                    height: `100%`, 
                    maxWidth: 650, 
                    padding: `0 1rem`, 
                    overflow: 'hidden' 
                }}>



                    {/* // your content */}
        
                <header style={{ marginBottom: `1.5rem`, fontFamily: fontFamily }}>

                    <AniLink 
                        swipe 
                        duration={0.5} 
                        direction={globalHistory.location.pathname == "/" ? "down" : "up"}
                        to={globalHistory.location.pathname == "/" ? "/about" : "/"}>
                        <h3 style={{ display: `inline`, fontFamily: fontFamily  }}>{data.site.siteMetadata.author}</h3>
                    </AniLink>

                    {/* <Link to={globalHistory.location.pathname == "/" ? "/about" : "/"} style={{ textShadow: `none`, backgroundImage: `none` }}>
                        <h3 style={{ display: `inline`, fontFamily: fontFamily  }}>{data.site.siteMetadata.author}</h3>

                    </Link> */}

                    {
                        globalHistory.location.pathname != "/projects/" && (
                            <ul style={{ listStyle: `none`, float: `right` }}>
                                <ListLink to="/">Home</ListLink>
                                <ListLink to="/projects/">Projects</ListLink>
                                {/* <ListLink to="/contact/">Contact</ListLink> */}
                                {/* <ListLink to="/file-system/">System</ListLink> */}
                            </ul>
                        )
                    }
                
                </header>
                {children}
            </div>
        </Scrollbars>
    )
}

// export const query = useStaticQuery(graphql`
//     query {
//         site {
//             siteMetadata {
//                 title
//             }
//         }
//     }
// `)