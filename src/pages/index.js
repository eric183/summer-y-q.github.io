import React from "react"


// import { graphql } from 'gatsby'
// import CanvasModule from '../components/webgl-canvas';
import { css } from '@emotion/react'


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

const Index = (props) => {
	// const [, setLoad] = useState(false)
	// const loadBinder = (value) => {
	// 	setLoad(value);
	// }
	console.log(props);
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
			justify-content: center;`
		}>
			<p>Backsn</p>
			<p>Please wait hi</p>
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