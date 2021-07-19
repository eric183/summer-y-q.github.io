module.exports = {
    // flags: {
    //     DEV_SSR: false,
    // },
    siteMetadata: {
        title: "你好",
        about: "A develop & A named artist",
        author: "EricKuang",
        // fontFamily: "'Spicy Rice', cursive",
        fontFamily: "'Pacifico', cursive",
        desc: "WAHT YOU WANT, WHAT YOU NEED",

        resumeInfo: {
            name: "匡志宸",
            // title: "前端工程师、游戏工程师、GIS工程师",
            title: "前端工程师、TA工程师",
            years: "五",
            // desc: "Hello，我叫匡志宸，来自内蒙古鄂尔多斯的南方人，大学专业是英语，自学入行开发到现在有五年半的时间，其中前端开发是主职，目前主流的前端项目（BC端）几乎都有参与主导过研发，主要内容有程序产品与功能开发，并做过1-2年的团队管理，参与过技术选型与及技术架构设计。目前职业方向是C端orB端主程业务开发。特长是客户端3D渲染、游戏、CG动画",
            desc: "很高兴认识你，简单自我介绍下。我是一位转行的程序员，大学专业是英语，11年离开校园后在赴美实习，回国后准备自学转行，于2015年开始从事前端与可视化技美研发到现在有快六个年头，做过直播、服装设计趋势、GIS、电商等等行业的商业项目，有丰富的互联网产品开发经验，擅长BC各平台客户端研发，带过前端团队，有过BI、GIS、CMS、SaaS、DevOps系统的开发经验，略懂设计和3D美术，对跨终端开发有浓厚的兴趣且稍有研究。\n目前身兼某独立游戏小组制作人，负责3D美术、编程与剧情脚本的工作。\n现阶段个人主要技术栈为：Typescript、 Javascript、 React、 Threejs、 Vue、 DeckGl、 Unreal Engine、 Blender",
            social: [
                { text: "16675196790", link: "", icon: "\ue900" },
                { text: "net.happylandle.club", link: "https://net.happylandle.club", icon: "\ue8fc" },
                { text: "github.com/eric183", link: "https://github.com/eric183", icon: "\ue8ef" },
                { text: "kk297466058@gmail.com", link: "", icon: "\ue8e3"},
            ],
            experience: [
                {
                    company: '中正信息科技有限公司',
                    title: '高级前端工程师',
                    from: '2019.01.01',
                    to: '2020.04.27',
                    addr: '深圳/南山',
                    children: [
                        {
                            name: "B端CMS项目SaaS化重构",
                            role: '前端项目负责人、主程、前端架构',
                            withSkills: [
                                'Docker',
                                'Nodejs',
                                'Webpack',
                                'React',
                                'Redux',
                                'Element',
                                'Echart',
                            ],
                            isPrivate: true,
                            desc: "我接手项目后，与技术主管一起对业务结构进行梳理，开始着手将对项目进行SaaS化重构，重新设计了脚手架配置，以npm scripts驱动项目参数构建，差异化meta数据并拆分成json配置文件，合并业务结构entry, 最终多个CMS项目合并为一个配置化高复用的前端组件项目;[\b]参与整合devOps，编写dockerFile，语义化构建版本，梳理前端代码规范，替换原本的Javascript，改为Typescript，由webpack ts-loader编译输出生产，最终降低了code review的成本，提高了整体的前端代码质量，运维成本与生产环节的稳定性得到质的提升。",
                            link: null
                        },
                        {
                            name: "WebGl智慧城市展厅",
                            role: '主程、前端架构',
                            withSkills: [
                                'Webpack',
                                'React',
                                'Mobx',
                                'Echart',
                                'Electron',
                            ],
                            isPrivate: true,
                            desc: "2019高交会与房博会数字展厅参展项目，3D美术与程序脚本的构建都由我一人独立完成，为求快速技术预演与迭代开发，实时渲染选择了webgl，框架层选择Threejs，3D模型通过Blender插件构建，WebSocket多终端控制，技术预演与功能开发并行，BI数据展示选择了沉淀项目里的Echart组件，动画选用了Lottie，方便与UI高效对接，Electron打包成exe程序以安装包的形式交付，最终项目成功展出，并获得第二十一届高交会“优秀展示奖”",
                            link: null
                        },
                    ],
                },
                {
                    company: '星潮热点传媒有限公司',
                    title: '前端TL',
                    from: '2017.08',
                    to: '2018.12',
                    addr: '深圳/福田',
                    children: [
                        {
                            name: "B端面料管理系统CMS ",
                            role: '前端项目负责人、主程、前端架构',
                            withSkills: [
                                'Docker',
                                'Node',
                                'Webpack',
                                'React',
                                'Redux',
                                'Element'
                            ],
                            isPrivate: true,
                            desc: "项目初期参与LayUI旧系统业务开发，经过一个月的项目架构熟悉，开始着手前后端分离重构，编写了dockerfile，引入工程与组件开发的概念，框架层选用React，数据状态使用Mobx进行业务开发，并同时对公司前端组同学进行技术培训，制定规范，历时2个月，加班加点项目按时上线，组内同学技术水平得到质的提升，此项目后，正式接管前端组织架构并担任前端业务负责人",
                            link: null
                        },
                        {
                            name: "发现面料小程序BC端",
                            role: '前端项目负责人、主程、前端架构',
                            withSkills: [
                                'Javascript',
                            ],
                            isPrivate: true,
                            // desc: "入职星潮热点的第一个中型项目，是发现面料的小程序子版本，服务于用户的服装面料订购、灵感推介。前端由我一人负责，采用原生方案开发【当时未有三方框架】，开发历时不到一个月，提前上线 ",
                            desc: "",
                            link: null
                        },
                    ],
                }
            ],
                // {
                //     name: "strange stories（Demo）",
                //     withSkills: ["Unity"],
                //     isPrivate: true,
                //     desc: "正在立项的游戏项目，已有美术和程序，脚本选型中，程序每日构建",
                //     link: "https://game.happylandle.club"
                // },
                // {
                //     name: "大数据可视化科技版(Shader)脚手架",
                //     withSkills: ["WebGl", "ThreeJS", "ReactJS", "Webpack", "WebSocket", "Blender", "Electron"],
                //     desc: "大数据可视化项目，WebGl渲染，JS脚本与Socket控制交互，Blender构建模型，Electron打包输出EXE安装包",
                //     link: "https://www.behance.net/gallery/97483001/chuneng",
                // },
                // {
                //     name: "深业泰然大厦大数据可视化",
                //     withSkills: ["WebGl", "Threejs", "ReactJS", "WebSocket", "Echarts", "Gsap", "Blender", "Electron"],
                //     desc: "为深业泰然打造的3D楼宇可视化大数据, ",
                //     link: "https://www.behance.net/gallery/97483001/tairan",
                // },
                // {
                //     name: "大数据可视化写实版(PBR)脚手架",
                //     withSkills: ["WebGl", "BabylonJS", "ReactJS", "WebSocket", "CityEngine", "Blender", "Substance Painter", "Unreal(预演阶段)", "TensorflowJS(预演阶段)", "Electron"],
                //     desc: "针对于之前Shader版本的可视化大数据PBR开发构建，在之前基础上新加入CityEngine与Substance Painter,期间预演了Unreal与TensorflowJS，预备之后的迭代",
                //     link: "https://www.behance.net/gallery/97483001/chuneng",
                // },
                // {
                //     name: "中国储能大厦大数据可视化",
                //     withSkills: ["WebGl","Babylonjs", "ReactJS", "Webpack", "WebSocket", "Echarts", "Gsap", "Blender", "Electron"],
                //     desc: "中国储能大厦3D展厅的可视化大数据",
                //     link: "https://www.behance.net/gallery/97483001/chuneng",
                // },
                // {
                //     name: "智慧城市展厅",
                //     withSkills: ["WebGl","BabylonJS", "ThreeJS", "ReactJS", "WebSocket", "Echarts", "Gsap", "Blender", "Substance Painter", "CityEngine", "Electron"],
                //     desc: "房博会与高交会展会的可视化大数据",
                //     link: "https://www.behance.net/gallery/97483215/exhibit",
                // },
                // {
                //     name: "中正前端SaaS重构",
                //     withSkills: ["ReactJS", "ReduxJS", "NodeJS", "Webpack"],
                //     desc: "基于之前多个项⽬多配置，在此进⾏项⽬单构建多配置⼊⼝的SaaS重构，完成构建脚本的升级与优化，力求替换掉旧冗余落后的架构",
                //     // link: "https://www.behance.net/gallery/97483215/exhibit",
                // },
                // {
                //     name: "深业产权系统",
                //     withSkills: ["ReactJS", "GoJS"],
                //     desc: "深业产权项目内容定制",
                //     // link: "https://www.behance.net/gallery/97483215/exhibit",
                // },
                // {
                //     name: "平台运营楼管iPad移动端",
                //     withSkills: ["ReactJS", "Material Design"],
                //     desc: "平台应用iPad定制",
                //     // link: "https://www.behance.net/gallery/97483215/exhibit",
                // },
                // {
                //     name: "楼掌门门禁系统小程序",
                //     withSkills: ["ReactJS", "TaroJS"],
                //     desc: "平台门禁⼩程序，并行于门禁App",
                //     // link: "https://www.behance.net/gallery/97483215/exhibit",
                // },
                // {
                //     name: "乌托邦wow-toboom",
                //     withSkills: ["ReactJS", "MoJS", "Gsap"],
                //     desc: "⾯向服装设计的在线⾯料设计系统、部件可⾃由组合拼装并直接⽣成预览⽂件",
                //     link: "http://www.wow-toboom.com",
                // },
                // {
                //     name: "⾯料商店⼩程序",
                //     withSkills: ["wxjs"],
                //     desc: "服装⾯料⼩程序商店，项⽬使⽤原⽣开发",
                //     // link: "https://www.behance.net/gallery/97483215/exhibit",
                // },
                // {
                //     name: "⾯料运营平台",
                //     withSkills: ["VueJS", "ElementJS"],
                //     desc: "服装⾯料运营平台",
                //     // link: "https://www.behance.net/gallery/97483215/exhibit",
                // },

                // {
                //     name: "妈咪问医直播课堂",
                //     withSkills: ["VueJS", "Gulp"],
                //     desc: "妈咪问医是⼀个⾯相医患群体的类分答项⽬，平台基于微信",
                //     // link: "https://www.behance.net/gallery/97483215/exhibit",
                // },
                
            
            // works: [
            //     {
            //         title: "高级前端工程师",
            //         company: "深圳中正信息",
            //         date: {
            //             begin: "2019.01.01",
            //             end: "2020.04.27"
            //         },
            //         desc: "工具脚本定制化，重构了前端SaaS，开发了可视化大数据WebGL项目，开发了企业产权系统",
            //     },
            //     {
            //         title: "前端组长",
            //         company: "深圳星潮热点传播",
            //         date: {
            //             begin: "2017.08",
            //             end: "2019.12"
            //         },
            //         desc: "负责前端团队管理，前端架构梳理维护，框架搭建与技术选型，产品功能研发",
            //     },
            //     {
            //         title: "前端⼯程师",
            //         company: "爱婴慧科技",
            //         date: {
            //             begin: "2016.06",
            //             end: "2017.08"
            //         },
            //         desc: "整合妈咪home，开发线上直播问答系统，之后上线了评论社区功能",
            //     },
            //     {
            //         title: "前端工程师",
            //         company: "斑马王国",
            //         date: {
            //             begin: "2015.03",
            //             end: "2016.01"
            //         },
            //         desc: "运营后台开发，线上活动平台搭建",
            //     }
            // ],
            skill: [
                {
                    name: "Front-end",
                    label: "语言",
                    children: ['React', 'Vue', 'Angular', 'Mobx', 'Redux', 'Vuex', 'Webpack', 'Gulp', 'TaroJS', 'ThreeJS', 'BabylonJS', 'GSAP']
                },
                {
                    name: "Back-end",
                    label: "语言",
                    children: ['Koa', 'Express', 'Gatsby', 'Contentful', 'RPC', 'Graphql', 'REST']
                },
                {
                    name: "Programming",
                    label: "",
                    children: ['Typescript', 'Javascript', 'Nodejs', 'C#', 'LaTeX']
                    // children: ["VueJS",  "Jquery", "Bootstrap"]
                },
                {
                    name: "GIS",
                    label: "WebGl",
                    children: ['高德', '腾讯地图', 'CityEngine', 'OpenStreetMap', 'MapBox', 'DeckGL']
                },
                {
                    name: "Devops",
                    label: "客户端",
                    children: ['Docker', 'Vagrant', 'Jenkins', 'Netlify', 'GitAction']
                },
                {
                    name: "3D Arts",
                    label: "美术素材",
                    children: ['Maya', 'Blender', 'Zbrush', 'Mari', 'Substance']
                },
                {
                    name: "Client",
                    label: "美术素材",
                    children: ['Unity', 'UE4', 'Electron', '小程序']
                },
                {
                    name: "UI & Prototype",
                    label: "美术素材",
                    children: ['Photoshop', 'Figma', 'MindNode', 'Lottie', 'Spine']
                }
            ]

        }
    },
   
    plugins: [
        `gatsby-plugin-transition-link`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-emotion`,
        {
            // resolve: `gatsby-plugin-graphql-codegen`,
            resolve: `gatsby-plugin-typegen`,
            options: {
                outputPath: `types/gatsby-types.d.ts`,
                emitSchema: {
                    '__generated__/gatsby-schema.graphql': true,
                }
            }

            // resolve: `gatsby-plugin-graphql-codegen`,
            // options: {
            //     fileName: `./graphql-types.ts`,
            //     documentPaths: [
            //       './src/**/*.{ts,tsx}',
            //       './node_modules/gatsby-*/**/*.js',
            //       './gatsby-node.ts',
            //     ],
            // }
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