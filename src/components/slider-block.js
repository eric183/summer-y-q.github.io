import React, { useEffect, useRef } from 'react'
import Swiper from 'swiper';
import "swiper/css/swiper.min.css";
import { css } from "@emotion/core";
import './slider-block.module.css';

export default (props) => {
    const CalRef = useRef(null);
    debugger;
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
                        <div className="swiper-slide"  key={index}>
                            <div className="swiper-zoom-container">
                                <img src={`${_img}`} />

                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="swiper-pagination"></div>

        </div>
    )
}