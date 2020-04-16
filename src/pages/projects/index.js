import React, { useEffect, useState, useRef } from 'react'
import Layout from '../../components/layout'
import AniBlock from '../../components/ani-block'
import SliderBlock from '../../components/slider-block';

import { globalHistory } from '@reach/router'
import { TransitionState } from "gatsby-plugin-transition-link";
import posed from 'react-pose';
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { gsap } from 'gsap';

import { css } from "@emotion/core";



export default ({ data }) => {
    const [hasMount, setMount] = useState(false)
    const CalRef = useRef(null);
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
            {/* <AniBlock className="lax" data-lax-bg-pos-x="0 -500, 100 100"> */}
            <section css={css`height: 500px; background-color: #000;`}>
                <AniBlock 
                    className="lax center-block" 
                    data-lax-opacity="0 1, elh 0"
                    css={css`
                        width: 50%;
                        height: 100%;
                        color: #fff;
                        padding-left: 50px;
                    `} >

                    深业泰然大厦数字展厅
                </AniBlock>
                <AniBlock className="lax center-block" css={css`width: 50%; height: 100%`} >
                    <SliderBlock 
                        height="80%"
                        imgList={[
                            import('../../assets/images/pbr2.0.png')
                        ]}/>
                    {/* <div className="calor" ref={CalRef}>
                        <div className="swiper-wrapper" css={css`width: 500px; height: 500px;`}>
                            <div className="swiper-slide" style={{ backgroundImage: 'url(https://swiperjs.com/demos/images/nature-1.jpg)' }}></div>
                            <div className="swiper-slide" style={{ backgroundImage: 'url(https://swiperjs.com/demos/images/nature-2.jpg)' }}></div>
                            <div className="swiper-slide" style={{ backgroundImage: 'url(https://swiperjs.com/demos/images/nature-3.jpg)' }}></div>
                            <div className="swiper-slide" style={{ backgroundImage: 'url(https://swiperjs.com/demos/images/nature-4.jpg)' }}></div>
                            <div className="swiper-slide" style={{ backgroundImage: 'url(https://swiperjs.com/demos/images/nature-5.jpg)' }}></div>
                            <div className="swiper-slide" style={{ backgroundImage: 'url(https://swiperjs.com/demos/images/nature-6.jpg)' }}></div>
                        </div>

                        <div className="swiper-pagination"></div>

                    </div> */}
                </AniBlock>
            </section>
           
            
           
            
            <AniBlock className="lax" data-lax-preset="fadeInOut">
                <h3>了不起哦</h3>
                <p>我是正文</p>
            </AniBlock>
            
            <AniBlock className="lax" data-lax-preset="fadeInOut">
                <h3>了不起哦</h3>
                <p>我是正文</p>
            </AniBlock>
            
            <AniBlock className="lax" data-lax-preset="fadeInOut">
                <h3  data-lax-translate-x="0, 0, vh, 200">了不起哦ooooooo</h3>
                <p>我是正文</p>
            </AniBlock>
            
            <AniBlock className="lax" data-lax-preset="fadeInOut">
                <h3>了不起哦</h3>
                <p>我是正文</p>
            </AniBlock>
            
            <AniBlock className="lax" data-lax-opacity="0 1, 800 0" data-lax-translate-x="0 -300, 800 500">
                <h3>了不起哦噢噢噢噢噢噢噢噢</h3>
                <p>我是正文</p>
            </AniBlock>
            
            <AniBlock className="lax" data-lax-preset="fadeInOut">
                <h3>了不起哦</h3>
                <p>我是正文</p>
            </AniBlock>
            <AniBlock className="lax" data-lax-preset="linger fadeInOut">
                <h3>了不起哦</h3>
                <p>我是正文</p>
            </AniBlock>
            <AniBlock className="lax" data-lax-preset="fadeInOut">
                <h3>了不起哦</h3>
                <p>我是正文</p>
            </AniBlock>
            <AniBlock className="lax" data-lax-preset="linger fadeInOut">
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