import React, { FC, Ref, useEffect, useRef, useState } from "react"


// import { graphql } from 'gatsby'
// import CanvasModule from '../components/webgl-canvas';
import { css } from '@emotion/react'
import { Stage, OrbitControls, TransformControls, Reflector, useHelper, CameraShake, OrbitControlsProps } from "@react-three/drei";
import { Camera, Canvas, ReactThreeFiber, useFrame, useThree } from "@react-three/fiber";
import { useSpring, animated } from '@react-spring/three';
import { EffectComposer, Pixelation } from "@react-three/postprocessing";
import { button, useControls } from "leva";
import THREE, { BoxHelper, Vector3 } from "three";
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib'
import CanvasLayout from "~components/CanvasLayout";

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

   // project: [
        //     'tsconfig.json'
        // ],
    // extends: [
    //   'eslint:recommended',
    //   'plugin:@typescript-eslint/recommended',
    // ],
const Box: FC<JSX.IntrinsicElements['mesh']> = (props) => {
	debugger;
	const john = 23;
	console.log(john);
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
	const { camera, mouse} = useThree();

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
		'getControl': button(() => {
			console.log('position', control.current, '\n', 'rotation', control.current)
		}),
		// cameraPosition: camera.position.toArray(),
	})

	const control = useRef<OrbitControlsImpl>(null!);
	const [vec] = useState(() => new Vector3())
	// useFrame((state, delta) => {

	// 	// set({ camera: { fov: cameraFov.fov, position: new THREE.Vector3(0, 0, 0).fromArray(cameraPosition) } as Camera });
	// });

	useEffect(() => {
		// const _C: OrbitControlsProps = control.current;
		// _C.position = new Vector3(
		// 	-25.343932835213916,
		// 	-0.5992951128132021,
		// 	4.040151518755319
		// )
		
		setTimeout(() => {
			// camera.lookAt(mesh.current.position);
			camera.position.lerp(vec.set(mouse.x * 2, 1, 60), 0.05);
			// mesh.current.lookAt(camera.position);
			// camera.updateMatrixWorld();


		}, 1500)
	}, [])
	

	useEffect(() => {
		// camera.position.fromArray(cameraPosition);
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


	// useHelper(mesh, BoxHelper, 'hl')
	// useHelper(reflector, BoxHelper, 'hl2')
	// debugger;
	// Subscribe this component to the render-loop, rotate the mesh every frame
	useFrame((state, delta) => {
		// camera.lookAt(new Vector3().fromArray([-1.93, 1, -0.94]));
		// mesh.current.lookAt(camera.position);

		// camera.position.x += 0.01;
		// camera.lookAt(mesh.current.position);
		// camera.updateMatrixWorld();
		// mesh.current.rotation.x += 0.01;
		// control.current.update();

		camera.position.lerp(vec.set(mouse.x * 2, 1, 60), 0.05)
		// camera.position.lerp(vec.set(mouse.y * 2, 1, 60), 0.05)
	});
	// useFrame(() => camera.position.lerp(vec.set(mouse.x * 2, 1, 60), 0.05))

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
					position={[-5.28, 4.8, 5.12]}
					// rotation={[-Math.PI, 0.73, -Math.PI]}
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

			<OrbitControls ref={control} />
			{/* <CameraShake controls={control} maxYaw={0.01} maxPitch={0.01} maxRoll={0.01} yawFrequency={0.5} pitchFrequency={0.5} rollFrequency={0.4} /> */}

			{/* <CameraShake maxYaw={0.01} maxPitch={0.01} maxRoll={0.01} yawFrequency={0.5} pitchFrequency={0.5} rollFrequency={0.4} /> */}
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
	
	return (
		<CanvasLayout>
			<fog attach="fog" args={['lightpink', 60, 100]} />
			<Box />
		</CanvasLayout>
	)
}


// const Rig: FC = () => {

// 	useFrame(() => camera.position.lerp(vec.set(mouse.x * 2, 1, 60), 0.05))
// 	return <CameraShake maxYaw={0.01} maxPitch={0.01} maxRoll={0.01} yawFrequency={0.5} pitchFrequency={0.5} rollFrequency={0.4} />
// }




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