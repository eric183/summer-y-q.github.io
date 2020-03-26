/**
 * @desc webpackConfig file to compile future ECMAscript
 * @param _env {String} environment passed from CLI
 * @return {webpackConfig}
 * @auther ericKuang
 */

// native node module
const path = require("path");
const fs = require("fs");
const process = require("process");
const child_process = require("child_process");
const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const cheerio = require("cheerio");


const CopyPlugin = require("copy-webpack-plugin");

const entryObj = {};
const VERSION = nowTime();
const GIT_HASH = child_process
    .execSync("git rev-parse HEAD")
    .toString()
    .slice(0, 7);


// variables
// const PROJECT_INFO = require("../config/index.js");

// let BUILD_OBJECT = PROJECT_INFO.config.projects.filter(x => {
//     if (x.name === PROJECT_INFO.config.dev.name) {
//         return x;
//     }
// })[0];


// BUILD_OBJECT = require(`../config/projects/${BUILD_OBJECT.name}.json`);

// BUILD_OBJECT = {
//     ...BUILD_OBJECT,
//     version: BUILD_OBJECT.version,
//     hash: GIT_HASH,
//     BUILD_STRING: buildVersionFile
// };

entryObj['wen'] = [path.join(__dirname, "../src", "main.js")];

// const ENV_OBJECT = { apiInfo: BUILD_OBJECT.apiInfo }

