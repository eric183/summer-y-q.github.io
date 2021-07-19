import * as THREE from 'three'
import React, { useRef, useMemo, useEffect } from 'react'
import { extend, useThree, useFrame } from '@react-three/fiber'
// import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
// import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass'
import { WaterPass } from './water'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import { KernelSize, BlendFunction } from 'postprocessing'

extend({ ShaderPass, WaterPass, FilmPass })

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Effects() {
    const composer = useRef()
    const { scene, gl, size, camera } = useThree()
    const aspect = useMemo(() => new THREE.Vector2(512, 512), [])
    // useEffect(() => void composer.current.setSize(size.width, size.height), [size])
    // useFrame(() => composer.current.render(), 1)
    return (
        <EffectComposer multisampling={8}>
            {/* <renderPass attachArray="passes" scene={scene} camera={camera} />
            <waterPass attachArray="passes" factor={1.5} /> */}
            <Bloom
                kernelSize={1}
                luminanceThreshold={0}
                luminanceSmoothing={0.4}
                intensity={0.6}
            />
            <Bloom kernelSize={KernelSize.HUGE} luminanceThreshold={0} luminanceSmoothing={0} intensity={0.5} />
        </EffectComposer>
    )
}
