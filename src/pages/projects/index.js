import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout'
import AniBlock from '../../components/ani-block'

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
    
        <Layout>
            {/* @ { defaultVal, startScrollVal, } */}
            <AniBlock className="lax" data-lax-translate-x="500 120, vh 20">
                <h3>了不起哦</h3>
                <p>我是正文</p>
            </AniBlock>
            
            <AniBlock className="lax" data-lax-translate-x="0 0, vh 1200">
                <h3>了不起哦</h3>
                <p>我是正文</p>
            </AniBlock>
            
            
            <AniBlock className="lax" data-lax-translate-x="0 0, vh 1200">
                <h3>了不起哦</h3>
                <p>我是正文</p>
            </AniBlock>
            
            <AniBlock className="lax" data-lax-translate-x="0 0, vh 1200">
                <h3>了不起哦</h3>
                <p>我是正文</p>
            </AniBlock>
            
            <AniBlock className="lax" data-lax-translate-x="500 200, vh 500">
                <h3>了不起哦</h3>
                <p>我是正文</p>
            </AniBlock>
            
            <AniBlock className="lax" data-lax-translate-x="500 200, vh 1200">
                <h3>了不起哦</h3>
                <p>我是正文</p>
            </AniBlock>
            
            <AniBlock className="lax" data-lax-translate-x="0 0, vh 1200">
                <h3>了不起哦</h3>
                <p>我是正文</p>
            </AniBlock>
            
            <AniBlock className="lax" data-lax-translate-x="0 0, vh 1200">
                <h3>了不起哦</h3>
                <p>我是正文</p>
            </AniBlock>
            
            <AniBlock className="lax" data-lax-translate-x="0 0, vh 1200">
                <h3>了不起哦</h3>
                <p>我是正文</p>
            </AniBlock>
            
            <AniBlock className="lax" data-lax-translate-x="0 0, vh 1200">
                <h3>了不起哦</h3>
                <p>我是正文</p>
            </AniBlock>
            
            <AniBlock className="lax" data-lax-translate-x="0 0, vh 1200">
                <h3>了不起哦</h3>
                <p>我是正文</p>
            </AniBlock>
            
            
        </Layout>
    
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