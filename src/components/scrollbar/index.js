import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { css } from '@emotion/react'
import { globalHistory } from '@reach/router'
// import { Scrollbars } from 'react-custom-scrollbars'
// import WebglCavas from './webgl-canvas';
import SplitText from 'react-pose-text';

import lax from 'lax.js'
import Scrollbar from 'smooth-scrollbar'

import { gsap } from 'gsap';



const ScrollBar = (props) => {
    const bindScroll = (willLeave) => {
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
            lax.removeElements();
        } 
    }

    useEffect(() => {
        window.addEventListener("beforeprint", (event) => { 
            document.body.style.overflow = 'unset';
        });

        window.addEventListener("afterprint", (event) => { 
            document.body.style.overflow = 'hidden';
        });

        bindScroll();
        return ()=> { bindScroll(true) };

    }, [])  

    return props.children
}


export default ScrollBar;