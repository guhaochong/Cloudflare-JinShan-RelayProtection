---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

// 使用默认的 GitHub 和 Twitter 图标
const members = [
  {
    avatar: 'https://pub-c193d05a6fc642ffad336f4beb1a9942.r2.dev/Images/guhaochong.svg',
    name: 'Gu Haochong',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://#' },
      { icon: 'twitter', link: 'https://#' }
    ]
  },
  // 可以继续添加更多成员
]
</script>

<style>
/* 设置整体容器样式，居中显示 */
.intro-container {
  display: flex; /* 使用 flex 布局 */
  justify-content: center; /* 居中对齐 */
  margin-bottom: 2em; /* 底部外边距 */
}

/* 设置介绍区域样式，左右两栏 */
.intro {
  display: flex; /* 使用 flex 布局 */
  justify-content: space-between; /* 左右两边均匀分布 */
  width: 80%; /* 宽度占父容器的80% */
  max-width: 800px; /* 最大宽度 */
  gap: 20px; /* 左右区块的间距 */
}

/* 设置每个介绍区块的样式 */
.intro-block {
  display: flex; /* 使用 flex 布局 */
  flex-direction: column; /* 垂直方向排列 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  flex: 1; /* 每个区块占据同样的空间 */
  background-color: #f9f9f9; /* 背景颜色 */
  border-radius: 8px; /* 边框圆角 */
  border: 1px solid #ddd; /* 边框颜色和粗细 */
  font-family: Arial, sans-serif; /* 字体样式 */
  color: #333; /* 字体颜色 */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* 阴影效果 */
  padding: 1em; /* 内边距 */
  text-align: center; /* 文字居中 */
}

/* 设置段落样式 */
.intro p {
  margin: 0.5em 0; /* 段落的上下外边距 */
}

/* 设置标题样式 */
.intro h2 {
  margin-bottom: 0.5em; /* 标题的底部外边距 */
  font-size: 1.5em; /* 标题字体大小 */
  color: #2c3e50; /* 标题字体颜色 */
}
</style>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Jinshan R.P TeamPage
    </template>
    <template #lead>
      WELCOME
    </template>
  </VPTeamPageTitle>
  
  <!-- 在这里添加文字介绍 -->
  <div class="intro-container">
    <div class="intro">
      <div class="intro-block">
        <h2>Call Me</h2>
        <p><a href="tel:18918632300"><img src="https://pub-c193d05a6fc642ffad336f4beb1a9942.r2.dev/Images/phoneIcon.svg" alt="" width="51" height="51"/></a></p>
      </div>
      <div class="intro-block">
        <h2>WeChat</h2>
        <p><a href="https://#"><img src="https://pub-c193d05a6fc642ffad336f4beb1a9942.r2.dev/Images/wechatIcon.svg" alt="" width="51" height="51"/></a></p>
      </div>
    </div>
  </div>

  <VPTeamMembers :members="members" />
</VPTeamPage>
