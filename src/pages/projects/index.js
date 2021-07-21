
import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout'
import AniBlock from '../../components/ani-block'
// import SliderBlock from '../../components/slider-block';

// import posed from 'react-pose';

import { css } from "@emotion/react";

import { graphql } from 'gatsby';


const Projects = () => {
    const [hasMount] = useState(false)
    useEffect(()=> {
    

        console.log('调用一次');

        // gsap.to(document.body, {
        //     backgroundColor: "red",
        //     duration: 2

        // });
    }, [])


    useEffect(()=> {
        // console.log(hasMount)


        return ()=> {
            // console.log('取消调用')
            // debugger;
        }
    }, [hasMount])
    

    return (
    
        <Layout>
            {/* @ { defaultVal, startScrollVal, } */}
            {/* <AniBlock className="lax" data-lax-bg-pos-x="0 -500, 100 100"> */}
            <section css={css`height: 500px;`}>
                <AniBlock className="lax center-block" css={css`width: 50%; height: 100%`} >
                    /* <SliderBlock 
                        height="80%"
                        imgList={[
                            '/scene/IMG_9656.JPG',
                            '/scene/IMG_9354.JPG',
                            '/scene/IMG_9356.JPG',
                            '/scene/IMG_9357.JPG',
                           
                            // 'pbr2.0_1.png'
                        ]}/> */
                </AniBlock>
                <AniBlock 
                    className="lax center-block" 
                    // data-lax-opacity="0 1, elh 0"
                    css={css`
                        width: 50%;
                        height: 100%;   
                        flex-flow: column;   
                        justify-content: center;            
                    `} >

                        <h3 css={css`color: #fff; width: 100%; text-align: center;`}>
                            深业泰然智慧楼宇展厅 1.0(SHADER)
                        </h3>
                        <h3 css={css`color: #fff; width: 100%; text-align: center;`}>
                            房博会智慧楼宇⼤屏
                        </h3>
                </AniBlock>
               
            </section>
            <section css={css`height: 500px;`}>
                <AniBlock 
                    className="lax center-block" 
                    data-lax-opacity="0 1, elh 0"
                    css={css`
                        width: 50%;
                        height: 100%;                  
                    `} >

                        <h3 css={css`color: #fff; width: 100%; text-align: center;`}>
                            SaaS前端
                        </h3>
                </AniBlock>
                <AniBlock className="lax center-block" css={css`width: 50%; height: 100%`} >
                    <SliderBlock 
                        height="80%"
                        imgList={[
                            '/scene/projects_1.png',
                            '/scene/projects_2.png'
                            // 'pbr2.0_1.png'
                        ]}/>
                </AniBlock>
            </section>
            {/* <section css={css`height: 500px;`}>
                <AniBlock className="lax center-block" css={css`width: 50%; height: 100%`} >
                    <SliderBlock 
                        height="80%"
                        imgList={[
                            '/scene/IMG_9656.JPG',
                            '/scene/IMG_9354.JPG'
                            // 'pbr2.0_1.png'
                        ]}/>
                </AniBlock>
                <AniBlock 
                    className="lax center-block" 
                    data-lax-opacity="0 1, elh 0"
                    css={css`
                        width: 50%;
                        height: 100%;                  
                    `} >

                        <h3 css={css`color: #fff; width: 100%; text-align: center;`}>
                            深业泰然大厦数字展厅
                        </h3>
                </AniBlock>
               
            </section> */}
            <section css={css`height: 500px;`}>
                <AniBlock 
                    className="lax center-block" 
                    // data-lax-opacity="0 1, elh 0"
                    css={css`
                        width: 50%;
                        height: 100%;                  
                    `} >

                        <h3 css={css`color: #fff; width: 100%; text-align: center;`}>
                            深业泰然智慧楼宇展厅 2.0(BPR)
                        </h3>
                </AniBlock>
                <AniBlock 
                    className="lax center-block" 
                    css={css`
                        width: 50%; 
                        height: 100%;
                            
                    `}>
                    <SliderBlock 
                        height="80%"
                        imgList={[
                            '/scene/tairan_unreal_1.png',
                            '/scene/tairan_unreal_2.png',
                            '/scene/pbr2.0_1.png',
                            '/scene/pbr2.0_2.png',
                            // 'pbr2.0_1.png'
                        ]}/>
                </AniBlock>
            </section>
            <section css={css`height: 500px;`}>
                <AniBlock className="lax center-block" css={css`width: 50%; height: 100%;`} >
                    <SliderBlock 
                        height="80%"
                        imgList={[
                            '/scene/wx_1.png',
                            '/scene/wx_2.jpg',
                            '/scene/wx_3.png',
                            '/scene/admin_ipad_1.png',
                            '/scene/admin_ipad_2.png',
                            '/scene/admin_ipad_3.png',
                            // '/scene/pbr2.0_1.png',
                            // '/scene/pbr2.0_2.png',
                            // 'pbr2.0_1.png'
                        ]}/>
                </AniBlock>
                <AniBlock 
                    className="lax center-block" 
                    // data-lax-opacity="0 1, elh 0"
                    css={css`
                        width: 50%;
                        height: 100%;                  
                        flex-flow: column;   
                        justify-content: center;       
                    `} >

                        <h3 css={css`color: #fff; width: 100%; text-align: center;`}>
                            运营楼管平台iPad移动端                        
                        </h3>
                        <h3 css={css`color: #fff; width: 100%; text-align: center;`}>
                            楼管门禁小程序
                        </h3>
                </AniBlock>
            </section>
            <section css={css`height: 500px;`}>
                <AniBlock 
                    className="lax center-block" 
                    // data-lax-opacity="0 1, elh 0"
                    css={css`
                        width: 50%;
                        height: 100%;                  
                        flex-flow: column;   
                        justify-content: center;       
                    `} >

                        <h3 css={css`color: #fff; width: 100%; text-align: center;`}>
                            <a href="http://www.wow-toboom.com/"  target="_blank" rel="noreferrer">WOW to Boom</a>                        
                        </h3>
                       
                </AniBlock>
                <AniBlock className="lax center-block" css={css`width: 50%; height: 100%;`}>
                    <SliderBlock 
                        height="80%"
                        imgList={[
                            '/scene/toboom (6).png',
                            '/scene/toboom (1).png',
                            '/scene/toboom (2).png',
                            '/scene/toboom (3).png',
                            '/scene/toboom (4).png',
                            '/scene/toboom (5).png',
                            '/scene/toboom (7).png',
                            '/scene/toboom (8).png',
                            // '/scene/pbr2.0_1.png',
                            // '/scene/pbr2.0_2.png',
                            // 'pbr2.0_1.png'
                        ]}/>
                </AniBlock>
               
                
            </section>
      
          

            
          
            
        </Layout>
    
    )
   
}

// const TitleAnimate = posed.h3({
//     hidden: { 
//         color: "#000",
//         // left: 0
//     },
//     visible: { 
//         color: "#000",
//         left: "100px",
//         top: "-30px",
//         scale: 0.6
//     },
    
// })

// const Box = posed.div({
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 },
// })
  


  
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

export default Projects;