import React, { useEffect, useRef } from 'react'
import Swiper from 'swiper';
import "Swiper/css/swiper.min.css";
import { css } from "@emotion/core";
import './slider-block.module.css';

export default (props) => {
    const CalRef = useRef(null);
    useEffect(()=> {
        var mySwiper = new Swiper(CalRef.current, { 
            effect: 'flip',
            grabCursor: true,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            
        });
    }, [])

    return (
        <div className="calor" ref={CalRef} css={css`height: ${props.height ? props.height: '100%'}; width: 100%;`}>
            <div className="swiper-wrapper" css={css`height: 100%; width: 100%;`}>
                {
                    props.imgList.map((_img, index)=> (
                        <div className="swiper-slide" style={{ backgroundImage: `url(${_img})` }} key={index}></div>
                    ))
                }
            </div>

            <div className="swiper-pagination"></div>

        </div>
    )
}