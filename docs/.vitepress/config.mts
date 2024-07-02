import { defineConfig } from 'vitepress'
import backToTop from 'vitepress-plugin-back-to-top'

export default defineConfig({
  ignoreDeadLinks: true, // 忽略死链接

  lang: 'zh-CN', // 设置语言为中文
  title: "JinShan-R.P", // 网站标题
  description: "JinShan-R.P", // 网站描述
  base: '/', // 网站基础路径

  themeConfig: {
    // 导航栏配置
    nav: [
      { text: '开始', link: '/' }, // 导航栏中的“开始”链接
      { text: '索引', link: '/get-started' }, // 导航栏中的“索引”链接
      { text: '关于', link: '/about' } // 导航栏中的“关于”链接
    ],

    // 侧边栏配置
    sidebar: [
      {
        text: '目录', // 侧边栏标题
        items: [
          { text: '索引', link: '/get-started' }, // 侧边栏中的“索引”链接
          { text: '关于', link: '/about' } // 侧边栏中的“关于”链接
        ],
        collapsible: true, // 允许折叠
        collapsed: false // 默认展开
      },
      {
        text: '点表库', // 侧边栏标题
        collapsible: true, // 允许折叠
        collapsed: false, // 默认展开
        items: [
          {
            text: 'K型号 开关站', // 二级标题
            collapsible: true, // 允许折叠
            collapsed: false, // 默认展开
            items: [
              { text: '10K 标准点表', link: '/Page/10K-Standard-Uploadplate' }, // 三级标题及链接
              { text: '10K 自愈点表', link: '/Page/10K-Automatic-Uploadplate' },
              { text: '10K SF6点表', link: '/Page/10K-SF6-Uploadplate' }, // 需要逗号
              { text: '10K 报警灯配置表', link: '/Page/10K-Alarmplate' }
            ]
          },
          {
            text: 'P型号 开关站', // 二级标题
            collapsible: true, // 允许折叠
            collapsed: false, // 默认展开
            items: [
              { text: '10P 标准点表', link: '/Page/10P-Standard-Uploadplate' }
            ]
          }
        ]
      },
      {
        text: '铭牌库', // 一级标题
        collapsible: true, // 允许折叠
        collapsed: false, // 默认展开
        items: [
          { text: 'K型 铭牌表', link: '/Page/10K-Standard-Nameplate' }
        ]
      }
    ],

    // 社交链接配置
    socialLinks: [
      { icon: 'github', link: 'https://cloudflare-jinshan-relayprotection.pages.dev/' } // GitHub 链接
    ],

    // 页脚配置
    footer: {
      message: 'Released under the MIT License.', // 页脚信息
      copyright: 'Copyright © 2024 JinShan-RelayProtection' // 版权信息
    },

    // 搜索功能配置
    search: {
      provider: 'local', // 使用本地搜索提供程序
      options: {
        placeholder: '搜索...', // 搜索框占位符
        translations: {
          button: {
            buttonText: '搜索', // 搜索按钮文本
            buttonAriaLabel: '搜索' // 搜索按钮无障碍标签
          },
          modal: {
            searchBox: {
              resetButtonTitle: '清除查询', // 重置按钮标题
              resetButtonAriaLabel: '清除查询', // 重置按钮无障碍标签
              cancelButtonText: '取消', // 取消按钮文本
              cancelButtonAriaLabel: '取消' // 取消按钮无障碍标签
            },
            startScreen: {
              recentSearchesTitle: '搜索历史', // 搜索历史标题
              noRecentSearchesText: '没有搜索历史', // 无搜索历史文本
              saveRecentSearchButtonTitle: '保存至搜索历史', // 保存至搜索历史按钮标题
              removeRecentSearchButtonTitle: '从搜索历史移除' // 从搜索历史移除按钮标题
            },
            errorScreen: {
              titleText: '无法获取结果', // 错误屏幕标题
              helpText: '请检查你的网络连接' // 错误屏幕帮助文本
            },
            footer: {
              selectText: '选择', // 页脚选择文本
              navigateText: '导航', // 页脚导航文本
              closeText: '关闭' // 页脚关闭文本
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
    sidebarMenuLabel: '菜单', // 侧边栏菜单标签
    returnToTopLabel: '返回顶部' // 返回顶部标签
  },

  // 本地化配置
  locales: {
    '/': {
      lang: 'zh-CN', // 语言设置
      label: '简体中文', // 语言标签
      selectText: '选择语言', // 选择语言文本
      ariaLabel: '选择语言', // 选择语言无障碍标签
      editLinkText: '在 GitHub 上编辑此页', // 编辑链接文本
      lastUpdated: '上次更新', // 最后更新文本
      outlineTitle: '本页内容', 
      next: '下一页',
      prev: '上一页',
      serviceWorker: {
        updatePopup: {
          message: "发现新内容可用。", // 服务工作者更新弹出信息
          buttonText: "刷新" // 服务工作者更新按钮文本
        }
      },
      notFound: {
        title: '404 - 页面未找到',
        content: "但是如果你不改变方向，并且继续寻找，你可能会到达你要去的地方。",
        linkText: '返回首页'
      }
    }
  },
  
  plugins: [backToTop()] // 配置插件
})
