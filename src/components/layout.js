import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { css } from '@emotion/core'
import LayoutCss from './layout.module.css'
const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <AniLink fade duration={.2}  to={props.to}>
            
            {props.children}
        </AniLink>
        
        
     



    </li>
)

export default ({ children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <div style={{ minHeight: `100vh`, margin: `3rem auto`, height: `100%`, maxWidth: 650, padding: `0 1rem`, overflow: 'hidden' }}>
 
            <header 
                css={css`
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 1.5rem
                `}>

                <Link to="/" 
                    style={{ 
                        textShadow: `none`, 
                        backgroundSize: 'cover',
                        backgroundImage: `url(${require("../images/head.jpg")})`,
                        width: '20px',
                        height: '20px'
                    }}>

                </Link>
                <ul style={{ listStyle: `none`, float: `right` }}>
                    <ListLink to="/">Home</ListLink>
                    <ListLink to="/about/">About</ListLink>
                    <ListLink to="/contact/">Contact</ListLink>
                    <ListLink to="/file-system/">System</ListLink>
                </ul>
            </header>
            {children}
        </div>
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