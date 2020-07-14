import React, { useEffect } from 'react';
import style from 'styled-components';
import { css } from '@emotion/core';
import { useSpring, animated, interpolate } from 'react-spring'
// import "../components/nes.css";



export default () => {

    const props = useSpring({
        to: async (next, cancel) => {
            // var opacity = 0;
            while (true) {
                await next({ opacity: 1, xyz: [10, 20, 5] });
                await next({ opacity: 0, xyz: [0, 0, 0,] });
                // opacity = opacity === 0 ? 1 : 0;
            }
        },
        from: {
            xyz: [0, 0, 0],
            opacity: 0,
            color: '#fff',
            scale: 1

        }
    })


    useEffect(() => {
    }, [])

    return (
        <Root>

            {/* <div className="test-root"> */}


            <TestRoot >

                {/* <div css={css`
            position: absolute;
            width: 224px;
            height: 553px;
            left: 45px;
            top: calc(50% - 553px/2 + 14.5px);

            background: #FEDCDC;
            border-radius: 15px;
        `}>

        </div> */}
                <animated.p
                    style={{
                        // transform: props.xyz.interpolate((x, y, z) => `translate3d(${x}px, ${y}px, ${z}px)`),
                        opacity: props.opacity
                            .interpolate({
                                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                                output: [0, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                            }),

                        transform: props.opacity
                            .interpolate({
                                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                                output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                            })
                            .interpolate(x => `scale(${x})`)
                    }}

                    css={css`
                        position: absolute;
                        width: 111px;
                        height: 28px;
                        left: calc(50% - 111px/2);
                        top: calc(50% - 28px/2);

                        font-family: Roboto;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 24px;
                        line-height: 28px;
                        display: flex;
                        align-items: center;
                        text-align: center;

                        color: #FFFFFF;
                    `}>
                    helloworld
                </animated.p>

            </TestRoot>

        </Root>
    )
}



let Root = style(animated.div)`
    position: fixed;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #F5F7FA 0%, #C3CFE2 100%);
`

let TestRoot = style.div`
    position: absolute;
    width: 225px;
    height: 562px;
    left: 102px;
    top: calc(50% - 562px/2);

    background: #E48A8A;
    border-radius: 21px;
`

