import React, { FC, Ref, useEffect, useRef, useState } from "react"


// import { graphql } from 'gatsby'
// import CanvasModule from '../components/webgl-canvas';
import { css } from '@emotion/react'
import { Stage, OrbitControls, Reflector, useHelper, CameraShake, OrbitControlsProps } from "@react-three/drei";
import { Camera, Canvas, ReactThreeFiber, useFrame, useThree } from "@react-three/fiber";
import { useSpring, animated } from '@react-spring/three';
import { EffectComposer, Pixelation } from "@react-three/postprocessing";
import { button, useControls } from "leva";
import THREE, { BoxHelper, Vector3 } from "three";
// import { OrbitControls as OrbitControlsImpl } from 'three-stdlib';


// const contentful = require("contentful");
// // import contentful from 'contentful';
// console.log(contentful);

// const client = contentful.createClient({
// 	// This is the space ID. A space is like a project folder in Contentful terms
// 	space: "lb38j2qtphgf",
// 	// This is the access token for this space. Normally you get both ID and the token in the Contentful web app
// 	accessToken: "Ce58EwR4wkTMdwnFlbVoLU_7QJPp-TfRThnYKK1L74Q"
// });
// // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
// client
// 	.getEntry("6WD9yV9FJTcIK9wcj45GQ9")
// 	.then(entry => console.log(entry))
// 	.catch(err => console.log(err));
// import  { bodyFontFamily } from '../utils/typography' 
// Annie Use Your Telescope

const Box: FC<JSX.IntrinsicElements['mesh']> = (props) => {
	// This reference will give us direct access to the mesh
	const mesh = useRef<THREE.Mesh>(null!)
	const reflector = useRef<THREE.Mesh>(null!)
	// Set up state for the hovered and active state
	const [hovered, setHover] = useState(false)
	const [active, setActive] = useState(false)
	const { setScale, position } = useControls({
		setScale: 1,
		position: [0, 20, 0]
	})
	// const [cameraPosition, setCameraPosition] = useState([0, 1, 0]);
	// const { camera } = useThree();
	// const set = useThree((state) => state.set);
	const { camera } = useThree();


	// const { scale } = useSpring({ scale: active ? 1.5 : 1 })
	const { scale } = useSpring({ scale: setScale })

	const { granularity, cameraFov, cameraPosition } = useControls({
		'Hello Button': button(() => console.log('position', camera.position.toArray(), '\n', 'rotation', camera.rotation.toArray())),
		granularity: {
			value: 0, min: -10, max: 10
		},
		cameraFov: {
			fov: 60, near: 0.1, far: 1000,
			//  position: [0, 0, 5]
		},
		cameraPosition: [-25, -0, 4],
		// cameraPosition: camera.position.toArray(),
	})



	useEffect(() => {
		camera.position.fromArray(cameraPosition);
		// setTimeout(() => {
		// 	setCameraPosition([0, 5, 0]);
		// }, 1500)
		// camera.position.set()
		// set({ camera: new THREE.OrthographicCamera(...) })
		// set({
		// 	camera: {
		// 		fov: 60,
		// 		position: new Vector3().fromArray([0, 0, 5])
		// 	} as Camera
		// })

		// camera.lookAt(new Vector3().fromArray([-1.93, 1, -0.94]));
		// debugger;
	}, [cameraPosition, cameraFov])
	// useThree();

	// useEffect(() => {
	// 	debugger;
	// }, [cameraPosition])	

	// useHelper(mesh, BoxHelper, 'hl')
	// useHelper(reflector, BoxHelper, 'hl2')
	// debugger;
	// Subscribe this component to the render-loop, rotate the mesh every frame
	useFrame((state, delta) => {
		// camera.lookAt(new Vector3().fromArray([-1.93, 1, -0.94]));

		// camera.position.x += 0.01;
		camera.lookAt(mesh.current.position);
		camera.updateMatrixWorld();
		// mesh.current.rotation.x += 0.01;
	});

	// Return view, these are regular three.js elements expressed in JSX

	// const camera = {
	// 	position: new Vector3().fromArray(cameraPosition),
	// 	fov: cameraFov.fov
	// }
	return (

		<group>

			{/* <camera args={
				position: new Vector3().fromArray(cameraPosition),
				fov: cameraFov.fov
			} /> */}
		
			{/* <EffectComposer>
				<Pixelation granularity={granularity} />
			</EffectComposer> */}


		<spotLight position={[50, 50, -30]} castShadow />
        <pointLight position={[-10, -10, -10]} color="red" intensity={3} />
        <pointLight position={[0, -5, 5]} intensity={0.5} />
        <directionalLight position={[0, -5, 0]} color="red" intensity={2} />
			<group position={[-4.5, -4, 0]} rotation={[0, -2.8, 0]}>
				<Reflector
					resolution={1024}
					receiveShadow
					mirror={0}
					blur={[500, 100]}
					mixBlur={1}
					mixStrength={0.5}
					depthScale={1}
					minDepthThreshold={0.8}
					maxDepthThreshold={1}
					position={[0, 0, 8]}
					scale={[2, 2, 1]}
					rotation={[-Math.PI / 2, 0, Math.PI]}
					args={[70, 70]}>
					{(Material, props) => <Material metalness={0.25} color="#eea6b1" roughness={1} {...props} />}
				</Reflector>
				<animated.mesh
					// position={[0, .5, 0]}
					position={[-1.93, 1, -0.94]} 
					rotation={[-Math.PI, 0.73, -Math.PI]} 
					// <animated.mesh
					// {...props}
					ref={mesh}
				// scale={scale}
				// scale={ active ? 1.5 : 1 }
				// scale={ scale }
				// onClick={(event) => setActive(!active)}
				// onPointerOver={(event) => setHover(true)}
				// onPointerOut={(event) => setHover(false)}
				>
					<boxGeometry args={[1, 1, 1]} />
					<meshStandardMaterial color={'orange'} />
					{/* </mesh> */}
				</animated.mesh>
			</group>
		</group>
	)
}

