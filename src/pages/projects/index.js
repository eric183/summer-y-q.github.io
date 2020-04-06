import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout'

import { TransitionState } from "gatsby-plugin-transition-link";
import posed from 'react-pose';

export default props => {
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
    

    return (
        // <TransitionState>
            
        //     {({ mount, transitionStatus }) => {
        //     console.log(transitionStatus);
        //     // console.log(mount);
        //     return (
                <Layout>
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


const Box = posed.div({
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  })
  
