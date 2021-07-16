import { TransformControls } from '@react-three/drei';
import { button, useControls } from 'leva';
import React, { FC, useEffect, useRef } from 'react';
import { Object3D } from 'three';
import { TransformControls as TransformControlsImpl } from 'three-stdlib'
import { omit } from 'lodash';

const TransformTool = (props: { 
    controlArgs: [boolean, React.Dispatch<React.SetStateAction<boolean>>]; 
    children: React.ReactNode & React.ReactElement<Object3D, string | React.JSXElementConstructor<any>>; 
    tKey?: string;
}) => {
    const transformControlsRef = useRef<TransformControlsImpl>(null!);
    
    useControls({
        [`transformControls_${props.tKey}`]: button(() => {
			console.log(transformControlsRef.current)
		}),
    })
    const { position } = useControls({
        position: [1, 1, 1]
    });
    
    useEffect(() => {
        if(transformControlsRef.current) {
            const isControl = true;
            const { current: controls } = transformControlsRef;
            const callback = (_event: any) => props.controlArgs[1](!_event.value);


            controls.addEventListener('dragging-changed', callback);
            return () => controls.removeEventListener('dragging-changed', callback);
            
        }
    }, [])
    
    return (
        <TransformControls 
            {...omit(props, ['children'])}
            position={position} 
            ref={transformControlsRef}>
            {props.children}
        </TransformControls>
    )
}

export default TransformTool;