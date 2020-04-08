import React, { useEffect } from 'react';
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import TransitionLink from "gatsby-plugin-transition-link"
import { css } from "@emotion/core"

export default (props) => {


	return (
		<Layout>
			<div className="scroll-content" css={css`height: 100%; width: 100%;`}>
				<h1 className="lax" data-lax-preset="fadeInOut" style={{ margin: 0 }}>About me</h1>
				<p className="lax" data-lax-opacity="0 1, vh 0">Look at me goooooo!</p>

				<p>{props.data.site.siteMetadata.about}</p>
				<h1>About me</h1>
				<p>{props.data.site.siteMetadata.about}</p>
				<h1>About me</h1>
				<p>{props.data.site.siteMetadata.about}</p>
				<h1>About me</h1>
				<p>{props.data.site.siteMetadata.about}</p>
				<h1>About me</h1>
				<p>{props.data.site.siteMetadata.about}</p>
				<h1>About me</h1>
				<p>{props.data.site.siteMetadata.about}</p>
				<h1>About me</h1>
				<p>{props.data.site.siteMetadata.about}</p>
				<h1>About me</h1>
				<p className="lax" data-lax-preset="spin fadeInOut">{props.data.site.siteMetadata.about}</p>
				<h1>About me</h1>
				<p>{props.data.site.siteMetadata.about}</p>
				<h1>About me</h1>
				<p>{props.data.site.siteMetadata.about}</p> <h1>About me</h1>
				<p>{props.data.site.siteMetadata.about}</p> <h1>About me</h1>
				<p>{props.data.site.siteMetadata.about}</p> <h1>About me</h1>
				<p>{props.data.site.siteMetadata.about}</p> <h1>About me</h1>
				<p>{props.data.site.siteMetadata.about}</p> <h1>About me</h1>
				<p>{props.data.site.siteMetadata.about}</p> <h1>About me</h1>
				<p>{props.data.site.siteMetadata.about}</p>
			</div>

		</Layout>

	)
}

// export const query = graphql`
//   {
//     allFile {
//       edges {
//         node {
//           id
//           base
//           accessTime
//           name
//           size
//         }
//       }
//     }
//   }
// `
export const query = graphql`
  {
    site {
      siteMetadata {
        about
        title
      }
      buildTime
    }
  }
`

// export const query = graphql`
//   query About {
//     site {
//       siteMetadata {
//         title,
//         about
//       }
//     }
//   }
// `