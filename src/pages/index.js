import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { css } from '@emotion/core'
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default ({ data }) => {


	return (
		<Layout>

				<h4>{data.allMarkdownRemark.totalCount} Posts</h4>
				{data.allMarkdownRemark.edges.map(({ node }) => (
				
					<AniLink key={node.id} swipe direction="right" duration={0.5} to={node.fields.slug}>
					{/* Go to Page 4 */}

						<div>
							<h3>
								{node.frontmatter.title}{" "}
								<span
									css={css`
									color: #bbb;
									`}
								>
									— {node.frontmatter.date}
								</span>
							</h3>
							<p>{node.excerpt}</p>
						</div>
					</AniLink>

				))}
			
		</Layout>
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
  }
`