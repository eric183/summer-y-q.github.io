import React, { Fragment, useState } from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import CanvasModule from '../components/webgl-canvas';
import { css } from '@emotion/core'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql } from 'gatsby';

// import  { bodyFontFamily } from '../utils/typography' 
// Annie Use Your Telescope

export default ({ data }) => {
	const [hasLoaded, setLoad] = useState(false)
	const loadBinder = (value) => {
		setLoad(value);
	}
	// console.log(data);
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
			align-items: center;
			justify-content: center;`
		}>
			<img src="bean.gif" css={css`display: ${ !hasLoaded ? "block" : "none" }; position: relative; z-index: 1;`}/>
			<CanvasModule loadBinder={ loadBinder }/>
		</div>
		// <Layout>
		// 	{/* <BlogContent data={data}></BlogContent> */}
		
		// </Layout>
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