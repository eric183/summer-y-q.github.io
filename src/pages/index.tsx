// /* eslint-disable */

import { FC } from "react";

// import { extend as myExtends, useFrame, useLoader, useThree } from '@react-three/fiber';
// import React, { FC, forwardRef, Suspense, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
// import * as THREE from 'three'
// import CanvasLayout from '~components/CanvasLayout';
// import { WaterEffect } from '~components/Effects';
// // import { MeshLine, MeshLineMaterial, MeshLineRaycast } from 'three.meshline';
// import { navigate } from "gatsby";
// import { TextureLoader } from 'three';
// import { useSpring, animated } from '@react-spring/three';
// import { Html, useGLTF, useProgress } from '@react-three/drei';

const Index: FC = () => {
  
    return (
        <p className="text-center">UNDER CONSTRUCTION</p>
    )
}


// // const { MeshLine, MeshLineMaterial, MeshLineRaycast } = require('three.meshline');
// // { "modules": false ,"targets":{"node":"current" } },


// // import { shaderMaterial } from '@react-three/drei';
// // import glsl from 'glslify';

// // const fragmentShader = glsl`
// //   #pragma glslify: random = require(glsl-random)

// //   void main () {
// //     float brightness = random(gl_FragCoord.xy / resolution.xy);
// //     gl_FragColor = vec4(vec3(brightness), 1.0);
// //   }
// // `;

// // import * as meshline from 'threejs.meshline'

// // const ColorShiftMaterial = shaderMaterial(
// //     { time: 0, color: new THREE.Color(0.2, 0.0, 0.1) },
// //     // vertex shader
// //     glsl`
// //       varying vec2 vUv;
// //       void main() {
// //         vUv = uv;
// //         gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
// //       }
// //     `,
// //     // fragment shader
// //     glsl`
// //       uniform float time;
// //       uniform vec3 color;
// //       varying vec2 vUv;
// //       void main() {
// //         gl_FragColor.rgba = vec4(0.5 + 0.3 * sin(vUv.yxx + time) + color, 1.0);
// //       }
// //     `
// //   )
// // myExtends({ MeshLine, MeshLineMaterial })

// const Index: FC = () => {
//     const mouse = useRef([0, 0])
//     const [hovered, hover] = useState(false);
//     const points = [];
//     for (let j = 0; j < Math.PI; j += (2 * Math.PI) / 100) {
//         points.push(Math.cos(j), Math.sin(j), 0);
//     }
//     const progressInfo = useProgress()
//     useEffect(() => {
//         document.body.style.cursor = hovered
//             ? 'pointer'
//             : "url('https://raw.githubusercontent.com/chenglou/react-motion/master/demos/demo8-draggable-list/cursor.png') 39 39, auto"
//     }, [hovered])
//     return (
//         <CanvasLayout

//             // linear
//             dpr={[1, 2]}
//             camera={{ fov: 100, position: [0, 0, 30] }}
//             onCreated={({ gl }) => {
//                 gl.toneMapping = THREE.CineonToneMapping
//                 gl.setClearColor(new THREE.Color('#020207'))
//             }}
//             wrapperStyle={{ backgroundColor: '#eee' }}>

//             <Suspense fallback={<Loader progressInfo={progressInfo}/>}>


//                 {/* <fog attach="fog" args={['lightpink', 60, 100]} /> */}
//                 <fog attach="fog" args={['white', 50, 190]} />
//                 {/* <ambientLight args={['x0eeeee', 1]}/> */}
//                 <pointLight distance={100} intensity={4} color="white" />
//                     <Number mouse={mouse} hover={hover} />

//                 <Particles count={10000} mouse={mouse} />
//                 <WaterEffect />

//                 {/* <Sparks count={20} mouse={mouse} colors={['#A2CCB6', '#FCEEB5', '#EE786E', '#e0feff', 'lightpink', 'lightblue']} /> */}
//                 {/* <mesh raycast={MeshLineRaycast}>
                        
//                         <meshLine attach="geometry" vertices={points} widthCallback={pointWidth => pointWidth * Math.random()}/>
//                         <meshLineMaterial
//                         attach="material"
//                         transparent
//                         depthTest={false}
//                         dashArray={0.05}
//                         dashRatio={0.95}
//                         />
//                     </mesh> */}
//                 {/* <mesh>
//                         <colorShiftMaterial attach="material" color="hotpink" time={1} />
//                     </mesh> */}
//             </Suspense>

//         </CanvasLayout>
//     )
// }


