import React, { Fragment, useState } from "react"
// import { useFrame } from 'react-three-fiber'


import { graphql } from 'gatsby'
import Layout from '../components/layout'
// import CanvasModule from '../components/webgl-canvas/webgl-canvas';
import { css } from '@emotion/react'
import AniLink from "gatsby-plugin-transition-link/AniLink"

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

const Article = ({ data }) => {
    
	// console.log(data);
	return (
		<>
			<Layout>
				<BlogContent data={data}></BlogContent>
			</Layout>
		</>
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
	
	)
}


const BlogContent = ({ data }) => {

    const [, setHover] = useState(false);

	return (
		<Fragment>
            <h4 
                className="article-title"
                onMouseEnter={()=> { setHover(true)}}
                onMouseLeave={()=> { setHover(false)}}
                style={{ 
                    display: 'inline-block', 
                    backgroundColor: '#33D9B8',
                    padding: '15px',
                    color: '#fff',
                    borderRadius: '3px',
                    // width: isHover ? '100%' : 'auto'
                }}>{data.site.siteMetadata.desc}</h4>

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

export default Article;