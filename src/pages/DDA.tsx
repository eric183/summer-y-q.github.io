/* eslint-disable */

import { extend as myExtends, useFrame, useLoader, useThree } from '@react-three/fiber';
import React, { FC, forwardRef, Suspense, useLayoutEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three'
import CanvasLayout from '~components/CanvasLayout';
import { WaterEffect } from '~components/Effects';
import { MeshLine, MeshLineMaterial, MeshLineRaycast } from 'three.meshline';
import { navigate } from "gatsby";
// import { shaderMaterial } from '@react-three/drei';
// import glsl from 'glslify';

// const fragmentShader = glsl`
//   #pragma glslify: random = require(glsl-random)

//   void main () {
//     float brightness = random(gl_FragCoord.xy / resolution.xy);
//     gl_FragColor = vec4(vec3(brightness), 1.0);
//   }
// `;

// import * as meshline from 'threejs.meshline'

// const ColorShiftMaterial = shaderMaterial(
//     { time: 0, color: new THREE.Color(0.2, 0.0, 0.1) },
//     // vertex shader
//     glsl`
//       varying vec2 vUv;
//       void main() {
//         vUv = uv;
//         gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//       }
//     `,
//     // fragment shader
//     glsl`
//       uniform float time;
//       uniform vec3 color;
//       varying vec2 vUv;
//       void main() {
//         gl_FragColor.rgba = vec4(0.5 + 0.3 * sin(vUv.yxx + time) + color, 1.0);
//       }
//     `
//   )
myExtends({ MeshLine, MeshLineMaterial })

const DDA: FC = () => {
    const mouse = useRef([0, 0])
    const [hovered, hover] = useState(false);
    // const points = [];
    //     for (let j = 0; j < Math.PI; j += (2 * Math.PI) / 100) {
    //     points.push(Math.cos(j), Math.sin(j), 0);
    // }
    return (
        <CanvasLayout
            linear
            dpr={[1, 2]}
            camera={{ fov: 100, position: [0, 0, 30] }}
            onCreated={({ gl }) => {
                // gl.toneMapping = THREE.Uncharted2ToneMapping
                gl.setClearColor(new THREE.Color('#020207'))
            }}
            wrapperStyle={{ backgroundColor: '#eee' }}>
            {/* <fog attach="fog" args={['lightpink', 60, 100]} /> */}
            <fog attach="fog" args={['white', 50, 190]} />
            <pointLight distance={100} intensity={4} color="white" />
            <Number mouse={mouse} hover={hover} />
            <Particles count={10000} mouse={mouse} />
            {/* <WaterEffect /> */}

            {/* <Sparks count={20} mouse={mouse} colors={['#A2CCB6', '#FCEEB5', '#EE786E', '#e0feff', 'lightpink', 'lightblue']} /> */}
            {/* <mesh raycast={MeshLineRaycast}>
                
                <meshLine attach="geometry" vertices={points} widthCallback={pointWidth => pointWidth * Math.random()}/>
                <meshLineMaterial
                attach="material"
                transparent
                depthTest={false}
                dashArray={0.05}
                dashRatio={0.95}
                />
            </mesh> */}
            {/* <mesh>
                <colorShiftMaterial attach="material" color="hotpink" time={1} />
            </mesh> */}
        </CanvasLayout>
    )
}


// eslint-disable-next-line react/prop-types
const Particles: FC<{ count: number, mouse: number[] }> = ({ count, mouse }) => {
    const mesh = useRef()
    const light = useRef()
    const { size, viewport } = useThree()
    const aspect = size.width / viewport.width

    const dummy = useMemo(() => new THREE.Object3D(), [])
    // Generate some random positions, speed factors and timings
    const particles = useMemo(() => {
        const temp = []
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100
            const factor = 20 + Math.random() * 100
            const speed = 0.01 + Math.random() / 200
            const xFactor = -50 + Math.random() * 100
            const yFactor = -50 + Math.random() * 100
            const zFactor = -50 + Math.random() * 100
            temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 })
        }
        return temp
    }, [count])
    // The innards of this hook will run every frame
    useFrame((state) => {
        // Makes the light follow the mouse
        light.current.position.set(mouse.current[0] / aspect, -mouse.current[1] / aspect, 0)
        // Run through the randomized data to calculate some movement
        particles.forEach((particle, i) => {
            let { t, factor, speed, xFactor, yFactor, zFactor } = particle
            // There is no sense or reason to any of this, just messing around with trigonometric functions
            t = particle.t += speed / 2
            const a = Math.cos(t) + Math.sin(t * 1) / 10
            const b = Math.sin(t) + Math.cos(t * 2) / 10
            const s = Math.cos(t)
            particle.mx += (mouse.current[0] - particle.mx) * 0.01
            particle.my += (mouse.current[1] * -1 - particle.my) * 0.01
            // Update the dummy object
            dummy.position.set(
                (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
                (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
                (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
            )
            dummy.scale.set(s, s, s)
            dummy.rotation.set(s * 5, s * 5, s * 5)
            dummy.updateMatrix()
            // And apply the matrix to the instanced item
            mesh.current.setMatrixAt(i, dummy.matrix)
        })
        mesh.current.instanceMatrix.needsUpdate = true
    })
    return (
        <>
            <pointLight ref={light} distance={40} intensity={8} color="lightblue" />
            <instancedMesh ref={mesh} args={[null, null, count]}>
                <dodecahedronGeometry args={[0.2, 0]} />
                <meshPhongMaterial color="#050505" />
            </instancedMesh>
        </>
    )
}


// const r = () => Math.max(0.2, Math.random())

// const Sparks: FC = ({ mouse, count, colors, radius = 10 }) => {
//     const lines = useMemo(
//         () =>
//             new Array(count).fill().map((_, index) => {
//                 const pos = new THREE.Vector3(Math.sin(0) * radius * r(), Math.cos(0) * radius * r(), 0)
//                 const points = new Array(30).fill().map((_, index) => {
//                     const angle = (index / 20) * Math.PI * 2
//                     return pos.add(new THREE.Vector3(Math.sin(angle) * radius * r(), Math.cos(angle) * radius * r(), 0)).clone()
//                 })
//                 const curve = new THREE.CatmullRomCurve3(points).getPoints(1000)
//                 return {
//                     color: colors[parseInt(colors.length * Math.random())],
//                     width: Math.max(0.1, (0.2 * index) / 10),
//                     speed: Math.max(0.001, 0.004 * Math.random()),
//                     curve
//                 }
//             }),
//         [count]
//     )

//     const ref = useRef()
//     const { size, viewport } = useThree()
//     const aspect = size.width / viewport.width
//     useFrame(() => {
//         if (ref.current) {
//             ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, 0 + mouse.current[1] / aspect / 200, 0.1)
//             ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, 0 + mouse.current[0] / aspect / 400, 0.1)
//         }
//     })

//     return (
//         <group ref={ref}>
//             <group position={[-radius * 2, -radius, -10]} scale={[1, 1.3, 1]}>
//                 {/* {lines.map((props, index) => (
//                     <Fatline key={index} {...props} />
//                 ))} */}

//                 <mesh>
//                     <meshLine attach="geometry" />
//                     {/* <meshLineMaterial ref={material} transparent depthTest={false} lineWidth={width} color={color} dashArray={0.1} dashRatio={0.95} /> */}
//                 </mesh>
//             </group>
//         </group>
//     )
// }

// function Fatline({ curve, width, color, speed }) {
//     const material = useRef()
//     // console.log()
//     // debugger;
//     // useFrame(() => (material.current.uniforms.dashOffset.value -= speed))
//     return (
//         <mesh>
//             <meshLine attach="geometry" vertices={curve} />
//             <meshLineMaterial ref={material} transparent depthTest={false} lineWidth={width} color={color} dashArray={0.1} dashRatio={0.95} />
//         </mesh>
//     )
// }



function Number({ hover }) {
    const ref = useRef()
    useFrame((state) => {
        if (ref.current) {
            ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, state.mouse.x * 2, 0.1)
            ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, state.mouse.y / 2, 0.1)
            ref.current.rotation.y = 0.8
        }
    })
    return (
        <Suspense fallback={null}>
            <group ref={ref}>
                <Text
                    size={10}
                    onClick={(e) => navigate('/resume')}
                    onPointerOver={() => hover(true)}
                    onPointerOut={() => hover(false)}>
                    k
                </Text>
            </group>
        </Suspense>
    )
}

const Text = forwardRef(({ children, vAlign = 'center', hAlign = 'center', size = 1, color = '#000000', ...props }, ref) => {
    // const font = useLoader(THREE.FontLoader, '/bold.blob')
    const font = useLoader(THREE.FontLoader, '/k.json')
    const config = useMemo(() => ({ font, size: 40, height: 50 }), [font])
    const mesh = useRef()
    useLayoutEffect(() => {
        const size = new THREE.Vector3()
        mesh.current.geometry.computeBoundingBox()
        mesh.current.geometry.boundingBox.getSize(size)
        mesh.current.position.x = hAlign === 'center' ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x
        mesh.current.position.y = vAlign === 'center' ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y
    }, [children])
    return (
        <group ref={ref} {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
            <mesh ref={mesh}>
                <textGeometry args={[children, config]} />
                <meshNormalMaterial />
            </mesh>
        </group>
    )
})


export default DDA;
