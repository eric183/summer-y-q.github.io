import { Box, Icosahedron, Octahedron, OrbitControls, Reflector, ScreenQuad, Sphere, TransformControls, useHelper } from '@react-three/drei';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { button, useControls } from 'leva';
import React, { FC, Suspense, useEffect, useRef, useState } from 'react';
import { MathUtils, BoxHelper, PointLightHelper, SpotLightHelper, TextureLoader, Vector3 } from 'three';
import { KernelSize } from 'postprocessing';

import { TransformControls as TransformControlsImpl } from 'three-stdlib'
import CanvasLayout from '~components/CanvasLayout';
import TransformTool from '~components/TransformTool';


const Test: FC = () => {
    const [isControl, setIsControl] = useState(true);
    // const size = useThree((state) => state.size)
    const ScreenQuadRef = useRef(null!)

    useEffect(() => {
        // console.log(ScreenQuadRef);
        // console.log(MathUtils.lerp(1, 10, 0.1));
    }, []);

    return (
        // <CanvasLayout wrapperStyle={{ background: 'rgb(24, 24, 24)' }}>
        <CanvasLayout>
            <color attach="background" args={['black']} />
            <LightGroup controlArgs={[isControl, setIsControl]} />
            {/* <OrbitControls enabled={isControl}/> */}
            <Suspense fallback={null}>
                {/* <ScreenQuad 
                ref={ScreenQuadRef}
            >    */}
                <MeshGroup />
                {/* </ScreenQuad> */}
                <EffectComposer multisampling={8}>
                    {/* <Bloom /> */}
                    <Bloom
                        kernelSize={1}
                        luminanceThreshold={0}
                        luminanceSmoothing={0.4}
                        intensity={0.6}
                    />
                    <Bloom kernelSize={KernelSize.HUGE} luminanceThreshold={0} luminanceSmoothing={0} intensity={0.5} />
                </EffectComposer>
            </Suspense>

        </CanvasLayout>
    )
}

const MeshGroup = () => {
    const [vec] = useState(() => new Vector3())
    const [normalTexture] = useLoader(TextureLoader, ['/NormalMap.png']);
    const mesh = useRef<THREE.Mesh>(null!);
    const sphereRef = useRef<THREE.Mesh>(null!);
    const { mouse } = useThree();
    useFrame((state) => {
        // console.log(mouse);
        mesh.current.position.x = MathUtils.lerp(mesh.current.position.x, mouse.x, .5);

        mesh.current.rotation.x = MathUtils.lerp(mesh.current.position.y, mouse.x, .5);
        // mesh.current.position.z = MathUtils.lerp(mesh.current.position.y, mouse.y, 1);
        // mesh.current.rotation.y += 0.01;
        mesh.current.rotation.y = MathUtils.lerp(mesh.current.position.y, mouse.y, .5);

        mesh.current.position.y = MathUtils.lerp(mesh.current.position.y, mouse.y, .5);

        // console.log('rotation:', mesh.current.rotation);
        // console.log('position:', mesh.current.position.x);
        // if (start) {
        state.camera.position.lerp(
            vec.set(state.mouse.x * 10, state.mouse.y * 10, 6),
            0.05
        );
        state.camera.lookAt(0, 0, 0);
        //   }
    });

    // return useFrame((state) => {
    //     if (start) {
    //       state.camera.position.lerp(vec.set(state.mouse.x * 10,  state.mouse.y * 10, 14), 0.05)
    //       state.camera.lookAt(0, 0, 0)
    //     }
    //   })
    useEffect(() => {
        console.log(sphereRef);
    }, [])
    return (
        <group ref={mesh}>
            <mesh>
                {/* <Sphere ref={sphereRef}> */}
                {/* <Sphere attach='sphere'> */}
                <sphereBufferGeometry args={[1.1, 30, 30]} attach="geometry" />
                <meshNormalMaterial />
                {/* <meshStandardMaterial
                    // color={'0x292929'}
                    normalMap={normalTexture}
                    metalness={0.1}
                    roughness={.2}
                /> */}
                {/* </Sphere> */}
            </mesh>
            <Reflector
                resolution={1024}
                mirror={1}
                mixBlur={10}
                args={[8, 8]}
                mixStrength={1}
                blur={[300, 120]}
                position-y={-0.8}
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            />
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
                {/* <ambientLight args={[0x4, 2]} /> */}
                <ambientLight />
                {/* <TransformControls position={position} ref={transformControlsRef}> */}
                {/* <TransformTool controlArgs={controlArgs} tKey="pl1">
                <pointLight args={[0xffffff, 1, 2]} ref={pl1} />
            </TransformTool> */}
                {/* </TransformControls> */}
            </group>
        )
    }

// const Effects = () => {
//     return (
//         <group>

//         </group>
//     )
// }

export default Test;