/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {

    siteMetadata: {
        title: "你好",
        about: "A develop & A named artist",
        author: "EricKuang",
        // fontFamily: "'Spicy Rice', cursive",
        fontFamily: "'Pacifico', cursive",
        desc: "WAHT YOU WANT, WHAT YOU NEED",

        resumeInfo: {
            name: "匡志宸",
            title: "前端工程师、游戏工程师、GIS工程师",
            years: "五",
            desc: "你好，我叫匡志宸，1989.11.24，大学专业是英语，自学入行开发到现在有五年半的时间，热爱技术、爱倒腾，其中前端开发是主职，目前主流的前端产品（小程序、hybird......）几乎都有参与主导过研发，主要内容有程序产品与功能开发、技术选型与架构设计，并做过1-2年的团队管理。目前主要参与的技术核心是WebGl的大数据可视化与智慧城市，个人的技术方向是客户端3D渲染、游戏、CG动画，职业方向是主程开发。",
            social: [
                { text: "16675196790", link: "", icon: "fas fa-mobile" },
                { text: "net.happylandle.club", link: "https://net.happylandle.club", icon: "fas fa-globe-asia" },
                { text: "github.com/eric183", link: "https://github.com/eric183", icon: "fab fa-github" },
                { text: "kk297466058@gmail.com", link: "", icon: "far fa-envelope"},
            ],
            projects: [
                {
                    name: "strange stories（Demo）",
                    withSkills: ["Unity"],
                    isPrivate: true,
                    desc: "正在立项的游戏项目，已有美术和程序，脚本选型中，程序每日构建",
                    link: "https://game.happylandle.club"
                },
                {
                    name: "大数据可视化科技版(Shader)脚手架",
                    withSkills: ["WebGl", "ThreeJS", "ReactJS", "Webpack", "WebSocket", "Blender", "Electron"],
                    desc: "大数据可视化项目，WebGl渲染，JS脚本与Socket控制交互，Blender构建模型，Electron打包输出EXE安装包",
                    link: "https://www.behance.net/gallery/97483001/chuneng",
                },
                {
                    name: "深业泰然大厦大数据可视化",
                    withSkills: ["WebGl", "Threejs", "ReactJS", "WebSocket", "Echarts", "Gsap", "Blender", "Electron"],
                    desc: "为深业泰然打造的3D楼宇可视化大数据, ",
                    link: "https://www.behance.net/gallery/97483001/tairan",
                },
                {
                    name: "大数据可视化写实版(PBR)脚手架",
                    withSkills: ["WebGl", "BabylonJS", "ReactJS", "WebSocket", "CityEngine", "Blender", "Substance Painter", "Unreal(预演阶段)", "TensorflowJS(预演阶段)", "Electron"],
                    desc: "针对于之前Shader版本的可视化大数据PBR开发构建，在之前基础上新加入CityEngine与Substance Painter,期间预演了Unreal与TensorflowJS，预备之后的迭代",
                    link: "https://www.behance.net/gallery/97483001/chuneng",
                },
                {
                    name: "中国储能大厦大数据可视化",
                    withSkills: ["WebGl","Babylonjs", "ReactJS", "Webpack", "WebSocket", "Echarts", "Gsap", "Blender", "Electron"],
                    desc: "中国储能大厦3D展厅的可视化大数据",
                    link: "https://www.behance.net/gallery/97483001/chuneng",
                },
                {
                    name: "智慧城市展厅",
                    withSkills: ["WebGl","BabylonJS", "ThreeJS", "ReactJS", "WebSocket", "Echarts", "Gsap", "Blender", "Substance Painter", "CityEngine", "Electron"],
                    desc: "房博会与高交会展会的可视化大数据",
                    link: "https://www.behance.net/gallery/97483215/exhibit",
                },
                {
                    name: "中正前端SaaS重构",
                    withSkills: ["ReactJS", "ReduxJS", "NodeJS", "Webpack"],
                    desc: "基于之前多个项⽬多配置，在此进⾏项⽬单构建多配置⼊⼝的SaaS重构，完成构建脚本的升级与优化，力求替换掉旧冗余落后的架构",
                    // link: "https://www.behance.net/gallery/97483215/exhibit",
                },
                {
                    name: "深业产权系统",
                    withSkills: ["ReactJS", "GoJS"],
                    desc: "深业产权项目内容定制",
                    // link: "https://www.behance.net/gallery/97483215/exhibit",
                },
                {
                    name: "平台运营楼管iPad移动端",
                    withSkills: ["ReactJS", "Material Design"],
                    desc: "平台应用iPad定制",
                    // link: "https://www.behance.net/gallery/97483215/exhibit",
                },
                {
                    name: "楼掌门门禁系统小程序",
                    withSkills: ["ReactJS", "TaroJS"],
                    desc: "平台门禁⼩程序，并行于门禁App",
                    // link: "https://www.behance.net/gallery/97483215/exhibit",
                },
                {
                    name: "乌托邦wow-toboom",
                    withSkills: ["ReactJS", "MoJS", "Gsap"],
                    desc: "⾯向服装设计的在线⾯料设计系统、部件可⾃由组合拼装并直接⽣成预览⽂件",
                    link: "http://www.wow-toboom.com",
                },
                {
                    name: "⾯料商店⼩程序",
                    withSkills: ["wxjs"],
                    desc: "服装⾯料⼩程序商店，项⽬使⽤原⽣开发",
                    // link: "https://www.behance.net/gallery/97483215/exhibit",
                },
                {
                    name: "⾯料运营平台",
                    withSkills: ["VueJS", "ElementJS"],
                    desc: "服装⾯料运营平台",
                    // link: "https://www.behance.net/gallery/97483215/exhibit",
                },

                {
                    name: "妈咪问医直播课堂",
                    withSkills: ["VueJS", "Gulp"],
                    desc: "妈咪问医是⼀个⾯相医患群体的类分答项⽬，平台基于微信",
                    // link: "https://www.behance.net/gallery/97483215/exhibit",
                },
                
            ],
            works: [
                {
                    title: "高级前端工程师",
                    company: "深圳中正信息",
                    date: {
                        begin: "2019.01.01",
                        end: "2020.04.27"
                    },
                    desc: "工具脚本定制化，重构了前端SaaS，开发了可视化大数据WebGL项目，开发了企业产权系统",
                },
                {
                    title: "前端组长",
                    company: "深圳星潮热点传播",
                    date: {
                        begin: "2017.08",
                        end: "2019.12"
                    },
                    desc: "负责前端团队管理，前端架构梳理维护，框架搭建与技术选型，产品功能研发",
                },
                {
                    title: "前端⼯程师",
                    company: "爱婴慧科技",
                    date: {
                        begin: "2016.06",
                        end: "2017.08"
                    },
                    desc: "整合妈咪home，开发线上直播问答系统，之后上线了评论社区功能",
                },
                {
                    title: "前端工程师",
                    company: "斑马王国",
                    date: {
                        begin: "2015.03",
                        end: "2016.01"
                    },
                    desc: "运营后台开发，线上活动平台搭建",
                }
            ],
            technologies: [
                {
                    name: "language",
                    label: "语言",
                    children: ["Javascript", "C#", "Typescript", "NodeJS"]
                },
                {
                    name: "frameWork",
                    label: "Web前端框架",
                    children: ["Webpack", "Gulp", "ReactJS", "VueJS", "AngularJS","ThreeJS", "BabylonJS", "GatsbyJS"]
                    // children: ["VueJS",  "Jquery", "Bootstrap"]
                },
                // {
                //     name: "WebGl",
                //     label: "WebGl",
                //     children: ["ThreeJS, BabylonJS"]
                // },
                {
                    name: "exe",
                    label: "客户端",
                    children: ["Unity", "Electron"]
                },
                {
                    name: "asset",
                    label: "美术素材",
                    children: ["Blender", "CityEngine", "Substance Painter", "Mixamo"]
                }
            ]

        }
    },
   
    plugins: [
        `gatsby-plugin-transition-link`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-emotion`,


        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        // {
        //     resolve: `gatsby-plugin-typography`,
        //     options: {
        //         pathToConfigModule: `src/utils/typography`,
        //     },
        // },
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
        }
    ],
}