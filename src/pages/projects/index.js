import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout'

import { globalHistory } from '@reach/router'
import { TransitionState } from "gatsby-plugin-transition-link";
import posed from 'react-pose';
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { gsap } from 'gsap';

export default ({ data }) => {
    const [hasMount, setMount] = useState(false)
    
    useEffect(()=> {
        setTimeout(()=> {
            setMount(true);
        }, 0)
        console.log('调用一次');

        // gsap.to(document.body, {
        //     backgroundColor: "red",
        //     duration: 2

        // });
    }, [])


    useEffect(()=> {
        // console.log(hasMount)


        return ()=> {
            console.log('取消调用')
        }
    }, [hasMount])
    
    const { fontFamily } = data.site.siteMetadata;

    return (
        // <TransitionState>
            
        //     {({ mount, transitionStatus }) => {
        //     console.log(transitionStatus);
        //     // console.log(mount);
        //     return (
                <Layout>
                   
{/* 
                    <AniLink 

                        swipe 
                        duration={0.5} 
                        direction={globalHistory.location.pathname === "/" ? "down" : "up"}
                        to={globalHistory.location.pathname === "/" ? "/about" : "/"}>
                            <TitleAnimate
                                style={{ position: 'fixed', display: `inline-block`, fontFamily: fontFamily }}
                                withParent={false}
                                pose={
                                    hasMount
                                        ? 'visible'
                                        : 'hidden'
                                    }
                            >
                                
                                EricKuang

                            </TitleAnimate>
                    </AniLink>
                     */}
                    <Box
                        className="box"
                        pose={
                            hasMount
                                ? 'visible'
                                : 'hidden'
                            }
                    >

                        {/* 你好 */}
                
                    </Box>
                </Layout>
        //     )
        //     }}
            
        // </TransitionState>
    )
   
}
const TitleAnimate = posed.h3({
    hidden: { 
        color: "#000",
        // left: 0
    },
    visible: { 
        color: "#000",
        left: "100px",
        top: "-30px",
        scale: 0.6
    },
    
})

const Box = posed.div({
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
})
  


  
export const query = graphql`
{
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          date
          title
        }
        timeToRead
        html
        excerpt
        fields {
          slug
        }
      }
    }
    totalCount
  }
  site {
  id
  siteMetadata {
          title
          about
          author
          fontFamily
          desc
      }
  }
  
}
`