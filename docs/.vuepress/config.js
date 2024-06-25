import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',

  title: 'JinShan-RelayProtection',
  description: 'JinShan-RelayProtection Site',

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
            {
              text: '---',
            },
            {
              text: '点表库',
              children: [
                '/Page/10K-Standard-Nameplate.md',
                '/Page/10K-Standard-Uploadplate.md',
                '/Page/10K-Automatic-Uploadplate.md',
                '/Page/10P-Standard-Uploadplate.md',
                '/Page/10K-SF6-Uploadplate.md',
              ],
            },
            {
              text: '---',
            },
            {
              text: '铭牌库',
              children: [
                '/Page/10K-Standard-Nameplate.md',
              ],
            },
            {
              text: '---',
            },
            {
              text: '测试库',
              children: [
                '/Page/TEST.md',
              ],
            },
          ],
        },
      ],
    },
  }),

  bundler: viteBundler(),
})
