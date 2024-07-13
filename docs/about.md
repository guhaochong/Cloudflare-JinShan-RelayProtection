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
const phoneIcon = 'https://raw.githubusercontent.com/guhaochong/Cloudflare-JinShan-RelayProtection/main/docs/Images/phoneIcon.svg';
const wechatIcon = 'https://raw.githubusercontent.com/guhaochong/Cloudflare-JinShan-RelayProtection/main/docs/Images/wechatIcon.svg';

const members = [
  {
    avatar: 'https://raw.githubusercontent.com/guhaochong/Cloudflare-JinShan-RelayProtection/main/docs/Images/guhaochong.svg',
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
