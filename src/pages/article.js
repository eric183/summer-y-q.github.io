import React, { Fragment, useState, useRef } from "react"
import { Canvas, useFrame } from 'react-three-fiber'


import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import CanvasModule from '../components/webgl-canvas';
import { css } from '@emotion/core'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "../styles/global.css";

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

export default ({ data }) => {
	const [hasLoaded, setLoad] = useState(false)
	const loadBinder = (value) => {
		setLoad(value);
	}
	// console.log(data);
	return (
		// <div css={css`
		// 	position: fixed; 
		// 	width: 100%; 
		// 	height: 100%; 
		// 	left: 0; 
		// 	right: 0; 
		// 	top: 0; 
		// 	bottom: 0;
		// 	display: flex;
		// 	align-items: center;
		// 	justify-content: center;`
		// }>
		// 	{/* <img src="bean.gif" css={css`display: ${!hasLoaded ? "block" : "none"}; position: relative; z-index: 1;`} /> */}
		// 	<CanvasModule loadBinder={loadBinder} />
		// 	{/* <Canvas>

		// 		<Box position={[-1.2, 0, 0]}  />
		// 	</Canvas> */}

		// </div>
		<Layout>
			<BlogContent data={data}></BlogContent>

		</Layout>
	)
}

const AnimateText = (props) => {

	return (
		<div className="text-content">

		</div>
	)
}

const BlogContent = ({ data }) => {

	return (
		<Fragment>
			<h4>{data.site.siteMetadata.desc}</h4>

			{data.allMarkdownRemark.edges.map(({ node }) => (

				<AniLink key={node.id} swipe direction="down" duration={0.5} to={node.fields.slug}>
					{/* Go to Page 4 */}

					<article>
						<h3>
							{node.frontmatter.title}{" "}
							<span
								css={css`
								color: #bbb;`}
							>
								{/* — {node.frontmatter.date} */}
							</span>
						</h3>
						<p>{node.excerpt}</p>
					</article>
				</AniLink>

			))}

		</Fragment>
	)
}

const Box = (props) => {
	// This reference will give us direct access to the mesh
	const mesh = useRef()
  
	// Set up state for the hovered and active state
	const [hovered, setHover] = useState(false)
	const [active, setActive] = useState(false)
  
	// Rotate mesh every frame, this is outside of React without overhead
	useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  
	return (

			<mesh
				{...props}
				ref={mesh}
				scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
				onClick={(e) => setActive(!active)}
				onPointerOver={(e) => setHover(true)}
				onPointerOut={(e) => setHover(false)}>
				<boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
				<meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} />
			</mesh>
	)
  }

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            date
			title
          }
          timeToRead
          html
          excerpt
          fields {
            slug
          }
        }
      }
      totalCount
	}
	site {
	id
	siteMetadata {
			title
			about
			author
			fontFamily
			desc
		}
	}
	
  }
`