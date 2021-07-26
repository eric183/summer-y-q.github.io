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
            name: ["匡志宸", 'Kuang Zhichen'],
            // title: "前端工程师、游戏工程师、GIS工程师",
            title: [['前端工程师', '技术美术TA'], ['Front-end Engineer', 'TA']],
            years: "五",
            // desc: "Hello，我叫匡志宸，来自内蒙古鄂尔多斯的南方人，大学专业是英语，自学入行开发到现在有五年半的时间，其中前端开发是主职，目前主流的前端项目（BC端）几乎都有参与主导过研发，主要内容有程序产品与功能开发，并做过1-2年的团队管理，参与过技术选型与及技术架构设计。目前职业方向是C端orB端主程业务开发。特长是客户端3D渲染、游戏、CG动画",
            desc: [
                "很高兴认识你，简单自我介绍下。我是一位转行的程序员，大学专业是英语，11年离开校园后在赴美实习，回国后准备自学转行，于2015年开始从事前端与可视化技美研发到现在有快六个年头，做过直播、服装设计趋势、GIS、电商等等行业的商业项目，有丰富的互联网产品开发经验，擅长BC各平台客户端研发，带过前端团队，有过BI、GIS、CMS、SaaS、DevOps系统的开发经验，略懂设计和3D美术，对跨终端开发有浓厚的兴趣且稍有研究。\n目前身兼某独立游戏小组制作人，负责3D美术、编程与剧情脚本的工作。\n现阶段个人主要技术栈为：Typescript、Javascript、React、Threejs、Vue、DeckGl、Unreal Engine、Unity、Zbrush、Blender、Maya",
                "Nice to meet you, briefly introduce myself. I'm a programmer who changed career, majoring in English in college, I left campus in 11 years after going to the US for internship, after returning to China, I'm ready to change career by self-learning, I started to engage in front-end and visualization technology and beauty research and development in 2015, and now I have almost six years, I've done business projects in live, clothing design trend, GIS, e-commerce and other industries, I have rich experience in internet product development, I'm good at BC client development of various platforms, I've led He has rich experience in Internet product development, specializing in client-side development of various BC platforms, leading front-end teams, and has experience in developing BI, GIS, CMS, SaaS, DevOps systems, with a slight understanding of design and 3D art, and a strong interest in cross-terminal development and a little research.Currently, he is also the producer of an independent game team, responsible for 3D art, programming and plot scripting.At this stage, my main technology stack is: Typescript, Javascript, React, Threejs, Vue, DeckGl, Unreal Engine, Unity, Zbrush, Blender, Maya"
            ],
            social: [
                { text: "16675196790", link: "", icon: "\ue900" },
                { text: "net.happylandle.club", link: "https://net.happylandle.club", icon: "\ue8fc" },
                { text: "github.com/eric183", link: "https://github.com/eric183", icon: "\ue8ef" },
                { text: "kk297466058@gmail.com", link: "", icon: "\ue8e3" },
            ],
            experience: [
                {
                    company: '蜜源科技',
                    title: '前端工程师',
                    from: '2021.01.11',
                    to: '2021.07.11',
                    addr: '深圳/南山',
                    isShit: true,
                    children: [
                        {
                            name: "美记商城C端小程序",
                            role: '',
                            withSkills: [
                                'Nodejs',
                                'React',
                                'Redux'
                            ],
                            isPrivate: true,
                            desc: "面向C端的商城小程序，负责日常业务组件开发",
                            link: null
                        },
                        {
                            name: "美记电商中台",
                            role: '',
                            withSkills: [
                                'Nodejs',
                                'React',
                                'Redux'
                            ],
                            isPrivate: true,
                            desc: "负责美记中台日常业务组件开发",
                            link: null
                        },
                        {
                            name: "美记电商CMS",
                            role: '',
                            withSkills: [
                                'Nodejs',
                                'React',
                                'Redux'
                            ],
                            isPrivate: true,
                            desc: "负责美记CMS日常业务组件开发",
                            link: null
                        },
                    ],
                },
                {
                    company: '中正信息科技有限公司',
                    // company: ['中正信息科技有限公司', 'Zhongzheng Information Technology Co., Ltd.'],
                    title: '高级前端工程师',
                    // title: '前端技美',
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
                                'Typescript',
                                'React',
                                'Redux',
                                'Echart',
                            ],
                            isPrivate: true,
                            desc: "我接手项目后，与技术主管一起对业务结构进行梳理，开始着手将对项目进行SaaS化重构，重新设计了脚手架配置，以npm scripts驱动项目参数构建，差异化meta数据并拆分成json配置文件，合并业务结构entry, 最终多个CMS项目合并为一个配置化高复用的前端组件项目;[\b]参与整合devOps，编写dockerFile，语义化构建版本，梳理前端代码规范，替换原本的Javascript，改为Typescript，由webpack ts-loader编译输出生产，最终降低了code review的成本，提高了整体的前端代码质量，运维成本与生产环节的稳定性得到质的提升",
                            link: null
                        },
                        {
                            name: "WebGl智慧城市展厅",
                            role: '主程、前端架构',
                            withSkills: [
                                'Docker',
                                'Nodejs',
                                'Typescript',
                                'Webpack',
                                'WebSocket',
                                'React',
                                'Redux',
                                'Threejs',
                                'Echart',
                                'Electron',
                            ],
                            isPrivate: true,
                            desc: "2019高交会与房博会数字展厅参展项目，3D美术与程序脚本的构建都由我独立完成，为求快速技术预演与迭代开发，实时渲染选择了webgl，框架层选择Threejs，3D模型通过Blender插件构建，基于Halo、Particle Effect手动编写shader，WebSocket多终端控制，技术预演与功能开发并行，BI数据展示选择了沉淀项目里的Echart组件，动画选用了Lottie，方便与UI高效对接，Electron打包成exe程序以安装包的形式交付，最终项目成功展出，并获得第二十一届高交会“优秀展示奖”",
                            link: null
                        },
                        {
                            name: "可视化BI系统视频监控数据系统",
                            role: '主程、前端架构',
                            withSkills: [
                                'Docker',
                                'Nodejs',
                                'Typescript',
                                'Webpack',
                                'React',
                                'Redux',
                                'Threejs',
                                'Echart',
                                'Electron',
                            ],
                            isPrivate: true,
                            desc: "为大数据可视化BI系统开发的视频监控数据系统，因旧api导致无法接入楼宇的监控视频，后经hack脚本处理，拿到websocket的视频流，批量导入楼层监控数据，封装接口后接入可视化应用，为前期的预演开发节省了成本，后期的交付提供保证",
                            link: null
                        },
                        {
                            name: "深业泰然大厦大数据可视化BI系统",
                            role: '主程、前端架构',
                            withSkills: [
                                'Docker',
                                'Nodejs',
                                'Typescript',
                                'Webpack',
                                'React',
                                'Redux',
                                'Threejs',
                                'UE4',
                                'Echart',
                                'Electron',
                            ],
                            isPrivate: true,
                            desc: "为深圳车公庙工贸园区中心地带的深业总部大厦，打造的3D大数据BI可视化展厅，仍然美术与程序脚本由我独立完成，在[WebGl智慧城市展厅]科技版技术沉淀的基础上，引入GIS开发流程（ArcGIS、CityEngine），以求获得更真实的渲染场景，搭配PBR的材质渲染系统，使用UE4重构了智慧城市展厅BI，前卫的视觉呈现得到了国企甲方的认可",
                            link: null
                        },
                        {
                            name: "中国储能大厦大数据可视化BI系统",
                            role: '主程、前端架构',
                            withSkills: [
                                'Docker',
                                "Nodejs",
                                'Typescript',
                                "WebSocket",
                                "Webpack",
                                "React",
                                "Redux",
                                "Echart",
                                "Blender",
                                "Unity"
                            ],
                            isPrivate: true,
                            desc: "为深圳科技园CBD的中国储能大厦，打造的3D大数据BI可视化展厅，仍然美术与程序脚本由我一人负责，不同于[深业泰然大厦大数据可视化BI系统]项目，这里需要对展会项目的[科技版]优化。考虑到原先WebGl的生产瓶颈，遂决定启用Unity的原生方案重构，Unity的材质节点可以更快更方便的调试出更“科技感”的视效",
                            link: null
                        },
                        {
                            name: "深业集团产权系统",
                            role: '主程、前端架构',
                            withSkills: [
                                "Nodejs", "React", "Gastby", "GoJS"
                            ],
                            isPrivate: true,
                            desc: "该项目为其他项目组的滞后功能，因时间紧迫，甲方功能罕见，离交付一周时间，我介入开发，框架层选用React快速开发，刁钻的定制功能，使用关系图库更强大的GoJS，后项目如期交付",
                            link: null
                        },
                        {
                            name: "智能楼宇门禁小程序",
                            role: '主程、前端架构',
                            withSkills: [
                                "Nodejs", "React", "TaroJS"
                            ],
                            isPrivate: true,
                            desc: "独立于智能楼宇的门禁小程序，因app无法覆盖部分轻量场景如包含访客预约、访客邀请等功能，于是我便着手开启该基于小程序的应用。技术栈选用React的开发，所以选择TaroJS，可以快速的迭代，历时一周上线",
                            link: null
                        }
                    ],
                },
                {
                    company: '星潮热点传媒有限公司',
                    title: '前端组长',
                    from: '2016.08',
                    to: '2018.12',
                    addr: '深圳/福田',
                    children: [
                        {
                            name: "B端面料管理系统CMS",
                            role: '前端项目负责人、主程、前端架构',
                            withSkills: [
                                'Docker',
                                'Nodejs',
                                'Webpack',
                                'React',
                                'Mobx',
                                'FabricJS',
                                'MoJS',
                                'GSAP',
                            ],
                            isPrivate: true,
                            desc: "起先面料系统CMS与小程序并行开发，前期我忙于小程序开发，并未参与。当时项目采用thinkphp的框架，前后端不分离，前端用layUI，但项目进展滞后。\n当下只能由我参与重新开发，构建前端工程与预演组件开发，整合制定前端代码规范，引入代码审查机制，编写独立与项目的前端Dockerfile，框架层选用React，数据状态使用Mobx进行业务开发；并同时对公司前端组进行技术培训，历时2个月，加班加点，项目按时上线，前端团队的交付能力和健壮性得到质的提升，而后我被公司高层推选为前端组长",
                            link: null
                        },
                        {
                            name: "wow-toBoom乌托邦面料设计WebApp",
                            role: '前端项目负责人、主程、前端架构',
                            isPrivate: true,
                            withSkills: [
                                'Docker',
                                'Nodejs',
                                'Webpack',
                                'React',
                                'Mobx',
                                'FabricJS',
                                'MoJS',
                                'GSAP'
                            ],
                            desc: "新项目“wow-toBoom乌托邦”是面向独立服装设计的在线灵感编辑产品，发布会进行预售。项目由我负责主导，选择React组件开发，而canvas的操作库考虑到状态的json保存机制，为方便状态栈的读写选择了FabricJS，搭配前沿的动画库MoJS、GSAP",
                            link: null
                        },
                        {
                            name: "发现面料小程序BC端",
                            role: '前端项目负责人、主程、前端架构',
                            isPrivate: true,
                            desc: "星潮热点面向B端OMS与C端采购商城的小程序业务，服务于用户与商户的服装面料订购、灵感推介。独立负责开发完整前端业务组件，采用小程序原生方案开发（当时未有三方框架）",
                            link: null
                        },
                    ],
                },
                {
                    company: '爱婴慧科技有限公司',
                    title: '前端工程师',
                    from: '2015.03',
                    to: '2016.08',
                    addr: '深圳/南山',
                    children: [
                        {
                            name: "妈咪在线课堂WebApp",
                            role: '前端项目负责人、主程、前端架构',
                            withSkills: [
                                'Nodejs',
                                'Gulp',
                                'Webpack',
                                'Vue',
                                'Vuex',
                                'Ricout',
                                'jQuery',
                                'Mqtt',
                            ],
                            isPrivate: true,
                            desc: "项目使用的vue0.21 + jQuery，落后于时代的架构设计导致页面性能极差与维护困难，而且IM聊天室功能使用不稳定的websocket，在两天的紧张开发成功上线之后开始着手整个项目重构，由vue0.21 -> vue1.0的迁移开始，整合制定前端代码规范，弱化jQuery的依赖，引入webpack、babel工作流处理ES6^代码，Gulp构建生产环境，websocket则用Mqtt替换以方便高效的订阅",
                            link: null
                        },
                        {
                            name: "妈咪HOME",
                            role: '前端项目负责人、主程、前端架构',
                            withSkills: [
                                'Nodejs',
                                'Gulp',
                                'Webpack',
                                'Vue',
                                'Vuex',
                                'Ricout',
                                'jQuery'
                            ],
                            isPrivate: true,
                            desc: "该项目整合了面向母婴人群的c端小应用：“妈咪问医”、“妈咪问诊”，“分答管理”，项目框架最开始使用Vue0.21，webpack打包统一入口，第三方工具与入口版本号统一使用Gulp构建，2015年9月利用闲暇时间，项目前端框架构建脚本进行重构，期间考虑到加载性能，去掉css文件加载，于是Sass编译打包到入口main.min.js，以style标签的形式插入文档，首屏加载速度直线上升，从最开始的6s左右减少到700ms左右",
                            link: null
                        }
                    ],
                }
            ],
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
                    children: ['Typescript', 'Javascript', 'Nodejs', 'C#', 'BluePrint']
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
                    children: ['Photoshop', 'Figma', 'MindNode', 'Lottie']
                }
            ],
            sideProjects: [
                {
                    name: "Doomsday Detective Agency",
                    role: '主程、TA',
                    withSkills: [
                        'Unreal',
                        'Megascan',
                        'Zbrush',
                        'Blender',
                        'Substance',
                        'Maya',
                        'Mari',
                        'TextureXYZ'
                    ],
                    isPrivate: true,
                    desc: "独立游戏Doomsday Detective Agency，设定于未来不久的都市探险世界观，类型定位动作探索。由我负责游戏美术和程序脚本的初期预演、技术选型（地编、材质开发、Gameplay脚本编写）并参与故事脚本和世界观构建。\n地形分层实现，底层使用基于GIS技术Heightmap生成，BP辅助构建智能材质球，可碰撞植被使用Unreal自带folige工具、BP脚本生成；人类Actor使用虚拟人项目沉淀技术构建；其他硬表面Mesh使用Blender、Substance和Megascan",
                    link: null
                },
                {
                    name: "德洛丽丝·计划",
                    role: '主程、TA',
                    withSkills: [
                        'Unreal',
                        'Zbrush',
                        'Zwrap',
                        'Mari',
                        'Maya',
                        'Xgen',
                        'TextureXYZ',
                    ],
                    isPrivate: true,
                    desc: "虚拟人偶项目，HighPoly由Zbrush三个常用笔刷产出：ClayBuildup、Move、Standard、DamStardard；Zwrap拓扑LowPoly与AlbedoMap，导出AlbedoMap进Mari后，使用TextureXYZ对Udim贴图集进行修改与优化；使用Xgen添加角色毛发。\n最后在Arnold渲染出产品图，导出生产Mesh到Unreal（开发中） ",
                    link: null
                },
                {
                    name: "深圳市鹏城新风文明C端小程序",
                    role: '主程、前端架构',
                    withSkills: [
                        'Docker',
                        'Nodejs',
                        'Webpack',
                        'React',
                        'TaroJS',
                        'Lottie',
                    ],
                    isPrivate: true,
                    desc: "【深圳文明办】开发的鹏城新风文明小程序，采用TaroJS、React hooks开发，与CMS框架类型高度耦合，前端数据存储采用context原生reduce Api，引入Lottie与UI设计师一起维护实现平滑的动画视效",
                    link: null
                },
                {
                    name: "深圳市鹏城新风文明CMS系统",
                    role: '主程、前端架构',
                    withSkills: [
                        'Docker',
                        'Nodejs',
                        'Webpack',
                        'React',
                    ],
                    isPrivate: true,
                    desc: "用户管理【深圳文明办】的CMS内容系统，使用Ant Design UI，采用React hooks开发，前端数据存储仍然采用context 原生reducer Api",
                    link: null
                },
            ]

        },
        footer: {
            zh: '感谢你花时间阅读到这里，谢谢~',
            en: 'THANK YOU VERY MUCH FOR TAKING THE TIME TO READ MY RESUME'
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