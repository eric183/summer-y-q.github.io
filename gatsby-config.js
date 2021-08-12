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
                "Nice to meet you, briefly introduce myself. I'm a programmer who changed career, majoring in English in college, I left campus in 2011 after going to the US for an internship, and after returning home, I'm ready to change career by self-learning, I started to engage in front-end and visualization technology and technical art and development in 2015 for almost six years now, I've done business projects in live streaming, clothing design trend, GIS, e-commerce and other industries, I have rich experience in internet product development, I'm good at BC client development for all platforms. He has led the front-end team, and has experience in developing BI, GIS, CMS, SaaS and DevOps systems, and he knows a little bit about design and 3D art, and has a strong interest in cross terminal development and a little research."
            ],
            social: [
                { text: "16675196790", link: "", icon: "\ue900" },
                { text: "net.happylandle.club", link: "https://net.happylandle.club", icon: "\ue8fc" },
                { text: "github.com/eric183", link: "https://github.com/eric183", icon: "\ue8ef" },
                { text: "kk297466058@gmail.com", link: "", icon: "\ue8e3" },
            ],
            experience: [
                // {
                //     company: '蜜源科技',
                //     title: '前端工程师',
                //     from: '2021.01.11',
                //     to: '2021.07.11',
                //     addr: '深圳/南山',
                //     isShit: true,
                //     children: [
                //         {
                //             name: "美记商城C端小程序",
                //             role: '',
                //             withSkills: [
                //                 'Nodejs',
                //                 'React',
                //                 'Redux'
                //             ],
                //             isPrivate: true,
                //             desc: "面向C端的商城小程序，负责日常业务组件开发",
                //             link: null
                //         },
                //         {
                //             name: "美记电商中台",
                //             role: '',
                //             withSkills: [
                //                 'Nodejs',
                //                 'React',
                //                 'Redux'
                //             ],
                //             isPrivate: true,
                //             desc: "负责美记中台日常业务组件开发",
                //             link: null
                //         },
                //         {
                //             name: "美记电商CMS",
                //             role: '',
                //             withSkills: [
                //                 'Nodejs',
                //                 'React',
                //                 'Redux'
                //             ],
                //             isPrivate: true,
                //             desc: "负责美记CMS日常业务组件开发",
                //             link: null
                //         },
                //     ],
                // },
                {
                    // company: '中正信息科技有限公司',
                    company: ['中正信息科技有限公司', 'Zhongzheng IT Co.'],
                    title: ['高级前端工程师', 'Senior Front End Engineer'],
                    // title: '前端技美',
                    isShit: false,
                    from: '2019.01.01',
                    to: '2020.04.27',
                    addr: '深圳/南山',
                    children: [
                        {
                            name: ["B端CMS项目SaaS化重构", "SaaS refactoring of B-side CMS projects"],
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
                            desc: [
                                "我接手项目后，与技术主管一起对业务结构进行梳理，开始着手将对项目进行SaaS化重构，重新设计了脚手架配置，以npm scripts驱动项目参数构建，差异化meta数据并拆分成json配置文件，合并业务结构entry, 最终多个CMS项目合并为一个配置化高复用的前端组件项目; 参与整合devOps，编写dockerFile，语义化构建版本，梳理前端代码规范，替换原本的Javascript，改为Typescript，由webpack ts-loader编译输出生产，最终降低了code review的成本，提高了整体的前端代码质量，运维成本与生产环节的稳定性得到质的提升",
                                "After I took over the project, I worked with the technical director to sort out the business structure and started to refactor the project into SaaS, redesigned the scaffolding configuration, drove the project parameter building with npm scripts, differentiated the meta data and split into json configuration files, merged the business structure entry, and finally merged multiple CMS projects into a configurable and highly reusable front-end component project; participated in the integration of devOps, wrote dockerFile and built semantic version, replaced the original Javascript to Typescript, compiled by webpack ts-loader output production, and finally reduced the cost of code review, improve the overall front-end The code quality, the cost of operation and maintenance, and the stability of the production link were qualitatively improved."
                            ],
                            link: null
                        },
                        {
                            name: ["WebGl智慧城市展厅", "WebGl Smart City Showroom"],
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
                            desc: [
                                "2019高交会与房博会数字展厅参展项目，3D美术与程序脚本的构建都由我独立完成，为求快速技术预演与迭代开发，实时渲染选择了webgl，框架层选择Threejs，3D模型通过Blender插件构建，基于Halo、Particle Effect手动编写shader，WebSocket多终端控制，技术预演与功能开发并行，BI数据展示选择了沉淀项目里的Echart组件，动画选用了Lottie，方便与UI高效对接，Electron打包成exe程序以安装包的形式交付，最终项目成功展出，并获得第二十一届高交会“优秀展示奖”",
                                '2019 High Tech Fair and Housing Expo digital exhibition hall project, 3D art and program script construction are done by me independently, for fast technical preview and iterative development, real-time rendering selected webgl, framework layer selected Threejs, 3D model through Blender plug-in construction, based on Halo, Particle Effect manual writing shader, WebSocket multi-terminal control, BI data display selected Echart component in precipitation project, animation selected Lottie, convenient to connect with UI efficiently, Electron packaged into exe, convenient to connect with UI. WebSocket multi-terminal control, technical preview and functional development in parallel, BI data display selected the Echart component in the precipitation project, animation selected Lottie, convenient and UI efficient docking, Electron packaged into exe program delivered in the form of installation package, the final project successfully exhibited and won the 21st High Tech Fair "Excellent Exhibition Award"',
                            ],
                            link: null
                        },
                        {
                            name: ["可视化BI系统视频监控数据系统", "Visualized BI system video surveillance data system"],
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
                            desc: [
                                "为大数据可视化BI系统开发的视频监控数据系统，因旧api导致无法接入楼宇的监控视频，后经hack脚本处理，拿到websocket的视频流，批量导入楼层监控数据，封装接口后接入可视化应用，为前期的预演开发节省了成本，后期的交付提供保证",
                                "Video surveillance data system developed for big data visualization BI system, unable to access the building's surveillance video due to the old api, after hack script processing, get the websocket video stream, batch import floor surveillance data, encapsulate the interface and access the visualization application, saving cost for the pre-rehearsal development and providing guarantee for the later delivery",
                            ],
                            link: null
                        },
                        {
                            name: ["深业泰然大厦大数据可视化BI系统", "Big Data Visualization BI System of Shenzhen Industry Terra Building"],
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
                            desc: [
                                "为深圳车公庙工贸园区中心地带的深业总部大厦，打造的3D大数据BI可视化展厅，仍然美术与程序脚本由我独立完成，在[WebGl智慧城市展厅]科技版技术沉淀的基础上，引入GIS开发流程（ArcGIS、CityEngine），以求获得更真实的渲染场景，搭配PBR的材质渲染系统，使用UE4重构了智慧城市展厅BI，前卫的视觉呈现得到了国企甲方的认可",
                                "The 3D big data BI visualization showroom for Shenzhen Chegongmiao Industrial and Trade Park in the center of Shenzhen, still the art and program scripts were done by me independently, based on the technical precipitation of [WebGl Smart City Showroom] technology version, the GIS development process (ArcGIS, CityEngine) was introduced to get a more realistic rendering scene, with the PBR material rendering system, using UE4 to reconstruct the Smart City Showroom BI, the avant-garde visual presentation was approved by the state-owned enterprise A."
                            ],
                            link: null
                        },
                        {
                            name: ["中国储能大厦大数据可视化BI系统", "China Energy Storage Building Big Data Visualization BI System"],
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
                            desc: [
                                "为深圳科技园CBD的中国储能大厦，打造的3D大数据BI可视化展厅，仍然美术与程序脚本由我一人负责，不同于[深业泰然大厦大数据可视化BI系统]项目，这里需要对展会项目的[科技版]优化。考虑到原先WebGl的生产瓶颈，遂决定启用Unity的原生方案重构，Unity的材质节点可以更快更方便的调试出更“科技感”的视效",
                                'The 3D big data BI visualization showroom for China Energy Storage Building in Shenzhen Science and Technology Park CBD is still art and program scripted by me alone, different from the [Shenye Teran Building Big Data Visualization BI System] project, here we need to optimize the [technology version] of the exhibition project. Considering the original production bottleneck of WebGl, I decided to use Unity\'s native solution to reconstruct, and Unity\'s material node can debug a more "technological" visual effect faster and more conveniently.'
                            ],
                            link: null
                        },
                        {
                            name: ["深业集团产权系统", "SHENYI Group Property Rights System"],
                            role: '主程、前端架构',
                            withSkills: [
                                "Nodejs", "React", "Gastby", "GoJS"
                            ],
                            isPrivate: true,
                            desc: [
                                "该项目为其他项目组的滞后功能，因时间紧迫，甲方功能罕见，离交付一周时间，我介入开发，框架层选用React快速开发，刁钻的定制功能，使用关系图库更强大的GoJS，后项目如期交付", 
                                "The project is a lagging feature for other project teams, due to time constraints, the party's features are rare, a week away from delivery time, I intervened in the development, the framework layer selected React rapid development, tricky custom features, the use of a more powerful GoJS relational library, after the project was delivered as scheduled"
                            ],
                            link: null
                        },
                        {
                            name: ["智能楼宇门禁小程序", "Intelligent building access control applet"],
                            role: '主程、前端架构',
                            withSkills: [
                                "Nodejs", "React", "TaroJS"
                            ],
                            isPrivate: true,
                            desc: [
                                "独立于智能楼宇的门禁小程序，因app无法覆盖部分轻量场景如包含访客预约、访客邀请等功能，于是我便着手开启该基于小程序的应用。技术栈选用React的开发，所以选择TaroJS，可以快速的迭代，历时一周上线", 
                                'Independent of the smart building access control applet, because the app can not cover part of the light scenario such as including visitor reservation, visitor invitation and other functions, so I proceeded to open the applet-based application. I chose React for the development of the technology stack, so I chose TaroJS for fast iteration, and it took one week to go online.'
                            ],
                            link: null
                        }
                    ],
                },
                {
                    company: ['星潮热点传媒有限公司', 'Wow Trend Media Co., Ltd.'],
                    title: ['前端组长', 'Front-end team leader'],
                    from: '2016.08',
                    to: '2018.12',
                    addr: '深圳/福田',
                    children: [
                        {
                            name: ["B端面料管理系统CMS", 'B-side fabric management system CMS'],
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
                            desc: [
                                "起先面料系统CMS与小程序并行开发，前期我忙于小程序开发，并未参与。当时项目采用thinkphp的框架，前后端不分离，前端用layUI，但项目进展滞后。\n当下只能由我参与重新开发，构建前端工程与预演组件开发，整合制定前端代码规范，引入代码审查机制，编写独立与项目的前端Dockerfile，框架层选用React，数据状态使用Mobx进行业务开发；并同时对公司前端组进行技术培训，历时2个月，加班加点，项目按时上线，前端团队的交付能力和健壮性得到质的提升，而后我被公司高层推选为前端组长",
                                "At first, the fabric system CMS and WeChat applet were developed in parallel, and I was busy with WeChat applet development in the early stage, so I did not participate. At that time, the project used the framework of thinkphp, the front-end and back-end were not separated, and the front-end used layUI, but the project progress was lagging behind. \n the moment, I could only participate in redevelopment, build front-end engineering and preview component development, integrate and develop front-end code specification, introduce code review mechanism, write independent and project front-end Dockerfile, choose React for the framework layer, use Mobx for data state business development; and at the same time, technical training for the company's front-end group, which took 2 months, working overtime, the project was launched on time. The front-end team's delivery capability and robustness were qualitatively improved, and I was elected by the company's senior management as the front-end team leader."
                            ],
                            link: null
                        },
                        {
                            name: ["wow-toBoom乌托邦面料设计WebApp", "wow-toBoom Fabric Design WebApp"],
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
                            desc: [
                                "新项目“wow-toBoom乌托邦”是面向独立服装设计的在线灵感编辑产品，发布会进行预售。项目由我负责主导，选择React组件开发，而canvas的操作库考虑到状态的json保存机制，为方便状态栈的读写选择了FabricJS，搭配前沿的动画库MoJS、GSAP",
                                'The new project "wow-toBoom Utopia" is an online inspirational editorial product for independent clothing design, which was launched for pre-sale. The project is led by me, choose React component development, and the canvas operation library to consider the state json preservation mechanism, to facilitate the state stack read and write selected FabricJS, with cutting-edge animation library MoJS, GSAP'
                            ],
                            link: null
                        },
                        {
                            name: ["发现面料小程序BC端", "Discover the BC end of the fabric Wechat applet"],
                            role: '前端项目负责人、主程、前端架构',
                            isPrivate: true,
                            desc: [
                                "星潮热点面向B端OMS与C端采购商城的小程序业务，服务于用户与商户的服装面料订购、灵感推介。独立负责开发完整前端业务组件，采用小程序原生方案开发（当时未有三方框架）",
                                'The WeChat applet business of B-side OMS and C-side procurement malls, serving users and merchants for clothing fabric ordering and inspiration promotion. Independently responsible for the development of complete front-end business components, using WeChat applet native solution development (there was no tripartite framework at the time)'
                            ],
                            link: null
                        },
                    ],
                },
                {
                    company: ['爱婴慧科技有限公司', 'Aiyinghui Technology Co., Ltd.'],
                    title: ['前端工程师', 'Front-end engineer'],
                    from: '2015.03',
                    to: '2016.08',
                    addr: '深圳/南山',
                    children: [
                        {
                            name: ["妈咪在线课堂WebApp", "Mommy Online Class WebApp"],
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
                            desc: [
                                "项目使用的vue0.21 + jQuery，落后于时代的架构设计导致页面性能极差与维护困难，而且IM聊天室功能使用不稳定的websocket，在两天的紧张开发成功上线之后开始着手整个项目重构，由vue0.21 -> vue1.0的迁移开始，整合制定前端代码规范，弱化jQuery的依赖，引入webpack、babel工作流处理ES6^代码，Gulp构建生产环境，websocket则用Mqtt替换以方便高效的订阅",
                                'The project used vue0.21 + jQuery, which was behind the times in terms of architecture design, resulting in extremely poor page performance and maintenance difficulties, and the IM chat room function used unstable websocket, so after two days of intense development and successful launch, we started to refactor the whole project, starting with the migration from vue0.21 -> vue1.0, integrating the front-end code specification, weakening the jQuery dependency, introducing webpack, babel workflow to handle ES6^ code, Gulp to build production environment, websocket was replaced by Mqtt to facilitate efficient subscription'
                            ],
                            link: null
                        },
                        {
                            name: ["妈咪HOME", "Mommy HOME"],
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
                            desc: [
                                "该项目整合了面向母婴人群的c端小应用：“妈咪问医”、“妈咪问诊”，“分答管理”，项目框架最开始使用Vue0.21，webpack打包统一入口，第三方工具与入口版本号统一使用Gulp构建，2015年9月利用闲暇时间，项目前端框架构建脚本进行重构，期间考虑到加载性能，去掉css文件加载，于是Sass编译打包到入口main.min.js，以style标签的形式插入文档，首屏加载速度直线上升，从最开始的6s左右减少到700ms左右",
                                'The project integrates c-terminal small applications for mother and baby people: "Mommy Ask Doctor", "Mommy Ask Clinic", "Answers Management", the project framework started with Vue0.21. webpack packaging unified portal, third-party tools and portal version number unified use of Gulp build, September 2015 use of free time, the project front-end framework build script for refactoring, during the consideration of loading performance, remove the css file loading, so Sass compiled and packaged to the portal main.min.js, in the form of style tags inserted into the document, the first screen loading The speed of the first screen loading has increased dramatically, from about 6s at the beginning to about 700ms'
                            ],
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
                    // children: ['React', 'Vue', 'Angular', 'Mobx']
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
                    hasEn: true,
                    children: ['高德', '腾讯地图', 'CityEngine', 'OpenStreetMap', 'MapBox', 'DeckGL'],
                    enChildren: ['Gaode Map', 'Tencent Map', 'CityEngine', 'OpenStreetMap', 'MapBox', 'DeckGL']
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
                    hasEn: true,
                    children: ['Unity', 'UE4', 'Electron', '小程序'],
                    enChildren: ['Unity', 'UE4', 'Electron', 'WeChat applet'],
                },
                {
                    name: "UI & Prototype",
                    label: "美术素材",
                    children: ['Photoshop', 'Figma', 'MindNode', 'Lottie']
                }
            ],
            sideProjects: [
                {
                    name: ["Doomsday Detective Agency", "Doomsday Detective Agency"],
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
                    desc: [
                        "独立游戏Doomsday Detective Agency，设定于未来不久的都市探险世界观，类型定位动作探索。由我负责游戏美术和程序脚本的初期预演、技术选型（地编、材质开发、Gameplay脚本编写）并参与故事脚本和世界观构建。\n地形分层实现，底层使用基于GIS技术Heightmap生成，BP辅助构建智能材质球，可碰撞植被使用Unreal自带folige工具、BP脚本生成；人类Actor使用虚拟人项目沉淀技术构建；其他硬表面Mesh使用Blender、Substance和Megascan", 
                        'Indie game Doomsday Detective Agency, set in the near future urban adventure worldview, genre positioning action exploration. I was responsible for the initial preview of the game art and program scripts, technical selection (ground editor, material development, Gameplay scripting) and participated in the story script and worldview construction. \n terrain layered implementation, the bottom layer using GIS-based technology Heightmap generation, BP-assisted construction of intelligent material ball, collidable vegetation using Unreal comes with folige tools, BP script generation; human Actor using virtual human project sedimentation technology to build; other hard surface Mesh using Blender, Substance and Megascan'
                    ],
                    link: null
                },
                {
                    name: ["德洛丽丝·计划", "Deloris Project"],
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
                    desc: [
                        "虚拟人偶项目，HighPoly由Zbrush三个常用笔刷产出：ClayBuildup、Move、Standard、DamStardard；Zwrap拓扑LowPoly与AlbedoMap，导出AlbedoMap进Mari后，使用TextureXYZ对Udim贴图集进行修改与优化；使用Xgen添加角色毛发。\n最后在Arnold渲染出产品图，导出生产Mesh到Unreal（开发中）",
                        'Virtual Idol project, HighPoly by Zbrush three commonly used brush output: ClayBuildup, Move, Standard, DamStardard; Zwrap topology LowPoly and AlbedoMap, export AlbedoMap into Mari, use TextureXYZ to Udim paste Atlas for modification and optimization; use Xgen to add character hair. \nFinally render the product map in Arnold and export the production Mesh to Unreal (under development) '
                    ],
                    link: null
                },
                {
                    name: ["深圳市鹏城新风文明C端小程序", "Shenzhen Pengcheng New Wind Civilization C-end WeChat applet"],
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
                    desc: [
                        "【深圳文明办】开发的鹏城新风文明小程序，采用TaroJS、React hooks开发，与CMS框架类型高度耦合，前端数据存储采用context原生reduce Api，引入Lottie与UI设计师一起维护实现平滑的动画视效",
                        '[Shenzhen Civilization Office] developed Pengcheng new wind civilization WeChat applet, using TaroJS, React hooks development, and CMS framework type highly coupled, front-end data storage using context native reduce Api, the introduction of Lottie and UI designers to maintain together to achieve smooth animation visual effects'
                    ],
                    link: null
                },
                {
                    name: ["深圳市鹏城新风文明CMS系统", "Shenzhen Pengcheng New Wind Civilization CMS System"],
                    role: '主程、前端架构',
                    withSkills: [
                        'Docker',
                        'Nodejs',
                        'Webpack',
                        'React',
                    ],
                    isPrivate: true,
                    desc: [
                        "用户管理【深圳文明办】的CMS内容系统，使用Ant Design UI，采用React hooks开发，前端数据存储仍然采用context 原生reducer Api",
                        'User management [Shenzhen Civilization Office] CMS content system, using Ant Design UI, using React hooks development, front-end data storage is still using context native reducer Api'
                    ],
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