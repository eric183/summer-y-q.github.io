import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout'

import { globalHistory } from '@reach/router'
import { TransitionState } from "gatsby-plugin-transition-link";
import posed from 'react-pose';
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default ({ data }) => {
    const [hasMount, setMount] = useState(false)
    
    useEffect(()=> {
        setTimeout(()=> {
            setMount(true);
        }, 0)
        console.log('调用一次')
    }, [])


    useEffect(()=> {
        console.log(hasMount)


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
                    <TitleAnimate
                        pose={
                            hasMount
                                ? 'visible'
                                : 'hidden'
                            }
                    >

                        <AniLink 

                            swipe 
                            duration={0.5} 
                            direction={globalHistory.location.pathname === "/" ? "down" : "up"}
                            to={globalHistory.location.pathname === "/" ? "/about" : "/"}>
                            <h3 style={{ display: `inline-block`, fontFamily: fontFamily, margin: 0, color: '#000' }}>EricKuang</h3>
                        </AniLink>
                    </TitleAnimate>
                    <Box
                        className="box"
                        pose={
                            hasMount
                                ? 'visible'
                                : 'hidden'
                            }
                    >
                        你好
                
                    </Box>
                </Layout>
        //     )
        //     }}
            
        // </TransitionState>
    )
   
}
const TitleAnimate = posed.div({
    hidden: {
        x: 0,
    },
    visible: {
        x: -90
    }
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