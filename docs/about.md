---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

// 自定义的 SVG 图标路径
const phoneIcon = 'https://pub-c193d05a6fc642ffad336f4beb1a9942.r2.dev/Images/phoneIcon.svg';
const wechatIcon = 'https://pub-c193d05a6fc642ffad336f4beb1a9942.r2.dev/Images/wechatIcon.svg';

const members = [
  {
    avatar: 'https://pub-c193d05a6fc642ffad336f4beb1a9942.r2.dev/Images/guhaochong.svg',
    name: 'Gu Haochong',
    title: 'Creator',
    links: [
      { icon: phoneIcon, link: 'tel:18918632300' },
      { icon: wechatIcon, link: 'https://#' }
    ]
  },
  // 可以继续添加更多成员
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Jinshan R.P TeamPage
    </template>
    <template #lead>
      WELCOME
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="members" />
</VPTeamPage>
