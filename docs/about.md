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
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Gu Haochong',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'tel:4001121066' },
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
