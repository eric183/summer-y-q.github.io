require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})


console.log('.................',  process.env.NODE_ENV);
console.log('dddddddddddddd',   process.env.SANITY_PROJECT_ID);

module.exports = {
    // flags: {
    //     DEV_SSR: false,
    // },
    plugins: [
        'gatsby-plugin-postcss',
        `gatsby-plugin-transition-link`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-image`,
        `gatsby-plugin-emotion`,
        {
            resolve: `gatsby-source-sanity`,
            options: {
                projectId: process.env.SANITY_PROJECT_ID,
                dataset: process.env.NODE_ENV,
                token: process.env.SANITY_TOKEN,
                graphqlTag: process.env.GRAPHQL_TAG,
            },
        },
        {
            // resolve: `gatsby-plugin-graphql-codegen`,
            resolve: `gatsby-plugin-typegen`,
            options: {
                outputPath: `types/gatsby-types.d.ts`,
                emitSchema: {
                    '__generated__/gatsby-schema.graphql': true,
                }
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
                omitGoogleFont: false
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `GatsbyJS`,
                short_name: `GatsbyJS`,
                start_url: `/`,
                background_color: `#6b37bf`,
                theme_color: `#6b37bf`,

                display: `standalone`,
                icon: `${__dirname}/src/images/head.jpg`
            }
        },
        // {
        //     resolve: 'gatsby-plugin-typescript',
        //     options: {
        //       transpileOnly: true, // default
        //       compilerOptions: {
        //         target: 'es5',
        //         experimentalDecorators: true,
        //         jsx: `react`
        //       }, // default
        //     }
        //   },
    ],
}