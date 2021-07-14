import path from 'path'
import  { createFilePath } from 'gatsby-source-filesystem'
import  React from 'react'
// import  { GlobalStyle } from '~styles'


export const onCreateNode = ({ node, getNode, actions })=> {
    const { createNodeField, setWebpackConfig } = actions;

    // console.log(node.internal.type);
    if(node.internal.type === `MarkdownRemark`) {
        // const fileNode = getNode(node.parent);
        // console.log(`\n`, fileNode.relativePath, `\n`);
        const slug = createFilePath({ node, getNode, basePath: `pages` });
        createNodeField({
            node,
            name: `slug`,
            value: slug
        });
    }
}

export const createPages = async ({ graphql, actions })=> {
    const { createPage } = actions;
    const result = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);


    // console.log(JSON.stringify(result, null, 4));

    result.data.allMarkdownRemark.edges.forEach(({ node })=> {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/blog-post.js`),
            context: {
                slug: node.fields.slug
            }
        })
    })
}

export const onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html" || stage === "develop-html") {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /html2pdf\.js/,
                        use: loaders.null(),
                    },
                    {
                        test: /threejs\-meshline/,
                        use: loaders.null(),
                    }
                ],
            },
        })
    }

    actions.setWebpackConfig({
        resolve: {
            alias: {
                "~components": path.resolve(__dirname, "src/components"),
                "~static": path.resolve(__dirname, "static"),
                "~styles": path.resolve(__dirname, "src/styles"),
                "~": path.resolve(__dirname, "src"),
            }
        }
    });
}

// export const wrapPageElement = ({ element, props }) => {
//     // const [mounted, setMounted] = useState(false);
//     // useEffect(()=> {
//     //     setMounted(true)
//     // }, [])
// // export const wrapRootElement = ({ element, props }) => {
//     // console.log(element);
//     // // return element;
//     // if(document.querySelector('main')) {
//     return element;
//     // }
//     // return null;
//     // return !!mounted ? renderMethod(<GlobalStyle>{element}</GlobalStyle>, document.body) : null;
//     // return <div {...props}>{element}</div>
// }   
