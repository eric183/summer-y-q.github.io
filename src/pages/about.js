import React, { useEffect } from 'react';
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import TransitionLink from "gatsby-plugin-transition-link"

export default (props) => {
    useEffect(()=> {
        // console.log(globalHistory);
    })
    
    return (
        <Layout>
            <h1>About me</h1>
            <p>{props.data.site.siteMetadata.about}</p>
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