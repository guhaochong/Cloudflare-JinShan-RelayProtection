import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '金山继保',
  description: '金山继保 文库',
  base: '/', // 确认你的仓库名称作为 base

  theme: defaultTheme({
    logo: '/images/goodlogo.png', // 确认你的 logo 路径正确

    navbar: [
      { text: '首页', link: '/' },
      { text: '索引', link: '/get-started' },
      { text: '关于', link: '/about' }
    ],

    sidebar: {
      '/': [
        {
          text: '目录',
          children: [
            '/get-started.md',
            '/Page/10K-Standard-Nameplate.md',
            '/Page/10K-Standard-Uploadplate.md',
            '/Page/10K-Automatic-Uploadplate.md',
            '/Page/10P-Standard-Uploadplate.md',
            '/Page/10K-SF6-Uploadplate.md',
            '/Page/TEST.md',
          ],
        },
      ],
    },

    // 本地化设置
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        lastUpdatedText: '最后更新时间',
        contributorsText: '贡献者',
        editLinkText: '在 GitHub 上编辑此页',
        notFound: [
          '这里什么也没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',
        openInNewWindow: '在新窗口打开',
        toggleDarkMode: '切换夜间模式',
        toggleSidebar: '切换侧边栏',
      },
    },
  }),

  bundler: viteBundler(),
})
