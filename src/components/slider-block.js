import React, { useEffect, useRef } from 'react'
import Swiper from 'swiper';
import "swiper/css/swiper.min.css";
import { css } from "@emotion/core";
import './slider-block.module.css';
import { globalHistory } from '@reach/router'

export default (props) => {
    const CalRef = useRef(null);
        const cusorCss = css`cursor: url(data:image/png;base64,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) 18 0,auto !important`;

    // debugger;

    // if(globalHistory.location.pathname != "/projects/") {

    // }
    useEffect(()=> {
        var mySwiper = new Swiper(CalRef.current, { 
            effect: 'flip',
            zoom: true,
            loop: true,
            grabCursor: true,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            // autoplay: {
            //     delay: 3500,
            //     disableOnInteraction: false,
            // },
        });
        return () => {
            // debugger;
            mySwiper.destroy();
        }
    }, [])

    return (
        <div className="calor" ref={CalRef} css={css`height: ${props.height ? props.height: '100%'}; width: 100%;`}>
            <div className="swiper-wrapper" css={css`height: 100%; width: 100%;`}>
                {
                    props.imgList.map((_img, index)=> (
                        <div 
                            key={index}
                            className="swiper-slide" 
                            css={cusorCss}
                        >
                            <div className="swiper-zoom-container" css={cusorCss}>
                                <img src={`${_img}`} css={cusorCss}/>

                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="swiper-pagination" css={cusorCss}></div>

        </div>
    )
}