module.exports = ({ ENV }) => {
    // console.log(process.env.NODE_ENV);

    console.log(ENV)
    return {
        // devtool: false,
        devtool: "inline-source-map",
        mode: process.env.NODE_ENV,
        optimization: {
            // minimize: true,
            minimizer: [
                new UglifyJSPlugin({
                    uglifyOptions: {
                        compress: {
                            drop_console: true
                        }
                    }
                })

                // new TerserPlugin({
                //     parallel: true,
                //     cache: true,
                //     extractComments: true,

                //     // exclude: /node\_modules/,

                //     terserOptions: {
                //         // ecma: undefined,
                //         extractComments: 'all',
                //         compress: {
                //             drop_console: true,
                //         },
                //         // output: {
                //         //     comments: false,
                //         // },
                //         // parse: {},
                //         // warnings: false,
                //         // mangle: true, // Note `mangle.properties` is `false` by default.

                //     },

                // }),
            ]
            // splitChunks: {
            //     chunks: 'async',
            //     minSize: 30000,
            //     minChunks: 1,
            //     maxAsyncRequests: 5,
            //     maxInitialRequests: 3,
            //     automaticNameDelimiter: '~',
            //     // name: true,
            //     cacheGroups: {
            //         vendors: {
            //             chunks: "async",
            //             name: "verdors",
            //             test: /[\\/]node_modules[\\/]/,
            //             enforce: true,
            //             priority: -10
            //         },
            //         // "ali-oss": {
            //         //     test: /ali\-oss/,
            //         //     name: "ali-oss",
            //         //     chunks: "initial",
            //         //     enforce: true
            //         // },
            //         default: {
            //             minChunks: 2,
            //             priority: -20,
            //             reuseExistingChunk: true
            //         }
            //     }
            // },
        },

        entry: entryObj,

        // ['babel-polyfill', buildObject.entryFile],
        output: {

            path: path.resolve(__dirname, '../dist', './'),
            filename:  ENV === 'DEVELOPMENT' ? '[name].js' : assetsPath('js/[name].js'),
            chunkFilename: assetsPath("js/[id].js"),
            // publicPath: `/dist/${nowTime()}/`
            publicPath: '/'

        },
        module: {
            rules: [
               
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: "babel-loader",
                            options: {
                                extends: path.join(__dirname, "..", ".babelrc")
                                // presets: ['babel-preset-env', 'babel-preset-react'].map(require.resolve)
                            }
                        }
                    ]
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        "style-loader",
                        {
                            loader: "css-loader",
                            options: {
                                importLoaders: 1
                                // modules: true
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                implementation: require("sass"),
                                fiber: require("fibers"),
                                indentedSyntax: false // optional
                            }
                        }
                        // {
                        //     loader: 'postcss-loader',
                        //     options: {
                        //         config: {
                        //             path: 'bin/postcss.config.js'
                        //         }
                        //     }
                        // }
                    ]
                    // exclude: /node_modules/,


                    
                    // oneOf: [
                    //     //只对module生效
                    //     postcssModuleCompiler(/module/),
                    //     postcssModuleCompiler()
                    // ]
                },
                // {
                //     test: /\.svg$/,
                //     loader: "svg-sprite-loader",
                //     include: [resolve("src/icons")]
                // },
                {
                    test: /\.(png|jpe?g|gif|ico|svg)(\?.*)?$/,
                    loader: "file-loader",
                    // exclude: [
                    //     resolve('..', "src/icons")
                    // ],
                    include: [resolve("src")],
                    options: {
                        limit: 10000,
                        name: assetsPath("img/[name].[hash:7].[ext]")
                    }
                },
                {
                    test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                    loader: "file-loader",

                    options: {
                        limit: 10000,
                        name: assetsPath("media/[name].[hash:7].[ext]")
                    }
                },
                {
                    test: /\.(glb|gltf|usdz)(\?.*)?$/,
                    loader: "file-loader",

                    options: {
                        limit: 10000,
                        name: assetsPath("models/[name].[hash:7].[ext]")
                    }
                },
                {
                    test: /\.(woff|woff2?|eot|ttf|otf)(\?.*)?$/,
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        name: assetsPath("fonts/[name].[hash:7].[ext]")
                    }
                    // exclude: [resolve("src/assets/css/iconfont")]
                }
            ]
        },
        // plugins: process.env.NODE_ENV == "production" ? getPluginArray(ENV).concat([new UglifyJSPlugin()]) : getPluginArray(ENV),
        plugins: getPluginArray(ENV),
        resolve: {
            extensions: [
                ".js",
                ".jsx",
                ".ts",
                ".tsx",
                ".json",
                ".scss",
            ],
            alias: {
                // ENTRY_DIR: path.resolve(__dirname, '..'),
                util: path.resolve(__dirname, "..", "util"),
                "@": path.resolve(__dirname, "..", "src"),
                // 'compressor': 'compressorjs/dist/compressor.esm.js',
                // app: path.resolve(componentDir, 'app')
                // vue$: "vue/dist/vue.esm.js" // 用 webpack 1 时需用 'vue/dist/vue.common.js'
                // 'element-ui': path.resolve(__dirname, '..', 'node_modules/element-ui/lib'),
                // 'element-ui/lib/theme-chalk/index.css': path.join(__dirname, '..', 'node_modules/element-ui/lib/theme-chalk/index.css'),

                // modules: path.resolve(__dirname, '..', 'node_modules'),
                // vue: path.resolve(__dirname, 'node_modules/vue/dist/vue.common.js'),
                // lodash: path.resolve(__dirname,'node_modules/lodash/')
            },
            modules: [
                path.resolve(__dirname, "..", "node_modules"),
               
                path.resolve(__dirname, "..", "src/assets/css")
                // path.join(__dirname, projectName, buildJson.config.build.entryPath)
            ]
        },
        resolveLoader: {
            modules: [path.resolve(__dirname, "..", "node_modules")]
        }
    };
};

