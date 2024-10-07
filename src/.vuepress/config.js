const { resolve, genSidebarConfig } = require('./utils/index')
const { description } = require('../../package')

const siderBarOptions = {
  hasSub: true,
  exclude: ['README.md', 'assets', '.DS_Store', 'docs', 'images']
}

const nav = [
  {
    text: '首页',
    link: '/'
  },
  {
    text: '课程',
    items: [
      {
        text: 'webThree',
        items: [
          {
            text: 'webThree',
            link: '/course/webThree/'
          }
        ]
      }
    ]
  },
  {
    text: '基础强化',
    items: [
      {
        text: '环境搭建',
        items: [
          {
            text: 'React',
            link: '/basic/React/'
          },
          {
            text: 'Vue',
            link: '/basic/Vue/'
          },
          {
            text: 'Node.js',
            link: '/basic/node/'
          },
          {
            text: '调试技巧',
            link: '/basic/debug/'
          },
          {
            text: 'Docker',
            link: '/basic/docker/'
          }
        ]
      },
      {
        text: '语言基础',
        items: [
          {
            text: 'CSS',
            link: '/basic/cssText/'
          },
          {
            text: 'harmonyOS',
            link: '/basic/harmonyOS/'
          },
          {
            text: 'Nginx',
            link: '/basic/NginxTest/'
          },
          {
            text: 'webpack',
            link: '/basic/webpack/'
          },
          {
            text: 'JavaScript',
            link: '/basic/jscriptText/'
          },
          {
            text: 'ECMAScript',
            link: '/basic/esText/'
          },
          {
            text: 'NodeJS',
            link: '/basic/nodeJs/'
          },
          {
            text: 'TypeScript',
            link: '/basic/ts/'
          },
          {
            text: 'Dart',
            link: '/basic/dart/'
          }
        ]
      },
      {
        text: '数据库',
        items: [
          {
            text: 'NoSQL',
            link: '/basic/nosql/',
            privite: true
          },
          {
            text: 'mongoDB',
            link: '/basic/mongo/'
          },
          {
            text: 'Redis',
            link: '/basic/redis/'
          }
        ]
      }
    ]
  },
  {
    text: '项目',
    items: [
      {
        text: 'vue组件化开发',
        items: [
          {
            text: 'vue组件化开发',
            link: '/project/vue-component/'
          }
        ]
      },
      {
        text: '泛客户端',
        items: [
          {
            text: 'uniapp',
            link: '/project/community-miniapp/'
          }
        ]
      },
      {
        text: '数据可视化',
        items: [
          {
            text: 'echarts',
            link: '/project/echarts/'
          }
        ]
      },
      // formily
      {
        text: 'formily',
        items: [
          {
            text: 'formily',
            link: '/project/formily/'
          }
        ]
      },
      {
        text: '项目问题',
        items: [
          {
            text: '项目问题总结',
            link: '/project/answers/'
          }
        ]
      }
    ]
  },
  {
    text: '前端面试',
    items: [
      {
        text: '笔试',
        items: [
          {
            text: '分类笔试题',
            link: '/interview/types/'
          }
        ]
      }
    ]
  }
]

const sidebar = {
  '/course': [
    {
      title: 'webThree',
      collapsable: false,
      children: genSidebarConfig('course/webThree', siderBarOptions)
    }
  ],
  '/basic/': [
    {
      title: 'harmonyOS',
      collapsable: false,
      children: genSidebarConfig('basic/harmonyOS', siderBarOptions)
    },
    {
      title: 'Nginx',
      collapsable: false,
      children: genSidebarConfig('basic/NginxTest', siderBarOptions)
    },
    {
      title: 'webpack',
      collapsable: false,
      children: genSidebarConfig('basic/webpack', siderBarOptions)
    },
    {
      title: 'JavaScript',
      collapsable: false,
      children: genSidebarConfig('basic/jscriptText', siderBarOptions)
    },
    {
      title: 'ECMAScript',
      collapsable: false,
      children: genSidebarConfig('basic/esText', siderBarOptions)
    },
    {
      title: 'Node.js进阶',
      collapsable: false,
      children: genSidebarConfig('basic/node', siderBarOptions)
    },
    {
      title: 'TypeScript',
      collapsable: false,
      children: genSidebarConfig('basic/ts', siderBarOptions)
    },
    {
      title: 'mongoDB',
      collapsable: false,
      children: genSidebarConfig('basic/mongo', siderBarOptions)
    },
    {
      title: 'CSS',
      collapsable: false,
      children: genSidebarConfig('basic/cssText', siderBarOptions)
    }
  ],
  '/interview/': [
    {
      title: '前端面试',
      collapsable: false,
      children: genSidebarConfig('interview/types', siderBarOptions)
      // children: ['interview']
    }
  ],
  '/project/': [
    {
      title: 'Vue组件化开发',
      collapsable: false,
      children: genSidebarConfig('project/vue-component', siderBarOptions)
      // children: ['interview']
    },
    {
      title: 'uniapp',
      collapsable: false,
      children: genSidebarConfig('project/community-miniapp', siderBarOptions)
      // children: ['interview']
    },
    {
      title: 'echarts',
      collapsable: false,
      children: genSidebarConfig('project/echarts', siderBarOptions)
      // children: ['interview']
    },
    {
      title: 'formily',
      collapsable: false,
      children: genSidebarConfig('project/formily', siderBarOptions)
      // children: ['interview']
    },
    {
      title: '项目总结',
      collapsable: false,
      children: genSidebarConfig('project/answers', siderBarOptions)
      // children: ['interview']
    }
    // /project/answers/
  ],
  '/': [
    {
      title: '首页',
      collapsable: false,
      children: ['']
    }
  ]
}

// const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@static': resolve('./static')
      }
    }
  },
  base: '/font-end-nodes/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: '大前端 - 前端高级进阶',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: nav,
    sidebar: sidebar
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/nprogress',
    'vuepress-plugin-smooth-scroll',
    require('./utils/plugins.js')
    // '@snowdog/vuepress-plugin-pdf-export'
  ]

  // wsUrl: isDev ? 'localhost' : 'mp.toimc.com',
  // wsPort: isDev ? 3001 : 443,
}
