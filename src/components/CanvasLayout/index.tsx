/* eslint-disable react/prop-types */
import React, { FC } from 'react';
import { css } from '@emotion/react';
import { Canvas } from '@react-three/fiber';

const CanvasLayout: FC<{
    children: JSX.Element | JSX.Element[],
    canvasProps?: any,
    wrapperStyle?: React.CSSProperties,
}> = (props) => {

    // const { 
    //     mode = 'concurrent', 
    //     shadows = false, 
    //     dpr = [1, 2], 
    //     camera = {position: [0, 160, 160], fov: 20},
    //     onCreated = (state: { scene: any; gl: any; }) => {
    //         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //         // @ts-ignore
    //         const __THREE_DEVTOOLS__ = window['__THREE_DEVTOOLS__'];

    //         if (typeof __THREE_DEVTOOLS__ !== 'undefined') {
    //             __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('observe', { detail: state.scene }));
    //             __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('observe', { detail: state.gl }));
    //         }
    //     }

    // } = props.canvasProps ? props.canvasProps : {};

    return (

        <div 
            css={css`
                position: fixed; 
                width: 100%; 
                height: 100%; 
                left: 0; 
                right: 0; 
                top: 0; 
                bottom: 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background: #ffb6c1;
            `}
            style={props.wrapperStyle ?? props.wrapperStyle}

            >
            <Canvas
                // eslint-disable-next-line react/prop-types
                {...props}
                // mode={mode}
                // shadows
                // dpr={[1, 2]}
                // camera={camera}
                // onCreated={onCreated}
            >
                {props.children}
            </Canvas>
        </div>
    )
}


export default CanvasLayout;