import React, { useEffect } from 'react';
import Layout from '../components/layout'
import { graphql } from 'gatsby'

export default (props) => {
    useEffect(()=> {
        // console.log(props);
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