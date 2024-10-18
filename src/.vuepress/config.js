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
            text: 'harmonyOS',
            link: '/basic/harmonyOS/'
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
            link: '/basic/nosql/'
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
    text: 'DevOps',
    items: [
      {
        text: '效率工具',
        items: [
          {
            text: 'Jenkins',
            link: '/devops/jenkins/'
          }
        ]
      },
      {
        text: '团队协同',
        items: [
          {
            text: 'gitlab',
            link: '/devops/gitlab/'
          },
          {
            text: 'showDoc',
            link: '/devops/showdoc/'
          },
          {
            text: 'DOClever',
            link: '/devops/doclever/'
          }
        ]
      },
      {
        text: '容器化',
        items: [
          {
            text: 'Docker进阶',
            link: '/devops/docker-advance/'
          },
          {
            text: 'Kubernetes',
            link: '/devops/k8s/'
          }
        ]
      }
    ]
  },
  {
    text: '全端项目',
    items: [
      {
        text: '社区项目',
        items: [
          {
            text: '社区PC',
            link: '/project/community-pc/'
          },
          {
            text: '管理后台',
            link: '/project/community-admin/'
          },
          {
            text: 'WebApp',
            link: '/project/community-webapp/'
          }
        ]
      },
      {
        text: '多平台+跨端',
        items: [
          {
            text: '微信小程序',
            link: '/project/community-miniapp/'
          },
          {
            text: 'Flutter 2.0',
            link: '/project/community-flutter/'
          },
          {
            text: 'Electron桌面端',
            link: '/project/community-electron/'
          }
        ]
      },
      {
        text: 'React世界',
        items: [
          {
            text: 'React',
            link: '/project/react/'
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
          },
          {
            text: '每日算法',
            items: [
              {
                text: '每日算法',
                link: '/interview/algorithm/'
              }
            ]
          },
          {
            text: '项目题',
            items: [
              {
                text: '项目题',
                link: '/interview/project/'
              }
            ]
          },
          {
            text: 'webthree',
            items: [
              {
                text: 'webthree',
                link: '/interview/webthree/'
              }
            ]
          }
        ]
      }
    ]
  }
]

const sidebar = {
  '/basic/': [
    {
      title: 'harmonyOS',
      collapsable: false,
      children: genSidebarConfig('basic/harmonyOS', siderBarOptions)
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
      title: 'webthree',
      collapsable: false,
      children: genSidebarConfig('basic/webthree', siderBarOptions)
    }
  ],
  '/projects/': [
    {
      title: '社区PC',
      collapsable: false,
      children: genSidebarConfig('projects/community-pc', siderBarOptions)
    },
    {
      title: '社区管理后台',
      collapsable: false,
      children: genSidebarConfig('projects/community-admin', siderBarOptions)
    },
    {
      title: '社区WebApp',
      collapsable: false,
      children: genSidebarConfig('projects/community-webapp', siderBarOptions)
    },
    {
      title: '小程序',
      collapsable: false,
      children: genSidebarConfig('projects/community-miniapp', siderBarOptions)
    },
    {
      title: 'Flutter 2.0',
      collapsable: false,
      children: genSidebarConfig('projects/community-flutter', siderBarOptions)
    },
    {
      title: 'Electron桌面端',
      collapsable: false,
      children: genSidebarConfig('projects/community-electron', siderBarOptions)
    },
    {
      title: '问题总计',
      collapsable: false,
      children: genSidebarConfig('projects/answers', siderBarOptions)
    },
    {
      title: 'React世界',
      collapsable: false,
      children: ['react/']
    }
  ],
  '/course/': [
    {
      title: '参与贡献',
      collapsable: false,
      children: genSidebarConfig('course/notes', siderBarOptions)
    },
    {
      title: '项目说明',
      collapsable: false,
      children: genSidebarConfig('course/vuepress', siderBarOptions)
    },
    {
      title: 'Pull Request教程',
      collapsable: false,
      children: genSidebarConfig('course/pull-request', siderBarOptions)
    }
  ],
  '/interview/': [
    {
      title: '前端面试',
      collapsable: false,
      children: genSidebarConfig('interview/types', siderBarOptions)
    },
    {
      title: '每日算法',
      collapsable: false,
      children: genSidebarConfig('interview/algorithm', siderBarOptions)
    }
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
