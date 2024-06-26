import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "JinShan-RelayProtection",
  description: "JinShan-RelayProtection",
  base: '/', // 确认你的仓库名称作为 base
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '开始', link: '/' },
      { text: '索引', link: '/get-started' },
      { text: '关于', link: '/about' }
    ],

    sidebar: [
      {
        text: '目录',
        items: [
          { text: '索引', link: '/get-started' },
          { text: '关于', link: '/about' }
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
              { text: '10K 标准点表', link: '/Page/10K-Standard-Uploadplate' },
              { text: '10K 自愈点表', link: '/Page/10K-Automatic-Uploadplate' },
              { text: '10K SF6点表', link: '/Page/10K-SF6-Uploadplate' }
            ]
          },
          {
            text: 'P型号 开关站',
            collapsible: true,
            collapsed: false,
            items: [
              { text: '10P 标准点表', link: '/Page/10P-Standard-Uploadplate' }
            ]
          }
        ]
      },
      {
        text: '铭牌库',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'K型 铭牌表', link: '/Page/10K-Standard-Nameplate.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/你的用户名/JinShan-RelayProtection' }
    ],

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
    // 其他可配置文本
    appearance: {
      toggleDark: '切换到暗黑模式',
      toggleLight: '切换到光亮模式'
    }
  }
})