// interface OrbitControlsType {
// 	OrbitControls: typeof OrbitControls
// }

const Index: FC = (props) => {
	// const [, setLoad] = useState(false)
	// const loadBinder = (value) => {
	// 	setLoad(value);
	// }
	// const control = useRef<OrbitControls | null>(null!);
	const control = useRef(null!);

	// useFrame((state, delta) => {

	// 	// set({ camera: { fov: cameraFov.fov, position: new THREE.Vector3(0, 0, 0).fromArray(cameraPosition) } as Camera });
	// });
	useControls({
		'getControl': button(() => {
			console.log('position', control.current, '\n', 'rotation', control.current)
		}),
	})
	return (
		<div css={css`
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
			`
		}>
			<Canvas
				mode='concurrent'
				shadows
				dpr={[1, 2]}
				camera={{
					position: [-25.343932835213916, -0.5992951128131994, 4.040151518755322],
					// rotation: [-0.7036948367260863, -1.368973455420232, -0.6935959525797508, "XYZ"],
					fov: 20,
					// near: 0.1, far: 1000
				}}
				onCreated={state => {
					// @ts-ignore
					const __THREE_DEVTOOLS__ = window['__THREE_DEVTOOLS__'];

					if (typeof __THREE_DEVTOOLS__ !== 'undefined') {
						__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('observe', { detail: state.scene }));
						__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('observe', { detail: state.gl }));
					}
				}}
			>
				{/* <fog attach="fog" args={['lightpink', 60, 100]} /> */}

				<Box />
				{/* <Rig /> */}

				<OrbitControls ref={control} />
				{/* <CameraShake maxYaw={0.01} maxPitch={0.01} maxRoll={0.01} yawFrequency={0.5} pitchFrequency={0.5} rollFrequency={0.4} /> */}
			</Canvas>
			{/* </Canvas> */}
			{/* <p>Backsn</p>
			<p>Please wait hi</p> */}
			{/* <img src="bean.gif" css={css`display: ${!hasLoaded ? "block" : "none"}; position: relative; z-index: 1;`} /> */}
			{/* <CanvasModule loadBinder={loadBinder} /> */}
			{/* <Canvas>

				<Box position={[-1.2, 0, 0]}  />
			</Canvas> */}

		</div>
		// <Layout>
		// 	{/* <BlogContent data={data}></BlogContent> */}

		// </Layout>
	)
}


const Rig: FC = () => {
	const [vec] = useState(() => new Vector3())
	const { camera, mouse } = useThree()
	useFrame(() => camera.position.lerp(vec.set(mouse.x * 2, 1, 60), 0.05))
	return <CameraShake maxYaw={0.01} maxPitch={0.01} maxRoll={0.01} yawFrequency={0.5} pitchFrequency={0.5} rollFrequency={0.4} />
}
  



// export const query = graphql`
//   {
//     allMarkdownRemark {
//       edges {
//         node {
//           id
//           frontmatter {
//             date
// 			title
//           }
//           timeToRead
//           html
//           excerpt
//           fields {
//             slug
//           }
//         }
//       }
//       totalCount
// 	}
// 	site {
// 	id
// 	siteMetadata {
// 			title
// 			about
// 			author
// 			fontFamily
// 			desc
// 		}
// 	}

//   }
// `

export default Index;


// import React, { Fragment, useState, useRef, useEffect, useMemo } from "react"
// import { Canvas, useFrame } from 'react-three-fiber'


// import { Link, graphql } from 'gatsby'
// import Layout from '../components/layout'
// import CanvasModule from '../components/webgl-canvas';
// import { css } from '@emotion/core'
// import AniLink from "gatsby-plugin-transition-link/AniLink"


// const MyComponentWithoutUseMemo = () => {
// 	const refCount = React.useRef(0);
// 	const myfunction = () => {
// 		refCount.current++;
// 		return 1;
// 	};
// 	const value = myfunction();

// 	return <p>MyComponent without useMemo. Value: {value}. Ref count: {refCount.current}</p>;
// };


// const MyComponent = React.memo(() => {
// 	const refCount = React.useRef(0);
// 	const myfunction = () => {
// 		refCount.current++;
// 		return 1;
// 	};
// 	// const value = () => {
// 	// 	return myfunction();
// 	// };
// 	// debugger;
// 	const value = React.useMemo(() => {
// 		return myfunction();
// 	}, [refCount.current]);
// 	// const value = React.useCallback(() => {
// 	// 	return myfunction();
// 	// }, []);

// 	// return <p>MyComponent useMemo. Value: {value()}. Ref count: {refCount.current}</p>;
// 	return <p>MyComponent useMemo. Value: {value}. Ref count: {refCount.current}</p>;
// }, (pre, next) => {
// 	// if(pre.)
// 	if (pre.state !== next.state) {
// 		return false;
// 	} else {
// 		return true;
// 	}

// });

// export default () => {
// 	const [state, setState] = React.useState("");

// 	const handleSetState = e => {
// 		setState(e.target.value);
// 	};

// 	return (
// 		<div className="App">
// 			<input type="text" value={state} onChange={handleSetState} />
// 			<MyComponentWithoutUseMemo />
// 			<MyComponent state={state} />
// 		</div>
// 	);
// };