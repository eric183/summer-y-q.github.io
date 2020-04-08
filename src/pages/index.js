import React, { Fragment } from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { css } from '@emotion/core'
import AniLink from "gatsby-plugin-transition-link/AniLink"


// import  { bodyFontFamily } from '../utils/typography' 
// Annie Use Your Telescope

export default ({ data }) => {

	// console.log(data);
	return (
		<Layout>
			{/* <BlogContent data={data}></BlogContent> */}
		</Layout>
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
					color: #bbb;
					`}
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