import React, { FC } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

interface SiteType {
    data: GatsbyTypes.FileSystemTypeQuery
}

const FileSystem: FC<SiteType> = ({ data }) => {
    // console.log(data)
    return (
        <Layout>
            <div>
                <h1>My Site's Files</h1>
                <table>
                    <thead>
                        <tr>
                            <th>relativePath</th>
                            <th>prettySize</th>
                            <th>extension</th>
                            <th>birthTime</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.allFile.edges.map(({ node }, index) => (
                            <tr key={index}>
                                <td>{node.relativePath}</td>
                                <td>{node.prettySize}</td>
                                <td>{node.extension}</td>
                                <td>{node.birthTime}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}
export const query = graphql`
  query FileSystemType {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`

export default FileSystem;