function getPluginArray(ENV) {
    // console.log(ENV);
    ENV = !!ENV ? ENV : process.env.NODE_ENV.toUpperCase();
    console.log("ENVIRONMENT IS : " + ENV);
    ENV = ENV == "DIST" ? "DEVELOPMENT" : ENV;
    // require('../')

    // replaceCodeHTMLVal(BUILD_OBJECT, ENV);

    return ENV == "ANALYSE"
        ? [new BundleAnalyzerPlugin()]
        : [].concat([
              // new ExtractTextPlugin(buildObject.cssOutFile + ".css"),
              // new MiniCssExtractPlugin({
              //     filename: "static/css/[name].css",
              //     // chunkFilename: "[id].css",
              //     publicPath: '../'
              // }),

              // new webpack.ProgressPlugin((percentage, message, ...args) => {
              //     // e.g. Output each progress message directly to the console:
              //     console.info(percentage);
              // }),
              // new UglifyJSPlugin(),
              // new UglifyJSPlugin(),
            //   new CopyPlugin([{ from: path.join(__dirname, '../static/ele-bin'), to: "../" }]),

              new webpack.HotModuleReplacementPlugin(),

              new webpack.NamedModulesPlugin(),

     
              new ProgressBarPlugin(),
              new webpack.HashedModuleIdsPlugin(),
              new webpack.optimize.ModuleConcatenationPlugin(),
              new webpack.DefinePlugin({
                  // ENV: JSON.stringify("production"),
                //   ENV_OBJECT: JSON.stringify({ ...BUILD_OBJECT }),
                  ENV: JSON.stringify(ENV),
                //   MODULES_IMPORT: JSON.stringify(
                //       require(`../config/module/${BUILD_OBJECT.name}.json`)
                //   )
                  // SERVICE_URL: JSON.stringify(buildObj.config.stringToHtmls.devStr),
                  // 'process.env.NODE_ENV': JSON.stringify("development"),
              }),
              new webpack.LoaderOptionsPlugin({
                  options: {
                      babel: {
                          extends: path.join(__dirname, "..", ".babelrc")
                      }
                  }
              }),
              new webpack.ProvidePlugin({
                  axios: "axios",
                  moment: "moment",
                  ReactRedux: "react-redux",
                //   THREE: "three/build/three.min.js"

                  // ...
              }),
              new HtmlWebpackPlugin({
                title: "ziwen's homePage",
                inject: false,
                version: VERSION,
                ENV: ENV,
                // favicon: {
                //     icon: `${nowTime()}/static/img/favicon.ico`
                // },
                // hash: true,
                // inject: false,
                // filename: path.join(__dirname, '../dist/index.html'),
                filename: path.join(__dirname, "../index.html"),
                template: path.join(
                    __dirname,
                    "../static/sites/index.html"
                )
                // chunksSortMode: 'none'
            }),
              // new MinifyPlugin({})
              // new CopyPlugin([
              //     { from: '../static/js/Util.js', to: '../dist' + BUILD_OBJECT.version }
              // ])
          ]);
}

function resolve(dir) {
    return path.join(__dirname, "..", dir);
}

function assetsPath(_path) {
    const assetsSubDirectory =
        process.env.NODE_ENV === "development" ? "static" : "static";
    return path.posix.join(assetsSubDirectory, _path);
}

function nowTime() {
    let DATE = new Date();
    let _year = DATE.getFullYear()
        .toString()
        .slice(2);
    let _month =
        (DATE.getMonth() + 1).toString().length == 1
            ? 0 + (DATE.getMonth() + 1).toString()
            : (DATE.getMonth() + 1).toString();
    let _date =
        (DATE.getDate() + 1).toString().length == 1
            ? 0 + (DATE.getDate() + 1).toString()
            : (DATE.getDate() + 1).toString();
    let _hours =
        (DATE.getHours() + 1).toString().length == 1
            ? 0 + (DATE.getHours() + 1).toString()
            : (DATE.getHours() + 1).toString();
    let _seconds =
        (DATE.getSeconds() + 1).toString().length == 1
            ? 0 + (DATE.getSeconds() + 1).toString()
            : (DATE.getSeconds() + 1).toString();

    return _year + _month + _date + _hours + _seconds + "/";
}

function replaceCodeHTMLVal(BUILD_OBJECT, env) {
    $("#code").attr("data-env", BUILD_OBJECT.apiInfo.business[env]);
    fs.writeFileSync(path.join(__dirname, "..", "code.html"), $.html());
}
