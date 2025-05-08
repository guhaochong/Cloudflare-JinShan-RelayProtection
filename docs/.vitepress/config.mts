import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'  // 引入 Mermaid 插件
import { getSingletonHighlighter } from './shiki'

export default withMermaid({
  ignoreDeadLinks: true, // 忽略死链接
  head: [
    ['link', { rel: 'icon', href: 'https://pub-c193d05a6fc642ffad336f4beb1a9942.r2.dev/Images/svglogo.svg' }]
  ],

  lang: 'zh-CN', // 设置语言为中文
  title: "JinShan-R.P", // 网站标题
  description: "JinShan-R.P", // 网站描述
  base: '/', // 网站基础路径

  markdown: {
    math: true, // 启用数学公式支持
    async highlighter(code, lang) {
      const highlighter = await getSingletonHighlighter()
      return highlighter.codeToHtml(code, { lang })
    }
  },

  themeConfig: {
    // logo
    logo: 'https://pub-c193d05a6fc642ffad336f4beb1a9942.r2.dev/Images/svglogo.svg',
    // 导航栏配置
    nav: [
      { text: '首页', link: '/' },
      { text: '索引', link: '/get-started' },
      { text: '联系', link: '/about' }
    ],

    // 侧边栏配置
    sidebar: [
      {
        text: '目录',
        items: [
          { text: '主页', link: '/' },
          { text: '索引', link: '/get-started' },
          { text: '联系', link: '/about' }
        ],
        collapsible: true,
        collapsed: false
      },
      {
        text: '点表库',
        collapsible: true,
        collapsed: false,
        items: [
          {
            text: 'K型号 开关站',
            collapsible: true,
            collapsed: false,
            items: [
              { text: '10K 报警灯配置表', link: '/Page/10K-Alarmplate' },
              { text: '10K 标准柜点表', link: '/Page/10K-Standard-Uploadplate' },
              { text: '10K 充气柜点表', link: '/Page/10K-Air-Uploadplate' }
            ]
          },
          {
            text: 'P型号 小区站',
            collapsible: true,
            collapsed: false,
            items: [
              { text: '10P 报警灯配置表', link: '/Page/10P-Alarmplate' },
              { text: '10P 标准柜点表', link: '/Page/10P-Standard-Uploadplate' }
            ]
          }
        ]
      },
      {
        text: '铭牌库',
        collapsible: true,
        collapsed: false,
        items: [
          {
            text: 'K型号 开关站',
            collapsible: true,
            collapsed: false,
            items: [
              { text: '10K 二次铭牌表', link: '/Page/10K-Standard-Nameplate' }
            ]
          }
        ]
      },
      {
        text: '自愈库',
        collapsible: true,
        collapsed: false,
        items: [
          {
            text: '10千伏 自愈系统',
            collapsible: true,
            collapsed: false,
            items: [
              { text: '10K 自愈系统 链路表', link: '/Page/10K-SelfHealing-Link' },
              { text: '10K 自愈系统 主站点表', link: '/Page/10K-SelfHealing-Uploadlate' }
            ]
          },
          {
            text: '110千伏 自愈系统',
            collapsible: true,
            collapsed: false,
            items: [
              { text: '110X 自愈系统 链路表', link: '/Page/110X-SelfHealing-Link' }
            ]
          }
        ]
      },
      {
        text: '旧版文库',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: '旧 K型号 开关站',
            collapsible: true,
            collapsed: true,
            items: [
              { text: '旧 10K 标准柜点表', link: '/Page/OLD/OLD-10K-Standard-Uploadplate' },
              { text: '旧 10K 自愈点表', link: '/Page/OLD/OLD-10K-Automatic-Uploadplate' },
              { text: '旧 10K 充气柜点表', link: '/Page/OLD/OLD-10K-AirSF6-Uploadplate' }
            ]
          },
          {
            text: '旧 P型号 小区站',
            collapsible: true,
            collapsed: true,
            items: [
              { text: '旧 10P 标准柜点表', link: '/Page/OLD/OLD-10P-Standard-Uploadplate' },
              { text: '旧 10P 充气柜点表', link: '/Page/OLD/OLD-10P-Air-Uploadplate' }
            ]
          }
        ]
      }
    ],

    // 社交链接配置
    socialLinks: [
      { icon: 'github', link: 'https://cloudflare-jinshan-relayprotection.pages.dev/' }
    ],

    // 页脚配置
    footer: {
      message: 'No reproduction without permission.',
      copyright: 'Copyright © JinShan-R.P by guhaochong'
    },

    // 搜索功能配置
    search: {
      provider: 'local',
      options: {
        placeholder: '搜索...',
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          },
          modal: {
            searchBox: {
              resetButtonTitle: '清除查询',
              resetButtonAriaLabel: '清除查询',
              cancelButtonText: '取消',
              cancelButtonAriaLabel: '取消'
            },
            startScreen: {
              recentSearchesTitle: '搜索历史',
              noRecentSearchesText: '没有搜索历史',
              saveRecentSearchButtonTitle: '保存至搜索历史',
              removeRecentSearchButtonTitle: '从搜索历史移除'
            },
            errorScreen: {
              titleText: '无法获取结果',
              helpText: '请检查你的网络连接'
            },
            footer: {
              selectText: '选择',
              navigateText: '导航',
              closeText: '关闭'
            }
          }
        }
      }
    },

    // 自定义文本
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outlineTitle: '本页内容',
    lastUpdatedText: '上次更新',
    editLinkText: '在 GitHub 上编辑此页',
    notFound: {
      title: '页面未找到',
      description: '对不起，我们无法找到您要访问的页面。',
      backToHome: '返回首页'
    },
    appearance: {
      toggleDark: '切换到暗黑模式',
      toggleLight: '切换到光亮模式'
    },
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部'
  },

  // 本地化配置
  locales: {
    '/': {
      lang: 'zh-CN',
      label: '简体中文',
      selectText: '选择语言',
      ariaLabel: '选择语言',
      editLinkText: '在 GitHub 上编辑此页',
      lastUpdated: '上次更新',
      outlineTitle: '本页内容',
      next: '下一页',
      prev: '上一页',
      serviceWorker: {
        updatePopup: {
          message: "发现新内容可用。",
          buttonText: "刷新"
        }
      },
      notFound: {
        title: '404 - 页面未找到',
        content: "但是如果你不改变方向，并且继续寻找，你可能会到达你要去的地方。",
        linkText: '返回首页'
      }
    }
  },

  // Mermaid 配置
  mermaid: {
    theme: 'default'  // 可选：设置 Mermaid 主题，可改为 'forest', 'dark' 等
  }
})