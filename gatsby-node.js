const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)


exports.onCreateNode = ({ node, getNode, actions })=> {
    const { createNodeField } = actions;

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

exports.createPages = async ({ graphql, actions })=> {
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

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html" || stage === "develop-html") {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /html2pdf\.js/,
                        use: loaders.null(),
                    }
                ],
            },
        })
    }
}