import React from 'react';
import Layout from '../components/layout'

import { graphql } from 'gatsby'
import { css } from "@emotion/core"

export default (props) => {


	return (
		<Layout>
			<div className="scroll-content" css={css`height: 100%; width: 100%;`}>
				<h1 className="lax" data-lax-preset="fadeInOut" style={{ margin: 0 }}>About me</h1>
				<p className="lax" data-lax-translate-x="0 0, vh 1200">Look at me goooooo!</p>
				{/* <AniBlock className="lax" data-lax-translate-x="0 0, vh 1200">
					<h3>了不起哦</h3>
					<p>我是正文</p>
				</AniBlock>
				<AniBlock className="lax" data-lax-translate-x="0 0, vh 1200">
					<h3>了不起哦</h3>
					<p>我是正文</p>
				</AniBlock>
				<AniBlock className="lax">
					<h3>了不起哦</h3>
					<p>我是正文</p>
				</AniBlock>
				<AniBlock className="lax" data-lax-translate-x="0 0, vh 1200">
					<h3>了不起哦</h3>
					<p>我是正文</p>
				</AniBlock>
				<AniBlock className="lax" data-lax-translate-x="0 0, vh 1200">
					<h3>了不起哦</h3>
					<p>我是正文</p>
				</AniBlock>
				<AniBlock className="lax" data-lax-translate-x="0 0, vh 1200">
					<h3>了不起哦</h3>
					<p>我是正文</p>
				</AniBlock>
				<AniBlock className="lax" data-lax-translate-x="0 0, vh 1200">
					<h3>了不起哦</h3>
					<p>我是正文</p>
				</AniBlock>
				<AniBlock className="lax" data-lax-translate-x="0 0, vh 1200">
					<h3>了不起哦</h3>
					<p>我是正文</p>
				</AniBlock>
				<AniBlock className="lax" data-lax-translate-x="0 0, vh 1200">
					<h3>了不起哦</h3>
					<p>我是正文</p>
				</AniBlock>
				
				<p className="lax" data-lax-preset="spin fadeInOut">{props.data.site.siteMetadata.about}</p>
				<h1>About me</h1>
				<p>{props.data.site.siteMetadata.about}</p> */}
		
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