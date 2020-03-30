import React from "react"
import Layout from '../components/layout'
import { css } from '@emotion/core'


export default ({ data }) => {


    return (
        <Layout>

            <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id}>
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
        }
      }
      totalCount
    }
  }
`