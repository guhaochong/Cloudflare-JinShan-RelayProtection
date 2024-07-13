---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://raw.githubusercontent.com/guhaochong/Cloudflare-JinShan-RelayProtection/main/docs/Images/guhaochong.svg',
    name: 'Gu Haochong',
    title: 'Creator',
    links: [
      { icon: 'phone', link: 'tel:18918632300' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
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