// // eslint-disable-next-line react/prop-types
// const Particles: FC<{ count: number, mouse: number[] }> = ({ count, mouse }) => {
//     const mesh = useRef()
//     const light = useRef()
//     const { size, viewport } = useThree()
//     const aspect = size.width / viewport.width

//     const dummy = useMemo(() => new THREE.Object3D(), [])
//     // Generate some random positions, speed factors and timings
//     const particles = useMemo(() => {
//         const temp = []
//         for (let i = 0; i < count; i++) {
//             const t = Math.random() * 100
//             const factor = 20 + Math.random() * 100
//             const speed = 0.01 + Math.random() / 200
//             const xFactor = -50 + Math.random() * 100
//             const yFactor = -50 + Math.random() * 100
//             const zFactor = -50 + Math.random() * 100
//             temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 })
//         }
//         return temp
//     }, [count])
//     // The innards of this hook will run every frame
//     useFrame((state) => {
//         // Makes the light follow the mouse
//         light.current.position.set(mouse.current[0] / aspect, -mouse.current[1] / aspect, 0)
//         // Run through the randomized data to calculate some movement
//         particles.forEach((particle, i) => {
//             let { t, factor, speed, xFactor, yFactor, zFactor } = particle
//             // There is no sense or reason to any of this, just messing around with trigonometric functions
//             t = particle.t += speed / 2
//             const a = Math.cos(t) + Math.sin(t * 1) / 10
//             const b = Math.sin(t) + Math.cos(t * 2) / 10
//             const s = Math.cos(t)
//             particle.mx += (mouse.current[0] - particle.mx) * 0.01
//             particle.my += (mouse.current[1] * -1 - particle.my) * 0.01
//             // particle.material = new THREE.MeshStandardMaterial();
//             // Update the dummy object
//             dummy.position.set(
//                 (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
//                 (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
//                 (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
//             )
//             dummy.scale.set(s, s, s)
//             dummy.rotation.set(s * 5, s * 5, s * 5)
//             dummy.updateMatrix()
//             // And apply the matrix to the instanced item
//             mesh.current.setMatrixAt(i, dummy.matrix)
//         })
//         mesh.current.instanceMatrix.needsUpdate = true
//     })
//     return (
//         <>
//             <pointLight ref={light} distance={40} intensity={8} color="lightblue" />
//             <instancedMesh ref={mesh} args={[null, null, count]}>
//                 <dodecahedronGeometry args={[0.2, 0]} />
//                 <meshPhongMaterial color="#220238" />
//             </instancedMesh>
//         </>
//     )
// }

// function Number({ hover }) {
//     const TextRef = useRef(null!);
//     const ref = useRef(null!);
//     const [vec] = useState(() => new THREE.Vector3());

//     useFrame((state) => {
//         if (ref.current) {
//             // ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, state.mouse.x * 2, 0.1)

//             ref.current.position.lerp(vec.set(state.mouse.x * 2, state.mouse.y * 2, vec.y + 0.03), 0.1);
//             ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, state.mouse.y / 2, 0.1)
//             ref.current.rotation.y += 0.003;
//             state.camera.position.lerp(vec.set(-state.mouse.x * 5, state.camera.position.y, 30), 0.5);

//         }
//     })
//     const testTool = () => {
//         console.log('hi');
//     }
//     return (
//         // <Suspense fallback={<Loader />}>
//             <group ref={ref}>
//                 <Text
//                     size={10}
//                     ref={TextRef}
//                     onClick={() => navigate('/resume')}
//                     onPointerOver={() => hover(true)}
//                     onPointerOut={() => hover(false)}>
//                     k
//                 </Text>
//                 {/* <mesh>
// 					<boxGeometry args={[1, 1, 1]} />
// 					<meshStandardMaterial color={'orange'} />
// 				</mesh> */}
//             </group>
//         // </Suspense>
//     )
// }

// const Text = forwardRef(({ children, vAlign = 'center', hAlign = 'center', size = 1, color = '#000000', ...props }, ref) => {
//     // const font = useLoader(THREE.FontLoader, '/bold.blob')
//     const [active, setActive] = useState<boolean>(false);
//     const [viewIndex, setViewIndex] = useState<0 | 1>(0);
//     const font = useLoader(THREE.FontLoader, '/k.json')
//     const config = useMemo(() => ({ font, size: 40, height: 20 }), [font])
//     const mesh = useRef<THREE.Mesh>(null!)
//     const mesh2 = useRef<THREE.Mesh>(null!)
//     const groupRef = useRef<THREE.Mesh>(null!)
//     const meshNormalMaterialRef = useRef<THREE.MeshBasicMaterial>(null!);
//     const [colorMap] = useLoader(TextureLoader, ['/NormalMap.png']);
//     const { nodes } = useGLTF('/lady.glb', true);
//     // console.log(nodes);
//     useFrame((state) => {
//         // console.log(state.camera.position);
//         // console.log(state);
//         // state.camera.position.z += 0.1;
//         // vec.copy(state.camera.position);
//         // console.log(state);
//         // state?.events?.handlers?.onWheel = () => {
//         // console.log(state);
//         // state.events.handlers?.onWheel()

