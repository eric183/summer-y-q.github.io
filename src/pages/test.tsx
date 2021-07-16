import { Box, Octahedron, OrbitControls, ScreenQuad, TransformControls, useHelper } from '@react-three/drei';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { button, useControls } from 'leva';
import React, { FC, Suspense, useEffect, useRef, useState } from 'react';
import { BoxHelper, PointLightHelper, SpotLightHelper, TextureLoader } from 'three';
import { TransformControls as TransformControlsImpl } from 'three-stdlib'
import CanvasLayout from '~components/CanvasLayout';
import TransformTool from '~components/TransformTool';


const Test: FC = ()=> {
    const [isControl, setIsControl] = useState(true);
    // const size = useThree((state) => state.size)
    const ScreenQuadRef = useRef(null!)
    
    useEffect(() => {
        console.log(ScreenQuadRef);
    }, []);
    
    return (
        <CanvasLayout wrapperStyle={{ background: 'rgb(24, 24, 24)'}}>
                <Suspense fallback={null}>
            {/* <ScreenQuad 
                ref={ScreenQuadRef}
            >    */}
                    <MeshGroup />
                    <LightGroup controlArgs={[isControl, setIsControl]} />
                    {/* <OrbitControls enabled={isControl}/> */}
            {/* </ScreenQuad> */}
                </Suspense>
        </CanvasLayout>
    )
} 

const MeshGroup = () => {
    const [normalTexture] = useLoader(TextureLoader,  ['/NormalMap.png']);
    const mesh = useRef<THREE.Mesh>(null!);
    useFrame((state) => {
        // mesh.current.rotation.y += 0.1;
    });
    return (
        <group ref={mesh}>
            <mesh>
                <Octahedron>
                    {/* <meshNormalMaterial /> */}
                    <meshStandardMaterial 
                        color={'#0x292929'}
                        normalMap={normalTexture}
                        metalness={0}
                        roughness={.2}
                    />
                </Octahedron>
            </mesh>
        </group>
    )
}

const LightGroup: FC<{
    controlArgs: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
    // setIsControl(arg0: boolean): void
}> = ({
    controlArgs
}) => {
    const LightGroupRef = useRef();
    const transformControlsRef = useRef<TransformControlsImpl>(null!);
    const pl1 = useRef();
    
    useHelper(pl1, PointLightHelper, 0.5, 'cyan')

    const { position } = useControls({
        position: [1, 1, 1]
    });
  
    return (
        <group ref={LightGroupRef}>
            <ambientLight args={[0x4, 2]}/>
            {/* <TransformControls position={position} ref={transformControlsRef}> */}
            <TransformTool controlArgs={controlArgs} tKey="pl1">
                <pointLight args={[0xff0000, 1, 10]} ref={pl1} />
            </TransformTool>
            {/* </TransformControls> */}
        </group>
    )
}

export default Test;