//         // }
//         // console.log( state.camera.position);
//         // state.camera.position.lerp(vec.set(state.mouse.x * 10, state.mouse.y * 10, 10), 0.05);
//         // groupRef.current.position.z += 0.1;
//         if (viewIndex === 0) {
//             const size = new THREE.Vector3()
//             mesh.current.geometry.computeBoundingBox()
//             mesh.current.geometry?.boundingBox?.getSize(size)
//             // mesh.current.position.x = THREE.MathUtils.lerp(0, -size.x / 2, 1);
//             // mesh.current.position.y = THREE.MathUtils.lerp(0, -size.y / 2, 1);
//             // mesh.current.position.z = THREE.MathUtils.lerp(-1000, 0, [-1000, 0]);
//             mesh.current.position.lerp(size.set(-size.x / 2, -size.y / 2, 0), 0.15);
//             // mesh.current.material.displacementScale = 1000
//             // console.log(mesh.current.material);

//             mesh2.current.position.lerp(size.set(0, 0, -1000), 0.15);

//             // mesh2.current.position.x = THREE.MathUtils.lerp(-size.x, 0, 1);
//             // mesh2.current.position.y = THREE.MathUtils.lerp(-size.y, 0, 1);
//             // mesh2.current.position.z = THREE.MathUtils.lerp(0, -1000, [-1000, 0]);
//         } else {
//             const size = new THREE.Vector3()
//             // mesh2.current.geometry.computeBoundingBox()
//             // mesh2.current.geometry?.boundingBox?.getSize(size)

//             mesh2.current.position.lerp(size.set(0, 0, -10), 0.15);
//             mesh.current.position.lerp(size.set(0, 0, -1000), 0.15);
//             // mesh.current.position.x = THREE.MathUtils.lerp(-size.x, 0, 1);
//             // mesh.current.position.y = THREE.MathUtils.lerp(-size.y, 0, 1);
//             // mesh.current.position.z = THREE.MathUtils.lerp(0, -1000, [-1000, 0]);
//         }
//     })
//     useLayoutEffect(() => {

//         // mesh2.current.material.opacity = 0;

//         // mesh2.current.position.x =  ? 0 : -size.x
//         // meshNormalMaterialRef.current.wireframe = false;
//         setActive(true);
//         // console.log(groupRef);
//         // mesh.current.rotation.x = 20;
//         // ref.current.
//         // console.log(mesh.current.rotation);
//         // testTool();
//     }, [children])
//     // useFrame(()=> {
//     //     meshNormalMaterialRef.current.
//     // })

//     const { displacementScale } = useSpring({
//         displacementScale: active ? 0 : 1000,
//     });

//     return (
//         <group
//             ref={ref}
//             onWheel={(evt) => {

//                 if (evt.deltaY > 0) {
//                     setViewIndex(1);
//                 } else {
//                     setViewIndex(0);
//                 }
//             }}
//             {...props} >
//             <mesh ref={mesh} scale={[0.1 * size, 0.1 * size, 0.1]}>
//                 {/* onWheel={(evt) => {mesh.current.position.z = 50}} */}
//                 <textGeometry args={[children, config]} />
//                 <animated.meshNormalMaterial
//                     ref={meshNormalMaterialRef}
//                     displacementMap={colorMap}
//                     displacementScale={displacementScale}
//                 />
//             </mesh>

//             <mesh ref={mesh2} geometry={nodes.lady.geometry} scale={10}>
//                 {/* onWheel={(evt) => {mesh.current.position.z = 50}} */}
//                 {/* <textGeometry args={[children, config]} /> */}
//                 <animated.meshNormalMaterial
//                     ref={meshNormalMaterialRef}
//                     transparent={true}
//                     // opacity={0}
//                     color={'x0e9e9e9'}
//                     displacementMap={colorMap}
//                     displacementScale={displacementScale}
//                 />
//             </mesh>
//         </group>
//     )
// })

// const Loader: FC<{
//     progressInfo: { progress: number, item: string },
// }> = ({ progressInfo }) => {
//     return <Html center>{progressInfo.progress} % loaded</Html>
// }

// const Promotion:FC = () => {

// }

export default Index;